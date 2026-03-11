module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/alfadzc.xyz/app/api/metrics/multi-chain/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/server.js [app-route] (ecmascript)");
;
// RPC ENDPOINTS - STABLE & RELIABLE
const RPC_ENDPOINTS = {
    lava: [
        "https://lava-mainnet-1-rpc.allthatnode.com:26657",
        "https://lava.rpc.kjnodes.com",
        "https://lava-rpc.publicnode.com",
        "https://lava-api.polkachu.com"
    ],
    shido: [
        "https://shido-rpc.polkachu.com",
        "https://rpc.shido.mintserve.io",
        "https://shido-rpc.itrocket.net"
    ],
    paxi: [
        "https://mainnet-lcd.paxinet.io",
        "https://paxi-rpc.itrocket.net"
    ]
};
const YOUR_VALIDATORS = {
    lava: "lava@valoper18kuml80whhgw3g0dp2qthtlcsazvekfd9kzttd",
    shido: "shidovaloper1rqt23hexgl3erf2pcnelrmvcnana2kyz70zv2h",
    paxi: "paxivaloper1d6qj9qy5vzv9kj5x435w5klaxm3wc8l20628mj"
};
// FALLBACK DATA - REAL-TIME DATA
const FALLBACK_VALIDATORS = [
    {
        chain: "Lava",
        validators: 187,
        totalBonded: "5004487000000",
        totalBondedUSD: 177687.25,
        price: 0.03550907
    },
    {
        chain: "Shido",
        validators: 89,
        totalBonded: "106047044000000",
        totalBondedUSD: 21680.09,
        price: 0.000204405
    },
    {
        chain: "Paxi",
        validators: 139,
        totalBonded: "382581531367",
        totalBondedUSD: 3913.81,
        price: 0.01023
    }
];
// Fetch dengan multiple RPC endpoints
const fetchFromMultipleRPCs = async (rpcUrls, path, timeout = 5000)=>{
    for (const url of rpcUrls){
        try {
            const response = await fetch(`${url}${path}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                signal: AbortSignal.timeout(timeout)
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
const fetchChainMetrics = async (chainName, rpcUrls, price, yourValidator)=>{
    try {
        console.log(`🔍 Fetching REALTIME ${chainName}...`);
        const validatorData = await fetchFromMultipleRPCs(rpcUrls, "/cosmos/staking/v1beta1/validators?pagination.limit=1000");
        if (!validatorData) {
            console.warn(`⚠️ ${chainName} RPC all failed, using FALLBACK`);
            return null;
        }
        const totalValidators = validatorData.validators?.length || 0;
        // Find your validator
        let yourValidatorBonded = BigInt(0);
        if (validatorData.validators && Array.isArray(validatorData.validators)) {
            validatorData.validators.forEach((v)=>{
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
            price
        };
    } catch (error) {
        console.warn(`⚠️ ${chainName} error:`, error);
        return null;
    }
};
const fetchPrices = async ()=>{
    try {
        const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=lava-network,shido&vs_currencies=usd", {
            signal: AbortSignal.timeout(5000)
        });
        const data = await res.json();
        console.log("💰 Prices:", {
            lava: data["lava-network"]?.usd,
            shido: data["shido"]?.usd
        });
        return {
            lava: data["lava-network"]?.usd || 0.03550907,
            shido: data["shido"]?.usd || 0.000204405,
            paxi: 0.01023
        };
    } catch (error) {
        console.warn("⚠️ Price fetch failed");
        return {
            lava: 0.03550907,
            shido: 0.000204405,
            paxi: 0.01023
        };
    }
};
async function GET() {
    try {
        console.log("🔄 Fetching metrics (HYBRID: Multi-RPC + Fallback)...");
        const prices = await fetchPrices();
        const results = await Promise.allSettled([
            fetchChainMetrics("Lava", RPC_ENDPOINTS.lava, prices.lava, YOUR_VALIDATORS.lava),
            fetchChainMetrics("Shido", RPC_ENDPOINTS.shido, prices.shido, YOUR_VALIDATORS.shido),
            fetchChainMetrics("Paxi", RPC_ENDPOINTS.paxi, prices.paxi, YOUR_VALIDATORS.paxi)
        ]);
        let chainMetrics = results.filter((r)=>r.status === "fulfilled" && r.value !== null).map((r)=>r.value);
        let isRealtime = chainMetrics.length > 0;
        if (chainMetrics.length === 0) {
            console.warn("⚠️ Using FALLBACK");
            chainMetrics = FALLBACK_VALIDATORS;
            isRealtime = false;
        } else {
            // Tambahkan chain yang gagal dari fallback
            const successChains = chainMetrics.map((m)=>m.chain);
            FALLBACK_VALIDATORS.forEach((fb)=>{
                if (!successChains.includes(fb.chain)) {
                    chainMetrics.push(fb);
                }
            });
        }
        const totalValidators = 11;
        const totalBondedUSD = chainMetrics.reduce((sum, m)=>sum + m.totalBondedUSD, 0);
        const metrics = {
            activeValidators: totalValidators,
            networkUptime: 99.8,
            totalStaked: totalBondedUSD.toFixed(2),
            totalStakedUSD: totalBondedUSD,
            networksSupporteed: "10+",
            chains: chainMetrics.sort((a, b)=>b.totalBondedUSD - a.totalBondedUSD),
            lastUpdated: new Date().toISOString(),
            isRealtime
        };
        console.log(`✅ Ready: ${isRealtime ? "🔴 REALTIME" : "🟡 FALLBACK"} - Total USD: $${totalBondedUSD.toFixed(2)}`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(metrics, {
            status: 200,
            headers: {
                "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60"
            }
        });
    } catch (error) {
        console.error("❌ Critical error:", error);
        const totalBondedUSD = FALLBACK_VALIDATORS.reduce((sum, m)=>sum + m.totalBondedUSD, 0);
        return __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            activeValidators: 11,
            networkUptime: 99.8,
            totalStaked: totalBondedUSD.toFixed(2),
            totalStakedUSD: totalBondedUSD,
            networksSupporteed: "10+",
            chains: FALLBACK_VALIDATORS,
            lastUpdated: new Date().toISOString(),
            isRealtime: false
        }, {
            status: 200
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8eb402d2._.js.map