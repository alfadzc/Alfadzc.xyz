// export const runtime = 'edge'; // SETUP FOR CloudFlare
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const LCD_URLS = [
  "https://worrell.api.t.anode.team",
  "https://t-worrell.api.utsa.tech",
  "https://worrell-testnet-api.itrocket.net",
  "https://api-t.worrell.vinjan-inc.com",
  "https://worrell-testnet-api.nodesync.top",
  "https://api-worrell.test.onenov.xyz",
  "https://worrellchain-apitest.codeblocklabs.com",
];

const VALIDATOR_OPERATOR = "worrellvaloper1kw3lzqgf2nvq4gluna60qzdf9jgl59mrxwwr67";
const VALCONS_ADDRESS = "worrellvalcons1tl2pscknm7ja5cnf6xzz8n5gm2xgn8q96mp2ad";
const CHAIN_DIVISOR = 1_000_000;
const PRICE = 0;

const FALLBACK = {
  chain: "Worrell Testnet",
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
    const [validatorData, validatorList, uptime] =
      await Promise.all([
        fetchWithFallback(
          `/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`
        ),
        fetchWithFallback(
          `/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=500`
        ),
        fetchUptime(),
      ]);

    const validator = validatorData?.validator;

    if (!validator)
      return NextResponse.json({
        ...FALLBACK,
        uptime,
      });

    const bonded =
      Number(BigInt(validator.tokens || "0")) /
      CHAIN_DIVISOR;

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
      chain: "Worrell Testnet",
      moniker:
        validator.description?.moniker ?? "alfadzc",
      operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: bonded.toFixed(2),
      totalBondedUSD: "0",
      price: PRICE,
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
