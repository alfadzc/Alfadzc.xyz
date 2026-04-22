import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const VALIDATOR_OPERATOR = "shidovaloper1rqt23hexgl3erf2pcnelrmvcnana2kyz70zv2h";
const PRICE_USD = 0.000204405;

function toNumber(x: unknown): number {
  const n = Number(String(x ?? "").replace(/,/g, "").trim());
  return Number.isFinite(n) ? n : 0;
}

function pickValidator(raw: any): any | null {
  if (!raw) return null;
  if (raw.validator) return raw.validator;
  if (raw.data?.validator) return raw.data.validator;
  if (Array.isArray(raw.validators)) {
    return raw.validators.find(
      (v: any) =>
        v?.operator_address === VALIDATOR_OPERATOR ||
        v?.operatorAddress === VALIDATOR_OPERATOR
    ) || null;
  }
  if (Array.isArray(raw.data?.validators)) {
    return raw.data.validators.find(
      (v: any) =>
        v?.operator_address === VALIDATOR_OPERATOR ||
        v?.operatorAddress === VALIDATOR_OPERATOR
    ) || null;
  }
  return raw;
}

export async function GET() {
  // fallback terakhir kalau semua source gagal
  const FALLBACK = {
    chain: "Shido",
    moniker: "alfadzc",
    operatorAddress: VALIDATOR_OPERATOR,
    totalBonded: "108081256.00", // update sesuai explorer saat ini
    totalBondedUSD: (108081256 * PRICE_USD).toFixed(2),
    price: PRICE_USD,
    validators: 42,
    uptime: 99.9,
    isFallback: true,
    source: "hardcoded-fallback",
    lastUpdated: new Date().toISOString(),
  };

  try {
    // Source explorer (lebih dekat dengan tampilan yang kamu jadikan acuan)
    const urls = [
      `https://explorer.shidoscan.com/api/v1/staking/validators/${VALIDATOR_OPERATOR}`,
      `https://explorer.shidoscan.com/api/v1/validators/${VALIDATOR_OPERATOR}`,
      `https://explorer.shidoscan.com/api/v1/staking/validators?limit=2000`,
    ];

    for (const url of urls) {
      try {
        const res = await fetch(url, {
          cache: "no-store",
          headers: { Accept: "application/json" },
          signal: AbortSignal.timeout(7000),
        });
        if (!res.ok) continue;

        const json = await res.json();
        const v = pickValidator(json);
        if (!v) continue;

        const tokenCandidates = [
          v.tokens,
          v.bonded_tokens,
          v.total_bonded,
          v.delegator_shares,
          v.voting_power,
          v.stake,
          v.amount,
        ];

        let bonded = 0;
        for (const c of tokenCandidates) {
          const n = toNumber(c);
          if (n > bonded) bonded = n;
        }

        // normalisasi desimal kalau ternyata base unit
        if (bonded >= 1e15) bonded = bonded / 1e18;
        else if (bonded >= 1e9 && bonded <= 1e12) bonded = bonded / 1e6;

        if (bonded > 0) {
          return NextResponse.json(
            {
              chain: "Shido",
              moniker: v?.description?.moniker || v?.moniker || "alfadzc",
              operatorAddress: v?.operator_address || v?.operatorAddress || VALIDATOR_OPERATOR,
              totalBonded: bonded.toFixed(2),
              totalBondedUSD: (bonded * PRICE_USD).toFixed(2),
              price: PRICE_USD,
              validators: 42,
              uptime: 99.9,
              isFallback: false,
              source: "explorer",
              lastUpdated: new Date().toISOString(),
            },
            {
              status: 200,
              headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
              },
            }
          );
        }
      } catch {}
    }

    // Source RPC
    try {
      const rpcRes = await fetch(
        `https://rpc.shidoscan.com/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`,
        {
          cache: "no-store",
          headers: { Accept: "application/json" },
          signal: AbortSignal.timeout(7000),
        }
      );

      if (rpcRes.ok) {
        const rpc = await rpcRes.json();
        const validator = rpc?.validator;
        const raw = toNumber(validator?.tokens);
        const bonded = raw > 0 ? raw / 1e18 : 0;

        if (bonded > 0) {
          return NextResponse.json(
            {
              chain: "Shido",
              moniker: validator?.description?.moniker || "alfadzc",
              operatorAddress: validator?.operator_address || VALIDATOR_OPERATOR,
              totalBonded: bonded.toFixed(2),
              totalBondedUSD: (bonded * PRICE_USD).toFixed(2),
              price: PRICE_USD,
              validators: 42,
              uptime: 99.9,
              isFallback: false,
              source: "rpc",
              lastUpdated: new Date().toISOString(),
            },
            {
              status: 200,
              headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
              },
            }
          );
        }
      }
    } catch {}

    return NextResponse.json(FALLBACK, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { ...FALLBACK, error: error?.message || "shido fetch error" },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  }
}
