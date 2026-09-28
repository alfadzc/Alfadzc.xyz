// export const runtime = 'edge'; // SETUP FOR CloudFlare
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const LCD_URLS = [
  "https://api-bitbadges.alfadzc.xyz",
  "https://lcd.bitbadges.io",
  "https://rest.cosmos.directory/bitbadges",
  "https://bitbadges-api.polkachu.com",
];

const VALIDATOR_OPERATOR = "bbvaloper18hgreu0c6n3essuc8arct7fx0w0ym6x52fwt2v";
const VALCONS_ADDRESS = "bbvalcons1twwpsa4r2z87j9888m8f5c0z0l04shst223z66";
const CHAIN_DIVISOR = 1_000_000_000;
const SIGNED_BLOCKS_WINDOW = 10000;

// Harga BADGE (fallback dari Osmosis DEX)
const BADGE_PRICE_FALLBACK = 0.000264;

let priceCache = { value: BADGE_PRICE_FALLBACK, ts: 0 };
const PRICE_TTL = 300000; // 5 menit

async function fetchBADGEPrice(): Promise<number> {
  const now = Date.now();
  if (priceCache.ts && now - priceCache.ts < PRICE_TTL) {
    return priceCache.value;
  }

  try {
    // Coba CoinGecko dulu (kalau sudah listing)
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitbadges&vs_currencies=usd",
      { signal: AbortSignal.timeout(5000), cache: "no-store" }
    );
    if (res.ok) {
      const data = await res.json();
      const price = data["bitbadges"]?.usd;
      if (typeof price === "number" && price > 0) {
        priceCache = { value: price, ts: now };
        return price;
      }
    }
  } catch {}

  priceCache = { value: BADGE_PRICE_FALLBACK, ts: now };
  return BADGE_PRICE_FALLBACK;
}

const FALLBACK = {
  chain: "Bitbadges",
  moniker: "alfadzc",
  operatorAddress: VALIDATOR_OPERATOR,
  totalBonded: "0",
  totalBondedUSD: "0",
  price: BADGE_PRICE_FALLBACK,
  validators: 0,
  uptime: 99.9,
  rank: 0,
  isFallback: true,
  lastUpdated: new Date().toISOString(),
};

async function fetchWithFallback(path: string) {
  for (const url of LCD_URLS) {
    try {
      const res = await fetch(`${url}${path}`, {
        cache: "no-store",
        signal: AbortSignal.timeout(5000),
      });

      if (res.ok) return await res.json();
    } catch {}
  }

  return null;
}

async function fetchUptime() {
  try {
    const [info, params] = await Promise.all([
      fetchWithFallback(
        `/cosmos/slashing/v1beta1/signing_infos/${VALCONS_ADDRESS}`
      ),
      fetchWithFallback(
        `/cosmos/slashing/v1beta1/params`
      ),
    ]);

    const signing = info?.val_signing_info;

    if (!signing) return 99.9;

    const window = Number(
      params?.params?.signed_blocks_window ?? 10000
    );

    const missed = Number(
      signing?.missed_blocks_counter ?? 0
    );

    const uptime =
      ((window - missed) / window) * 100;

    return Number(
      Math.max(0, Math.min(100, uptime)).toFixed(4)
    );
  } catch {
    return 99.9;
  }
}

export async function GET() {
  try {
    const [validatorData, validatorList, uptime, price] =
      await Promise.all([
        fetchWithFallback(
          `/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`
        ),
        fetchWithFallback(
          `/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=500`
        ),
        fetchUptime(),
        fetchBADGEPrice(),
      ]);

    const validator = validatorData?.validator;

    if (!validator)
      return NextResponse.json({
        ...FALLBACK,
        uptime,
        price,
      });

    const bonded =
      Number(BigInt(validator.tokens || "0")) /
      CHAIN_DIVISOR;

    const totalBondedUSD = (bonded * price).toFixed(2);

    const validators =
      validatorList?.validators ?? [];

    validators.sort((a: any, b: any) =>
      BigInt(b.tokens || "0") > BigInt(a.tokens || "0")
        ? 1
        : BigInt(b.tokens || "0") < BigInt(a.tokens || "0")
        ? -1
        : 0
    );

    const rank =
      validators.findIndex(
        (v: any) =>
          v.operator_address === VALIDATOR_OPERATOR
      ) + 1;

    return NextResponse.json({
      chain: "Bitbadges",
      moniker:
        validator.description?.moniker ?? "alfadzc",
      operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: bonded.toFixed(2),
      totalBondedUSD,
      price,
      validators: validators.length,
      uptime,
      rank: rank > 0 ? rank : 0,
      isFallback: false,
      lastUpdated: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
