// export const runtime = 'edge';
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const LCD_URL = "https://api-bitbadges.alfadzc.xyz";
const VALIDATOR_OPERATOR = "bbvaloper18hgreu0c6n3essuc8arct7fx0w0ym6x52fwt2v";
const VALCONS_ADDRESS = "bbvalcons1twwpsa4r2z87j9888m8f5c0z0l04shst223z66";
const CHAIN_DIVISOR = 1_000_000;
const SIGNED_BLOCKS_WINDOW = 10000;
const PRICE = 0;
const FALLBACK = {
  chain: "Bitbadges",
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
  try {
    const res = await fetch(`${LCD_URL}${path}`, { cache: "no-store", signal: AbortSignal.timeout(5000) });
    if (res.ok) return res.json();
  } catch {}
  return null;
}

async function fetchUptime(): Promise<number> {
  try {
    const data = await fetchWithFallback(
      `/cosmos/slashing/v1beta1/signing_infos/${VALCONS_ADDRESS}`
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
    const [validatorData, listData, uptime] = await Promise.all([
      fetchWithFallback(`/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`),
      fetchWithFallback(`/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=500`),
      fetchUptime(),
    ]);

    const validator = validatorData?.validator;
    if (!validator) return NextResponse.json({ ...FALLBACK, uptime });

    const totalBonded = Number(BigInt(validator.tokens || 0)) / CHAIN_DIVISOR;
    const totalBondedUSD = (totalBonded * PRICE).toFixed(2);

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
      chain: "Bitbadges",
      moniker: validator.description?.moniker || "alfadzc",
      operatorAddress: VALIDATOR_OPERATOR,
      totalBonded: totalBonded.toFixed(2),
      totalBondedUSD,
      price: PRICE,
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
