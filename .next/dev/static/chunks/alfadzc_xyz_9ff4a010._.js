(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/alfadzc.xyz/data/ecosystem.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    },
    {
        name: "Monolythium",
        logo: "/chains/monolythium.png",
        delegateUrl: "https://explorer.alfadzc.xyz/mono/staking/monovaloper10ers0hza3hg8nwy37rtcn9svje05md53uf7hdl",
        explorerUrl: "https://explorer.alfadzc.xyz/mono/staking"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alfadzc.xyz/components/ChainLogo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChainLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function ChainLogo({ name, logo }) {
    return(// Container utama diperbesar ke w-24 (96px)
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-24 h-24 flex items-center justify-center filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]",
        children: logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = ChainLogo;
var _c;
__turbopack_context__.k.register(_c, "ChainLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alfadzc.xyz/components/NetworkSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NetworkSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$data$2f$ecosystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/data/ecosystem.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$components$2f$ChainLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/components/ChainLogo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NetworkSection() {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("mainnet");
    const ALL_NETWORKS = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$data$2f$ecosystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAINNET"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$data$2f$ecosystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TESTNET"]
    ];
    const data = tab === "all" ? ALL_NETWORKS : tab === "mainnet" ? __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$data$2f$ecosystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAINNET"] : __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$data$2f$ecosystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TESTNET"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "ecosystem",
        className: "relative z-10 py-16 px-6 max-w-7xl mx-auto flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto text-center mb-12 flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#38bdf8",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "w-7 h-7 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "3",
                                        y: "4",
                                        width: "18",
                                        height: "6",
                                        rx: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 32,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "3",
                                        y: "14",
                                        width: "18",
                                        height: "6",
                                        rx: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 33,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "7",
                                        cy: "7",
                                        r: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 34,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "7",
                                        cy: "17",
                                        r: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "11",
                                        y1: "7",
                                        x2: "17",
                                        y2: "7"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 36,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "11",
                                        y1: "17",
                                        x2: "17",
                                        y2: "17"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 37,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 22,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl md:text-3xl font-extrabold tracking-tight text-[#ff7b00]",
                                children: "𝐎𝐮𝐫 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬"
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 41,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                        lineNumber: 19,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 max-w-2xl text-sm md:text-base leading-relaxed text-slate-900 dark:text-gray-100",
                        children: [
                            "𝐖𝐞 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 𝐦𝐮𝐥𝐭𝐢𝐩𝐥𝐞 𝐦𝐚𝐢𝐧𝐧𝐞𝐭 𝐚𝐧𝐝 𝐭𝐞𝐬𝐭𝐧𝐞𝐭 𝐞𝐜𝐨𝐬𝐲𝐬𝐭𝐞𝐦𝐬,",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 49,
                                columnNumber: 102
                            }, this),
                            "𝐩𝐫𝐨𝐯𝐢𝐝𝐢𝐧𝐠 𝐫𝐞𝐥𝐢𝐚𝐛𝐥𝐞 𝐯𝐚𝐥𝐢𝐝𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐢𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞 𝐬𝐞𝐫𝐯𝐢𝐜𝐞𝐬",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 50,
                                columnNumber: 116
                            }, this),
                            "𝐚𝐜𝐫𝐨𝐬𝐬 𝐂𝐨𝐬𝐦𝐨𝐬-𝐛𝐚𝐬𝐞𝐝 𝐧𝐞𝐭𝐰𝐨𝐫𝐤𝐬"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                        lineNumber: 48,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                lineNumber: 16,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex p-1.5 rounded-2xl border w-full mb-12 bg-slate-100/10 border-sky-400/50 shadow-[0_0_20px_rgba(255,255,255,0.2)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 w-full gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                            active: tab === "mainnet",
                            onClick: ()=>setTab("mainnet"),
                            label: "𝐌𝐚𝐢𝐧𝐧𝐞𝐭"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                            active: tab === "testnet",
                            onClick: ()=>setTab("testnet"),
                            label: "𝐓𝐞𝐬𝐭𝐧𝐞𝐭"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                            active: tab === "all",
                            onClick: ()=>setTab("all"),
                            label: "𝐀𝐥𝐥 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                            lineNumber: 60,
                            columnNumber: 10
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex items-center justify-between mb-10 border-b pb-8 border-slate-200 dark:border-slate-800/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-500 border-2 border-sky-400/80 shadow-[0_0_15px_rgba(255,255,255,0.4),0_0_5px_rgba(255,255,255,0.2)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 70,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "2",
                                        y1: "12",
                                        x2: "22",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 70,
                                        columnNumber: 44
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 70,
                                        columnNumber: 82
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-normal text-white tracking-wide",
                                children: tab === "mainnet" ? "𝐌𝐚𝐢𝐧𝐧𝐞𝐭 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬" : tab === "testnet" ? "𝐓𝐞𝐬𝐭𝐧𝐞𝐭 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬" : "𝐀𝐥𝐥 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬"
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-2.5 rounded-full transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-500 border-2 border-sky-400/80 shadow-[0_0_15px_rgba(255,255,255,0.4),0_0_5px_rgba(255,255,255,0.2)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold text-white tracking-wide",
                            children: [
                                data.length,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-medium",
                                    children: "𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬"
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full",
                children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col items-center p-6 transition-all duration-500 group rounded-3xl border bg-white border-slate-200 shadow-sm dark:bg-slate-800 dark:border-sky-400/60 dark:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex h-2 w-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                lineNumber: 99,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                lineNumber: 100,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-emerald-400",
                                        children: "Online"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 102,
                                        columnNumber: 12
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 transform group-hover:scale-110 transition-all duration-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$components$2f$ChainLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    name: item.name,
                                    logo: item.logo
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-sky-400 transition-colors",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$data$2f$ecosystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAINNET"].some((m)=>m.name === item.name) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-[0.15em] font-black px-4 py-1 rounded-full border border-emerald-400/70 text-emerald-400 bg-emerald-400/10",
                                        children: "Mainnet"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-[0.15em] font-black px-4 py-1 rounded-full border border-orange-400/70 text-orange-400 bg-orange-400/10",
                                        children: "Testnet"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 w-full mt-auto",
                                children: [
                                    item.delegateUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.delegateUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white text-[11px] py-2 rounded-full font-bold shadow-lg active:scale-95 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4 6v12c0 1.1.9 2 2 2h14v-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            "Delegate"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600/40 to-blue-500/40 text-white/40 text-[11px] py-2 rounded-full font-bold cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4 6v12c0 1.1.9 2 2 2h14v-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            "Delegate"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this),
                                    item.explorerUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.explorerUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex-1 flex items-center justify-center gap-1 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 text-[11px] py-2 rounded-full font-bold transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "15 3 21 3 21 9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "10",
                                                        y1: "14",
                                                        x2: "21",
                                                        y2: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this),
                                            "Explorer"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 flex items-center justify-center gap-1 border border-slate-200 dark:border-slate-800 text-slate-400/40 dark:text-slate-600 bg-slate-50 dark:bg-slate-900 text-[11px] py-2 rounded-full font-bold cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "15 3 21 3 21 9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "10",
                                                        y1: "14",
                                                        x2: "21",
                                                        y2: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this),
                                            "Explorer"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, `${item.name}-${index}`, true, {
                        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(NetworkSection, "eO9bJtJTkpmtUdRiEWM4QG78vs0=");
_c = NetworkSection;
/* KOMPONEN TAB BUTTON */ function TabButton({ active, onClick, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer w-full
        ${active ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white border-2 border-sky-400 scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.5)] rounded-full" : "text-slate-400 hover:text-sky-400 rounded-full"}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/alfadzc.xyz/components/NetworkSection.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_c1 = TabButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "NetworkSection");
__turbopack_context__.k.register(_c1, "TabButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alfadzc.xyz/components/ToolsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const CHAIN_LOGOS = {
    Lava: "/chains/lava.png",
    Shido: "/chains/shido.png",
    Paxi: "/chains/paxi.png",
    "Bitbadges Chain": "/chains/bitbadges.png",
    "CNHO Stables": "/chains/cnho.png",
    Lumen: "/chains/lumen.png",
    Epix: "/chains/epix.png",
    Empeiria: "/chains/empeiria.png",
    Safrochain: "/chains/safrochain.png",
    Pushchain: "/chains/pushchain.png",
    "Republic AI": "/chains/republic.png",
    Monolythium: "/chains/monolythium.png"
};
const NETWORK_TYPE_MAP = {
    Lava: "mainnet",
    Shido: "mainnet",
    Paxi: "mainnet",
    "Bitbadges Chain": "mainnet",
    "CNHO Stables": "mainnet",
    Lumen: "mainnet",
    Epix: "mainnet",
    Empeiria: "testnet",
    Safrochain: "testnet",
    Pushchain: "testnet",
    "Republic AI": "testnet",
    Monolythium: "testnet"
};
const TOKEN_CODE_MAP = {
    Lava: "Lava",
    Shido: "SHIDO",
    Paxi: "PAXI",
    "Bitbadges Chain": "BADGE",
    "CNHO Stables": "CNHO",
    Lumen: "LMN",
    Epix: "EPIX",
    Empeiria: "EMPE",
    Safrochain: "SAF",
    Pushchain: "PC",
    "Republic AI": "RAI",
    Monolythium: "LYTH"
};
const CHAIN_NAME_ALIAS = {
    lava: "Lava",
    shido: "Shido",
    paxi: "Paxi",
    bitbadges: "Bitbadges Chain",
    "bitbadges chain": "Bitbadges Chain",
    cnho: "CNHO Stables",
    "cnho stables": "CNHO Stables",
    cnhostables: "CNHO Stables",
    lumen: "Lumen",
    epix: "Epix",
    empeiria: "Empeiria",
    safrochain: "Safrochain",
    pushchain: "Pushchain",
    republic: "Republic AI",
    "republic ai": "Republic AI",
    republicai: "Republic AI",
    monolythium: "Monolythium"
};
function normalizeChainName(name) {
    const raw = (name || "").trim();
    const key = raw.toLowerCase();
    return CHAIN_NAME_ALIAS[key] ?? raw;
}
function getTokenCode(chainName) {
    return TOKEN_CODE_MAP[chainName] ?? chainName.slice(0, 4).toUpperCase();
}
function formatTokenDisplay(totalBonded) {
    const num = Number.parseFloat(totalBonded);
    if (Number.isNaN(num)) return "—";
    if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(2)}B`;
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(2)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(2)}K`;
    return num.toLocaleString("en-US", {
        maximumFractionDigits: 2
    });
}
function formatUsd(value) {
    if (!Number.isFinite(value) || value <= 0) return "—";
    if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
    return `$${value.toLocaleString("en-US", {
        maximumFractionDigits: 0
    })}`;
}
function aprFromChain(chain) {
    if (!chain.totalBondedUSD || !chain.totalBonded) return "0.00% APR";
    const bonded = Number.parseFloat(chain.totalBonded);
    if (!Number.isFinite(bonded) || bonded <= 0) return "0.00% APR";
    const raw = chain.totalBondedUSD / bonded * 100;
    const apr = Math.max(0, Math.min(raw, 99.99));
    return `${apr.toFixed(2)}% APR`;
}
function ToolsSection() {
    _s();
    const [metrics, setMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleToolClick = (url)=>{
        window.open(url, "_blank");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToolsSection.useEffect": ()=>{
            let mounted = true;
            const fetchMetrics = {
                "ToolsSection.useEffect.fetchMetrics": async ()=>{
                    try {
                        const res = await fetch(`/api/metrics/multi-chain?t=${Date.now()}`, {
                            method: "GET",
                            cache: "no-store",
                            headers: {
                                "Cache-Control": "no-cache, no-store, must-revalidate",
                                Pragma: "no-cache",
                                Expires: "0"
                            }
                        });
                        if (!res.ok) throw new Error(`HTTP ${res.status}`);
                        const data = await res.json();
                        if (mounted) setMetrics(data);
                    } catch  {
                        if (mounted) {
                            setMetrics({
                                activeValidators: 491,
                                networkUptime: 99.9,
                                totalStaked: "205672.00",
                                totalStakedUSD: 205672.0,
                                networksSupported: "12",
                                isRealtime: false,
                                chains: [
                                    {
                                        chain: "lava",
                                        validators: 94,
                                        totalBonded: "3300947.91",
                                        totalBondedUSD: 117214,
                                        price: 0
                                    },
                                    {
                                        chain: "shido",
                                        validators: 42,
                                        totalBonded: "108081256",
                                        totalBondedUSD: 22092,
                                        price: 0
                                    },
                                    {
                                        chain: "paxi",
                                        validators: 37,
                                        totalBonded: "442634.49",
                                        totalBondedUSD: 4528,
                                        price: 0
                                    },
                                    {
                                        chain: "bitbadges",
                                        validators: 45,
                                        totalBonded: "202974.11",
                                        totalBondedUSD: 0,
                                        price: 0
                                    },
                                    {
                                        chain: "cnho",
                                        validators: 24,
                                        totalBonded: "213120",
                                        totalBondedUSD: 0,
                                        price: 0
                                    },
                                    {
                                        chain: "lumen",
                                        validators: 53,
                                        totalBonded: "12574.07",
                                        totalBondedUSD: 0,
                                        price: 0
                                    },
                                    {
                                        chain: "epix",
                                        validators: 23,
                                        totalBonded: "1823.2",
                                        totalBondedUSD: 0,
                                        price: 0
                                    },
                                    {
                                        chain: "empeiria",
                                        validators: 103,
                                        totalBonded: "1340.2",
                                        totalBondedUSD: 0,
                                        price: 0
                                    },
                                    {
                                        chain: "safrochain",
                                        validators: 12,
                                        totalBonded: "20199",
                                        totalBondedUSD: 0,
                                        price: 0
                                    },
                                    {
                                        chain: "pushchain",
                                        validators: 18,
                                        totalBonded: "78765",
                                        totalBondedUSD: 0,
                                        price: 0
                                    },
                                    {
                                        chain: "republic",
                                        validators: 9,
                                        totalBonded: "1120",
                                        totalBondedUSD: 0,
                                        price: 0
                                    },
                                    {
                                        chain: "Monolythium",
                                        validators: 29,
                                        totalBonded: "105.000",
                                        totalBondedUSD: 0,
                                        price: 0
                                    }
                                ]
                            });
                        }
                    } finally{
                        if (mounted) setLoading(false);
                    }
                }
            }["ToolsSection.useEffect.fetchMetrics"];
            fetchMetrics();
            const id = window.setInterval(fetchMetrics, 15000);
            return ({
                "ToolsSection.useEffect": ()=>{
                    mounted = false;
                    window.clearInterval(id);
                }
            })["ToolsSection.useEffect"];
        }
    }["ToolsSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToolsSection.useEffect": ()=>{
            const onSlash = {
                "ToolsSection.useEffect.onSlash": (e)=>{
                    if (e.key === "/") {
                        const el = document.getElementById("network-search");
                        if (el) {
                            e.preventDefault();
                            el.focus();
                        }
                    }
                }
            }["ToolsSection.useEffect.onSlash"];
            window.addEventListener("keydown", onSlash);
            return ({
                "ToolsSection.useEffect": ()=>window.removeEventListener("keydown", onSlash)
            })["ToolsSection.useEffect"];
        }
    }["ToolsSection.useEffect"], []);
    const normalizedNetworksSupported = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ToolsSection.useMemo[normalizedNetworksSupported]": ()=>metrics?.networksSupported ?? metrics?.networksSupporteed ?? "12"
    }["ToolsSection.useMemo[normalizedNetworksSupported]"], [
        metrics
    ]);
    const normalizedChains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ToolsSection.useMemo[normalizedChains]": ()=>(metrics?.chains ?? []).map({
                "ToolsSection.useMemo[normalizedChains]": (c)=>({
                        ...c,
                        chain: normalizeChainName(c.chain)
                    })
            }["ToolsSection.useMemo[normalizedChains]"])
    }["ToolsSection.useMemo[normalizedChains]"], [
        metrics?.chains
    ]);
    const filteredChains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ToolsSection.useMemo[filteredChains]": ()=>{
            const q = query.trim().toLowerCase();
            return normalizedChains.filter({
                "ToolsSection.useMemo[filteredChains]": (c)=>!q || c.chain.toLowerCase().includes(q) || getTokenCode(c.chain).toLowerCase().includes(q)
            }["ToolsSection.useMemo[filteredChains]"]);
        }
    }["ToolsSection.useMemo[filteredChains]"], [
        normalizedChains,
        query
    ]);
    const mainnetChains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ToolsSection.useMemo[mainnetChains]": ()=>filteredChains.filter({
                "ToolsSection.useMemo[mainnetChains]": (c)=>NETWORK_TYPE_MAP[c.chain] === "mainnet"
            }["ToolsSection.useMemo[mainnetChains]"])
    }["ToolsSection.useMemo[mainnetChains]"], [
        filteredChains
    ]);
    const testnetChains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ToolsSection.useMemo[testnetChains]": ()=>filteredChains.filter({
                "ToolsSection.useMemo[testnetChains]": (c)=>NETWORK_TYPE_MAP[c.chain] === "testnet"
            }["ToolsSection.useMemo[testnetChains]"])
    }["ToolsSection.useMemo[testnetChains]"], [
        filteredChains
    ]);
    const renderCard = (chain, keyPrefix)=>{
        const tokenCode = getTokenCode(chain.chain);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "max-w-[360px] rounded-2xl border border-slate-200 dark:border-slate-800 dark:bg-[#171236] p-6 min-h-[180px] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 dark:hover:bg- [#1a1545] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-11 w-11 overflow-hidden rounded-xl border border-slate-700 bg-slate-800",
                            children: CHAIN_LOGOS[chain.chain] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: CHAIN_LOGOS[chain.chain],
                                alt: chain.chain,
                                className: "h-full w-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full w-full items-center justify-center text-sm font-bold text-slate-300",
                                children: chain.chain?.[0] ?? "?"
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate text-lg font-bold text-slate-900 dark:text-white",
                                    children: chain.chain
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block rounded-md border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400",
                                    children: aprFromChain(chain)
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-[1fr_auto] gap-y-1 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 dark:text-slate-400",
                            children: "Staked"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-slate-900 dark:text-white",
                            children: [
                                formatTokenDisplay(chain.totalBonded),
                                " ",
                                tokenCode
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 dark:text-slate-400",
                            children: "TVL"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-slate-900 dark:text-white",
                            children: formatUsd(chain.totalBondedUSD)
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 dark:text-slate-400",
                            children: "Validators"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-orange-300",
                            children: chain.validators
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            ]
        }, `${keyPrefix}-${chain.chain}`, true, {
            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
            lineNumber: 231,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "tools",
        className: "relative z-10 px-6 py-16 md:py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-4xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                className: "h-12 w-12 text-[#ff7b00] flex-shrink-0",
                                "aria-hidden": "true",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "1.5",
                                        y: "1.5",
                                        width: "21",
                                        height: "21",
                                        rx: "5",
                                        fill: "rgba(0,0,0,0.06)",
                                        stroke: "none"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 13h4l2-6 3 12 3-8 2 4h4",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base md:text-3xl font-extrabold tracking-tight",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl md:text-3xl font-bold text-[#ff7b00]",
                                    children: "𝐌𝐨𝐧𝐢𝐭𝐨𝐫𝐢𝐧𝐠"
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 max-w-2xl mx-auto text-slate-900 dark:text-gray-100",
                        children: "𝐑𝐞𝐚𝐥-𝐭𝐢𝐦𝐞 𝐦𝐨𝐧𝐢𝐭𝐨𝐫𝐢𝐧𝐠 𝐯𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 𝐚𝐜𝐫𝐨𝐬𝐬 𝐦𝐮𝐥𝐭𝐢𝐩𝐥𝐞 𝐧𝐞𝐭𝐰𝐨𝐫𝐤𝐬."
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 mb-12 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-400",
                            children: "⌕"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "network-search",
                            value: query,
                            onChange: (e)=>setQuery(e.target.value),
                            placeholder: "Search",
                            className: "w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#100c2a] py-2.5 pl-11 pr-12 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-n one transition focus:border-blue-400 dark:focus:border-slate-500"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs text-slate-500 dark:text-slate-300",
                            children: '/'
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10 grid grid-cols-2 md:grid-cols-5 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 ho ver:shadow-[0_0_20px_rgba(56,189,248,0.3)] dark:hover:bg-slate-800 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-5 h-5 text-slate-500 dark:text-slate-300",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 1.5,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "2",
                                                    y1: "12",
                                                    x2: "22",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                                                }, void 0, false, {
                                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 87
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5 text-xs font-semibold text-emerald-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative flex h-2 w-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-5 00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 167
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                lineNumber: 310,
                                                columnNumber: 15
                                            }, this),
                                            "Live"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-orange-500",
                                children: [
                                    normalizedNetworksSupported,
                                    "+"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-slate-200 dark:border-slate-700/30 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-800 dark:text-white",
                                        children: "Networks Supported"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400",
                                        children: "Mainnet & Testnet Validator"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 ho ver:shadow-[0_0_20px_rgba(56,189,248,0.3)] dark:hover:bg-slate-800 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-5 h-5 text-slate-500 dark:text-slate-300",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 1.5,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                            }, void 0, false, {
                                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5 text-xs font-semibold text-emerald-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative flex h-2 w-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-5 00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 167
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this),
                                            "Live"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-emerald-400",
                                children: [
                                    metrics?.networkUptime?.toFixed(1) ?? "—",
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-slate-200 dark:border-slate-700/30 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-800 dark:text-white",
                                        children: "Network Uptime"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400",
                                        children: "7-day average"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 ho ver:shadow-[0_0_20px_rgba(56,189,248,0.3)] dark:hover:bg-slate-800 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-5 h-5 text-slate-500 dark:text-slate-300",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 1.5,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.7 51h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                            }, void 0, false, {
                                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5 text-xs font-semibold text-emerald-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative flex h-2 w-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-5 00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 167
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                lineNumber: 355,
                                                columnNumber: 15
                                            }, this),
                                            "Live"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-purple-400",
                                children: formatUsd(metrics?.totalStakedUSD ?? 0)
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-slate-200 dark:border-slate-700/30 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-800 dark:text-white",
                                        children: "Total Staked"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400",
                                        children: "Secured assets"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 ho ver:shadow-[0_0_20px_rgba(56,189,248,0.3)] dark:hover:bg-slate-800 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-5 h-5 text-slate-500 dark:text-slate-300",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 1.5,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "2",
                                                    y: "4",
                                                    width: "20",
                                                    height: "6",
                                                    rx: "1",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "2",
                                                    y: "14",
                                                    width: "20",
                                                    height: "6",
                                                    rx: "1",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M6 7h.01M6 17h.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                            lineNumber: 372,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 371,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5 text-xs font-semibold text-emerald-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative flex h-2 w-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-5 00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 167
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                                lineNumber: 379,
                                                columnNumber: 15
                                            }, this),
                                            "Live"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-blue-400",
                                children: normalizedChains.length
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-slate-200 dark:border-slate-700/30 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-800 dark:text-white",
                                        children: "Active Validators"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 386,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400",
                                        children: [
                                            "Across ",
                                            normalizedNetworksSupported,
                                            "+ networks"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 387,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 p-5 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] dark:hover:bg-slate-800 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-4xl font-bold text-slate-800 dark:text-slate-300",
                                children: "24/7"
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-emerald-600 dark:text-emerald-400",
                                children: "Support"
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
                children: Array.from({
                    length: 8
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-40 animate-pulse rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#171236]"
                    }, i, false, {
                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                        lineNumber: 402,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                lineNumber: 400,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700/30 pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 rounded-full inline-block",
                                        children: "𝐌𝐚𝐢𝐧𝐧𝐞𝐭"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full",
                                        children: [
                                            mainnetChains.length,
                                            " networks"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 410,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 408,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
                                children: mainnetChains.map((chain)=>renderCard(chain, "mainnet"))
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                        lineNumber: 407,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700/30 pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 rounded-full inline-block",
                                        children: "𝐓𝐞𝐬𝐭𝐧𝐞𝐭"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full",
                                        children: [
                                            testnetChains.length,
                                            " networks"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 419,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
                                children: testnetChains.map((chain)=>renderCard(chain, "testnet"))
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                        lineNumber: 416,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                lineNumber: 406,
                columnNumber: 9
            }, this),
            !loading && filteredChains.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#171236] p-10 text-center text-slate-500 dark:text-slate-400",
                children: "Network tidak ditemukan."
            }, void 0, false, {
                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                lineNumber: 429,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleToolClick("/tools/validator-monitor"),
                        className: "group relative overflow-hidden rounded-lg border border-pink-500/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 hover:border-pink-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-pink-500/20 text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-6 text-[#ff7b00] flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 1.5,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751 h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 441,
                                        columnNumber: 13
                                    }, this),
                                    "𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 𝐌𝐨𝐧𝐢𝐭𝐨𝐫"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 440,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-medium text-slate-900 dark:text-gray-200",
                                children: "Track validator uptime, health, and reliability in real time."
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 447,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-pink-400 font-semibold mt-4",
                                children: "Explore →"
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleToolClick("/tools/analytics"),
                        className: "group relative overflow-hidden rounded-lg border border-blue-500/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 hover:border-blue-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-blue-500/20 text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-6 text-[#ff7b00] flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 1.5,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M3 13h4l2-6 3 12 3-8 2 4h4"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                            lineNumber: 459,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this),
                                    "𝐍𝐞𝐭𝐰𝐨𝐫𝐤 𝐀𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-medium text-slate-900 dark:text-gray-200",
                                children: "Real-time metrics across validator networks."
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 463,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-blue-400 font-semibold mt-4",
                                children: "Explore →"
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                                lineNumber: 466,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/alfadzc.xyz/components/ToolsSection.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
_s(ToolsSection, "botfrfxq2qasmS17VCcr19ex+KU=");
_c = ToolsSection;
var _c;
__turbopack_context__.k.register(_c, "ToolsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alfadzc.xyz/components/LogoTicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LogoTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    },
    {
        name: "Monolythium",
        logo: "/chains/monolythium.png"
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center text-center pt-10 pb-8 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl md:text-3xl font-bold leading-tight",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "gradient-text",
                            children: "𝐃𝐞𝐜𝐞𝐧𝐭𝐫𝐚𝐥𝐢𝐳𝐞𝐝 𝐍𝐞𝐭𝐰𝐨𝐫𝐤"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-slate-900 dark:text-gray-100",
                        children: "𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐧𝐠 𝐛𝐥𝐨𝐜𝐤𝐜𝐡𝐚𝐢𝐧 𝐢𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞 𝐰𝐨𝐫𝐥𝐝𝐰𝐢𝐝𝐞"
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-4xl mx-auto overflow-hidden py-8",
                style: {
                    maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "marquee-row marquee-right",
                            children: ROW1.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-4 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-full overflow-hidden border border-sky-400/40 shadow-[0_0_12px_rgba(56,189,248,0.4)] bg-gray-900/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.logo,
                                            alt: item.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this)
                                }, `r1-${i}`, false, {
                                    fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "marquee-row marquee-left",
                            children: ROW2.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-4 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-full overflow-hidden border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.4)] bg-gray-900/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.logo,
                                            alt: item.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this)
                                }, `r2-${i}`, false, {
                                    fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/alfadzc.xyz/components/LogoTicker.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = LogoTicker;
var _c;
__turbopack_context__.k.register(_c, "LogoTicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=alfadzc_xyz_9ff4a010._.js.map