import { NextResponse } from "next/server";

export async function GET() {
  try {
    const RPC_URL = "https://rpc.epixchain.com";
    const VALIDATOR_OPERATOR = "epixvaloper1sc4dsg6t5q8l4dp40fyxuly59va6kqw7sfav9f";
    const CHAIN_DIVISOR = 1_000_000_000; // 18 decimals
    const PRICE_USD = 0;

    const validatorRes = await fetch(
      `${RPC_URL}/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=500`
    );
    const validatorData = await validatorRes.json();
    const validators = validatorData.validators || [];

    // Find my validator
    const myValidator = validators.find((v: any) => v.operator_address === VALIDATOR_OPERATOR);
    if (!myValidator) {
      return NextResponse.json({ error: "Validator not found" }, { status: 404 });
    }

    const tokens = BigInt(myValidator.tokens || 0);
    const totalBondedTokens = Number(tokens) / CHAIN_DIVISOR;
    const totalBondedUSD = totalBondedTokens * PRICE_USD;

    return NextResponse.json({
      chain: "Epix",
      moniker: myValidator.description?.moniker || "alfadzc",
      operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: totalBondedTokens.toFixed(2),
      totalBondedUSD: totalBondedUSD.toFixed(2),
      price: PRICE_USD,
      validators: validators.length,
      uptime: 99.9,
      lastUpdated: new Date().toISOString(),
    }, {
      status: 200,
      headers: { "Cache-Control": "public, s-maxage=300" },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
