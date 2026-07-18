// export const runtime = 'edge'; // SETUP FOR CloudFlare
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 60;

const LCD_URLS = [
  "https://api-push.vinjan-inc.com",
  "https://push-testnet-api.itrocket.net",
  "https://rest-pushchain.nodestake.top",
  "https://lcd.pushchain.xyz",
];

const VALIDATOR_OPERATOR = "pushvaloper1nnyasz54zm6gc2w07yxh9rl63tj76yfg5k89gx";
const VALCONS_ADDRESS = "pushvalcons1nnyasz54zm6gc2w07yxh9rl63tj76yfg5ka4w7";
const CHAIN_DIVISOR = 1_000_000_000_000_000_000; // 18 digit
const PRICE = 0;

const FALLBACK = {
  chain: "Pushchain",
  moniker: "alfadzc",
  operatorAddress: VALIDATOR_OPERATOR,
  totalBonded: "0.00024149",
  totalBondedUSD: "0",
  price: PRICE,
  validators: 67,
  uptime: 99.9,
  rank: 18,
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

export async function GET() {
  try {
    const validatorData = await fetchWithFallback(`/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`);
    
    if (!validatorData?.validator) {
      return NextResponse.json(FALLBACK);
    }

    const validator = validatorData.validator;
    const totalBonded = Number(BigInt(validator.tokens || 0)) / CHAIN_DIVISOR;

    return NextResponse.json({
      chain: "Pushchain",
      moniker: validator.description?.moniker || "alfadzc",
      operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: totalBonded.toFixed(2),
      totalBondedUSD: "0",
      price: PRICE,
      validators: 67,
      uptime: 99.9,
      rank: 18,
      isFallback: false,
      lastUpdated: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
