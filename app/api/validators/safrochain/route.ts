// export const runtime = 'edge'; // SETUP FOR CloudFlare
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const LCD_URLS = [
  "https://api1.safrochain.network",
  "https://api2.safrochain.network",
  "https://safrochain-api.linknode.org",
  "https://api.safrochain.nodestake.org",
  "https://api-safro.vinjan-inc.com",
];

const VALIDATOR_OPERATOR = "addr_safrovaloper1xmssy0xfhz0ed5h75a7am9ec7ue7fkvetymxg5";
const VALCONS_ADDRESS = "addr_safrovalcons1n7jprwdx3ntd4dyaa05dm3pp3v53fu2ydkx0yy";
const CHAIN_DIVISOR = 1_000_000;
const SIGNED_BLOCKS_WINDOW = 10000;

// Harga fallback SAF (CoinGecko belum punya data live)
const SAF_PRICE_FALLBACK = 0.0000205;

let priceCache = { value: SAF_PRICE_FALLBACK, ts: 0 };
const PRICE_TTL = 300000; // 5 menit

async function fetchSAFPrice(): Promise<number> {
  const now = Date.now();
  if (priceCache.ts && now - priceCache.ts < PRICE_TTL) {
    return priceCache.value;
  }

  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=safrochain-saf-token&vs_currencies=usd",
      { signal: AbortSignal.timeout(5000), cache: "no-store" }
    );
    if (res.ok) {
      const data = await res.json();
      const price = data["safrochain-saf-token"]?.usd;
      if (typeof price === "number" && price > 0) {
        priceCache = { value: price, ts: now };
        return price;
      }
    }
  } catch {}

  priceCache = { value: priceCache.value || SAF_PRICE_FALLBACK, ts: now };
  return priceCache.value;
}

const FALLBACK = {
  chain: "Safrochain",
  moniker: "alfadzc",
  operatorAddress: VALIDATOR_OPERATOR,
  totalBonded: "0",
  totalBondedUSD: "0",
  price: SAF_PRICE_FALLBACK,
  validators: 0,
  uptime: 99.9,
  rank: 0,
  isFallback: true,
  lastUpdated: new Date().toISOString(),
};

async function fetchWithFallback(path: string) {
  for (const url of LCD_URLS) {
    try {
      const res = await fetch(`${url}${path}`, { cache: "no-store", signal: AbortSignal.timeout(5000) });
      if (res.ok) return res.json();
    } catch {}
  }
  return null;
}

async function fetchUptime(): Promise<number> {
  try {
    const data = await fetchWithFallback(
      `/cosmos/slashing/v1beta1/signing_infos/${VALCONS_ADDRESS}`
    );
    const info = data?.val_signing_info;
    if (!info) return 99.9;
    const missedBlocks = parseInt(info.missed_blocks_counter || "0");
    const uptime = ((SIGNED_BLOCKS_WINDOW - missedBlocks) / SIGNED_BLOCKS_WINDOW) * 100;
    return parseFloat(Math.min(uptime, 100).toFixed(4));
  } catch {
    return 99.9;
  }
}

export async function GET() {
  try {
    const [validatorData, listData, uptime, price] = await Promise.all([
      fetchWithFallback(`/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`),
      fetchWithFallback(`/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=500`),
      fetchUptime(),
      fetchSAFPrice(),
    ]);

    const validator = validatorData?.validator;
    if (!validator) return NextResponse.json({ ...FALLBACK, uptime, price });

    const totalBonded = Number(BigInt(validator.tokens || 0)) / CHAIN_DIVISOR;
    const totalBondedUSD = (totalBonded * price).toFixed(2);

    let rank = 0;
    if (listData?.validators && Array.isArray(listData.validators)) {
      const sortedValidators = [...listData.validators].sort((a: any, b: any) => {
        const tokensA = BigInt(a.tokens || 0);
        const tokensB = BigInt(b.tokens || 0);
        return tokensB > tokensA ? 1 : tokensB < tokensA ? -1 : 0;
      });

      const myIndex = sortedValidators.findIndex((v: any) =>
        v.operator_address === VALIDATOR_OPERATOR
      );

      rank = myIndex !== -1 ? myIndex + 1 : 0;
    }

    return NextResponse.json({
      chain: "Safrochain",
      moniker: validator.description?.moniker || "alfadzc",
      operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: totalBonded.toFixed(2),
      totalBondedUSD,
      price,
      validators: listData?.validators?.length || 0,
      uptime,
      rank,
      isFallback: false,
      lastUpdated: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
