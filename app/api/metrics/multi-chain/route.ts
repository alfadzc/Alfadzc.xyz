// export const runtime = 'edge'; // SETUP FOR CloudFlare
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 300;

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

let priceCache: Record<string, number> = {};
let lastPriceFetch = 0;
const PRICE_CACHE_TTL = 300000; // 5 menit

async function fetchLivePrices(): Promise<Record<string, number>> {
  const now = Date.now();
  if (lastPriceFetch && now - lastPriceFetch < PRICE_CACHE_TTL) {
    return priceCache;
  }

  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=lava-network,shido-2,paxi-network&vs_currencies=usd",
      { signal: AbortSignal.timeout(5000), cache: "no-store" }
    );
    if (res.ok) {
      const data = await res.json();
      priceCache = {
        Lava: data["lava-network"]?.usd || priceCache.Lava || 0.0189,
        Shido: data["shido-2"]?.usd || priceCache.Shido || 0.000171,
        Paxi: data["paxi-network"]?.usd || priceCache.Paxi || 0.0127,
      };
      lastPriceFetch = now;
    }
  } catch {
    priceCache = {
      Lava: priceCache.Lava || 0.0189,
      Shido: priceCache.Shido || 0.000171,
      Paxi: priceCache.Paxi || 0.0127,
    };
  }

  return priceCache;
}

const CHAIN_CONFIG: Array<{
  chain: string;
  lcd: string;
  operator: string;
  divisor: number;
  timeout?: number;
  skipValidatorList?: boolean;
  hardcodedValidators?: number;
}> = [
  { chain: "Lava", lcd: "https://lava-api.polkachu.com", operator: "lava@valoper18kuml80whhgw3g0dp2qthtlcsazvekfd9kzttd", divisor: 1_000_000, timeout: 4000 },
  { chain: "Shido", lcd: "https://shido-api.polkachu.com", operator: "shidovaloper1rqt23hexgl3erf2pcnelrmvcnana2kyz70zv2h", divisor: 1_000_000_000_000_000_000, skipValidatorList: true, hardcodedValidators: 37, timeout: 4000 },
  { chain: "Paxi", lcd: "https://mainnet-lcd.paxinet.io", operator: "paxivaloper1d6qj9qy5vzv9kj5x435w5klaxm3wc8l20628mj", divisor: 1_000_000, timeout: 8000 },
  { chain: "Safrochain", lcd: "https://api1.safrochain.network", operator: "addr_safrovaloper1xmssy0xfhz0ed5h75a7am9ec7ue7fkvetymxg5", divisor: 1_000_000, timeout: 4000 },  
  { chain: "Bitbadges", lcd: "https://api-bitbadges.alfadzc.xyz", operator: "bbvaloper18hgreu0c6n3essuc8arct7fx0w0ym6x52fwt2v", divisor: 1_000_000, timeout: 4000 },
  { chain: "CNHO", lcd: "https://cnhostables_mainnet_api.chain.whenmoonwhenlambo.money", operator: "cnhovaloper1aw3nz0zlurr040n8kct80rydlc6rzzfj7wn0c0", divisor: 1_000_000, skipValidatorList: true, hardcodedValidators: 17, timeout: 4000 },
  { chain: "Lumen", lcd: "https://api.lumen.chaintools.tech", operator: "lmnvaloper1vtesu7w3rvunf7f332ugy67l08ury2l7ft9pah", divisor: 1_000_000, timeout: 8000 },
  { chain: "Jay Network", lcd: "https://api-jay.onenov.xyz", operator: "yjayvaloper1h6699nz0v7kqjjng4czf022veeefjq0c0ue9fe", divisor: 1_000_000, timeout: 8000 },  
  { chain: "Epix", lcd: "https://api.epix.zone", operator: "epixvaloper1sc4dsg6t5q8l4dp40fyxuly59va6kqw7sfav9f", divisor: 1_000_000_000_000_000_000, timeout: 4000 },
  { chain: "Empeiria", lcd: "https://empeiria-testnet-api.itrocket.net", operator: "empevaloper1alf9sl64dgap3ps37qqcl40w8kjranh897t7y6", divisor: 1_000_000, skipValidatorList: true, hardcodedValidators: 84, timeout: 4000 },
  { chain: "Safrochain Testnet", lcd: "https://rest.testnet.safrochain.com", operator: "addr_safrovaloper1qdpy8ju6lxy62r5jcv9dcjpj2pjrhzgzrxflqs", divisor: 1_000_000, timeout: 4000 },
  { chain: "Pushchain", lcd: "https://api-t.pushchain.nodestake.org", operator: "pushvaloper1nnyasz54zm6gc2w07yxh9rl63tj76yfg5k89gx", divisor: 1_000_000_000_000_000_000, timeout: 4000 },
  { chain: "Republic AI", lcd: "https://republic-testnet-api.linknode.org", operator: "raivaloper1qhzv04nc5ghe727len9hy20t49372fjpma74rr", divisor: 1_000_000_000_000_000_000, timeout: 4000 },
  { chain: "Limonata", lcd: "https://rest.limonata.xyz", operator: "cosmosvaloper1fzr8mmw88qz7cnr0r335en9xkfe6zewzcl6vww", divisor: 1_000_000_000_000_000_000, timeout: 4000 },  
  { chain: "Monolythium v1", lcd: "https://api-test.monolyth.vinjan-inc.com", operator: "monovaloper10ers0hza3hg8nwy37rtcn9svje05md53uf7hdl", divisor: 1_000_000_000_000_000_000, timeout: 4000 },
];

