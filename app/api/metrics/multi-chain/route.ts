// export const runtime = 'edge'; // SETUP FOR CloudFlare
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface ChainMetrics {
  chain: string;
  validators: number;
  totalBonded: string;
  totalBondedUSD: number;
  price: number;
  uptime: number;
  isFallback?: boolean;
}

interface AggregatedMetrics {
  activeValidators: string;
  networkUptime: number;
  totalStaked: string;
  totalStakedUSD: number;
  networksSupported: string;
  chains: ChainMetrics[];
  lastUpdated: string;
  isRealtime: boolean;
}

const CHAIN_CONFIG: Array<{
  chain: string;
  lcd: string;
  operator: string;
  divisor: number;
  price: number;
  timeout?: number;
  skipValidatorList?: boolean;
  hardcodedValidators?: number;
}> = [
  { chain: "Lava", lcd: "https://lava-api.polkachu.com", operator: "lava@valoper18kuml80whhgw3g0dp2qthtlcsazvekfd9kzttd", divisor: 1_000_000, price: 0.02188787, timeout: 4000 },
  { chain: "Shido", lcd: "https://shido-api.polkachu.com", operator: "shidovaloper1rqt23hexgl3erf2pcnelrmvcnana2kyz70zv2h", divisor: 1_000_000_000_000_000_000, price: 0.000204405, skipValidatorList: true, hardcodedValidators: 37, timeout: 4000 },
  { chain: "Paxi", lcd: "https://mainnet-lcd.paxinet.io", operator: "paxivaloper1d6qj9qy5vzv9kj5x435w5klaxm3wc8l20628mj", divisor: 1_000_000, price: 0.01410782, timeout: 8000 },
  { chain: "Bitbadges", lcd: "https://api-bitbadges.alfadzc.xyz", operator: "bbvaloper18hgreu0c6n3essuc8arct7fx0w0ym6x52fwt2v", divisor: 1_000_000, price: 0, timeout: 4000 },
  { chain: "CNHO", lcd: "https://cnhostables_mainnet_api.chain.whenmoonwhenlambo.money", operator: "cnhovaloper1aw3nz0zlurr040n8kct80rydlc6rzzfj7wn0c0", divisor: 1_000_000, price: 0, skipValidatorList: true, hardcodedValidators: 17, timeout: 4000 },
  { chain: "Lumen", lcd: "https://api.lumen.chaintools.tech", operator: "lmnvaloper1vtesu7w3rvunf7f332ugy67l08ury2l7ft9pah", divisor: 1_000_000, price: 0, timeout: 8000 },
  { chain: "Epix", lcd: "https://api.epix.zone", operator: "epixvaloper1sc4dsg6t5q8l4dp40fyxuly59va6kqw7sfav9f", divisor: 1_000_000_000_000_000_000, price: 0, timeout: 4000 },
  { chain: "Empeiria", lcd: "https://empeiria-testnet-api.itrocket.net", operator: "empevaloper1alf9sl64dgap3ps37qqcl40w8kjranh897t7y6", divisor: 1_000_000, price: 0, skipValidatorList: true, hardcodedValidators: 84, timeout: 4000 },
  { chain: "Safrochain", lcd: "https://rest.testnet.safrochain.com", operator: "addr_safrovaloper1qdpy8ju6lxy62r5jcv9dcjpj2pjrhzgzrxflqs", divisor: 1_000_000, price: 0, timeout: 4000 },
  { chain: "Pushchain", lcd: "https://api-t.pushchain.nodestake.org", operator: "pushvaloper1nnyasz54zm6gc2w07yxh9rl63tj76yfg5k89gx", divisor: 1_000_000_000_000_000_000, price: 0, timeout: 4000 },
  { chain: "Republic", lcd: "https://api-t.republicai.nodestake.org", operator: "raivaloper1qhzv04nc5ghe727len9hy20t49372fjpma74rr", divisor: 1_000_000_000_000_000_000, price: 0, timeout: 8000 },
  { chain: "Monolythium v1", lcd: "https://api-test.monolyth.vinjan-inc.com", operator: "monovaloper10ers0hza3hg8nwy37rtcn9svje05md53uf7hdl", divisor: 1_000_000_000_000_000_000, price: 0, timeout: 4000 },
];

const CHAIN_ORDER = ["Lava", "Shido", "Paxi", "Bitbadges", "CNHO", "Lumen", "Epix", "Empeiria", "Safrochain", "Pushchain", "Republic", "Monolythium v1"];

let metricsCache: { data: AggregatedMetrics; timestamp: number } | null = null;
const CACHE_TTL = 5000;

async function getValidatorUptime(lcd: string, operator: string, timeout: number): Promise<number> {
  try {
    const res = await fetch(`${lcd}/cosmos/slashing/v1beta1/signing_infos/${operator}`, {
      signal: AbortSignal.timeout(timeout),
      cache: "no-store",
    });

    if (!res.ok) return 99.9;

    const data = await res.json();
    const signingInfo = data?.val_signing_info;

    if (!signingInfo) return 99.9;

    const missedBlocks = Number(signingInfo.missed_blocks_counter || 0);
    const indexOffset = Number(signingInfo.index_offset || 1);
    const uptime = Math.max(0, 100 - (missedBlocks / Math.max(indexOffset, 1)) * 100);

    return parseFloat(Math.max(0, Math.min(uptime, 100)).toFixed(1));
  } catch {
    return 99.9;
  }
}

