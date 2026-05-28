// export const runtime = 'edge'; // SETUP FOR CloudFlare
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 0;
const LCD_URLS = [
  "https://lava.lava.build",
  "https://lava-api.polkachu.com",
  "https://lava-api.linknode.org",
  "https://lava-mainnet-api.itrocket.net",
];
const VALIDATOR_OPERATOR = "lava@valoper18kuml80whhgw3g0dp2qthtlcsazvekfd9kzttd";
const VALCONS_ADDRESS = "lava@valcons1hvwzqkx2l66pxnstm0dxgwqzus8su37lfvad95";
const CHAIN_DIVISOR = 1_000_000;

async function fetchWithFallback(path: string) {
  for (const base of LCD_URLS) {
    try {
      const res = await fetch(`${base}${path}`, { cache: "no-store" });
      if (res.ok) return res.json();
    } catch {}
  }
  return null;
}

async function fetchPrice(): Promise<number> {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=lava-network&vs_currencies=usd",
      { cache: "no-store" }
    );
    if (res.ok) {
      const data = await res.json();
      return data?.["lava-network"]?.usd ?? 0;
    }
  } catch {}
  return 0;
}

async function fetchUptime(): Promise<number> {
  try {
    const data = await fetchWithFallback(
      `/cosmos/slashing/v1beta1/signing_infos/${VALCONS_ADDRESS}`
    );
    const info = data?.val_signing_info;
    if (!info) return 99.9;
    const WINDOW = 3500;
    const missedBlocks = parseInt(info.missed_blocks_counter || "0");
    const uptime = ((WINDOW - missedBlocks) / WINDOW) * 100;
    return parseFloat(Math.min(uptime, 100).toFixed(4));
  } catch {}
  return 99.9;
}

export async function GET() {
  try {
    const [validatorData, listData, price, uptime] = await Promise.all([
      fetchWithFallback(`/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`),
      fetchWithFallback(`/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=200`),
      fetchPrice(),
      fetchUptime(),
    ]);
    const validator = validatorData?.validator;
    if (!validator) {
      return NextResponse.json({
        chain: "Lava", moniker: "alfadzc", operatorAddress: VALIDATOR_OPERATOR,
        totalBonded: "0", totalBondedUSD: "0", price, validators: 0,
        uptime, isFallback: true, lastUpdated: new Date().toISOString(),
      });
    }
    const totalBonded = Number(BigInt(validator.tokens || 0)) / CHAIN_DIVISOR;
    const totalBondedUSD = (totalBonded * price).toFixed(2);
    return NextResponse.json({
      chain: "Lava",
      moniker: validator.description?.moniker || "alfadzc",
      operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: totalBonded.toFixed(2),
      totalBondedUSD,
      price,
      validators: listData?.validators?.length || 0,
      uptime,
      isFallback: false,
      lastUpdated: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({
      chain: "Lava", moniker: "alfadzc", operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: "0", totalBondedUSD: "0", price: 0, validators: 0,
      uptime: 99.9, isFallback: true, lastUpdated: new Date().toISOString(),
    });
  }
}
