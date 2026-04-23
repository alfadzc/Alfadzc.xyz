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
"[project]/app/api/validators/shido/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const dynamic = "force-dynamic";
const revalidate = 0;
const VALIDATOR_OPERATOR = "shidovaloper1rqt23hexgl3erf2pcnelrmvcnana2kyz70zv2h";
const PRICE_USD = 0.000204405;
function toNumber(x) {
    const n = Number(String(x ?? "").replace(/,/g, "").trim());
    return Number.isFinite(n) ? n : 0;
}
function pickValidator(raw) {
    if (!raw) return null;
    if (raw.validator) return raw.validator;
    if (raw.data?.validator) return raw.data.validator;
    if (Array.isArray(raw.validators)) {
        return raw.validators.find((v)=>v?.operator_address === VALIDATOR_OPERATOR || v?.operatorAddress === VALIDATOR_OPERATOR) || null;
    }
    if (Array.isArray(raw.data?.validators)) {
        return raw.data.validators.find((v)=>v?.operator_address === VALIDATOR_OPERATOR || v?.operatorAddress === VALIDATOR_OPERATOR) || null;
    }
    return raw;
}
async function GET() {
    // fallback terakhir kalau semua source gagal
    const FALLBACK = {
        chain: "Shido",
        moniker: "alfadzc",
        operatorAddress: VALIDATOR_OPERATOR,
        totalBonded: "108081256.00",
        totalBondedUSD: (108081256 * PRICE_USD).toFixed(2),
        price: PRICE_USD,
        validators: 42,
        uptime: 99.9,
        isFallback: true,
        source: "hardcoded-fallback",
        lastUpdated: new Date().toISOString()
    };
    try {
        // Source explorer (lebih dekat dengan tampilan yang kamu jadikan acuan)
        const urls = [
            `https://explorer.shidoscan.com/api/v1/staking/validators/${VALIDATOR_OPERATOR}`,
            `https://explorer.shidoscan.com/api/v1/validators/${VALIDATOR_OPERATOR}`,
            `https://explorer.shidoscan.com/api/v1/staking/validators?limit=2000`
        ];
        for (const url of urls){
            try {
                const res = await fetch(url, {
                    cache: "no-store",
                    headers: {
                        Accept: "application/json"
                    },
                    signal: AbortSignal.timeout(7000)
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
                    v.amount
                ];
                let bonded = 0;
                for (const c of tokenCandidates){
                    const n = toNumber(c);
                    if (n > bonded) bonded = n;
                }
                // normalisasi desimal kalau ternyata base unit
                if (bonded >= 1e15) bonded = bonded / 1e18;
                else if (bonded >= 1e9 && bonded <= 1e12) bonded = bonded / 1e6;
                if (bonded > 0) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
                        lastUpdated: new Date().toISOString()
                    }, {
                        status: 200,
                        headers: {
                            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate"
                        }
                    });
                }
            } catch  {}
        }
        // Source RPC
        try {
            const rpcRes = await fetch(`https://rpc.shidoscan.com/cosmos/staking/v1beta1/validators/${VALIDATOR_OPERATOR}`, {
                cache: "no-store",
                headers: {
                    Accept: "application/json"
                },
                signal: AbortSignal.timeout(7000)
            });
            if (rpcRes.ok) {
                const rpc = await rpcRes.json();
                const validator = rpc?.validator;
                const raw = toNumber(validator?.tokens);
                const bonded = raw > 0 ? raw / 1e18 : 0;
                if (bonded > 0) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
                        lastUpdated: new Date().toISOString()
                    }, {
                        status: 200,
                        headers: {
                            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate"
                        }
                    });
                }
            }
        } catch  {}
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(FALLBACK, {
            status: 200,
            headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate"
            }
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ...FALLBACK,
            error: error?.message || "shido fetch error"
        }, {
            status: 200,
            headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate"
            }
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9fb9a4ff._.js.map