async function fetchChain(cfg: typeof CHAIN_CONFIG[0]): Promise<ChainMetrics | null> {
  const timeout = cfg.timeout || 2000;

  try {
    const [validatorRes, myValidatorRes, uptimeData] = await Promise.allSettled([
      cfg.skipValidatorList
    ? Promise.resolve(new Response(JSON.stringify({ validators: Array(cfg.hardcodedValidators ?? 0).fill({}) }), { status: 200 }))
        : fetch(`${cfg.lcd}/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=200`, { signal: AbortSignal.timeout(timeout), cache: "no-store" }),
      fetch(`${cfg.lcd}/cosmos/staking/v1beta1/validators/${cfg.operator}`, { signal: AbortSignal.timeout(timeout), cache: "no-store" }),
      getValidatorUptime(cfg.lcd, cfg.operator, timeout),
    ]);

    const validatorResOk = validatorRes.status === "fulfilled" && validatorRes.value.ok;
    const myValidatorResOk = myValidatorRes.status === "fulfilled" && myValidatorRes.value.ok;
    const uptimeReady = uptimeData.status === "fulfilled" ? uptimeData.value : 99.9;

    if (!validatorResOk || !myValidatorResOk) {console.error(`[${cfg.chain}] validatorResOk=${validatorResOk} myValidatorResOk=${myValidatorResOk}`); return null;}

    const [validatorData, myValidatorData] = await Promise.all([
      (validatorRes as PromiseFulfilledResult<Response>).value.json(),
      (myValidatorRes as PromiseFulfilledResult<Response>).value.json(),
    ]);

    const validators: any[] = validatorData?.validators ?? [];
    const tokensRaw: string = myValidatorData?.validator?.tokens ?? "0";
    const totalBonded = Number(tokensRaw) / cfg.divisor;
    const totalBondedUSD = totalBonded * cfg.price;

    return {
      chain: cfg.chain,
      validators: validators.length,
      totalBonded: totalBonded.toFixed(2),
      totalBondedUSD: parseFloat(totalBondedUSD.toFixed(2)),
      price: cfg.price,
      uptime: uptimeReady,
      isFallback: false,
    };
  } catch (error) {
    console.error(`[${cfg.chain}] Fetch failed:`, error instanceof Error ? error.message : error);
    return null;
  }
}

const sortByCustomOrder = (chains: ChainMetrics[]): ChainMetrics[] =>
  [...chains].sort((a, b) => CHAIN_ORDER.indexOf(a.chain) - CHAIN_ORDER.indexOf(b.chain));

async function fetchLivePrices(): Promise<Record<string, number>> {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=lava-network,shido-2,paxi-network&vs_currencies=usd",
      { signal: AbortSignal.timeout(5000), cache: "no-store" }
    );
    const data = await res.json();
    return {
    Lava: data["lava-network"]?.usd || 0.0244,
      Shido: data["shido-2"]?.usd || 0.0001711,
      Paxi: data["paxi-network"]?.usd || 0.01274437,
    };
  } catch {
    return { Lava: 0.02188787, Shido: 0.000204405 };
  }
}

export async function GET() {
  const now = Date.now();

  if (metricsCache && now - metricsCache.timestamp < CACHE_TTL) {
    return NextResponse.json(metricsCache.data, {
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  }

  const livePrices = await fetchLivePrices();
  const updatedConfig = CHAIN_CONFIG.map(cfg => ({
    ...cfg,
    price: livePrices[cfg.chain] ?? cfg.price,
  }));
  const results = await Promise.allSettled(updatedConfig.map(fetchChain));

   let chainMetrics: ChainMetrics[] = results
    .filter((r): r is PromiseFulfilledResult<ChainMetrics | null> => r.status === "fulfilled")
    .map((r) => r.value)
    .filter((v): v is ChainMetrics => v !== null);

  // Add fallback for offline chains
   const fetchedChains = chainMetrics.map(c => c.chain);
   if (!fetchedChains.includes("Monolythium v1")) {
    chainMetrics.push({ chain: "Monolythium v1", validators: 0, totalBonded: "0", totalBondedUSD: 0, price: 0, uptime: 0, isFallback: true }); 
}

  console.log(`[Multi-Chain] Fetched ${chainMetrics.length}/${CHAIN_CONFIG.length} chains`);

  const isRealtime = chainMetrics.length > 0;
  chainMetrics = sortByCustomOrder(chainMetrics);

  const totalBondedUSD = chainMetrics.reduce(
    (sum, m) => sum + (Number.isFinite(m.totalBondedUSD) ? m.totalBondedUSD : 0),
    0
  );

  const avgUptime = chainMetrics.length > 0
    ? parseFloat((chainMetrics.reduce((sum, m) => sum + m.uptime, 0) / chainMetrics.length).toFixed(1))
    : 99.9;

  const metrics: AggregatedMetrics = {
    activeValidators: chainMetrics.length.toString(),
    networkUptime: avgUptime,
    totalStaked: totalBondedUSD.toFixed(2),
    totalStakedUSD: totalBondedUSD,
    networksSupported: CHAIN_CONFIG.length.toString(),
    chains: chainMetrics,
    lastUpdated: new Date().toISOString(),
    isRealtime,
  };

  metricsCache = { data: metrics, timestamp: now };

  return NextResponse.json(metrics, {
    status: 200,
    headers: { "Cache-Control": "no-store, no-cache, must-revalidate" },
  });
}
