module.exports = [
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/ui/buttons/SkewButton.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkewButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
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
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/data/promo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROMOS",
    ()=>PROMOS
]);
const PROMOS = [
    {
        title: "First Session Discount",
        description: "Individual portrait sessions that capture your unique personality with professional lighting and artistic direction.",
        discount: "20% OFF",
        validUntil: "Valid until Mar 31, 2026",
        href: "/promotions/first-session",
        cta: "LEARN MORE"
    },
    {
        title: "Family Bundle Package",
        description: "Individual portrait sessions that capture your unique personality with professional lighting and artistic direction.",
        discount: "P299",
        validUntil: "Valid until Mar 31, 2026",
        href: "/promotions/family-bundle",
        cta: "CLAIM OFFER"
    },
    {
        title: "Studio Rental",
        description: "Individual portrait sessions that capture your unique personality with professional lighting and artistic direction.",
        discount: "20% OFF",
        validUntil: "Valid until Mar 31, 2026",
        href: "/promotions/studio-rental",
        cta: "LEARN MORE"
    },
    {
        title: "Graduation Special",
        description: "Individual portrait sessions that capture your unique personality with professional lighting and artistic direction.",
        discount: "P199",
        validUntil: "Valid until Mar 31, 2026",
        href: "/promotions/graduation-special",
        cta: "LEARN MORE"
    }
];
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CurrentPromo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$ui$2f$buttons$2f$SkewButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/ui/buttons/SkewButton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$data$2f$promo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/data/promo.ts [app-rsc] (ecmascript)");
;
;
;
function CurrentPromo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white px-6 md:px-24 py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center text-center gap-6 mb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[48px] md:text-[72px] text-[#A30A24] font-bold",
                        children: "Current Promotions"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-4xl text-[20px] md:text-[32px] text-[#808080]",
                        children: "Take a glimpse into our creative process and studio environment"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-12",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$data$2f$promo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROMOS"].map((promo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border overflow-hidden shadow-md bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#A30A24] w-full h-[320px]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-6 p-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-[36px] md:text-[48px] text-[#191919] font-bold",
                                                children: promo.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[18px] md:text-[24px] text-[#808080] mt-2",
                                                children: promo.description
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-between items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-[36px] md:text-[48px] font-bold text-[#A30A24]",
                                                children: promo.discount
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[18px] md:text-[24px] text-[#808080]",
                                                children: promo.validUntil
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$ui$2f$buttons$2f$SkewButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: promo.href,
                                        children: promo.cta
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/PhotoContest.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoContest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$ui$2f$buttons$2f$SkewButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/components/ui/buttons/SkewButton.tsx [app-rsc] (ecmascript)");
;
;
function PhotoContest() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-[#F2F2F2] flex flex-col p-8 md:p-20 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-center items-center gap-12 border-4 border-[#A30A24] text-white py-28 px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-320 w-full flex flex-col justify-center items-center mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[48px] md:text-[72px] text-[#191919] font-extrabold",
                                children: "Photo Contents"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/PhotoContest.tsx",
                                lineNumber: 10,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-fit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[24px] md:text-[36px] text-[#808080]",
                                    children: 'Submit your best photograph for a chance to win amazing prizes! Theme: "Moments of Joy"'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/PhotoContest.tsx",
                                    lineNumber: 14,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/PhotoContest.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-[36px] md:text-[48px] text-[#191919] font-bold",
                                children: "Grand Prize: P500 + Free Portrait Session"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/PhotoContest.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/PhotoContest.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-center items-center text-center gap-6 md:gap-8 px-2 sm:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$ui$2f$buttons$2f$SkewButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "#",
                                className: "flex justify-center items-center",
                                children: "Submission Deadline: March 30, 2026"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/PhotoContest.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$components$2f$ui$2f$buttons$2f$SkewButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "#",
                                className: "flex justify-center items-center",
                                children: "SUBMIT YOUR PHOTO"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/PhotoContest.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/PhotoContest.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/PhotoContest.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/PhotoContest.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/ValentinesPromo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ValentinesPromo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function ValentinesPromo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white flex flex-col overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#A30A24] flex flex-col justify-center items-center gap-12 text-white py-28 px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-320 w-full flex flex-col justify-center items-center mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[48px] md:text-[72px] font-bold",
                                children: "Valentine’s Day Special - 30% OFF"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/ValentinesPromo.tsx",
                                lineNumber: 9,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-fit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[24px] md:text-[36px]",
                                    children: "Book a couple portrait session and get 30% off your entire package!"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/ValentinesPromo.tsx",
                                    lineNumber: 13,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/ValentinesPromo.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/ValentinesPromo.tsx",
                        lineNumber: 8,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "bg-white border-2 px-6 py-3 text-[#A30A24] text-[24px] md:text-[36px] font-bold",
                        children: "BOOK NOW"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/ValentinesPromo.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/ValentinesPromo.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/ValentinesPromo.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Promotions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$promotions$2f$CurrentPromo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/CurrentPromo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$promotions$2f$PhotoContest$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/PhotoContest.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$promotions$2f$ValentinesPromo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/ValentinesPromo.tsx [app-rsc] (ecmascript)");
;
;
;
;
function Promotions() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white flex flex-col overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#161616] text-white py-28 px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-220 w-full flex flex-col justify-center items-center mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[72px] md:text-[96px] font-bold",
                                children: "Special Offers"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/page.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-fit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[24px] md:text-[36px]",
                                    children: "Exclusive deals, exciting events, and amazing contests"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/page.tsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/page.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/page.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/page.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$promotions$2f$ValentinesPromo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$promotions$2f$CurrentPromo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$promotions$2f$PhotoContest$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/page.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/promotions/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__618185dd._.js.map