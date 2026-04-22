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
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/server.js [app-route] (ecmascript)");
;
const dynamic = "force-dynamic";
const revalidate = 0;
const CHAIN_CONFIG = [
    {
        chain: "Lava",
        lcd: "https://lava-api.polkachu.com",
        operator: "lava@valoper18kuml80whhgw3g0dp2qthtlcsazvekfd9kzttd",
        divisor: 1_000_000,
        price: 0.03550907
    },
    {
        chain: "Shido",
        lcd: "https://rest.shido.io",
        operator: "shidovaloper1rqt23hexgl3erf2pcnelrmvcnana2kyz70zv2h",
        divisor: 1_000_000,
        price: 0.000204405
    },
    {
        chain: "Paxi",
        lcd: "https://mainnet-lcd.paxinet.io",
        operator: "paxivaloper1d6qj9qy5vzv9kj5x435w5klaxm3wc8l20628mj",
        divisor: 1_000_000,
        price: 0.01023
    },
    {
        chain: "Bitbadges",
        lcd: "https://api.bitbadges.io",
        operator: "bbvaloper18hgreu0c6n3essuc8arct7fx0w0ym6x52fwt2v",
        divisor: 1_000_000,
        price: 0
    },
    {
        chain: "CNHO",
        lcd: "https://api.cnho.io",
        operator: "cnhovaloper1aw3nz0zlurr040n8kct80rydlc6rzzfj7wn0c0",
        divisor: 1_000_000,
        price: 0
    },
    {
        chain: "Lumen",
        lcd: "https://api.lumen.chaintools.tech",
        operator: "lmnvaloper1vtesu7w3rvunf7f332ugy67l08ury2l7ft9pah",
        divisor: 1_000_000,
        price: 0
    },
    {
        chain: "Epix",
        lcd: "https://api.epix.zone",
        operator: "epixvaloper1sc4dsg6t5q8l4dp40fyxuly59va6kqw7sfav9f",
        divisor: 1_000_000_000_000_000_000,
        price: 0
    },
    {
        chain: "Empeiria",
        lcd: "https://empeiria-testnet-api.itrocket.net",
        operator: "empevaloper1alf9sl64dgap3ps37qqcl40w8kjranh897t7y6",
        divisor: 1_000_000,
        price: 0
    },
    {
        chain: "Safrochain",
        lcd: "https://rest.testnet.safrochain.com",
        operator: "addr_safrovaloper1qdpy8ju6lxy62r5jcv9dcjpj2pjrhzgzrxflqs",
        divisor: 1_000_000,
        price: 0
    },
    {
        chain: "Pushchain",
        lcd: "https://api-t.pushchain.nodestake.org",
        operator: "pushvaloper1nnyasz54zm6gc2w07yxh9rl63tj76yfg5k89gx",
        divisor: 1_000_000_000_000_000_000,
        price: 0
    },
    {
        chain: "Republic",
        lcd: "https://api-t.republicai.nodestake.org",
        operator: "raivaloper1qhzv04nc5ghe727len9hy20t49372fjpma74rr",
        divisor: 1_000_000_000_000_000_000,
        price: 0
    },
    {
        chain: "Monolythium",
        lcd: "https://api-t.mono.nodestake.org",
        operator: "monovaloper10ers0hza3hg8nwy37rtcn9svje05md53uf7hdl",
        divisor: 1_000_000_000_000_000_000,
        price: 0
    }
];
const CHAIN_ORDER = [
    "Lava",
    "Shido",
    "Paxi",
    "Bitbadges",
    "CNHO",
    "Lumen",
    "Epix",
    "Empeiria",
    "Safrochain",
    "Pushchain",
    "Republic",
    "Monolythium"
];
const FALLBACK_VALIDATORS = [
    {
        chain: "Lava",
        validators: 87,
        totalBonded: "153",
        totalBondedUSD: 5.43,
        price: 0.03550907,
        isFallback: true
    },
    {
        chain: "Shido",
        validators: 38,
        totalBonded: "107379490",
        totalBondedUSD: 21948,
        price: 0.000204405,
        isFallback: true
    },
    {
        chain: "Paxi",
        validators: 31,
        totalBonded: "574.437",
        totalBondedUSD: 5.87,
        price: 0.01023,
        isFallback: true
    },
    {
        chain: "Bitbadges",
        validators: 42,
        totalBonded: "203.663",
        totalBondedUSD: 0,
        price: 0,
        isFallback: true
    },
    {
        chain: "CNHO",
        validators: 22,
        totalBonded: "213120.00",
        totalBondedUSD: 0,
        price: 0,
        isFallback: true
    },
    {
        chain: "Lumen",
        validators: 51,
        totalBonded: "15.944",
        totalBondedUSD: 0,
        price: 0,
        isFallback: true
    },
    {
        chain: "Epix",
        validators: 23,
        totalBonded: "1823.20",
        totalBondedUSD: 0,
        price: 0,
        isFallback: true
    },
    {
        chain: "Empeiria",
        validators: 97,
        totalBonded: "1340",
        totalBondedUSD: 0,
        price: 0,
        isFallback: true
    },
    {
        chain: "Safrochain",
        validators: 61,
        totalBonded: "539.138",
        totalBondedUSD: 0,
        price: 0,
        isFallback: true
    },
    {
        chain: "Pushchain",
        validators: 59,
        totalBonded: "242",
        totalBondedUSD: 0,
        price: 0,
        isFallback: true
    },
    {
        chain: "Republic",
        validators: 100,
        totalBonded: "4260",
        totalBondedUSD: 0,
        price: 0,
        isFallback: true
    },
    {
        chain: "Monolythium",
        validators: 38,
        totalBonded: "110.500",
        totalBondedUSD: 0,
        price: 0,
        isFallback: true
    }
];
const TIMEOUT = 5000;
async function fetchChain(cfg) {
    try {
        // Fetch validator count & my validator tokens secara parallel
        const [validatorRes, myValidatorRes] = await Promise.all([
            fetch(`${cfg.lcd}/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=500`, {
                signal: AbortSignal.timeout(TIMEOUT),
                cache: "no-store"
            }),
            fetch(`${cfg.lcd}/cosmos/staking/v1beta1/validators/${cfg.operator}`, {
                signal: AbortSignal.timeout(TIMEOUT),
                cache: "no-store"
            })
        ]);
        if (!validatorRes.ok || !myValidatorRes.ok) return null;
        const [validatorData, myValidatorData] = await Promise.all([
            validatorRes.json(),
            myValidatorRes.json()
        ]);
        const validators = validatorData?.validators ?? [];
        const tokensRaw = myValidatorData?.validator?.tokens ?? "0";
        const totalBonded = Number(tokensRaw) / cfg.divisor;
        const totalBondedUSD = totalBonded * cfg.price;
        return {
            chain: cfg.chain,
            validators: validators.length,
            totalBonded: totalBonded.toFixed(2),
            totalBondedUSD: parseFloat(totalBondedUSD.toFixed(2)),
            price: cfg.price,
            isFallback: false
        };
    } catch  {
        return null;
    }
}
const sortByCustomOrder = (chains)=>[
        ...chains
    ].sort((a, b)=>CHAIN_ORDER.indexOf(a.chain) - CHAIN_ORDER.indexOf(b.chain));
async function GET() {
    const results = await Promise.allSettled(CHAIN_CONFIG.map(fetchChain));
    let chainMetrics = results.filter((r)=>r.status === "fulfilled").map((r)=>r.value).filter((v)=>v !== null);
    const isRealtime = chainMetrics.some((m)=>!m.isFallback);
    const successChains = new Set(chainMetrics.map((m)=>m.chain));
    for (const fb of FALLBACK_VALIDATORS){
        if (!successChains.has(fb.chain)) chainMetrics.push(fb);
    }
    chainMetrics = sortByCustomOrder(chainMetrics);
    const totalBondedUSD = chainMetrics.reduce((sum, m)=>sum + (Number.isFinite(m.totalBondedUSD) ? m.totalBondedUSD : 0), 0);
    const metrics = {
        activeValidators: "11+",
        networkUptime: 99.9,
        totalStaked: totalBondedUSD.toFixed(2),
        totalStakedUSD: totalBondedUSD,
        networksSupported: "12",
        chains: chainMetrics,
        lastUpdated: new Date().toISOString(),
        isRealtime
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(metrics, {
        status: 200,
        headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate"
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8eb402d2._.js.map