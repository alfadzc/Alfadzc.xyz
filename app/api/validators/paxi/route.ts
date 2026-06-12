// export const runtime = 'edge';
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const LCD_URLS = [
  "https://mainnet-lcd.paxinet.io",
  "https://api-paxi.vinjan-inc.com",
];
const VALIDATOR_OPERATOR = "paxivaloper1d6qj9qy5vzv9kj5x435w5klaxm3wc8l20628mj";
const VALCONS_ADDRESS = "paxivalcons1y6xtw3cuuqhlu5pwmr4zpj53tvxxj8l9r48udq";
const CHAIN_DIVISOR = 1_000_000;
const SIGNED_BLOCKS_WINDOW = 100;
const PRICE = 0.01410782;
const FALLBACK = {
  chain: "Paxi",
  moniker: "alfadzc",
  operatorAddress: VALIDATOR_OPERATOR,
  totalBonded: "0",
  totalBondedUSD: "0",
  price: PRICE,
  validators: 0,
  uptime: 99.9,
  rank: 0,
  isFallback: true,
  lastUpdated: new Date().toISOString(),
};

async function fetchWithFallback(path: string) {
  for (const base of LCD_URLS) {
    try {
      const res = await fetch(`${base}${path}`, { cache: "no-store", signal: AbortSignal.timeout(5000) });
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
  } catch {}
  return 99.9;
}

export async function GET() {
  try {
    const [validatorData, listData, uptime] = await Promise.all([
      fetchWithFallback(`/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`),
      fetchWithFallback(`/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=500`),
      fetchUptime(),
    ]);

    const validator = validatorData?.validator;
    if (!validator) return NextResponse.json({ ...FALLBACK, uptime });

    const totalBonded = Number(BigInt(validator.tokens || 0)) / CHAIN_DIVISOR;
    const totalBondedUSD = (totalBonded * PRICE).toFixed(2);

    // HITUNG RANK PER CHAIN
    let rank = 0;
    if (listData?.validators && Array.isArray(listData.validators)) {
      // Sort by tokens descending
      const sortedValidators = [...listData.validators].sort((a: any, b: any) => {
        const tokensA = BigInt(a.tokens || 0);
        const tokensB = BigInt(b.tokens || 0);
        return tokensB > tokensA ? 1 : tokensB < tokensA ? -1 : 0;
      });
      
      // Find my position
      const myIndex = sortedValidators.findIndex((v: any) => 
        v.operator_address === VALIDATOR_OPERATOR
      );
      
      rank = myIndex !== -1 ? myIndex + 1 : 0;
    }

    return NextResponse.json({
      chain: "Paxi",
      moniker: validator.description?.moniker || "alfadzc",
      operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: totalBonded.toFixed(2),
      totalBondedUSD,
      price: PRICE,
      validators: listData?.validators?.length || 0,
      uptime,
      rank, // <-- TAMBAHKAN RANK
      isFallback: false,
      lastUpdated: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
