// export const runtime = 'edge'; // SETUP FOR CloudFlare
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 0;
const LCD_URL = "https://api.epix.zone";
const VALIDATOR_OPERATOR = "epixvaloper1sc4dsg6t5q8l4dp40fyxuly59va6kqw7sfav9f";
const CHAIN_DIVISOR = 1_000_000_000_000_000_000;
const PRICE = 0;
const FALLBACK = { chain: "Epix", moniker: "alfadzc", operatorAddress: VALIDATOR_OPERATOR, totalBonded: "0", totalBondedUSD: "0", price: PRICE, validators: 0, uptime: 99.9, isFallback: true, lastUpdated: new Date().toISOString() };
export async function GET() {
  try {
    const [validatorRes, listRes] = await Promise.all([
      fetch(`${LCD_URL}/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`, { cache: "no-store" }),
      fetch(`${LCD_URL}/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=500`, { cache: "no-store" }),
    ]);
    if (!validatorRes.ok) return NextResponse.json(FALLBACK);
    const [validatorData, listData] = await Promise.all([
      validatorRes.json(),
      listRes.ok ? listRes.json() : { validators: [] },
    ]);
    const validator = validatorData?.validator;
    if (!validator) return NextResponse.json(FALLBACK);
    const totalBonded = Number(BigInt(validator.tokens || 0)) / CHAIN_DIVISOR;
    const totalBondedUSD = (totalBonded * PRICE).toFixed(2);
    return NextResponse.json({
      chain: "Epix",
      moniker: validator.description?.moniker || "alfadzc",
      operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: totalBonded.toFixed(2),
      totalBondedUSD,
      price: PRICE,
      validators: listData.validators?.length || 0,
      uptime: 99.9,
      isFallback: false,
      lastUpdated: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
