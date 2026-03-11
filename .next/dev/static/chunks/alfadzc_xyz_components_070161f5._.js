(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/alfadzc.xyz/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ThemeToggle() {
    _s();
    const [dark, setDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const saved = localStorage.getItem("theme") === "dark";
            setDark(saved);
            document.documentElement.classList.toggle("dark", saved);
        }
    }["ThemeToggle.useEffect"], []);
    const toggle = ()=>{
        const next = !dark;
        setDark(next);
        localStorage.setItem("theme", next ? "dark" : "light");
        document.documentElement.classList.toggle("dark", next);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggle,
        className: "relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-800 transition",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `absolute top-1 left-1 w-5 h-5 bg-white rounded-full
        flex items-center justify-center text-xs transition-transform
        ${dark ? "translate-x-7" : ""}`,
            children: dark ? "🌙" : "🔆"
        }, void 0, false, {
            fileName: "[project]/alfadzc.xyz/components/ThemeToggle.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/alfadzc.xyz/components/ThemeToggle.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "NIHBMCmnQYc/ThVDFkFE1j89faA=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alfadzc.xyz/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/components/ThemeToggle.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Navbar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-[100] flex justify-between items-center px-6 md:px-12 py-4 bg-transparent dark:bg-transparent backdrop-blur-md border-b border-white/10 dark:border-white/5 transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }),
                    className: "flex items-center gap-3 group cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#A855F7] shadow-[0_0_15px_rgba(168,85,247,0.5)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "alfadzc logo",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base font-black tracking-tighter text-slate-800 dark:text-white",
                            children: "𝐀𝐥𝐟𝐚𝐝𝐳𝐜.𝐱𝐲𝐳"
                        }, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                            lineNumber: 20,
                            columnNumber: 10
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                lineNumber: 15,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center space-x-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                href: "#home",
                                label: "𝐇𝐨𝐦𝐞",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "15",
                                    height: "15",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "9 22 9 12 15 12 15 22"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 29,
                                            columnNumber: 73
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                href: "#network",
                                label: "𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "15",
                                    height: "15",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "2",
                                            y1: "12",
                                            x2: "22",
                                            y2: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 34,
                                            columnNumber: 47
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 34,
                                            columnNumber: 85
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                href: "#tools",
                                label: "𝐓𝐨𝐨𝐥𝐬",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "15",
                                    height: "15",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                href: "#docs",
                                label: "𝐃𝐨𝐜𝐬",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "15",
                                    height: "15",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "14 2 14 8 20 8"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 44,
                                            columnNumber: 85
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "16",
                                            y1: "13",
                                            x2: "8",
                                            y2: "13"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 44,
                                            columnNumber: 120
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "16",
                                            y1: "17",
                                            x2: "8",
                                            y2: "17"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 44,
                                            columnNumber: 158
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "10 9 9 9 8 9"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 44,
                                            columnNumber: 196
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                href: "https://explorer.alfadzc.xyz",
                                label: "𝐄𝐱𝐩𝐥𝐨𝐫𝐞𝐫",
                                external: true,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "15",
                                    height: "15",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "21",
                                            y1: "21",
                                            x2: "16.65",
                                            y2: "16.65"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 49,
                                            columnNumber: 46
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                href: "#contact",
                                label: "𝐂𝐨𝐧𝐭𝐚𝐜𝐭",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "15",
                                    height: "15",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "22,6 12,13 2,6"
                                        }, void 0, false, {
                                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                            lineNumber: 54,
                                            columnNumber: 102
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-4 border-l border-slate-200 dark:border-slate-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Navbar;
function NavLink({ href, label, icon, external }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
        className: "flex items-center gap-1.5 text-sm font-bold text-slate-700 dark:text-white/80 hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer",
        children: [
            icon,
            label
        ]
    }, void 0, true, {
        fileName: "[project]/alfadzc.xyz/components/Navbar.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c1 = NavLink;
var _c, _c1;
__turbopack_context__.k.register(_c, "Navbar");
__turbopack_context__.k.register(_c1, "NavLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alfadzc.xyz/components/ParticlesBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticlesBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tsparticles$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-tsparticles/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tsparticles$2d$slim$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tsparticles-slim/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ParticlesBackground() {
    _s();
    const [dark, setDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticlesBackground.useEffect": ()=>{
            const updateTheme = {
                "ParticlesBackground.useEffect.updateTheme": ()=>{
                    setDark(document.documentElement.classList.contains("dark"));
                }
            }["ParticlesBackground.useEffect.updateTheme"];
            updateTheme();
            const observer = new MutationObserver(updateTheme);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            return ({
                "ParticlesBackground.useEffect": ()=>observer.disconnect()
            })["ParticlesBackground.useEffect"];
        }
    }["ParticlesBackground.useEffect"], []);
    const particlesInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticlesBackground.useCallback[particlesInit]": async (engine)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tsparticles$2d$slim$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSlim"])(engine);
        }
    }["ParticlesBackground.useCallback[particlesInit]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tsparticles$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        id: "particles-bg",
        init: particlesInit,
        options: {
            fullScreen: {
                enable: true,
                zIndex: -1
            },
            background: {
                /* FIX: Biru Royal yang lebih hidup untuk Dark Mode */ color: {
                    value: dark ? "#0a192f" : "#f8fafc"
                },
                image: dark ? "linear-gradient(180deg, #1e3a8a 0%, #0a192f 100%)" : "linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)"
            },
            particles: {
                number: {
                    value: dark ? 100 : 50,
                    density: {
                        enable: true,
                        area: 800
                    }
                },
                color: {
                    /* Warna partikel Biru Sky terang agar kontras di BG Biru */ value: dark ? "#60a5fa" : "#3b82f6"
                },
                links: {
                    enable: true,
                    color: dark ? "#60a5fa" : "#3b82f6",
                    distance: 150,
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "out"
                    }
                },
                size: {
                    value: {
                        min: 1,
                        max: 3
                    }
                },
                opacity: {
                    value: {
                        min: 0.2,
                        max: 0.5
                    }
                }
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab"
                    }
                },
                modes: {
                    grab: {
                        distance: 200,
                        links: {
                            opacity: 0.5
                        }
                    }
                }
            },
            retina_detect: true
        }
    }, void 0, false, {
        fileName: "[project]/alfadzc.xyz/components/ParticlesBackground.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(ParticlesBackground, "DKeRxfeMvozjYYlORF6nnMrp9jY=");
_c = ParticlesBackground;
var _c;
__turbopack_context__.k.register(_c, "ParticlesBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alfadzc.xyz/components/LoadingWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alfadzc.xyz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LoadingWrapper({ children }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fadeOut, setFadeOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingWrapper.useEffect": ()=>{
            // Reset scroll ke atas saat pertama load
            window.scrollTo(0, 0);
            document.documentElement.style.overflow = "hidden";
            setMounted(true);
            const fadeTimer = setTimeout({
                "LoadingWrapper.useEffect.fadeTimer": ()=>setFadeOut(true)
            }["LoadingWrapper.useEffect.fadeTimer"], 2200);
            const doneTimer = setTimeout({
                "LoadingWrapper.useEffect.doneTimer": ()=>{
                    setLoading(false);
                    document.documentElement.style.overflow = "";
                }
            }["LoadingWrapper.useEffect.doneTimer"], 2700);
            return ({
                "LoadingWrapper.useEffect": ()=>{
                    clearTimeout(fadeTimer);
                    clearTimeout(doneTimer);
                    document.documentElement.style.overflow = "";
                }
            })["LoadingWrapper.useEffect"];
        }
    }["LoadingWrapper.useEffect"], []);
    if (!mounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 40%, #0a0a1a 100%)"
        }
    }, void 0, false, {
        fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
    if (!loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes coinFlip {
          0%   { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes pulse-ring {
          0%   { opacity: 0.6; transform: scale(0.85); }
          50%  { opacity: 0.2; transform: scale(1.1); }
          100% { opacity: 0.6; transform: scale(0.85); }
        }
        @keyframes pulse-ring2 {
          0%   { opacity: 0.4; transform: scale(0.75); }
          50%  { opacity: 0.1; transform: scale(1.2); }
          100% { opacity: 0.4; transform: scale(0.75); }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0);    opacity: 0.4; }
          40%            { transform: translateY(-6px); opacity: 1;   }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .coin-flip {
          animation: coinFlip 1.2s linear infinite;
          transform-style: preserve-3d;
        }
        .ring1 { animation: pulse-ring  2s ease-in-out infinite; }
        .ring2 { animation: pulse-ring2 2s ease-in-out infinite 0.3s; }
        .dot1  { animation: dotBounce 1.2s ease-in-out infinite 0s; }
        .dot2  { animation: dotBounce 1.2s ease-in-out infinite 0.2s; }
        .dot3  { animation: dotBounce 1.2s ease-in-out infinite 0.4s; }
        .fade-in-text { animation: fadeInUp 0.8s ease forwards 0.4s; opacity: 0; }
      `
            }, void 0, false, {
                fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 9999,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 40%, #0a0a1a 100%)",
                    transition: "opacity 0.5s ease",
                    opacity: fadeOut ? 0 : 1,
                    pointerEvents: fadeOut ? "none" : "all"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: "12px",
                            border: "1.5px solid rgba(236,72,153,0.5)",
                            borderRadius: "16px",
                            boxShadow: "0 0 30px rgba(236,72,153,0.15), inset 0 0 30px rgba(236,72,153,0.05)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            width: "220px",
                            height: "220px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "8px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ring2",
                                style: {
                                    position: "absolute",
                                    width: "210px",
                                    height: "210px",
                                    borderRadius: "50%",
                                    border: "1px solid rgba(168,85,247,0.35)",
                                    top: 0,
                                    left: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ring1",
                                style: {
                                    position: "absolute",
                                    width: "160px",
                                    height: "160px",
                                    borderRadius: "50%",
                                    border: "1.5px solid rgba(168,85,247,0.55)",
                                    top: "30px",
                                    left: "30px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    perspective: "600px",
                                    position: "relative",
                                    zIndex: 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "coin-flip",
                                    style: {
                                        width: "120px",
                                        height: "120px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        border: "3px solid #A855F7",
                                        boxShadow: "0 0 30px rgba(168,85,247,0.7), 0 0 60px rgba(168,85,247,0.3)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo.png",
                                        alt: "alfadzc logo",
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fade-in-text",
                        style: {
                            textAlign: "center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "13px",
                                letterSpacing: "0.15em",
                                color: "rgba(255,255,255,1)",
                                fontFamily: "monospace",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "4px"
                            },
                            children: [
                                "𝙿𝚕𝚎𝚊𝚜𝚎  𝚠𝚊𝚒𝚝",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "dot1",
                                    style: {
                                        display: "inline-block",
                                        color: "rgba(255,255,255,1)"
                                    },
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "dot2",
                                    style: {
                                        display: "inline-block",
                                        color: "rgba(255,255,255,1)"
                                    },
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "dot3",
                                    style: {
                                        display: "inline-block",
                                        color: "rgba(255,255,255,1)"
                                    },
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alfadzc$2e$xyz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    visibility: fadeOut ? "visible" : "hidden"
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/alfadzc.xyz/components/LoadingWrapper.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(LoadingWrapper, "9X4mhnKIUtyaeSQFOKV04VeBvAs=");
_c = LoadingWrapper;
var _c;
__turbopack_context__.k.register(_c, "LoadingWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=alfadzc_xyz_components_070161f5._.js.map