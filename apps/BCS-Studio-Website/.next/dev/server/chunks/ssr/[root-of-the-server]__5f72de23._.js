module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/ui/buttons/SkewButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkewButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
function SkewButton(props) {
    const { children, className, isActive } = props;
    const bgColor = isActive ? "bg-white" : "bg-[#A30A24] hover:bg-white";
    const textColor = isActive ? "text-[#A30A24]" : "text-white hover:text-[#A30A24]";
    const borderColor = "border-[#A30A24]";
    const commonClasses = `w-fit border-2 px-4 md:px-8 py-2
    inline-block text-[18px] transition transform
    ${bgColor} ${textColor} ${borderColor} ${className ?? ""}`;
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "block",
        style: {
            transform: "skewX(30deg)"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/ui/buttons/SkewButton.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
    if (typeof props.href === "string") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: props.href,
            onClick: props.onClick,
            className: commonClasses,
            style: {
                transform: "skewX(-30deg)"
            },
            children: content
        }, void 0, false, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/ui/buttons/SkewButton.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: props.type || "button",
        onClick: props.onClick,
        disabled: props.disabled,
        className: commonClasses,
        style: {
            transform: "skewX(-30deg)"
        },
        children: content
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/ui/buttons/SkewButton.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$ui$2f$buttons$2f$SkewButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/ui/buttons/SkewButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const NAV_ITEMS = [
    {
        label: "ABOUT",
        href: "/"
    },
    {
        label: "WORKS",
        href: "/works"
    },
    {
        label: "PROMOTIONS",
        href: "/promotions"
    },
    {
        label: "FAQs",
        href: "/faqs"
    }
];
function Header() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "border-b bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-full px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-auto",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 43 57",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-full w-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        clipPath: "url(#clip0)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M8.47533 54.6794L0.0496521 56.9615V11.6663L8.47533 9.3842V54.6794Z",
                                                fill: "#A30A24"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21.1144 17.8968V15.4441L42.9641 9.52566V0.0405731L11.4146 8.58745V30.0093L42.9641 21.4624V11.9783L21.1144 17.8968Z",
                                                fill: "#A30A24"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33.2643 38.4802V36.0275L11.4146 41.946V32.4619L42.9641 23.915V45.3368L11.4146 53.8827V44.3986L33.2643 38.4802Z",
                                                fill: "#A30A24"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                            id: "clip0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: "43",
                                                height: "57",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex items-center gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex gap-12 text-[18px]",
                            children: NAV_ITEMS.map((item)=>{
                                const isActive = pathname === item.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: `px-4 py-3 transition-colors font-medium ${isActive ? "text-[#161616] border-[#A30A24] border-b-3" : "text-[#6E6E6E] border-transparent hover:text-[#A30A24] hover:border-[#A30A24]"}`,
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$ui$2f$buttons$2f$SkewButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/book-now",
                            children: "BOOK NOW"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSidebarOpen(true),
                            className: "text-[36px] md:text-[48px] focus:outline-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMenu"], {}, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSidebarOpen(false),
                                        className: "text-3xl focus:outline-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {}, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex flex-col mt-8 gap-6 text-[18px] px-6",
                                    children: NAV_ITEMS.map((item)=>{
                                        const isActive = pathname === item.href;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                onClick: ()=>setSidebarOpen(false),
                                                className: `block px-2 py-2 transition-colors font-medium ${isActive ? "text-[#161616] border-l-4 border-[#A30A24]" : "text-[#6E6E6E] hover:text-[#A30A24] hover:border-l-4 hover:border-[#A30A24]"}`,
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                                lineNumber: 110,
                                                columnNumber: 21
                                            }, this)
                                        }, item.href, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 mt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$ui$2f$buttons$2f$SkewButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/book-now",
                                        onClick: ()=>setSidebarOpen(false),
                                        children: "BOOK NOW"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 bg-black/40 z-40",
                            onClick: ()=>setSidebarOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$ui$2f$buttons$2f$SkewButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/ui/buttons/SkewButton.tsx [app-ssr] (ecmascript)");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center items-center gap-10 mx-auto max-w-full h-screen px-8 text-center text-[#161616]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[36px] md:text-[48px] lg:text-[72px] font-extrabold whitespace-pre-line leading-20",
                    children: [
                        "READY TO CREATE ",
                        "\n",
                        " SOMETHING BEAUTIFUL?"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Footer.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[24px] md:text-[36px]",
                    children: "IDEAS MADE EFFECTIVE"
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Footer.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row gap-8 md:gap-8 justify-center items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$ui$2f$buttons$2f$SkewButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/book-now",
                            children: "BOOK NOW"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Footer.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$ui$2f$buttons$2f$SkewButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/book-now?tab=event",
                            children: "TALK TO OUR TEAM"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Footer.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Footer.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Footer.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/TitleWatcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TitleWatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function TitleWatcher() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const originalTitle = document.title;
        const handleVisibilityChange = ()=>{
            if (document.hidden) {
                document.title = "👀 Come back to Blink Creative Studio";
            } else {
                document.title = originalTitle;
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return ()=>{
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            document.title = originalTitle;
        };
    }, []);
    return null;
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/LayoutWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LayoutWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$layout$2f$TitleWatcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/TitleWatcher.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function LayoutWrapper({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isDashboard = pathname.startsWith("/dashboard");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$layout$2f$TitleWatcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/LayoutWrapper.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            !isDashboard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/LayoutWrapper.tsx",
                lineNumber: 21,
                columnNumber: 24
            }, this),
            children,
            !isDashboard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/layout/LayoutWrapper.tsx",
                lineNumber: 25,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5f72de23._.js.map