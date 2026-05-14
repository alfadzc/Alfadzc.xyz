// export const runtime = 'edge'; // SETUP FOR CloudFlare
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const LCD_URLS = [
  "https://shido-api.polkachu.com",
  "https://shidochain_mainnet_api.chain.whenmoonwhenlambo.money",
  "https://swagger.shidoscan.com",
];

const VALIDATOR_OPERATOR = "shidovaloper1rqt23hexgl3erf2pcnelrmvcnana2kyz70zv2h";
const CHAIN_DIVISOR = 1_000_000_000_000_000_000;
const PRICE = 0.000204405;
const HARDCODED_VALIDATORS = 37; // polkachu tidak support list validators (501)

const FALLBACK = {
  chain: "Shido",
  moniker: "alfadzc",
  operatorAddress: VALIDATOR_OPERATOR,
  totalBonded: "0",
  totalBondedUSD: "0",
  price: PRICE,
  validators: HARDCODED_VALIDATORS,
  uptime: 99.9,
  isFallback: true,
  lastUpdated: new Date().toISOString(),
};

async function fetchFromMultiple(path: string) {
  for (const url of LCD_URLS) {
    try {
      const res = await fetch(`${url}${path}`, {
        cache: "no-store",
        signal: AbortSignal.timeout(5000),
      });
      if (res.ok) return res;
    } catch {
      continue;
    }
  }
  return null;
}

export async function GET() {
  try {
    const validatorRes = await fetchFromMultiple(
      `/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`
    );

    if (!validatorRes) return NextResponse.json(FALLBACK);

    const validatorData = await validatorRes.json();
    const validator = validatorData?.validator;

    if (!validator) return NextResponse.json(FALLBACK);

    const totalBonded = Number(BigInt(validator.tokens || 0)) / CHAIN_DIVISOR;
    const totalBondedUSD = (totalBonded * PRICE).toFixed(2);

    return NextResponse.json({
      chain: "Shido",
      moniker: validator.description?.moniker || "alfadzc",
      operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: totalBonded.toFixed(2),
      totalBondedUSD,
      price: PRICE,
      validators: HARDCODED_VALIDATORS,
      uptime: 99.9,
      isFallback: false,
      lastUpdated: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