const CHAIN_ORDER = ["Lava", "Shido", "Paxi", "Safrochain", "Bitbadges", "CNHO", "Lumen", "Jay Network", "Epix", "Empeiria", "Safrochain Testnet", "Pushchain", "Republic", "Limonata", "Monolythium v1"];

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

async function fetchChain(cfg: typeof CHAIN_CONFIG[0], priceMap: Record<string, number>): Promise<ChainMetrics | null> {
  const timeout = cfg.timeout || 2000;
  const price = priceMap[cfg.chain] || 0;

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

    if (!validatorResOk || !myValidatorResOk) return null;

    const [validatorData, myValidatorData] = await Promise.all([
      (validatorRes as PromiseFulfilledResult<Response>).value.json(),
      (myValidatorRes as PromiseFulfilledResult<Response>).value.json(),
    ]);

    const validators: any[] = validatorData?.validators ?? [];
    const tokensRaw: string = myValidatorData?.validator?.tokens ?? "0";
    const totalBonded = Number(tokensRaw) / cfg.divisor;
    const totalBondedUSD = totalBonded * price;

    return {
      chain: cfg.chain,
      validators: validators.length,
      totalBonded: totalBonded.toFixed(2),
      totalBondedUSD: parseFloat(totalBondedUSD.toFixed(2)),
      price,
      uptime: uptimeReady,
      isFallback: false,
    };
  } catch {
    return null;
  }
}

const sortByCustomOrder = (chains: ChainMetrics[]): ChainMetrics[] =>
  [...chains].sort((a, b) => CHAIN_ORDER.indexOf(a.chain) - CHAIN_ORDER.indexOf(b.chain));

export async function GET() {
  const now = Date.now();

  if (metricsCache && now - metricsCache.timestamp < CACHE_TTL) {
    return NextResponse.json(metricsCache.data, {
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  }

  const livePrices = await fetchLivePrices();
  const results = await Promise.allSettled(CHAIN_CONFIG.map(cfg => fetchChain(cfg, livePrices)));

  let chainMetrics: ChainMetrics[] = results
    .filter((r): r is PromiseFulfilledResult<ChainMetrics | null> => r.status === "fulfilled")
    .map((r) => r.value)
    .filter((v): v is ChainMetrics => v !== null);

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
    isRealtime: chainMetrics.length > 0,
  };

  metricsCache = { data: metrics, timestamp: now };

  return NextResponse.json(metrics, {
    status: 200,
    headers: { "Cache-Control": "no-store, no-cache, must-revalidate" },
  });
}
