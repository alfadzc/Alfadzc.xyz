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
const CONSENSUS_ADDRESS = "shidovalcons1md8f7zpjz8n7hgmag7ytpahxyrflfmcvw9s5du";
const CHAIN_DIVISOR = 1_000_000_000_000_000_000;
const SIGNED_BLOCKS_WINDOW = 100000;
const FALLBACK = {
  chain: "Shido", moniker: "alfadzc", operatorAddress: VALIDATOR_OPERATOR,
  totalBonded: "0", totalBondedUSD: "0", price: 0, validators: 0,
  uptime: 99.9, rank: 0, isFallback: true, lastUpdated: new Date().toISOString(),
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

async function fetchPrice(): Promise<number> {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=shido-2&vs_currencies=usd",
      { cache: "no-store" }
    );
    if (res.ok) {
      const data = await res.json();
      return data?.["shido-2"]?.usd ?? 0;
    }
  } catch {}
  return 0;
}

async function fetchUptime(): Promise<number> {
  try {
    const data = await fetchWithFallback(
      `/cosmos/slashing/v1beta1/signing_infos/${CONSENSUS_ADDRESS}`
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
    const [validatorData, listData, price, uptime] = await Promise.all([
      fetchWithFallback(`/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`),
      fetchWithFallback(`/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=300`),
      fetchPrice(),
      fetchUptime(),
    ]);
    
    const validator = validatorData?.validator;
    if (!validator) return NextResponse.json({ ...FALLBACK, price, uptime });
    
    const totalBonded = Number(BigInt(validator.tokens || 0)) / CHAIN_DIVISOR;
    const totalBondedUSD = (totalBonded * price).toFixed(2);
    
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
      chain: "Shido",
      moniker: validator.description?.moniker || "alfadzc",
      operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: totalBonded.toFixed(2),
      totalBondedUSD,
      price,
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
