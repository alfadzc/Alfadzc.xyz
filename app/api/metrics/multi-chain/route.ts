import { NextResponse } from "next/server";

interface ChainMetrics {
  chain: string;
  validators: number;
  totalBonded: string;
  totalBondedUSD: number;
  price: number;
}

interface AggregatedMetrics {
  activeValidators: number;
  networkUptime: number;
  totalStaked: string;
  totalStakedUSD: number;
  networksSupporteed: string;
  chains: ChainMetrics[];
  lastUpdated: string;
  isRealtime: boolean;
}

// RPC ENDPOINTS - STABLE & RELIABLE
const RPC_ENDPOINTS = {
  lava: [
    "https://lava-mainnet-1-rpc.allthatnode.com:26657",
    "https://lava.rpc.kjnodes.com",
    "https://lava-rpc.publicnode.com",
    "https://lava-api.polkachu.com",
  ],
  shido: [
    "https://shido-rpc.polkachu.com",
    "https://rpc.shido.mintserve.io",
    "https://shido-rpc.itrocket.net",
  ],
  paxi: [
    "https://mainnet-lcd.paxinet.io",
    "https://paxi-rpc.itrocket.net",
  ],
};

const YOUR_VALIDATORS = {
  lava: "lava@valoper18kuml80whhgw3g0dp2qthtlcsazvekfd9kzttd",
  shido: "shidovaloper1rqt23hexgl3erf2pcnelrmvcnana2kyz70zv2h",
  paxi: "paxivaloper1d6qj9qy5vzv9kj5x435w5klaxm3wc8l20628mj",
};

// FALLBACK DATA - REAL-TIME DATA
const FALLBACK_VALIDATORS: ChainMetrics[] = [
  {
    chain: "Lava",
    validators: 187,
    totalBonded: "5004487000000",
    totalBondedUSD: 177687.25,
    price: 0.03550907,
  },
  {
    chain: "Shido",
    validators: 89,
    totalBonded: "106047044000000",
    totalBondedUSD: 21680.09,
    price: 0.000204405,
  },
  {
    chain: "Paxi",
    validators: 139,
    totalBonded: "382581531367",
    totalBondedUSD: 3913.81,
    price: 0.01023,
  },
];

// Fetch dengan multiple RPC endpoints
const fetchFromMultipleRPCs = async (
  rpcUrls: string[],
  path: string,
  timeout: number = 5000
): Promise<any> => {
  for (const url of rpcUrls) {
    try {
      const response = await fetch(`${url}${path}`, {
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(timeout),
      });
      
      if (response.ok) {
        console.log(`✓ Success from ${url}`);
        return await response.json();
      }
    } catch (error) {
      console.warn(`⚠️ Failed ${url}: ${error}`);
      continue;
    }
  }
  return null;
};

const fetchChainMetrics = async (
  chainName: string,
  rpcUrls: string[],
  price: number,
  yourValidator: string
): Promise<ChainMetrics | null> => {
  try {
    console.log(`🔍 Fetching REALTIME ${chainName}...`);

    const validatorData = await fetchFromMultipleRPCs(
      rpcUrls,
      "/cosmos/staking/v1beta1/validators?pagination.limit=1000"
    );

    if (!validatorData) {
      console.warn(`⚠️ ${chainName} RPC all failed, using FALLBACK`);
      return null;
    }

    const totalValidators = validatorData.validators?.length || 0;
    
    // Find your validator
    let yourValidatorBonded = BigInt(0);
    if (validatorData.validators && Array.isArray(validatorData.validators)) {
      validatorData.validators.forEach((v: any) => {
        if (v.operator_address === yourValidator) {
          yourValidatorBonded = BigInt(v.tokens || 0);
          console.log(`  Found ${chainName} validator: ${v.moniker || 'Unknown'}, bonded: ${v.tokens}`);
        }
      });
    }

    const totalBonded = yourValidatorBonded.toString();
    const tokensAmount = Number(yourValidatorBonded) / 1_000_000;
    const totalBondedUSD = tokensAmount * price;

    console.log(`✓ ${chainName}: ${totalValidators} validators total, your bond: $${totalBondedUSD.toFixed(2)} (REALTIME)`);

    return {
      chain: chainName,
      validators: totalValidators,
      totalBonded,
      totalBondedUSD,
      price,
    };
  } catch (error) {
    console.warn(`⚠️ ${chainName} error:`, error);
    return null;
  }
};

