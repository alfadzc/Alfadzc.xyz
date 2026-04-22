import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_URLS = [
      "https://api-t.republicai.nodestake.org",
      "https://api-t.republic.vinjan-inc.com"
    ];
    const VALIDATOR_OPERATOR = "raivaloper1qhzv04nc5ghe727len9hy20t49372fjpma74rr";
    const CHAIN_DIVISOR = 1_000_000_000_000_000_000; // 18 decimals
    const PRICE_USD = 0;

    let validatorData = null;

    for (const apiUrl of API_URLS) {
      try {
        const validatorRes = await fetch(
          `${apiUrl}/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=500`,
          { signal: AbortSignal.timeout(8000) }
        );
        if (validatorRes.ok) {
          validatorData = await validatorRes.json();
          break;
        }
      } catch {}
    }

    if (!validatorData) {
      return NextResponse.json({ error: "Failed to fetch from all API endpoints" }, { status: 500 });
    }

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
      chain: "Republic",
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
