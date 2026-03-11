module.exports = [
"[project]/alfadzc.xyz/data/ecosystem.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAINNET",
    ()=>MAINNET,
    "TESTNET",
    ()=>TESTNET
]);
const MAINNET = [
    {
        name: "Lava",
        logo: "/chains/lava.png",
        delegateUrl: "https://explorer.alfadzc.xyz/lava/staking/lava@valoper18kuml80whhgw3g0dp2qthtlcsazvekfd9kzttd",
        explorerUrl: "https://explorer.alfadzc.xyz/lava/staking"
    },
    {
        name: "Shido",
        logo: "/chains/shido.png",
        delegateUrl: "https://explorer.alfadzc.xyz/shido/staking/shidovaloper1rqt23hexgl3erf2pcnelrmvcnana2kyz70zv2h",
        explorerUrl: "https://explorer.alfadzc.xyz/shido/staking"
    },
    {
        name: "Paxi",
        logo: "/chains/paxi.png",
        delegateUrl: "https://explorer.alfadzc.xyz/paxi/staking/paxivaloper1d6qj9qy5vzv9kj5x435w5klaxm3wc8l20628mj",
        explorerUrl: "https://explorer.alfadzc.xyz/paxi/staking"
    },
    {
        name: "Bitbadges Chain",
        logo: "/chains/bitbadges.png",
        delegateUrl: "https://explorer.alfadzc.xyz/bitbadges/staking/bbvaloper18hgreu0c6n3essuc8arct7fx0w0ym6x52fwt2v",
        explorerUrl: "https://explorer.alfadzc.xyz/bitbadges/staking"
    },
    {
        name: "CNHO Stable",
        logo: "/chains/cnho.png",
        delegateUrl: "https://explorer.alfadzc.xyz/cnho/staking/cnhovaloper1aw3nz0zlurr040n8kct80rydlc6rzzfj7wn0c0",
        explorerUrl: "https://explorer.alfadzc.xyz/cnho/staking"
    },
    {
        name: "Lumen",
        logo: "/chains/lumen.png",
        delegateUrl: "https://explorer.alfadzc.xyz/lumen/staking/lmnvaloper1vtesu7w3rvunf7f332ugy67l08ury2l7ft9pah",
        explorerUrl: "https://explorer.alfadzc.xyz/lumen/staking"
    },
    {
        name: "Epix",
        logo: "/chains/epix.png",
        delegateUrl: "",
        explorerUrl: "https://explorer.alfadzc.xyz/epix/staking"
    }
];
const TESTNET = [
    {
        name: "Empeiria",
        logo: "/chains/empeiria.png",
        delegateUrl: "https://explorer.alfadzc.xyz/empeiria/staking/empevaloper1alf9sl64dgap3ps37qqcl40w8kjranh897t7y6",
        explorerUrl: "https://explorer.alfadzc.xyz/empeiria/staking"
    },
    {
        name: "Safrochain",
        logo: "/chains/safrochain.png",
        delegateUrl: "https://explorer.alfadzc.xyz/safrochain/staking/addr_safrovaloper1qdpy8ju6lxy62r5jcv9dcjpj2pjrhzgzrxflqs",
        explorerUrl: "https://explorer.alfadzc.xyz/safrochain/staking"
    },
    {
        name: "Pushchain",
        logo: "/chains/pushchain.png",
        delegateUrl: "https://explorer.alfadzc.xyz/pushchain/staking/pushvaloper1nnyasz54zm6gc2w07yxh9rl63tj76yfg5k89gx",
        explorerUrl: "https://explorer.alfadzc.xyz/pushchain/staking"
    },
    {
        name: "Republic AI",
        logo: "/chains/republic.png",
        delegateUrl: "https://explorer.alfadzc.xyz/republic/staking/raivaloper1qhzv04nc5ghe727len9hy20t49372fjpma74rr",
        explorerUrl: "https://explorer.alfadzc.xyz/republic/staking"
    }
];
}),
"[project]/alfadzc.xyz/components/ChainLogo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChainLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
function ChainLogo({ name, logo }) {
    return(// Container utama diperbesar ke w-24 (96px)
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-24 h-24 flex items-center justify-center filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]",
        children: logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: logo,
            alt: name,
            // Width & Height harus sinkron dengan ukuran container agar tidak pecah/kekecilan
            width: 96,
            height: 96,
            className: "rounded-full object-contain p-1.5 bg-white/5 border border-white/10"
        }, void 0, false, {
            fileName: "[project]/alfadzc.xyz/components/ChainLogo.tsx",
            lineNumber: 14,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-24 h-24 flex items-center justify-center rounded-full bg-slate-800 text-white text-2xl font-bold border border-slate-700",
            children: name[0]
        }, void 0, false, {
            fileName: "[project]/alfadzc.xyz/components/ChainLogo.tsx",
            lineNumber: 23,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/alfadzc.xyz/components/ChainLogo.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this));
}
}),
"[project]/alfadzc.xyz/components/NetworkSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NetworkSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$data$2f$ecosystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/data/ecosystem.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$components$2f$ChainLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/components/ChainLogo.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function NetworkSection() {
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("mainnet");
    const ALL_NETWORKS = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$data$2f$ecosystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAINNET"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$data$2f$ecosystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TESTNET"]
    ];
    const data = tab === "all" ? ALL_NETWORKS : tab === "mainnet" ? __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$data$2f$ecosystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAINNET"] : __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$data$2f$ecosystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TESTNET"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "ecosystem",
        className: "relative z-10 py-16 px-6 max-w-7xl mx-auto flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base md:text-3xl font-extrabold tracking-tight",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl font-bold mb-6 text-[#ff7b00]",
                            children: "𝐄𝐱𝐩𝐥𝐨𝐫𝐞 𝐎𝐮𝐫 𝐍𝐞𝐭𝐰𝐨𝐫𝐤"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 max-w-2xl mx-auto text-slate-900 dark:text-gray-100",
                        children: "A comprehensive list of our validation services across all networks."
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex p-1.5 rounded-2xl border w-full mb-12 bg-slate-100/10 border-sky-400/50 shadow-[0_0_20px_rgba(255,255,255,0.2)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 w-full gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                            active: tab === "mainnet",
                            onClick: ()=>setTab("mainnet"),
                            label: "𝐌𝐚𝐢𝐧𝐧𝐞𝐭"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                            active: tab === "testnet",
                            onClick: ()=>setTab("testnet"),
                            label: "𝐓𝐞𝐬𝐭𝐧𝐞𝐭"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                            active: tab === "all",
                            onClick: ()=>setTab("all"),
                            label: "𝐀𝐥𝐥 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                            lineNumber: 30,
                            columnNumber: 10
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex items-center justify-between mb-10 border-b pb-8 border-slate-200 dark:border-slate-800/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-500 border-2 border-sky-400/80 shadow-[0_0_15px_rgba(255,255,255,0.4),0_0_5px_rgba(255,255,255,0.2)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "white",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 40,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "2",
                                        y1: "12",
                                        x2: "22",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 40,
                                        columnNumber: 44
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 40,
                                        columnNumber: 82
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold text-white tracking-wide",
                                children: tab === "mainnet" ? "𝐌𝐚𝐢𝐧𝐧𝐞𝐭 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬" : tab === "testnet" ? "𝐓𝐞𝐬𝐭𝐧𝐞𝐭 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬" : "𝐀𝐥𝐥 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬"
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-2.5 rounded-full transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-500 border-2 border-sky-400/80 shadow-[0_0_15px_rgba(255,255,255,0.4),0_0_5px_rgba(255,255,255,0.2)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold text-white tracking-wide",
                            children: [
                                data.length,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-medium",
                                    children: "𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬"
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full",
                children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col items-center p-6 transition-all duration-500 group rounded-3xl border-2 bg-white border-slate-200 shadow-sm dark:bg-[#0b1120] dark:border-sky-400/60 dark:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex h-2 w-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                lineNumber: 69,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                lineNumber: 70,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 68,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-emerald-400",
                                        children: "Online"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 72,
                                        columnNumber: 12
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 transform group-hover:scale-110 transition-all duration-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$components$2f$ChainLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    name: item.name,
                                    logo: item.logo
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-sky-400 transition-colors",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$data$2f$ecosystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAINNET"].some((m)=>m.name === item.name) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-[0.15em] font-black px-4 py-1 rounded-full border border-emerald-400/70 text-emerald-400 bg-emerald-400/10",
                                        children: "Mainnet"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-[0.15em] font-black px-4 py-1 rounded-full border border-orange-400/70 text-orange-400 bg-orange-400/10",
                                        children: "Testnet"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 w-full mt-auto",
                                children: [
                                    item.delegateUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.delegateUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white text-[11px] py-2 rounded-full font-bold shadow-lg active:scale-95 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "12",
                                                height: "12",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4 6v12c0 1.1.9 2 2 2h14v-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this),
                                            "Delegate"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600/40 to-blue-500/40 text-white/40 text-[11px] py-2 rounded-full font-bold cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "12",
                                                height: "12",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4 6v12c0 1.1.9 2 2 2h14v-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this),
                                            "Delegate"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    item.explorerUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.explorerUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex-1 flex items-center justify-center gap-1 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 text-[11px] py-2 rounded-full font-bold transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "12",
                                                height: "12",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "15 3 21 3 21 9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "10",
                                                        y1: "14",
                                                        x2: "21",
                                                        y2: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            "Explorer"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 flex items-center justify-center gap-1 border border-slate-200 dark:border-slate-800 text-slate-400/40 dark:text-slate-600 bg-slate-50 dark:bg-slate-900 text-[11px] py-2 rounded-full font-bold cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "12",
                                                height: "12",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "15 3 21 3 21 9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "10",
                                                        y1: "14",
                                                        x2: "21",
                                                        y2: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this),
                                            "Explorer"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, `${item.name}-${index}`, true, {
                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
/* KOMPONEN TAB BUTTON */ function TabButton({ active, onClick, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer w-full
        ${active ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white border-2 border-sky-400 scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.5)] rounded-full" : "text-slate-400 hover:text-sky-400 rounded-full"}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
}),
"[project]/alfadzc.xyz/components/ToolsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const METRICS_CONFIG = [
    {
        key: "activeValidators",
        label: "Active Validators",
        icon: "🔐",
        color: "from-blue-500 to-cyan-500",
        description: "Across 10+ networks"
    },
    {
        key: "networkUptime",
        label: "Network Uptime",
        icon: "⬆️",
        color: "from-green-500 to-emerald-500",
        description: "7-day average",
        suffix: "%"
    },
    {
        key: "totalStakedUSD",
        label: "Total Staked",
        icon: "💰",
        color: "from-purple-500 to-pink-500",
        description: "Secured assets",
        prefix: "$"
    },
    {
        key: "networksSupporteed",
        label: "Networks Supported",
        icon: "🌐",
        color: "from-orange-500 to-red-500",
        description: "Mainnet & Testnet"
    }
];
function ToolsSection() {
    const [metrics, setMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchMetrics = async ()=>{
            try {
                const res = await fetch("/api/metrics/multi-chain");
                const data = await res.json();
                setMetrics(data);
            } catch (error) {
                console.error("Failed to fetch metrics:", error);
                setMetrics({
                    activeValidators: 11,
                    networkUptime: 99.8,
                    totalStaked: "104296061319263152.00",
                    totalStakedUSD: 70884726,
                    networksSupporteed: "10+"
                });
            } finally{
                setLoading(false);
            }
        };
        fetchMetrics();
        // Refresh setiap 60 detik
        const interval = setInterval(fetchMetrics, 60000);
        return ()=>clearInterval(interval);
    }, []);
    const formatNumber = (value, prefix = "", suffix = "")=>{
        if (typeof value === "string") {
            const num = parseFloat(value);
            if (isNaN(num)) return value;
            if (num > 1000000) return `${prefix}${(num / 1000000).toFixed(1)}M${suffix}`;
            if (num > 1000) return `${prefix}${(num / 1000).toFixed(1)}K${suffix}`;
            return `${prefix}${num.toFixed(0)}${suffix}`;
        }
        if (typeof value === "number") {
            if (value > 1000000) return `${prefix}${(value / 1000000).toFixed(1)}M${suffix}`;
            if (value > 1000) return `${prefix}${(value / 1000).toFixed(1)}K${suffix}`;
            return `${prefix}${value.toFixed(0)}${suffix}`;
        }
        return value;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "tools",
        className: "relative z-10 py-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto space-y-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl font-bold",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-orange-500",
                                children: "Our Tools & Validators"
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 max-w-2xl mx-auto text-lg",
                            children: "Running validators across 10+ blockchain networks with enterprise-grade infrastructure."
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: METRICS_CONFIG.map((metric, idx)=>{
                        const value = metrics ? metrics[metric.key] : "—";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative overflow-hidden rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${metric.color} transition-opacity duration-300`
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl",
                                                    children: metric.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold text-emerald-400 bg-emerald-900/40 px-2.5 py-1 rounded-full",
                                                    children: "Live"
                                                }, void 0, false, {
                                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-3xl md:text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`,
                                                children: loading ? "..." : formatNumber(value, metric.prefix, metric.suffix)
                                            }, void 0, false, {
                                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                lineNumber: 136,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 border-t border-slate-700/30 pt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-gray-300",
                                                    children: metric.label
                                                }, void 0, false, {
                                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: metric.description
                                                }, void 0, false, {
                                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${metric.color} rounded-lg transition-opacity duration-300 pointer-events-none`,
                                    style: {
                                        filter: "blur(20px)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                metrics?.chains && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-orange-500",
                            children: "Supported Networks"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: metrics.chains.map((chain, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-4 hover:border-slate-600 transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-gray-300",
                                                        children: chain.chain
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs bg-orange-900/40 text-orange-300 px-2 py-1 rounded",
                                                        children: [
                                                            chain.validators,
                                                            " validator"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                lineNumber: 171,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-400",
                                                children: [
                                                    "$",
                                                    chain.totalBondedUSD?.toLocaleString('en-US', {
                                                        maximumFractionDigits: 0
                                                    }) || 'N/A'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 170,
                                        columnNumber: 19
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/tools/validator-monitor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative overflow-hidden rounded-lg border border-pink-500/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 hover:border-pink-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-pink-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-orange-500 mb-3",
                                        children: "Validator Monitor"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 mb-4",
                                        children: "Track node uptime, performance, and reliability in real time."
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-pink-400 font-semibold flex items-center gap-2",
                                        children: "Explore →"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/tools/analytics",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative overflow-hidden rounded-lg border border-blue-500/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 hover:border-blue-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-blue-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-orange-500 mb-3",
                                        children: "Analytics Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 mb-4",
                                        children: "Visualize blockchain metrics with modern and intuitive charts."
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-blue-400 font-semibold flex items-center gap-2",
                                        children: "Explore →"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
}),
"[project]/alfadzc.xyz/components/LogoTicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LogoTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const TICKER_LOGOS = [
    {
        name: "Cosmos",
        logo: "/chains/cosmos.png"
    },
    {
        name: "Osmosis",
        logo: "/chains/osmosis.png"
    },
    {
        name: "Lava",
        logo: "/chains/lava.png"
    },
    {
        name: "Shido",
        logo: "/chains/shido.png"
    },
    {
        name: "Paxi",
        logo: "/chains/paxi.png"
    },
    {
        name: "Bitbadges",
        logo: "/chains/bitbadges.png"
    },
    {
        name: "CNHO",
        logo: "/chains/cnho.png"
    },
    {
        name: "Lumen",
        logo: "/chains/lumen.png"
    },
    {
        name: "Epix",
        logo: "/chains/epix.png"
    },
    {
        name: "Empeiria",
        logo: "/chains/empeiria.png"
    },
    {
        name: "Safrochain",
        logo: "/chains/safrochain.png"
    },
    {
        name: "Pushchain",
        logo: "/chains/pushchain.png"
    },
    {
        name: "Republic AI",
        logo: "/chains/republic.png"
    }
];
const ROW1 = [
    ...TICKER_LOGOS,
    ...TICKER_LOGOS
];
const ROW2 = [
    ...TICKER_LOGOS.slice().reverse(),
    ...TICKER_LOGOS.slice().reverse()
];
function LogoTicker() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center text-center pt-10 pb-8 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl md:text-3xl font-bold leading-tight",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "gradient-text",
                            children: "𝐃𝐞𝐜𝐞𝐧𝐭𝐫𝐚𝐥𝐢𝐳𝐞𝐝 𝐍𝐞𝐭𝐰𝐨𝐫𝐤"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base font-medium text-slate-900 dark:text-gray-100",
                        children: "𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐧𝐠 𝐛𝐥𝐨𝐜𝐤𝐜𝐡𝐚𝐢𝐧 𝐢𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞 𝐰𝐨𝐫𝐥𝐝𝐰𝐢𝐝𝐞"
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-row {
          display: flex;
          width: max-content;
        }
        .marquee-right {
          animation: scroll-right 40s linear infinite;
        }
        .marquee-left {
          animation: scroll-left 40s linear infinite;
        }
        .marquee-row:hover {
          animation-play-state: paused;
        }
      `
            }, void 0, false, {
                fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-4xl mx-auto overflow-hidden py-8",
                style: {
                    maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "marquee-row marquee-right",
                            children: ROW1.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-4 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-full overflow-hidden border border-sky-400/40 shadow-[0_0_12px_rgba(56,189,248,0.4)] bg-gray-900/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.logo,
                                            alt: item.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                }, `r1-${i}`, false, {
                                    fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "marquee-row marquee-left",
                            children: ROW2.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-4 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-full overflow-hidden border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.4)] bg-gray-900/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.logo,
                                            alt: item.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                }, `r2-${i}`, false, {
                                    fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=alfadzc_xyz_ca3714af._.js.map