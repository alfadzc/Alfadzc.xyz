// export const runtime = 'edge'; // SETUP FOR CloudFlare
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 60;

const LCD_URLS = [
  "https://api.cnho.io",
  "https://cnhostables_mainnet_api.chain.whenmoonwhenlambo.money",
  "https://api-cnho.vinjan-inc.com",
  "https://rest.cnho.nodestake.top",
];

const VALIDATOR_OPERATOR = "cnhovaloper1aw3nz0zlurr040n8kct80rydlc6rzzfj7wn0c0";
const VALCONS_ADDRESS = "cnhovalcons1d86xyfzghzsu3wztlvl4x0fzgkzjkgsz8fgjqz";
const CHAIN_DIVISOR = 1_000_000;
const PRICE = 0;

const FALLBACK = {
  chain: "CNHO Stable",
  moniker: "alfadzc",
  operatorAddress: VALIDATOR_OPERATOR,
  totalBonded: "213120",
  totalBondedUSD: "0",
  price: PRICE,
  validators: 25,
  uptime: 99.9,
  rank: 9,
  isFallback: true,
  lastUpdated: new Date().toISOString(),
};

async function fetchWithFallback(path: string) {
  for (const url of LCD_URLS) {
    try {
      const res = await fetch(`${url}${path}`, { cache: "no-store", signal: AbortSignal.timeout(8000) });
      if (res.ok) return res.json();
    } catch {}
  }
  return null;
}

export async function GET() {
  try {
    const validatorData = await fetchWithFallback(`/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`);
    
    if (!validatorData?.validator) {
      return NextResponse.json(FALLBACK);
    }

    const validator = validatorData.validator;
    const totalBonded = Number(BigInt(validator.tokens || 0)) / CHAIN_DIVISOR;

    return NextResponse.json({
      chain: "CNHO Stable",
      moniker: validator.description?.moniker || "alfadzc",
      operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: totalBonded.toFixed(2),
      totalBondedUSD: "0",
      price: PRICE,
      validators: 25,
      uptime: 99.9,
      rank: 9,
      isFallback: false,
      lastUpdated: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