const fetchPrices = async (): Promise<{ [key: string]: number }> => {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=lava-network,shido&vs_currencies=usd",
      { signal: AbortSignal.timeout(5000) }
    );
    const data = await res.json();
    
    console.log("💰 Prices:", {
      lava: data["lava-network"]?.usd,
      shido: data["shido"]?.usd,
    });

    return {
      lava: data["lava-network"]?.usd || 0.03550907,
      shido: data["shido"]?.usd || 0.000204405,
      paxi: 0.01023,
    };
  } catch (error) {
    console.warn("⚠️ Price fetch failed");
    return {
      lava: 0.03550907,
      shido: 0.000204405,
      paxi: 0.01023,
    };
  }
};

export async function GET() {
  try {
    console.log("🔄 Fetching metrics (HYBRID: Multi-RPC + Fallback)...");

    const prices = await fetchPrices();

    const results = await Promise.allSettled([
      fetchChainMetrics("Lava", RPC_ENDPOINTS.lava, prices.lava, YOUR_VALIDATORS.lava),
      fetchChainMetrics("Shido", RPC_ENDPOINTS.shido, prices.shido, YOUR_VALIDATORS.shido),
      fetchChainMetrics("Paxi", RPC_ENDPOINTS.paxi, prices.paxi, YOUR_VALIDATORS.paxi),
    ]);

    let chainMetrics = results
      .filter((r) => r.status === "fulfilled" && r.value !== null)
      .map((r) => (r as PromiseFulfilledResult<ChainMetrics>).value);

    let isRealtime = chainMetrics.length > 0;
    
    if (chainMetrics.length === 0) {
      console.warn("⚠️ Using FALLBACK");
      chainMetrics = FALLBACK_VALIDATORS;
      isRealtime = false;
    } else {
      // Tambahkan chain yang gagal dari fallback
      const successChains = chainMetrics.map(m => m.chain);
      FALLBACK_VALIDATORS.forEach(fb => {
        if (!successChains.includes(fb.chain)) {
          chainMetrics.push(fb);
        }
      });
    }

    const totalValidators = 11;
    const totalBondedUSD = chainMetrics.reduce((sum, m) => sum + m.totalBondedUSD, 0);

    const metrics: AggregatedMetrics = {
      activeValidators: totalValidators,
      networkUptime: 99.8,
      totalStaked: (totalBondedUSD).toFixed(2),
      totalStakedUSD: totalBondedUSD,
      networksSupporteed: "10+",
      chains: chainMetrics.sort((a, b) => b.totalBondedUSD - a.totalBondedUSD),
      lastUpdated: new Date().toISOString(),
      isRealtime,
    };

    console.log(`✅ Ready: ${isRealtime ? "🔴 REALTIME" : "🟡 FALLBACK"} - Total USD: $${totalBondedUSD.toFixed(2)}`);

    return NextResponse.json(metrics, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.error("❌ Critical error:", error);
    
    const totalBondedUSD = FALLBACK_VALIDATORS.reduce((sum, m) => sum + m.totalBondedUSD, 0);

    return NextResponse.json(
      {
        activeValidators: 11,
        networkUptime: 99.8,
        totalStaked: totalBondedUSD.toFixed(2),
        totalStakedUSD: totalBondedUSD,
        networksSupporteed: "10+",
        chains: FALLBACK_VALIDATORS,
        lastUpdated: new Date().toISOString(),
        isRealtime: false,
      },
      { status: 200 }
    );
  }
}
