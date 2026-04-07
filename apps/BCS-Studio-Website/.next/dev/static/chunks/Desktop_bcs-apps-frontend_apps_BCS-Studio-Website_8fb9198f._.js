(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/utils/dateUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parses a date and optional time into a local Date object.
 * Handles:
 *   - ISO date strings (with Z) correctly
 *   - Separate date + time strings without converting to UTC
 */ // utils/dateUtils.ts
__turbopack_context__.s([
    "formatDateTime",
    ()=>formatDateTime,
    "parseLocalDateTime",
    ()=>parseLocalDateTime
]);
function parseLocalDateTime(dateStr, timeStr) {
    if (!dateStr) return new Date();
    try {
        // Extract date part only, ignore Z and hours in ISO
        const datePart = dateStr.split("T")[0]; // "2026-04-14"
        const [year, month, day] = datePart.split("-").map(Number);
        const [hour = 0, minute = 0, second = 0] = (timeStr || "00:00:00").split(":").map(Number);
        // Construct as local time
        const dt = new Date(year, month - 1, day + 1, hour, minute, second);
        if (isNaN(dt.getTime())) {
            console.warn("Invalid date/time:", dateStr, timeStr);
            return new Date();
        }
        return dt;
    } catch (err) {
        console.warn("Error parsing date/time:", dateStr, timeStr, err);
        return new Date();
    }
}
function formatDateTime(dt) {
    return dt.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Seed Data ────────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "ACCENT_COLORS",
    ()=>ACCENT_COLORS,
    "ADDON_OPTIONS",
    ()=>ADDON_OPTIONS,
    "ALL_TIMES",
    ()=>ALL_TIMES,
    "DAYS_FULL",
    ()=>DAYS_FULL,
    "DAYS_SHORT",
    ()=>DAYS_SHORT,
    "DAY_NAMES",
    ()=>DAY_NAMES,
    "DURATION_OPTIONS",
    ()=>DURATION_OPTIONS,
    "EMPTY_PKG",
    ()=>EMPTY_PKG,
    "I",
    ()=>I,
    "IC",
    ()=>IC,
    "INP",
    ()=>INP,
    "Ic",
    ()=>Ic,
    "Icon",
    ()=>Icon,
    "Icons",
    ()=>Icons,
    "LBL",
    ()=>LBL,
    "Leg",
    ()=>Leg,
    "MONTHS",
    ()=>MONTHS,
    "MONTH_NAMES",
    ()=>MONTH_NAMES,
    "Row",
    ()=>Row,
    "SB",
    ()=>SB,
    "SD",
    ()=>SD,
    "SEED",
    ()=>SEED,
    "SEED_BOOKINGS",
    ()=>SEED_BOOKINGS,
    "SERVICES",
    ()=>SERVICES,
    "STATUS_DOT",
    ()=>STATUS_DOT,
    "STATUS_STYLES",
    ()=>STATUS_STYLES,
    "STRIPE_HARD",
    ()=>STRIPE_HARD,
    "STRIPE_SOFT",
    ()=>STRIPE_SOFT,
    "TIME_OPTIONS",
    ()=>TIME_OPTIONS,
    "TODAY",
    ()=>TODAY,
    "TODAY_D",
    ()=>TODAY_D,
    "addDays",
    ()=>addDays,
    "displayDate",
    ()=>displayDate,
    "displayShort",
    ()=>displayShort,
    "durLabel",
    ()=>durLabel,
    "fmt",
    ()=>fmt,
    "fmtPrice",
    ()=>fmtPrice,
    "getCellBg",
    ()=>getCellBg,
    "inp",
    ()=>inp,
    "inpSty",
    ()=>inpSty,
    "isBlocked",
    ()=>isBlocked,
    "isOverridable",
    ()=>isOverridable,
    "isPast",
    ()=>isPast,
    "isToday",
    ()=>isToday,
    "labelCls",
    ()=>labelCls,
    "labelSty",
    ()=>labelSty,
    "pad",
    ()=>pad,
    "parseD",
    ()=>parseD,
    "parseKey",
    ()=>parseKey,
    "toKey",
    ()=>toKey,
    "totalFromBooking",
    ()=>totalFromBooking,
    "uid",
    ()=>uid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SEED_BOOKINGS = [
    {
        id: "BK-0001",
        customer: {
            name: "Maria Santos",
            email: "maria@example.com",
            phone: "09171234567"
        },
        service: {
            title: "Bridal Package Deluxe",
            price: 8500
        },
        addons: [
            {
                id: "a1",
                label: "Hair Styling",
                price: 1200
            }
        ],
        date: "2025-08-05",
        time: "09:00 AM",
        totalPrice: 9700,
        status: "Confirmed"
    },
    {
        id: "BK-0002",
        customer: {
            name: "Ana Reyes",
            email: "ana@example.com",
            phone: "09289876543"
        },
        service: {
            title: "Debut Makeup",
            price: 5000
        },
        addons: [],
        date: "2025-08-05",
        time: "02:00 PM",
        totalPrice: 5000,
        status: "Pending"
    },
    {
        id: "BK-0003",
        customer: {
            name: "Liza Cruz",
            email: "liza@example.com",
            phone: "09051112233"
        },
        service: {
            title: "Everyday Glam",
            price: 2500
        },
        addons: [],
        date: "2025-08-12",
        time: "11:00 AM",
        totalPrice: 2500,
        status: "Confirmed"
    },
    {
        id: "BK-0004",
        customer: {
            name: "Jenny Flores",
            email: "jenny@example.com",
            phone: "09991234567"
        },
        service: {
            title: "SDE / Film Shoot Makeup",
            price: 3800
        },
        addons: [
            {
                id: "a4",
                label: "Airbrush Upgrade",
                price: 1500
            }
        ],
        date: "2025-08-19",
        time: "06:00 AM",
        totalPrice: 5300,
        status: "Confirmed"
    },
    {
        id: "BK-0005",
        customer: {
            name: "Rica Tan",
            email: "rica@example.com",
            phone: "09171110000"
        },
        service: {
            title: "Special Occasion",
            price: 3200
        },
        addons: [],
        date: "2025-08-26",
        time: "10:00 AM",
        totalPrice: 3200,
        status: "Pending"
    }
];
const SERVICES = [
    {
        title: "Bridal Package Deluxe",
        price: 8500
    },
    {
        title: "Debut Makeup",
        price: 5000
    },
    {
        title: "Everyday Glam",
        price: 2500
    },
    {
        title: "SDE / Film Shoot Makeup",
        price: 3800
    },
    {
        title: "Special Occasion",
        price: 3200
    }
];
const ADDON_OPTIONS = [
    {
        id: "a1",
        label: "Hair Styling",
        price: 1200
    },
    {
        id: "a2",
        label: "Lash Extensions",
        price: 800
    },
    {
        id: "a3",
        label: "Touch-up Kit",
        price: 500
    },
    {
        id: "a4",
        label: "Airbrush Upgrade",
        price: 1500
    },
    {
        id: "a5",
        label: "On-site Assistance",
        price: 2000
    }
];
const STATUS_STYLES = {
    Confirmed: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    Pending: "bg-amber-100 text-amber-700 border border-amber-200",
    Cancelled: "bg-red-100 text-red-700 border border-red-200"
};
const STATUS_DOT = {
    Confirmed: "bg-emerald-500",
    Pending: "bg-amber-400",
    Cancelled: "bg-red-500"
};
const Icon = ({ d, size = 18, stroke = "currentColor", fill = "none", strokeWidth = 1.8 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: fill,
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: d
        }, void 0, false, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
            lineNumber: 86,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
        lineNumber: 85,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Icon;
const Ic = ({ d, size = 16, stroke = "currentColor", fill = "none", sw = 1.8 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: fill,
        stroke: stroke,
        strokeWidth: sw,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: d
        }, void 0, false, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
            lineNumber: 92,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
        lineNumber: 91,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Ic;
const Icons = {
    dashboard: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
    bookings: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    plus: "M12 5v14M5 12h14",
    edit: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7 M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
    trash: "M3 6h18M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2",
    eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z",
    close: "M18 6L6 18M6 6l12 12",
    search: "M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z",
    calendar: "M3 4h18v18H3zM16 2v4M8 2v4M3 10h18",
    check: "M20 6L9 17l-5-5",
    warning: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01",
    money: "M12 2C6.48 2 2 3.79 2 6s4.48 4 10 4 10-1.79 10-4-4.48-4-10-4zm0 8c-5.52 0-10 1.79-10 4v2c0 2.21 4.48 4 10 4s10-1.79 10-4v-2c0-2.21-4.48-4-10-4zm0 6c-5.52 0-10 1.79-10 4v2c0 2.21 4.48 4 10 4s10-1.79 10-4v-2c0-2.21-4.48-4-10-4z",
    users: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
    trend: "M23 6l-9.5 9.5-5-5L1 18",
    filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
    upload: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12",
    logo: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    package: "M4 6l8-4 8 4-8 4-8-4M4 6v12l8 4 8-4V6M12 10v12"
};
const uid = ()=>Math.random().toString(36).slice(2, 8);
const fmtPrice = (n)=>"₱" + Number(n).toLocaleString("en-PH");
const totalFromBooking = (b)=>b.service.price + b.addons.reduce((s, a)=>s + a.price, 0);
const Leg = ({ color, label, pattern })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-3 h-3 rounded-sm shrink-0 flex items-center justify-center",
                style: {
                    background: pattern ? undefined : color,
                    border: pattern ? `2px solid ${color}` : undefined
                },
                children: pattern && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-1.5 h-1.5 rounded-sm",
                    style: {
                        background: color
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
                    lineNumber: 127,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
                lineNumber: 126,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px]",
                style: {
                    color: "#7a3a42"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
                lineNumber: 129,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
        lineNumber: 125,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = Leg;
const LBL = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block text-[11px] font-bold uppercase tracking-wider mb-1.5",
        style: {
            color: "#7a3a42"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
        lineNumber: 135,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = LBL;
const INP = ({ ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        className: "w-full px-3.5 py-2 rounded-lg text-sm border outline-none focus:border-[#A30A24] focus:ring-2 focus:ring-[#A30A24]/10 transition-all",
        style: {
            borderColor: "#e5d5d8",
            background: "#fdfafa"
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
        lineNumber: 138,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = INP;
const Row = ({ label, sub, configKey, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between p-3.5 rounded-xl",
        style: {
            background: config[configKey] ? "#fff5f5" : "#f9fafb",
            border: `1.5px solid ${config[configKey] ? "#fecdd3" : "#e5e7eb"}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-lg flex items-center justify-center",
                        style: {
                            background: config[configKey] ? "#FEF0F2" : "#f3f4f6"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            d: icon,
                            size: 15,
                            stroke: config[configKey] ? "#A30A24" : "#6b7280"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
                            lineNumber: 146,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
                        lineNumber: 145,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold",
                                style: {
                                    color: config[configKey] ? "#A30A24" : "#374151"
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
                                lineNumber: 149,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px]",
                                style: {
                                    color: "#9ca3af"
                                },
                                children: sub
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
                                lineNumber: 150,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
                        lineNumber: 148,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
                lineNumber: 144,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>toggle(configKey),
                className: "relative w-11 h-6 rounded-full transition-colors duration-200 flex items-center",
                style: {
                    background: config[configKey] ? "#A30A24" : "#d1d5db"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-200",
                    style: {
                        left: config[configKey] ? "calc(100% - 20px)" : "4px"
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
                    lineNumber: 156,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
                lineNumber: 153,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx",
        lineNumber: 143,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = Row;
const pad = (n)=>String(n).padStart(2, "0");
const toKey = (y, m, d)=>`${y}-${pad(m + 1)}-${pad(d)}`;
const parseKey = (key)=>{
    const [y, m, d] = key.split("-").map(Number);
    return {
        year: y,
        month: m - 1,
        day: d
    };
};
const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const DAYS_SHORT = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
const DAYS_FULL = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const IC = {
    prev: "M15 18l-6-6 6-6",
    next: "M9 18l6-6-6-6",
    close: "M18 6L6 18M6 6l12 12",
    block: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636",
    clock: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2",
    cal: "M3 4h18v18H3zM16 2v4M8 2v4M3 10h18",
    plus: "M12 5v14M5 12h14",
    range: "M8 6h13M8 12h13M8 18h5M3 6h.01M3 12h.01M3 18h.01",
    time: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0",
    weekend: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
    dayoff: "M12 2a10 10 0 100 20A10 10 0 0012 2zM4.93 4.93l14.14 14.14",
    unlock: "M8 11V7a4 4 0 018 0M5 11h14v10H5z",
    lock: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    user: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z",
    trash: "M3 6h18M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6",
    check: "M20 6L9 17l-5-5",
    info: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8h.01M11 12h1v4h1",
    settings: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
};
const ALL_TIMES = [
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM"
];
const TODAY_D = new Date();
TODAY_D.setHours(0, 0, 0, 0);
const fmt = (d)=>{
    const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, "0"), dd = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${dd}`;
};
const TODAY = fmt(TODAY_D);
_c6 = TODAY;
const parseD = (s)=>{
    if (!s) return null;
    const [y, m, d] = s.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    dt.setHours(0, 0, 0, 0);
    return dt;
};
const addDays = (d, n)=>{
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    return x;
};
const isPast = (s)=>{
    const d = parseD(s);
    return d && d < TODAY_D;
};
const isToday = (s)=>s === TODAY;
const displayDate = (s)=>{
    if (!s) return "";
    return parseD(s).toLocaleDateString("en-PH", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};
const displayShort = (s)=>{
    if (!s) return "";
    return parseD(s).toLocaleDateString("en-PH", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
};
const DAY_NAMES = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const TIME_OPTIONS = [
    "06:00 AM",
    "06:30 AM",
    "07:00 AM",
    "07:30 AM",
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM"
];
const SEED = (()=>{
    const rows = [
        [
            3,
            "Maria Santos",
            "Bridal Package Deluxe",
            "09:00 AM",
            "Confirmed"
        ],
        [
            5,
            "Ana Reyes",
            "Debut Makeup",
            "02:00 PM",
            "Pending"
        ],
        [
            7,
            "Liza Cruz",
            "Everyday Glam",
            "11:00 AM",
            "Confirmed"
        ],
        [
            7,
            "Rachel Kim",
            "Special Occasion",
            "03:00 PM",
            "Confirmed"
        ],
        [
            10,
            "Jenny Park",
            "Bridal Package Deluxe",
            "08:00 AM",
            "Confirmed"
        ],
        [
            12,
            "Rose Tan",
            "SDE / Film Shoot",
            "10:00 AM",
            "Pending"
        ],
        [
            14,
            "Clara Wong",
            "Everyday Glam",
            "01:00 PM",
            "Confirmed"
        ],
        [
            18,
            "Diana Lee",
            "Special Occasion",
            "09:00 AM",
            "Confirmed"
        ],
        [
            21,
            "Patricia Gomez",
            "Debut Makeup",
            "11:00 AM",
            "Pending"
        ],
        [
            25,
            "Sophia Chen",
            "Bridal Package Deluxe",
            "08:00 AM",
            "Confirmed"
        ],
        [
            28,
            "Emma Torres",
            "Everyday Glam",
            "02:00 PM",
            "Confirmed"
        ],
        [
            33,
            "Iris Nava",
            "SDE / Film Shoot",
            "03:00 PM",
            "Confirmed"
        ],
        [
            40,
            "Carla Reyes",
            "Special Occasion",
            "10:00 AM",
            "Pending"
        ],
        [
            45,
            "Mia Santos",
            "Bridal Package Deluxe",
            "09:00 AM",
            "Confirmed"
        ]
    ];
    return rows.map(([off, customer, service, time, status], i)=>({
            id: `BK-${String(i + 1).padStart(4, "0")}`,
            date: fmt(addDays(TODAY_D, off)),
            customer,
            service,
            time,
            status
        }));
})();
const I = {
    prev: "M15 18l-6-6 6-6",
    next: "M9 18l6-6-6-6",
    close: "M18 6L6 18M6 6l12 12",
    lock: "M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4",
    unlock: "M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0 19.9-1",
    calendar: "M3 4h18v18H3zM16 2v4M8 2v4M3 10h18",
    clock: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2",
    settings: "M12 15a3 3 0 100-6 3 3 0 000 6zM2 12h2M20 12h2M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41",
    logo: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    dash: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
    users: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z",
    menu: "M3 12h18M3 6h18M3 18h18"
};
const SB = {
    Confirmed: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    Pending: "bg-amber-100 text-amber-700 border border-amber-200"
};
const SD = {
    Confirmed: "bg-emerald-500",
    Pending: "bg-amber-400"
};
const STRIPE_SOFT = "repeating-linear-gradient(45deg,#ede0e2,#ede0e2 2px,#f8f1f2 2px,#f8f1f2 8px)";
const STRIPE_HARD = "repeating-linear-gradient(45deg,#c5a5aa,#c5a5aa 2.5px,#d8b5ba 2.5px,#d8b5ba 8px)";
const inp = "w-full px-3 py-2 rounded-lg text-xs border outline-none transition-all focus:border-[#A30A24] focus:ring-1 focus:ring-[#A30A24]/20";
const inpSty = {
    borderColor: "#e5d5d8",
    background: "#fdfafa"
};
const getCellBg = (ds, status, sel)=>{
    if (!ds) return "#fafafa";
    if (status === "past") return "#faf7f7";
    if (status === "blocked-manual") return null; // uses gradient
    if (isBlocked(status)) return null; // uses gradient
    if (sel) return "#A30A24";
    if (isToday(ds)) return "#fff";
    const bk = bookingsByDate[ds] || [];
    if (bk.length > 0) return "#FEF0F2";
    if (timeBlocks.some((t)=>t.date === ds)) return "#fffbf0";
    return "#fff";
};
const isBlocked = (s)=>s.startsWith("blocked");
const isOverridable = (s)=>[
        "blocked-range",
        "blocked-dayoff",
        "blocked-weekend"
    ].includes(s);
const durLabel = (mins)=>{
    const opt = DURATION_OPTIONS.find((o)=>o.value === mins);
    return opt ? opt.label : `${mins} min`;
};
const DURATION_OPTIONS = [
    {
        label: "30 minutes",
        value: 30
    },
    {
        label: "45 minutes",
        value: 45
    },
    {
        label: "1 hour",
        value: 60
    },
    {
        label: "1.5 hours",
        value: 90
    },
    {
        label: "2 hours",
        value: 120
    },
    {
        label: "2.5 hours",
        value: 150
    },
    {
        label: "3 hours",
        value: 180
    },
    {
        label: "4 hours",
        value: 240
    },
    {
        label: "Half-day (5 hrs)",
        value: 300
    },
    {
        label: "Full-day (8 hrs)",
        value: 480
    }
];
const EMPTY_PKG = {
    id: "",
    title: "",
    description: "",
    duration: 60,
    price: "",
    isActive: true,
    color: "#A30A24",
    inclusions: [],
    addons: []
};
const labelCls = "block text-[10px] font-bold mb-1 uppercase tracking-wider";
const labelSty = {
    color: "#7a3a42"
};
const ACCENT_COLORS = [
    "#A30A24",
    "#7a0a1e",
    "#c41a3a",
    "#b91c1c",
    "#c2410c",
    "#b45309",
    "#15803d",
    "#0e7490",
    "#1d4ed8",
    "#7c3aed"
];
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Icon");
__turbopack_context__.k.register(_c1, "Ic");
__turbopack_context__.k.register(_c2, "Leg");
__turbopack_context__.k.register(_c3, "LBL");
__turbopack_context__.k.register(_c4, "INP");
__turbopack_context__.k.register(_c5, "Row");
__turbopack_context__.k.register(_c6, "TODAY");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/StatCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx [app-client] (ecmascript)");
"use client";
;
;
;
// ─── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, iconPath, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-2xl p-6 flex flex-col gap-3",
        style: {
            background: accent ? "#A30A24" : "#fff",
            color: accent ? "#fff" : "#1a1a1a",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)"
        },
        children: [
            accent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-10",
                style: {
                    background: "#fff"
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/StatCard.jsx",
                lineNumber: 14,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium opacity-70 tracking-wide uppercase",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/StatCard.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-10 h-10 rounded-xl flex items-center justify-center",
                        style: {
                            background: accent ? "rgba(255,255,255,0.15)" : "#FEF0F2",
                            color: accent ? "#fff" : "#A30A24"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            d: iconPath,
                            size: 18,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/StatCard.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/StatCard.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/StatCard.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold tracking-tight",
                        style: {
                            fontFamily: "'Georgia', serif"
                        },
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/StatCard.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs mt-1 opacity-60",
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/StatCard.jsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/StatCard.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/StatCard.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = StatCard;
const __TURBOPACK__default__export__ = StatCard;
var _c;
__turbopack_context__.k.register(_c, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/Modal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// ─── Modal ─────────────────────────────────────────────────────────────────────
function Modal({ title, onClose, children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            document.body.style.overflow = "hidden";
            return ({
                "Modal.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        style: {
            background: "rgba(10,2,4,0.55)",
            backdropFilter: "blur(4px)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col",
            style: {
                border: "1.5px solid #f0e0e3"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-7 py-5 border-b",
                    style: {
                        borderColor: "#f0e0e3"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold",
                            style: {
                                color: "#A30A24",
                                fontFamily: "'Georgia', serif"
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/Modal.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-lg flex items-center justify-center hover:bg-red-50 transition-colors",
                            style: {
                                color: "#A30A24"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].close,
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/Modal.jsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/Modal.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/Modal.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto flex-1 px-7 py-6",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/Modal.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/Modal.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/Modal.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BookingForm({ initial, onSave, onCancel }) {
    _s();
    // ─── State for available addons
    const [availableAddons, setAvailableAddons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ─── Fetch all addons from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingForm.useEffect": ()=>{
            const fetchData = {
                "BookingForm.useEffect.fetchData": async ()=>{
                    try {
                        const res = await fetch("/api/bookings");
                        const data = await res.json();
                        const addonsSet = new Map();
                        data.forEach({
                            "BookingForm.useEffect.fetchData": (b)=>b.addons?.forEach({
                                    "BookingForm.useEffect.fetchData": (a)=>addonsSet.set(a.id, a)
                                }["BookingForm.useEffect.fetchData"])
                        }["BookingForm.useEffect.fetchData"]);
                        setAvailableAddons(Array.from(addonsSet.values()));
                    } catch (err) {
                        console.error("Failed to fetch booking data:", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["BookingForm.useEffect.fetchData"];
            fetchData();
        }
    }["BookingForm.useEffect"], []);
    // ─── Form state (hooks must be top-level, unconditional)
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        customer: initial?.customer || {
            name: "",
            email: "",
            phone: "",
            description: ""
        },
        service: initial?.service || null,
        addons: initial?.addons || [],
        date: initial?.date || "",
        time: initial?.time || "",
        status: initial?.status || "Pending",
        proof: initial?.proof || null
    });
    // ─── Handlers
    const toggleAddon = (addon)=>{
        setForm((f)=>{
            const exists = f.addons.find((a)=>a.id === addon.id);
            return {
                ...f,
                addons: exists ? f.addons.filter((a)=>a.id !== addon.id) : [
                    ...f.addons,
                    addon
                ]
            };
        });
    };
    const submit = async ()=>{
        setSaving(true); // 🔥 START loading
        try {
            const total = Number(form.service?.price || 0) + form.addons.reduce((sum, a)=>sum + Number(a.price || 0), 0);
            const payload = {
                id: initial.id,
                customer: form.customer,
                service: form.service,
                addons: form.addons,
                date: form.date,
                time: form.time,
                totalPrice: total
            };
            const res = await fetch("/api/bookings", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Failed to update booking");
            }
            onSave(payload); // optional UI refresh
            alert("Booking updated successfully!");
        } catch (err) {
            console.error(err);
            alert("Failed to update booking");
        } finally{
            setSaving(false); // 🔥 STOP loading (always runs)
        }
    };
    if (!initial) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "No booking selected."
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
        lineNumber: 96,
        columnNumber: 24
    }, this);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading addons..."
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
        lineNumber: 97,
        columnNumber: 23
    }, this);
    const inputCls = "w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-all";
    const inputStyle = {
        borderColor: "#e5d5d8",
        background: "#fdfafa",
        color: "#555"
    };
    const labelCls = "block text-xs font-semibold mb-1.5 uppercase tracking-wider";
    // ─── Total calculation
    const total = Number(form.service?.price || 0) + form.addons.reduce((sum, a)=>sum + Number(a.price || 0), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-base mb-3",
                        style: {
                            color: "#A30A24"
                        },
                        children: "Customer Information"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: labelCls,
                                        style: {
                                            color: "#7a3a42"
                                        },
                                        children: "Full Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: inputCls,
                                        style: inputStyle,
                                        value: form.customer.name,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: labelCls,
                                        style: {
                                            color: "#7a3a42"
                                        },
                                        children: "Phone *"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: inputCls,
                                        style: inputStyle,
                                        value: form.customer.phone,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: labelCls,
                                        style: {
                                            color: "#7a3a42"
                                        },
                                        children: "Email Address *"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        className: inputCls,
                                        style: inputStyle,
                                        value: form.customer.email,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: labelCls,
                                        style: {
                                            color: "#7a3a42"
                                        },
                                        children: "Special Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 2,
                                        className: inputCls,
                                        style: inputStyle,
                                        value: form.customer.description,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                style: {
                    borderColor: "#f0e0e3"
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-base mb-3",
                        style: {
                            color: "#A30A24"
                        },
                        children: "Service & Schedule"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: labelCls,
                                        style: {
                                            color: "#7a3a42"
                                        },
                                        children: "Service"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: inputCls,
                                        style: {
                                            ...inputStyle,
                                            background: "#f5f5f5",
                                            cursor: "not-allowed"
                                        },
                                        value: form.service ? `${form.service.title} - ₱${Number(form.service.price).toLocaleString()}` : "",
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: labelCls,
                                        style: {
                                            color: "#7a3a42"
                                        },
                                        children: "Date *"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        className: inputCls,
                                        style: inputStyle,
                                        value: form.date,
                                        onChange: (e)=>setForm((f)=>({
                                                    ...f,
                                                    date: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: labelCls,
                                        style: {
                                            color: "#7a3a42"
                                        },
                                        children: "Time *"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        className: inputCls,
                                        style: inputStyle,
                                        value: form.time,
                                        onChange: (e)=>setForm((f)=>({
                                                    ...f,
                                                    time: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            availableAddons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelCls,
                        style: {
                            color: "#7a3a42"
                        },
                        children: "Add-ons"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 mt-1",
                        children: availableAddons.map((addon)=>{
                            const checked = !!form.addons.find((a)=>a.id === addon.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2.5 p-2.5 rounded-lg cursor-pointer transition-colors",
                                style: {
                                    background: checked ? "#FEF0F2" : "#fdfafa",
                                    border: `1.5px solid ${checked ? "#A30A24" : "#e5d5d8"}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: checked,
                                        onChange: ()=>toggleAddon(addon),
                                        className: "accent-[#A30A24]"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 193,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 text-xs",
                                        children: addon.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 199,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold",
                                        style: {
                                            color: "#A30A24"
                                        },
                                        children: [
                                            "+₱",
                                            Number(addon.price).toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                        lineNumber: 200,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, addon.id, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                                lineNumber: 185,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                lineNumber: 179,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl p-4 flex items-center justify-between",
                style: {
                    background: "#A30A24",
                    color: "#fff"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: "Total Amount"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-bold",
                        style: {
                            fontFamily: "'Georgia', serif"
                        },
                        children: [
                            "₱",
                            Number(total).toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-3 pt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        className: "px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors hover:bg-red-50",
                        style: {
                            borderColor: "#A30A24",
                            color: "#A30A24"
                        },
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: submit,
                        disabled: saving,
                        className: "px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50",
                        style: {
                            background: "#A30A24"
                        },
                        children: saving ? "Saving..." : "Save Booking"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(BookingForm, "xgrSfkaU8pxsU8atstPDRdE46Pw=");
_c = BookingForm;
const __TURBOPACK__default__export__ = BookingForm;
var _c;
__turbopack_context__.k.register(_c, "BookingForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function ViewBooking({ booking, onClose }) {
    const { customer, service, addons, date, time, totalPrice, status, proof, id } = booking;
    let formattedDate = date || "—";
    let formattedTime = time || "—";
    try {
        // ✅ FIX: Prevent timezone shift
        if (date) {
            const [year, month, day] = date.split("-").map(Number);
            if (year && month && day) {
                const safeDate = new Date(year, month - 1, day); // LOCAL date
                formattedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(safeDate, "MMMM dd, yyyy");
            }
        }
        // ✅ Convert 24hr → 12hr
        if (time) {
            const [hours, minutes] = time.split(":");
            if (hours !== undefined && minutes !== undefined) {
                let h = parseInt(hours, 10);
                const ampm = h >= 12 ? "PM" : "AM";
                h = h % 12 || 12;
                formattedTime = `${h}:${minutes} ${ampm}`;
            }
        }
    } catch (err) {
        console.warn("Failed to format date/time:", err);
    }
    const row = (label, value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-start py-2.5 border-b last:border-0",
            style: {
                borderColor: "#f5e8ea"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-semibold uppercase tracking-wider w-36 shrink-0",
                    style: {
                        color: "#b0707a"
                    },
                    children: label
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                    lineNumber: 45,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-right",
                    style: {
                        color: "#1a0a0d"
                    },
                    children: value
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                    lineNumber: 51,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
            lineNumber: 41,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5 text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 p-4 rounded-xl",
                style: {
                    background: "#FEF0F2"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg",
                        style: {
                            background: "#A30A24",
                            fontFamily: "'Georgia', serif"
                        },
                        children: customer.name[0]
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-base",
                                style: {
                                    color: "#A30A24"
                                },
                                children: customer.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs",
                                style: {
                                    color: "#7a3a42"
                                },
                                children: id
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `ml-auto text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1.5 ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_STYLES"][status]}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-1.5 h-1.5 rounded-full ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_DOT"][status]}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            status
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-wider mb-2",
                        style: {
                            color: "#A30A24"
                        },
                        children: "Customer"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    row("Email", customer.email),
                    row("Phone", customer.phone),
                    customer.description && row("Notes", customer.description)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-wider mb-2",
                        style: {
                            color: "#A30A24"
                        },
                        children: "Service"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    row("Package", service.title),
                    row("Base Price", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtPrice"])(service.price)),
                    row("Date", formattedDate),
                    row("Time", formattedTime)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            addons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-wider mb-2",
                        style: {
                            color: "#A30A24"
                        },
                        children: "Add-ons"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    addons.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: row(a.label, `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtPrice"])(a.price)}`)
                        }, a.id, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                lineNumber: 106,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between rounded-xl px-5 py-4 text-white",
                style: {
                    background: "#A30A24"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: "Total Amount"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-bold",
                        style: {
                            fontFamily: "'Georgia', serif"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtPrice"])(totalPrice)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            proof && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 p-3 rounded-lg text-xs",
                style: {
                    background: "#f5f5f5",
                    border: "1px solid #e0e0e0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].upload,
                        size: 14,
                        stroke: "#888"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-500",
                        children: "Payment proof:"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-gray-700",
                        children: proof
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                lineNumber: 129,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "px-5 py-2.5 rounded-lg text-sm font-semibold text-white",
                    style: {
                        background: "#A30A24"
                    },
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c = ViewBooking;
const __TURBOPACK__default__export__ = ViewBooking;
var _c;
__turbopack_context__.k.register(_c, "ViewBooking");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx [app-client] (ecmascript)");
"use client";
;
;
;
// ─── Delete Confirm ────────────────────────────────────────────────────────────
function DeleteConfirm({ booking, onConfirm, onCancel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center space-y-5 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 rounded-full mx-auto flex items-center justify-center",
                style: {
                    background: "#FEF0F2"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    d: Icons.warning,
                    size: 28,
                    stroke: "#A30A24",
                    strokeWidth: 2
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold",
                        style: {
                            color: "#1a0a0d"
                        },
                        children: "Delete Booking?"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mt-1",
                        style: {
                            color: "#7a3a42"
                        },
                        children: [
                            "You're about to permanently delete booking ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: booking.id
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx",
                                lineNumber: 16,
                                columnNumber: 59
                            }, this),
                            " for ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: booking.customer.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx",
                                lineNumber: 16,
                                columnNumber: 93
                            }, this),
                            ". This action cannot be undone."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        className: "px-5 py-2.5 rounded-lg text-sm font-medium border",
                        style: {
                            borderColor: "#d1d5db",
                            color: "#374151"
                        },
                        children: "Keep Booking"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onConfirm,
                        className: "px-5 py-2.5 rounded-lg text-sm font-semibold text-white",
                        style: {
                            background: "#A30A24"
                        },
                        children: "Yes, Delete"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = DeleteConfirm;
const __TURBOPACK__default__export__ = DeleteConfirm;
var _c;
__turbopack_context__.k.register(_c, "DeleteConfirm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/components/Toggle.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
// ─── Toggle ───────────────────────────────────────────────────────────────────
function Toggle({ on, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-10 h-5 rounded-full cursor-pointer transition-colors duration-200 flex-shrink-0",
        style: {
            background: on ? "#A30A24" : "#d1c0c3"
        },
        onClick: onChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200",
            style: {
                transform: on ? "translateX(20px)" : "translateX(0)"
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/components/Toggle.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/components/Toggle.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Toggle;
const __TURBOPACK__default__export__ = Toggle;
var _c;
__turbopack_context__.k.register(_c, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$components$2f$Toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/components/Toggle.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Generate unique IDs for ranges/blocks
const uid = ()=>Math.random().toString(36).substr(2, 9);
// Time options for time blocks
const TIME_OPTIONS = Array.from({
    length: 24 * 2
}, (_, i)=>{
    const h = Math.floor(i / 2);
    const m = i % 2 * 30;
    const hour = h % 12 === 0 ? 12 : h % 12;
    const ampm = h < 12 ? "AM" : "PM";
    const min = m.toString().padStart(2, "0");
    return `${hour}:${min} ${ampm}`;
});
function CalendarTab() {
    _s();
    const now = new Date();
    const [viewYear, setViewYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(now.getFullYear());
    const [viewMonth, setViewMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(now.getMonth());
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TODAY"]);
    const [rightTab, setRightTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("day");
    const [bookings, setBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [blockedDates, setBlockedDates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [blockedRanges, setBlockedRanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [timeBlocks, setTimeBlocks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [openDates, setOpenDates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [dayOffsBlocked, setDayOffsBlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [weekendsBlocked, setWeekendsBlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Form state
    const [blockMode, setBlockMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("date");
    const [blockDate, setBlockDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rangeStart, setRangeStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rangeEnd, setRangeEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rangeLabel, setRangeLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [timeDate, setTimeDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [timeStart, setTimeStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("12:00 PM");
    const [timeEnd, setTimeEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("01:00 PM");
    const [timeLabel, setTimeLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        text: "",
        ok: true
    });
    const flash = (text, ok = true)=>{
        setMsg({
            text,
            ok
        });
        setTimeout(()=>setMsg({
                text: "",
                ok: true
            }), 2800);
    };
    // --- Helpers ---
    function formatDate(d) {
        const dt = typeof d === "string" ? new Date(d) : d;
        const tzOffset = dt.getTimezoneOffset() * 60000;
        return new Date(dt - tzOffset).toISOString().split("T")[0]; // YYYY-MM-DD
    }
    const isPast = (d)=>formatDate(d) < formatDate(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TODAY_D"]);
    const isToday = (d)=>formatDate(d) === formatDate(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TODAY_D"]);
    // Bookings grouped by date
    const bookingsByDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalendarTab.useMemo[bookingsByDate]": ()=>{
            const m = {};
            bookings.forEach({
                "CalendarTab.useMemo[bookingsByDate]": (b)=>{
                    (m[b.date] = m[b.date] || []).push(b);
                }
            }["CalendarTab.useMemo[bookingsByDate]"]);
            return m;
        }
    }["CalendarTab.useMemo[bookingsByDate]"], [
        bookings
    ]);
    // --- Fetch bookings and blocked dates/ranges/time blocks ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarTab.useEffect": ()=>{
            const fetchData = {
                "CalendarTab.useEffect.fetchData": async ()=>{
                    try {
                        // Bookings
                        const bookingsRes = await fetch("/api/bookings");
                        const bookingsData = await bookingsRes.json();
                        setBookings(bookingsData.map({
                            "CalendarTab.useEffect.fetchData": (b)=>({
                                    ...b,
                                    date: formatDate(b.date)
                                })
                        }["CalendarTab.useEffect.fetchData"]));
                        // Blocked dates, ranges, time blocks
                        const calendarRes = await fetch("/api/calendar");
                        const calendarData = await calendarRes.json();
                        setBlockedDates(new Set(calendarData.blockedDates.map({
                            "CalendarTab.useEffect.fetchData": (b)=>formatDate(b.date)
                        }["CalendarTab.useEffect.fetchData"])));
                        setBlockedRanges(calendarData.blockedRanges.map({
                            "CalendarTab.useEffect.fetchData": (r)=>({
                                    ...r,
                                    start: formatDate(r.start_date),
                                    end: formatDate(r.end_date)
                                })
                        }["CalendarTab.useEffect.fetchData"]));
                        setTimeBlocks(calendarData.timeBlocks.map({
                            "CalendarTab.useEffect.fetchData": (t)=>({
                                    ...t,
                                    date: formatDate(t.date)
                                })
                        }["CalendarTab.useEffect.fetchData"]));
                        // ✅ ADD THIS (VERY IMPORTANT)
                        setOpenDates(new Set(calendarData.openDates.map({
                            "CalendarTab.useEffect.fetchData": (o)=>formatDate(o.date)
                        }["CalendarTab.useEffect.fetchData"])));
                    } catch (err) {
                        console.error("Failed to fetch calendar data:", err);
                    }
                }
            }["CalendarTab.useEffect.fetchData"];
            fetchData();
        }
    }["CalendarTab.useEffect"], []);
    // ----------------------------
    // Status helpers
    // ----------------------------
    const getStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CalendarTab.useCallback[getStatus]": (s)=>{
            if (!s) return "available";
            const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseD"])(s);
            if (!d) return "available";
            const dow = d.getDay();
            if (isPast(s) && !isToday(s)) return "past";
            if (blockedDates.has(s)) return "blocked-manual";
            const inRange = blockedRanges.find({
                "CalendarTab.useCallback[getStatus].inRange": (r)=>s >= r.start && s <= r.end
            }["CalendarTab.useCallback[getStatus].inRange"]);
            if (inRange && !openDates.has(s)) return "blocked-range";
            if (dayOffsBlocked.has(dow) && !openDates.has(s)) return "blocked-dayoff";
            if (weekendsBlocked && (dow === 0 || dow === 6) && !openDates.has(s)) return "blocked-weekend";
            return "available";
        }
    }["CalendarTab.useCallback[getStatus]"], [
        blockedDates,
        blockedRanges,
        openDates,
        dayOffsBlocked,
        weekendsBlocked,
        isPast,
        isToday
    ]);
    const isBlocked = (s)=>s.startsWith("blocked");
    const isOverridable = (s)=>[
            "blocked-range",
            "blocked-dayoff",
            "blocked-weekend"
        ].includes(s);
    // ----------------------------
    // Calendar generation
    // ----------------------------
    const calDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalendarTab.useMemo[calDays]": ()=>{
            const first = new Date(viewYear, viewMonth, 1);
            const last = new Date(viewYear, viewMonth + 1, 0);
            const cells = [];
            for(let i = 0; i < first.getDay(); i++)cells.push(null);
            for(let d = 1; d <= last.getDate(); d++){
                cells.push(formatDate(new Date(viewYear, viewMonth, d)));
            }
            while(cells.length % 7 !== 0)cells.push(null);
            return cells;
        }
    }["CalendarTab.useMemo[calDays]"], [
        viewYear,
        viewMonth
    ]);
    // ----------------------------
    // Calendar actions
    // ----------------------------
    const prevMonth = ()=>viewMonth === 0 ? (setViewMonth(11), setViewYear((y)=>y - 1)) : setViewMonth((m)=>m - 1);
    const nextMonth = ()=>viewMonth === 11 ? (setViewMonth(0), setViewYear((y)=>y + 1)) : setViewMonth((m)=>m + 1);
    const goToday = ()=>{
        setViewYear(now.getFullYear());
        setViewMonth(now.getMonth());
        setSelectedDate(formatDate(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TODAY_D"]));
    };
    const handleDayClick = (ds)=>{
        if (!ds) return;
        if (getStatus(ds) === "past") return;
        setSelectedDate(ds);
        setRightTab("day");
    };
    // ----------------------------
    // Add/Remove blocks
    // ----------------------------
    const addBlockDate = async ()=>{
        if (!blockDate) return flash("Please select a date.", false);
        if (isPast(blockDate)) return flash("Cannot block a past date.", false);
        try {
            const res = await fetch("/api/calendar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "date",
                    date: blockDate,
                    label: "Manual Block"
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to block date");
            setBlockedDates((prev)=>new Set([
                    ...prev,
                    blockDate
                ]));
            setBlockDate("");
            flash("Date blocked successfully.");
        } catch (err) {
            console.error(err);
            flash(err.message, false);
        }
    };
    const addBlockRange = async ()=>{
        if (!rangeStart || !rangeEnd) return flash("Fill both dates.", false);
        if (rangeStart > rangeEnd) return flash("Start must be before end.", false);
        try {
            const res = await fetch("/api/calendar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "range",
                    start: rangeStart,
                    end: rangeEnd,
                    label: rangeLabel || "Blocked Range"
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to block range");
            // ✅ Update frontend
            setBlockedRanges((p)=>[
                    ...p,
                    {
                        id: data.id || uid(),
                        start: rangeStart,
                        end: rangeEnd,
                        label: rangeLabel || "Blocked Range"
                    }
                ]);
            setRangeStart("");
            setRangeEnd("");
            setRangeLabel("");
            flash("Date range blocked.");
        } catch (err) {
            console.error(err);
            flash(err.message, false);
        }
    };
    const addTimeBlock = async (timeBlock)=>{
        try {
            const res = await fetch("/api/calendar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "time",
                    ...timeBlock
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to add time block");
            // Update frontend state
            setTimeBlocks((prev)=>[
                    ...prev,
                    {
                        ...timeBlock,
                        id: data.id || uid()
                    }
                ]);
            flash("Time block added successfully.");
        } catch (err) {
            console.error(err);
            flash(err.message, false);
        }
    };
    const removeBlockedDate = async (date)=>{
        try {
            const res = await fetch("/api/calendar", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "date",
                    date
                })
            });
            if (!res.ok) throw new Error("Failed to remove block");
            // Update state immediately
            setBlockedDates((prev)=>{
                const s = new Set(prev);
                s.delete(date);
                return s;
            });
            // Optionally, reset selection status
            setSelStatus("available");
        } catch (err) {
            console.error(err);
            flash(err.message, false);
        }
    };
    const removeRange = (id)=>setBlockedRanges((p)=>p.filter((r)=>r.id !== id));
    const removeTimeBlock = async (id)=>{
        try {
            const res = await fetch("/api/calendar", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "time",
                    id
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to remove time block");
            setTimeBlocks((prev)=>prev.filter((t)=>t.id !== id));
            flash("Time block removed.");
        } catch (err) {
            console.error(err);
            flash(err.message, false);
        }
    };
    const openDate = async (d)=>{
        if (!d) return flash("No date selected.", false);
        if (isPast(d)) return flash("Cannot open a past date.", false);
        try {
            const res = await fetch("/api/calendar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "open",
                    date: d
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to open date");
            setOpenDates((p)=>new Set([
                    ...p,
                    d
                ]));
            flash("Date opened (exception) successfully.");
        } catch (err) {
            console.error(err);
            flash(err.message, false);
        }
    };
    const closeDate = async (d)=>{
        if (!d) return flash("No date selected.", false);
        try {
            const res = await fetch("/api/calendar", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "open",
                    date: d
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to close date");
            setOpenDates((p)=>{
                const s = new Set(p);
                s.delete(d);
                return s;
            });
            flash("Date exception removed, back to blocked.");
        } catch (err) {
            console.error(err);
            flash(err.message, false);
        }
    };
    const manualBlock = async (d)=>{
        if (!d) return flash("No date selected.", false);
        if (isPast(d)) return flash("Cannot block a past date.", false);
        try {
            const res = await fetch("/api/calendar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "date",
                    date: d,
                    label: "Manual Block"
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to block date");
            // Update frontend state
            setBlockedDates((p)=>new Set([
                    ...p,
                    d
                ]));
            setOpenDates((p)=>{
                const s = new Set(p);
                s.delete(d);
                return s;
            });
            setSelStatus("blocked-manual"); // update status immediately
            flash("Date blocked successfully.");
        } catch (err) {
            console.error(err);
            flash(err.message, false);
        }
    };
    const toggleDayOff = (i)=>setDayOffsBlocked((p)=>{
            const s = new Set(p);
            s.has(i) ? s.delete(i) : s.add(i);
            return s;
        });
    const getCellBg = (ds, status, sel)=>{
        if (!ds) return "#fafafa";
        if (status === "past") return "#faf7f7";
        if (status === "blocked-manual") return null; // uses gradient
        if (isBlocked(status)) return null; // uses gradient
        if (sel) return "#A30A24";
        if (isToday(ds)) return "#fff";
        const bk = bookingsByDate[ds] || [];
        if (bk.length > 0) return "#FEF0F2";
        if (timeBlocks.some((t)=>t.date === ds)) return "#fffbf0";
        return "#fff";
    };
    const selStatus = getStatus(selectedDate);
    const selBookings = bookingsByDate[selectedDate] || [];
    const selTimeBlocks = timeBlocks.filter((t)=>t.date === selectedDate);
    const selRange = blockedRanges.find((r)=>selectedDate >= r.start && selectedDate <= r.end);
    const selIsOpen = openDates.has(selectedDate);
    const to24h = (t)=>{
        const [time, modifier] = t.split(" ");
        let [hours, minutes] = time.split(":").map(Number);
        if (modifier === "PM" && hours !== 12) hours += 12;
        if (modifier === "AM" && hours === 12) hours = 0;
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;
    };
    const handleAddTimeBlock = async ()=>{
        if (!timeDate || !timeStart || !timeEnd || !timeLabel) {
            return flash("Please fill all fields", false);
        }
        // ✅ Make sure this is a plain object, no DOM or event
        const block = {
            date: timeDate,
            start_time: to24h(timeStart),
            end_time: to24h(timeEnd),
            label: timeLabel
        };
        await addTimeBlock(block);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen overflow-hidden",
        style: {
            background: "#f7f0f1",
            fontFamily: "'DM Sans','Segoe UI',sans-serif"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "flex items-center justify-between px-7 py-4 bg-white border-b shrink-0",
                            style: {
                                borderColor: "#ede0e2"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-xl font-bold",
                                            style: {
                                                color: "#1a0a0d",
                                                fontFamily: "'Georgia',serif"
                                            },
                                            children: "Calendar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs mt-0.5",
                                            style: {
                                                color: "#9a6a72"
                                            },
                                            children: "Manage availability & view bookings"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 469,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: goToday,
                                            className: "px-4 py-2 rounded-xl text-xs font-semibold border transition-colors hover:bg-red-50",
                                            style: {
                                                borderColor: "#A30A24",
                                                color: "#A30A24"
                                            },
                                            children: "Today"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 472,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center border rounded-xl overflow-hidden",
                                            style: {
                                                borderColor: "#e0d0d2",
                                                background: "#fff"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: prevMonth,
                                                    className: "w-9 h-9 flex items-center justify-center hover:bg-red-50 transition-colors",
                                                    style: {
                                                        color: "#A30A24"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                        d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].prev,
                                                        size: 14,
                                                        sw: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                        lineNumber: 476,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 475,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 text-sm font-bold min-w-[148px] text-center",
                                                    style: {
                                                        color: "#1a0a0d",
                                                        fontFamily: "'Georgia',serif"
                                                    },
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES"][viewMonth],
                                                        " ",
                                                        viewYear
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 478,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: nextMonth,
                                                    className: "w-9 h-9 flex items-center justify-center hover:bg-red-50 transition-colors",
                                                    style: {
                                                        color: "#A30A24"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                        d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].next,
                                                        size: 14,
                                                        sw: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                        lineNumber: 482,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 481,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 474,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                            lineNumber: 466,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 px-7 py-2 bg-white border-b shrink-0 flex-wrap",
                            style: {
                                borderColor: "#ede0e2"
                            },
                            children: [
                                {
                                    color: "#fff",
                                    label: "Available",
                                    border: "#e5d5d8"
                                },
                                {
                                    color: "#FEF0F2",
                                    label: "Has Bookings",
                                    border: "#f5cdd4"
                                },
                                {
                                    gradient: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRIPE_SOFT"],
                                    label: "Soft Block (Weekend / Day-off)"
                                },
                                {
                                    gradient: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRIPE_HARD"],
                                    label: "Hard Block (Manual)"
                                },
                                {
                                    color: "#A30A24",
                                    label: "Selected / Today"
                                },
                                {
                                    color: "#fffbf0",
                                    label: "Time Block",
                                    border: "#fde68a"
                                },
                                {
                                    color: "#faf7f7",
                                    label: "Past (locked)",
                                    opacity: 0.5
                                }
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 text-xs",
                                    style: {
                                        color: "#7a4a50"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3.5 h-3.5 rounded flex-shrink-0",
                                            style: {
                                                background: item.gradient || item.color,
                                                border: `1px solid ${item.border || "rgba(0,0,0,0.1)"}`,
                                                opacity: item.opacity || 1
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 500,
                                            columnNumber: 17
                                        }, this),
                                        item.label
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                    lineNumber: 499,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                            lineNumber: 489,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl overflow-hidden h-full flex flex-col",
                                style: {
                                    boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
                                    border: "1.5px solid #f0e0e3"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-7 border-b",
                                        style: {
                                            borderColor: "#f5eaec",
                                            background: "#fdf5f6"
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAYS_SHORT"].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-3 text-center text-xs font-bold uppercase tracking-widest",
                                                style: {
                                                    color: i === 0 || i === 6 ? "#c05070" : "#9a6a72"
                                                },
                                                children: d
                                            }, d, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                lineNumber: 514,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                        lineNumber: 512,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-7 flex-1",
                                        style: {
                                            gridAutoRows: "minmax(80px, 1fr)"
                                        },
                                        children: calDays.map((ds, idx)=>{
                                            if (!ds) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderRight: "1px solid #f8f0f1",
                                                    borderBottom: "1px solid #f8f0f1",
                                                    background: "#fafafa"
                                                }
                                            }, `b${idx}`, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                lineNumber: 523,
                                                columnNumber: 35
                                            }, this);
                                            const status = getStatus(ds);
                                            const sel = ds === selectedDate;
                                            const bks = bookingsByDate[ds] || [];
                                            const hasTB = timeBlocks.some((t)=>t.date === ds);
                                            const isOpen = openDates.has(ds);
                                            const bg = getCellBg(ds, status, sel);
                                            const isPastDay = status === "past";
                                            const dow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseD"])(ds)?.getDay();
                                            const cellStyle = {
                                                position: "relative",
                                                cursor: isPastDay ? "not-allowed" : "pointer",
                                                padding: "8px 8px 24px",
                                                borderRight: "1px solid #f8f0f1",
                                                borderBottom: "1px solid #f8f0f1",
                                                transition: "all 0.12s",
                                                ...bg ? {
                                                    background: bg
                                                } : {},
                                                ...status === "blocked-manual" ? {
                                                    backgroundImage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRIPE_HARD"]
                                                } : {},
                                                ...isBlocked(status) && status !== "blocked-manual" ? {
                                                    backgroundImage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRIPE_SOFT"]
                                                } : {},
                                                ...isPastDay ? {
                                                    opacity: 0.45
                                                } : {},
                                                ...sel ? {
                                                    boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.3)"
                                                } : {},
                                                ...isToday(ds) && !sel ? {
                                                    outline: "2.5px solid #A30A24",
                                                    outlineOffset: "-2px"
                                                } : {}
                                            };
                                            const numColor = sel ? "#fff" : isPastDay ? "#b0909a" : isBlocked(status) ? "#9a7075" : dow === 0 || dow === 6 ? "#c05070" : isToday(ds) ? "#A30A24" : "#1a0a0d";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: cellStyle,
                                                onClick: ()=>handleDayClick(ds),
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold leading-none",
                                                                style: {
                                                                    color: numColor,
                                                                    fontFamily: "'Georgia',serif"
                                                                },
                                                                children: parseInt(ds.split("-")[2])
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                lineNumber: 560,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-end gap-0.5",
                                                                children: [
                                                                    isToday(ds) && !sel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] font-extrabold px-1.5 py-0.5 rounded leading-none",
                                                                        style: {
                                                                            background: "#A30A24",
                                                                            color: "#fff"
                                                                        },
                                                                        children: "TODAY"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                        lineNumber: 565,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[8px] font-bold px-1 py-0.5 rounded leading-none",
                                                                        style: {
                                                                            background: "#059669",
                                                                            color: "#fff"
                                                                        },
                                                                        children: "OPEN"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                        lineNumber: 568,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                lineNumber: 563,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                        lineNumber: 559,
                                                        columnNumber: 23
                                                    }, this),
                                                    isBlocked(status) && !isToday(ds) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] font-semibold mt-0.5 leading-tight",
                                                        style: {
                                                            color: "#8a5560"
                                                        },
                                                        children: status === "blocked-manual" ? "Blocked" : status === "blocked-weekend" ? "Weekend" : status === "blocked-dayoff" ? "Day Off" : "Range"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                        lineNumber: 575,
                                                        columnNumber: 25
                                                    }, this),
                                                    hasTB && !isBlocked(status) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1 flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                                                style: {
                                                                    background: "#f59e0b"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                lineNumber: 583,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[8px] font-semibold",
                                                                style: {
                                                                    color: sel ? "rgba(255,255,255,0.8)" : "#b45309"
                                                                },
                                                                children: "Time block"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                lineNumber: 584,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                        lineNumber: 582,
                                                        columnNumber: 25
                                                    }, this),
                                                    bks.length > 0 && !isBlocked(status) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-1.5 left-0 right-0 flex items-center justify-center gap-0.5 flex-wrap px-2",
                                                        children: [
                                                            bks.slice(0, 3).map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                                                    style: {
                                                                        background: b.status === "Confirmed" ? "#10b981" : "#f59e0b"
                                                                    }
                                                                }, b.id, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 29
                                                                }, this)),
                                                            bks.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[8px] font-bold",
                                                                style: {
                                                                    color: sel ? "rgba(255,255,255,0.85)" : "#A30A24"
                                                                },
                                                                children: [
                                                                    "+",
                                                                    bks.length - 3
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                lineNumber: 595,
                                                                columnNumber: 46
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-full text-center text-[8px]",
                                                                style: {
                                                                    color: sel ? "rgba(255,255,255,0.75)" : "#9a6a72"
                                                                },
                                                                children: [
                                                                    bks.length,
                                                                    " bk",
                                                                    bks.length > 1 ? "s" : ""
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                lineNumber: 596,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                        lineNumber: 590,
                                                        columnNumber: 25
                                                    }, this),
                                                    !isPastDay && !isBlocked(status) && !sel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                                                        style: {
                                                            background: "rgba(163,10,36,0.05)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                        lineNumber: 604,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, ds, true, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                lineNumber: 557,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                        lineNumber: 521,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                lineNumber: 509,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                            lineNumber: 508,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                    lineNumber: 463,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: "w-80 shrink-0 flex flex-col overflow-hidden bg-white border-l",
                    style: {
                        borderColor: "#ede0e2"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex border-b shrink-0",
                            style: {
                                borderColor: "#ede0e2"
                            },
                            children: [
                                {
                                    id: "day",
                                    label: "Day Detail",
                                    ic: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].calendar
                                },
                                {
                                    id: "manage",
                                    label: "Availability",
                                    ic: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].settings
                                }
                            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setRightTab(t.id),
                                    className: "flex-1 flex items-center justify-center gap-1.5 py-3.5 text-xs font-semibold transition-all border-b-2",
                                    style: {
                                        borderColor: rightTab === t.id ? "#A30A24" : "transparent",
                                        color: rightTab === t.id ? "#A30A24" : "#9a6a72",
                                        background: rightTab === t.id ? "#fdf5f6" : "transparent"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                            d: t.ic,
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 624,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        t.label
                                    ]
                                }, t.id, true, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                    lineNumber: 621,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                            lineNumber: 619,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto",
                            children: [
                                rightTab === "day" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 space-y-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl p-4",
                                            style: {
                                                background: "#FEF0F2"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest mb-1",
                                                    style: {
                                                        color: "#A30A24"
                                                    },
                                                    children: "Selected Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 637,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-sm leading-snug",
                                                    style: {
                                                        color: "#1a0a0d",
                                                        fontFamily: "'Georgia',serif"
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayDate"])(selectedDate)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 641,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1.5 mt-2.5",
                                                    children: [
                                                        isToday(selectedDate) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] px-2 py-0.5 rounded-full font-bold text-white",
                                                            style: {
                                                                background: "#A30A24"
                                                            },
                                                            children: "Today"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 650,
                                                            columnNumber: 23
                                                        }, this),
                                                        selStatus === "past" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] px-2 py-0.5 rounded-full font-semibold",
                                                            style: {
                                                                background: "#f0e0e3",
                                                                color: "#9a6a72"
                                                            },
                                                            children: "Past"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 656,
                                                            columnNumber: 23
                                                        }, this),
                                                        isBlocked(selStatus) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] px-2 py-0.5 rounded-full font-semibold bg-red-100 text-red-700",
                                                            children: "Blocked"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 662,
                                                            columnNumber: 23
                                                        }, this),
                                                        !isBlocked(selStatus) && !isPast(selectedDate) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] px-2 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-700",
                                                            children: "Available"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 668,
                                                            columnNumber: 23
                                                        }, this),
                                                        selIsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] px-2 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-700",
                                                            children: "Opened"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 674,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 648,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 636,
                                            columnNumber: 17
                                        }, this),
                                        isBlocked(selStatus) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl p-3.5 flex gap-2.5 items-start",
                                            style: {
                                                background: "#fff7f7",
                                                border: "1px solid #fcd4d8"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].lock,
                                                    size: 14,
                                                    stroke: "#A30A24",
                                                    sw: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 685,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold",
                                                            style: {
                                                                color: "#A30A24"
                                                            },
                                                            children: selStatus === "blocked-manual" ? "Manually Blocked" : selStatus === "blocked-weekend" ? "Weekend (Blocked)" : selStatus === "blocked-dayoff" ? `${DAY_NAMES[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseD"])(selectedDate)?.getDay()]} (Day Off)` : `Range: ${selRange?.label || "Blocked"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 687,
                                                            columnNumber: 23
                                                        }, this),
                                                        selRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] mt-0.5",
                                                            style: {
                                                                color: "#9a6a72"
                                                            },
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayShort"])(selRange.start),
                                                                " — ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayShort"])(selRange.end)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 693,
                                                            columnNumber: 36
                                                        }, this),
                                                        isOverridable(selStatus) && !selIsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] mt-1",
                                                            style: {
                                                                color: "#b0707a"
                                                            },
                                                            children: "You can open this day as an exception."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 695,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 686,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 684,
                                            columnNumber: 19
                                        }, this),
                                        !isPast(selectedDate) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest",
                                                    style: {
                                                        color: "#7a4a50"
                                                    },
                                                    children: "Quick Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 704,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-2",
                                                    children: [
                                                        !isBlocked(selStatus) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: async ()=>await manualBlock(selectedDate),
                                                            className: "w-full py-2 px-3 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1.5 hover:bg-red-50 transition-colors",
                                                            style: {
                                                                borderColor: "#A30A24",
                                                                color: "#A30A24"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].lock,
                                                                    size: 12,
                                                                    sw: 2.5
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 717,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " Block This Day"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 712,
                                                            columnNumber: 25
                                                        }, this),
                                                        selStatus === "blocked-manual" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeBlockedDate(selectedDate),
                                                            className: "w-full py-2 px-3 rounded-lg text-xs font-bold text-white flex items-center justify-center gap-1.5",
                                                            style: {
                                                                background: "#059669"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].unlock,
                                                                    size: 12,
                                                                    sw: 2.5,
                                                                    stroke: "#fff"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 728,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " Unblock Day"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 723,
                                                            columnNumber: 25
                                                        }, this),
                                                        isOverridable(selStatus) && !selIsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openDate(selectedDate),
                                                            className: "w-full py-2 px-3 rounded-lg text-xs font-bold text-white flex items-center justify-center gap-1.5",
                                                            style: {
                                                                background: "#059669"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].unlock,
                                                                    size: 12,
                                                                    sw: 2.5,
                                                                    stroke: "#fff"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 739,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " Open This Day"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 734,
                                                            columnNumber: 25
                                                        }, this),
                                                        selIsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>closeDate(selectedDate),
                                                            className: "w-full py-2 px-3 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1.5 hover:bg-red-50 transition-colors",
                                                            style: {
                                                                borderColor: "#dc2626",
                                                                color: "#dc2626"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].lock,
                                                                    size: 12,
                                                                    sw: 2.5
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 750,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " Re-block Day"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 745,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 708,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 703,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest mb-2",
                                                    style: {
                                                        color: "#7a4a50"
                                                    },
                                                    children: [
                                                        "Bookings (",
                                                        selBookings.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 760,
                                                    columnNumber: 19
                                                }, this),
                                                selBookings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-6 rounded-xl",
                                                    style: {
                                                        background: "#fdfafa",
                                                        border: "1px dashed #e5d5d8"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                            d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].calendar,
                                                            size: 22,
                                                            stroke: "#d4a0a8",
                                                            sw: 1.5
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 765,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs mt-1.5",
                                                            style: {
                                                                color: "#b0707a"
                                                            },
                                                            children: "No bookings this day"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 766,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 764,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: selBookings.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-xl p-3",
                                                            style: {
                                                                background: "#fdfafa",
                                                                border: "1px solid #f0e0e3"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-mono font-bold px-1.5 py-0.5 rounded",
                                                                            style: {
                                                                                background: "#FEF0F2",
                                                                                color: "#A30A24"
                                                                            },
                                                                            children: b.id
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 772,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SB"][b.status] || ""}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `w-1 h-1 rounded-full ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SD"][b.status] || "bg-gray-400"}`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                    lineNumber: 774,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                b.status
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 773,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 771,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold",
                                                                    style: {
                                                                        color: "#1a0a0d"
                                                                    },
                                                                    children: [
                                                                        " ",
                                                                        typeof b.customer === "object" ? b.customer?.name : b.customer
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 777,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] mt-0.5",
                                                                    style: {
                                                                        color: "#9a6a72"
                                                                    },
                                                                    children: [
                                                                        " ",
                                                                        typeof b.service === "object" ? b.service?.title : b.service
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 780,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] mt-0.5 flex items-center gap-1",
                                                                    style: {
                                                                        color: "#b0707a"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                            d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].clock,
                                                                            size: 10,
                                                                            stroke: "#b0707a",
                                                                            sw: 2
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 784,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        " ",
                                                                        b.time
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 783,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, b.id, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 770,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 768,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 759,
                                            columnNumber: 17
                                        }, this),
                                        selTimeBlocks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest mb-2",
                                                    style: {
                                                        color: "#7a4a50"
                                                    },
                                                    children: "Time Blocks"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 795,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: selTimeBlocks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between rounded-lg px-3 py-2.5",
                                                            style: {
                                                                background: "#fffbeb",
                                                                border: "1px solid #fde68a"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-semibold",
                                                                            style: {
                                                                                color: "#92400e"
                                                                            },
                                                                            children: t.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 800,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px]",
                                                                            style: {
                                                                                color: "#b45309"
                                                                            },
                                                                            children: [
                                                                                t.startTime,
                                                                                " — ",
                                                                                t.endTime
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 801,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 799,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeTimeBlock(t.id),
                                                                    className: "w-6 h-6 rounded flex items-center justify-center hover:bg-amber-100 transition-colors",
                                                                    style: {
                                                                        color: "#b45309"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                        d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].close,
                                                                        size: 11,
                                                                        sw: 2.5
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                        lineNumber: 804,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 803,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, t.id, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 798,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 796,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 794,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                    lineNumber: 633,
                                    columnNumber: 15
                                }, this),
                                rightTab === "manage" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest mb-1",
                                                    style: {
                                                        color: "#7a4a50"
                                                    },
                                                    children: "Working Days"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 820,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] mb-3",
                                                    style: {
                                                        color: "#9a6a72"
                                                    },
                                                    children: "Tap a day to toggle it as a recurring day off."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 821,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-7 gap-1",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAYS_SHORT"].map((day, i)=>{
                                                        const isOff = dayOffsBlocked.has(i);
                                                        const isWknd = i === 0 || i === 6;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleDayOff(i),
                                                            className: "flex flex-col items-center py-1.5 rounded-lg text-[10px] font-bold transition-all",
                                                            style: {
                                                                background: isOff ? "#A30A24" : isWknd ? "#fef0f2" : "#fdfafa",
                                                                color: isOff ? "#fff" : isWknd ? "#c05070" : "#7a4a50",
                                                                border: `1.5px solid ${isOff ? "#A30A24" : "#e5d5d8"}`
                                                            },
                                                            children: day
                                                        }, day, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 827,
                                                            columnNumber: 25
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 822,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 819,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                            style: {
                                                borderColor: "#f0e0e3"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 837,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between rounded-xl p-3.5",
                                            style: {
                                                background: "#fdf5f6",
                                                border: "1px solid #f0d8db"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold",
                                                            style: {
                                                                color: "#1a0a0d"
                                                            },
                                                            children: "Block Weekends"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 842,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] mt-0.5",
                                                            style: {
                                                                color: "#9a6a72"
                                                            },
                                                            children: "Sat & Sun closed by default"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 843,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 841,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$components$2f$Toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    on: weekendsBlocked,
                                                    onChange: ()=>setWeekendsBlocked((v)=>!v)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 845,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 840,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                            style: {
                                                borderColor: "#f0e0e3"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 848,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest mb-3",
                                                    style: {
                                                        color: "#7a4a50"
                                                    },
                                                    children: "Add Block"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 852,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex rounded-xl overflow-hidden border mb-4",
                                                    style: {
                                                        borderColor: "#e0d0d2"
                                                    },
                                                    children: [
                                                        [
                                                            "date",
                                                            "📅 Date"
                                                        ],
                                                        [
                                                            "range",
                                                            "📆 Range"
                                                        ],
                                                        [
                                                            "time",
                                                            "🕐 Time"
                                                        ]
                                                    ].map(([mode, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setBlockMode(mode);
                                                                setMsg({
                                                                    text: "",
                                                                    ok: true
                                                                });
                                                            },
                                                            className: "flex-1 py-2 text-[10px] font-bold transition-all",
                                                            style: {
                                                                background: blockMode === mode ? "#A30A24" : "#fdfafa",
                                                                color: blockMode === mode ? "#fff" : "#9a6a72"
                                                            },
                                                            children: label
                                                        }, mode, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 857,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 855,
                                                    columnNumber: 19
                                                }, this),
                                                blockMode === "date" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold mb-1 uppercase tracking-wider",
                                                                    style: {
                                                                        color: "#7a3a42"
                                                                    },
                                                                    children: "Select Date *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 869,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"],
                                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                                                    value: blockDate,
                                                                    min: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TODAY"],
                                                                    onChange: (e)=>setBlockDate(e.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 870,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 868,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: addBlockDate,
                                                            className: "w-full py-2 rounded-lg text-xs font-bold text-white flex items-center justify-center gap-1.5 hover:opacity-90",
                                                            style: {
                                                                background: "#A30A24"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].lock,
                                                                    size: 12,
                                                                    sw: 2.5,
                                                                    stroke: "#fff"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 874,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Block This Date"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 872,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 867,
                                                    columnNumber: 21
                                                }, this),
                                                blockMode === "range" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold mb-1 uppercase tracking-wider",
                                                                            style: {
                                                                                color: "#7a3a42"
                                                                            },
                                                                            children: "From *"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 884,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "date",
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"],
                                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                                                            value: rangeStart,
                                                                            min: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TODAY"],
                                                                            onChange: (e)=>setRangeStart(e.target.value)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 885,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 883,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold mb-1 uppercase tracking-wider",
                                                                            style: {
                                                                                color: "#7a3a42"
                                                                            },
                                                                            children: "To *"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 888,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "date",
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"],
                                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                                                            value: rangeEnd,
                                                                            min: rangeStart || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TODAY"],
                                                                            onChange: (e)=>setRangeEnd(e.target.value)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 889,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 887,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 882,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold mb-1 uppercase tracking-wider",
                                                                    style: {
                                                                        color: "#7a3a42"
                                                                    },
                                                                    children: "Label"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 893,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"],
                                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                                                    placeholder: "e.g. Vacation, Holiday",
                                                                    value: rangeLabel,
                                                                    onChange: (e)=>setRangeLabel(e.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 894,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 892,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: addBlockRange,
                                                            className: "w-full py-2 rounded-lg text-xs font-bold text-white flex items-center justify-center gap-1.5 hover:opacity-90",
                                                            style: {
                                                                background: "#A30A24"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].lock,
                                                                    size: 12,
                                                                    sw: 2.5,
                                                                    stroke: "#fff"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 898,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Block Range"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 896,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 881,
                                                    columnNumber: 21
                                                }, this),
                                                blockMode === "time" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold mb-1 uppercase tracking-wider",
                                                                    style: {
                                                                        color: "#7a3a42"
                                                                    },
                                                                    children: "Date *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 907,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"],
                                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                                                    value: timeDate,
                                                                    min: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TODAY"],
                                                                    onChange: (e)=>setTimeDate(e.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 908,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 906,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold mb-1 uppercase tracking-wider",
                                                                            style: {
                                                                                color: "#7a3a42"
                                                                            },
                                                                            children: "From"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 912,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"],
                                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                                                            value: timeStart,
                                                                            onChange: (e)=>setTimeStart(e.target.value),
                                                                            children: TIME_OPTIONS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    children: t
                                                                                }, t, false, {
                                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                    lineNumber: 914,
                                                                                    columnNumber: 52
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 913,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 911,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold mb-1 uppercase tracking-wider",
                                                                            style: {
                                                                                color: "#7a3a42"
                                                                            },
                                                                            children: "To"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 918,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"],
                                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                                                            value: timeEnd,
                                                                            onChange: (e)=>setTimeEnd(e.target.value),
                                                                            children: TIME_OPTIONS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    children: t
                                                                                }, t, false, {
                                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                    lineNumber: 920,
                                                                                    columnNumber: 52
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 919,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 917,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 910,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold mb-1 uppercase tracking-wider",
                                                                    style: {
                                                                        color: "#7a3a42"
                                                                    },
                                                                    children: "Label"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 925,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"],
                                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                                                    placeholder: "e.g. Lunch Break, Reserved",
                                                                    value: timeLabel,
                                                                    onChange: (e)=>setTimeLabel(e.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 926,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 924,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleAddTimeBlock,
                                                            className: "w-full py-2 rounded-lg text-xs font-bold text-white flex items-center justify-center gap-1.5 hover:opacity-90",
                                                            style: {
                                                                background: "#f59e0b"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].clock,
                                                                    size: 12,
                                                                    sw: 2.5,
                                                                    stroke: "#fff"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 933,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Add Time Block"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                            lineNumber: 928,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 905,
                                                    columnNumber: 21
                                                }, this),
                                                msg.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 text-xs font-semibold px-3 py-2 rounded-lg",
                                                    style: {
                                                        background: msg.ok ? "#d1fae5" : "#fee2e2",
                                                        color: msg.ok ? "#059669" : "#dc2626"
                                                    },
                                                    children: [
                                                        msg.ok ? "✓ " : "⚠ ",
                                                        msg.text
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 939,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 851,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                            style: {
                                                borderColor: "#f0e0e3"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 945,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest mb-3",
                                                    style: {
                                                        color: "#7a4a50"
                                                    },
                                                    children: [
                                                        "Active Blocks (",
                                                        blockedDates.size + blockedRanges.length + timeBlocks.length + openDates.size,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 949,
                                                    columnNumber: 19
                                                }, this),
                                                blockedDates.size === 0 && blockedRanges.length === 0 && timeBlocks.length === 0 && openDates.size === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-center py-4",
                                                    style: {
                                                        color: "#b0707a"
                                                    },
                                                    children: "No active blocks or exceptions"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 954,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        [
                                                            ...blockedDates
                                                        ].sort().map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between rounded-lg px-3 py-2.5",
                                                                style: {
                                                                    background: "#fff7f7",
                                                                    border: "1px solid #fcd4d8"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-2 h-2 rounded-full flex-shrink-0",
                                                                            style: {
                                                                                background: "#A30A24"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 961,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[10px] font-bold",
                                                                                    style: {
                                                                                        color: "#A30A24"
                                                                                    },
                                                                                    children: "Manual Block"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                    lineNumber: 963,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[10px]",
                                                                                    style: {
                                                                                        color: "#9a6a72"
                                                                                    },
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayShort"])(d)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                    lineNumber: 964,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 962,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                    lineNumber: 960,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, d, false, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                lineNumber: 959,
                                                                columnNumber: 27
                                                            }, this)),
                                                        blockedRanges.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between rounded-lg px-3 py-2.5",
                                                                style: {
                                                                    background: "#fff7f7",
                                                                    border: "1px solid #fcd4d8"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-2 h-7 rounded-full flex-shrink-0",
                                                                                style: {
                                                                                    background: "#A30A24"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                lineNumber: 977,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[10px] font-bold",
                                                                                        style: {
                                                                                            color: "#A30A24"
                                                                                        },
                                                                                        children: r.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                        lineNumber: 979,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[10px]",
                                                                                        style: {
                                                                                            color: "#9a6a72"
                                                                                        },
                                                                                        children: [
                                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayShort"])(r.start),
                                                                                            " → ",
                                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayShort"])(r.end)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                        lineNumber: 980,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                lineNumber: 978,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                        lineNumber: 976,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>removeRange(r.id),
                                                                        className: "w-6 h-6 rounded flex items-center justify-center hover:bg-red-100",
                                                                        style: {
                                                                            color: "#A30A24"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                            d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].close,
                                                                            size: 11,
                                                                            sw: 2.5
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 984,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                        lineNumber: 983,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, r.id, true, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                lineNumber: 975,
                                                                columnNumber: 27
                                                            }, this)),
                                                        timeBlocks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between rounded-lg px-3 py-2.5",
                                                                style: {
                                                                    background: "#fffbeb",
                                                                    border: "1px solid #fde68a"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-2 h-2 rounded-full flex-shrink-0",
                                                                                style: {
                                                                                    background: "#f59e0b"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                lineNumber: 993,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[10px] font-bold",
                                                                                        style: {
                                                                                            color: "#92400e"
                                                                                        },
                                                                                        children: t.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                        lineNumber: 995,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[10px]",
                                                                                        style: {
                                                                                            color: "#b45309"
                                                                                        },
                                                                                        children: [
                                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayShort"])(t.date),
                                                                                            " · ",
                                                                                            t.startTime,
                                                                                            "–",
                                                                                            t.endTime
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                        lineNumber: 996,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                lineNumber: 994,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                        lineNumber: 992,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>removeTimeBlock(t.id),
                                                                        className: "w-6 h-6 rounded flex items-center justify-center hover:bg-amber-100",
                                                                        style: {
                                                                            color: "#b45309"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                            d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].close,
                                                                            size: 11,
                                                                            sw: 2.5
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 1000,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                        lineNumber: 999,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, t.id, true, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                lineNumber: 991,
                                                                columnNumber: 27
                                                            }, this)),
                                                        [
                                                            ...openDates
                                                        ].sort().map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between rounded-lg px-3 py-2.5",
                                                                style: {
                                                                    background: "#f0fdf4",
                                                                    border: "1px solid #bbf7d0"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-2 h-2 rounded-full flex-shrink-0",
                                                                                style: {
                                                                                    background: "#059669"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                lineNumber: 1009,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[10px] font-bold",
                                                                                        style: {
                                                                                            color: "#059669"
                                                                                        },
                                                                                        children: "Exception (Opened)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                        lineNumber: 1011,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[10px]",
                                                                                        style: {
                                                                                            color: "#065f46"
                                                                                        },
                                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayShort"])(d)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                        lineNumber: 1012,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                                lineNumber: 1010,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                        lineNumber: 1008,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>closeDate(d),
                                                                        className: "w-6 h-6 rounded flex items-center justify-center hover:bg-green-100",
                                                                        style: {
                                                                            color: "#059669"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                            d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].close,
                                                                            size: 11,
                                                                            sw: 2.5
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                            lineNumber: 1016,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                        lineNumber: 1015,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, d, true, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                                lineNumber: 1007,
                                                                columnNumber: 27
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                                    lineNumber: 955,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                            lineNumber: 948,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                                    lineNumber: 816,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                            lineNumber: 629,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
                    lineNumber: 616,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
            lineNumber: 460,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx",
        lineNumber: 458,
        columnNumber: 5
    }, this);
}
_s(CalendarTab, "PhyY1F9KJv13NkYTdHXLFc/AutQ=");
_c = CalendarTab;
var _c;
__turbopack_context__.k.register(_c, "CalendarTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/lib/postgres/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/postgres/api.ts
__turbopack_context__.s([
    "createBooking",
    ()=>createBooking,
    "fetchBlackoutDates",
    ()=>fetchBlackoutDates,
    "fetchBookedSlots",
    ()=>fetchBookedSlots,
    "fetchCalendarData",
    ()=>fetchCalendarData,
    "fetchPackages",
    ()=>fetchPackages
]);
async function createBooking(data) {
    const res = await fetch("/api/createBooking", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error((await res.json()).error || "Failed to create booking");
    }
    return res.json();
}
async function fetchBookedSlots(date) {
    const res = await fetch(`/api/bookedSlots?date=${encodeURIComponent(date)}`);
    if (!res.ok) return [];
    return res.json();
}
async function fetchBlackoutDates() {
    const res = await fetch("/api/blackoutDates");
    if (!res.ok) return [];
    return res.json();
}
async function fetchCalendarData() {
    const res = await fetch("/api/calendar");
    if (!res.ok) return {
        blockedDates: [],
        blockedRanges: [],
        timeBlocks: []
    };
    return res.json();
}
async function fetchPackages() {
    const res = await fetch("/api/packages");
    if (!res.ok) return [];
    return res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx [app-client] (ecmascript)");
"use client";
;
;
;
function DeleteModal({ title, onConfirm, onCancel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        style: {
            background: "rgba(26,10,13,0.45)",
            backdropFilter: "blur(4px)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden",
            style: {
                border: "1.5px solid #f0e0e3"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1.5 w-full",
                    style: {
                        background: "#A30A24"
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center",
                            style: {
                                background: "#fff0f1",
                                border: "1.5px solid #fcd4d8"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].trash,
                                size: 20,
                                stroke: "#A30A24",
                                sw: 1.8
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-bold text-sm mb-1",
                            style: {
                                color: "#1a0a0d",
                                fontFamily: "'Georgia',serif"
                            },
                            children: "Delete Package?"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs mb-5 leading-relaxed",
                            style: {
                                color: "#7a5560"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "#A30A24"
                                    },
                                    children: [
                                        '"',
                                        title,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                " will be permanently deleted.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
                                    lineNumber: 41,
                                    columnNumber: 107
                                }, this),
                                "This action cannot be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onCancel,
                                    className: "flex-1 py-2.5 rounded-xl text-xs font-bold border hover:bg-gray-50 transition-colors",
                                    style: {
                                        borderColor: "#e5d5d8",
                                        color: "#7a4a50"
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onConfirm,
                                    className: "flex-1 py-2.5 rounded-xl text-xs font-bold text-white hover:opacity-90",
                                    style: {
                                        background: "#A30A24"
                                    },
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = DeleteModal;
var _c;
__turbopack_context__.k.register(_c, "DeleteModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackageCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$components$2f$Toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/components/Toggle.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PackageCard({ pkg, onEdit, onDuplicate, onDelete, onToggle }) {
    _s();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl overflow-hidden transition-all duration-200",
        style: {
            background: "#fff",
            border: `1.5px solid ${pkg.isActive ? "#f0e0e3" : "#e8e0e1"}`,
            boxShadow: pkg.isActive ? "0 2px 16px rgba(163,10,36,0.07)" : "0 1px 6px rgba(0,0,0,0.04)",
            opacity: pkg.isActive ? 1 : 0.75
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5 w-full",
                style: {
                    background: pkg.color
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pt-4 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5",
                                        style: {
                                            background: `${pkg.color}15`,
                                            border: `1px solid ${pkg.color}30`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                            d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].pkg,
                                            size: 16,
                                            stroke: pkg.color,
                                            sw: 1.8
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-sm truncate",
                                                        style: {
                                                            color: "#1a0a0d",
                                                            fontFamily: "'Georgia',serif"
                                                        },
                                                        children: pkg.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                                        lineNumber: 36,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-extrabold px-2 py-0.5 rounded-full leading-none",
                                                        style: pkg.isActive ? {
                                                            background: "#d1fae5",
                                                            color: "#059669",
                                                            border: "1px solid #a7f3d0"
                                                        } : {
                                                            background: "#f3f3f4",
                                                            color: "#9a8a90",
                                                            border: "1px solid #e0d8da"
                                                        },
                                                        children: pkg.isActive ? "ACTIVE" : "INACTIVE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                                        lineNumber: 39,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                                lineNumber: 35,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mt-1 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1 text-[11px]",
                                                        style: {
                                                            color: "#9a6a72"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].clock,
                                                                size: 11,
                                                                stroke: "#9a6a72",
                                                                sw: 2
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                                                lineNumber: 48,
                                                                columnNumber: 19
                                                            }, this),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["durLabel"])(pkg.duration)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                                        lineNumber: 47,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1 text-[11px] font-bold",
                                                        style: {
                                                            color: pkg.color
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].peso,
                                                                size: 11,
                                                                stroke: pkg.color,
                                                                sw: 2
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                                                lineNumber: 52,
                                                                columnNumber: 19
                                                            }, this),
                                                            "₱",
                                                            Number(pkg.price).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                                        lineNumber: 51,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setExpanded((e)=>!e),
                                        className: "w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-red-50",
                                        style: {
                                            color: "#A30A24"
                                        },
                                        title: expanded ? "Collapse" : "Preview",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                            d: expanded ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].eyeoff : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].eye,
                                            size: 13,
                                            sw: 2
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onEdit(pkg),
                                        className: "w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-red-50",
                                        style: {
                                            color: "#A30A24"
                                        },
                                        title: "Edit",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                            d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].edit,
                                            size: 13,
                                            sw: 2
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onDuplicate(pkg),
                                        className: "w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-red-50",
                                        style: {
                                            color: "#A30A24"
                                        },
                                        title: "Duplicate",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                            d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].copy,
                                            size: 13,
                                            sw: 2
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onDelete(pkg.id),
                                        className: "w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-red-50",
                                        style: {
                                            color: "#c05070"
                                        },
                                        title: "Delete",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                            d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].trash,
                                            size: 13,
                                            sw: 2
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    pkg.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs mt-2.5 leading-relaxed",
                        style: {
                            color: "#7a5560"
                        },
                        children: pkg.description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pb-3 flex items-center gap-4 border-t",
                style: {
                    borderColor: "#f7eff0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 pt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].check,
                                size: 12,
                                stroke: "#059669",
                                sw: 2
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px]",
                                style: {
                                    color: "#6a8070"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "#1a3a2a"
                                        },
                                        children: pkg.inclusions.length
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    " inclusions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 pt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].gift,
                                size: 12,
                                stroke: "#A30A24",
                                sw: 2
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px]",
                                style: {
                                    color: "#7a5560"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "#1a0a0d"
                                        },
                                        children: pkg.addons.length
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    " add-ons"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t px-5 py-4 space-y-4",
                style: {
                    borderColor: "#f0e0e3",
                    background: "#fdf8f9"
                },
                children: [
                    pkg.inclusions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold uppercase tracking-widest mb-2",
                                style: {
                                    color: "#7a4a50"
                                },
                                children: "Inclusions"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1.5",
                                children: pkg.inclusions.map((inc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2 text-xs",
                                        style: {
                                            color: "#5a3a42"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center",
                                                style: {
                                                    background: "#d1fae5",
                                                    border: "1px solid #6ee7b7"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                    d: "M5 13l4 4L19 7",
                                                    size: 9,
                                                    stroke: "#059669",
                                                    sw: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                                    lineNumber: 120,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, this),
                                            inc.text
                                        ]
                                    }, inc.id, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this),
                    pkg.addons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold uppercase tracking-widest mb-2",
                                style: {
                                    color: "#7a4a50"
                                },
                                children: "Available Add-ons"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: pkg.addons.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold",
                                        style: {
                                            background: `${pkg.color}10`,
                                            border: `1px solid ${pkg.color}25`,
                                            color: pkg.color
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].plus,
                                                size: 9,
                                                stroke: pkg.color,
                                                sw: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, this),
                                            a.label,
                                            " — ₱",
                                            Number(a.price).toLocaleString()
                                        ]
                                    }, a.id, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                        lineNumber: 137,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                        lineNumber: 131,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(PackageCard, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c = PackageCard;
var _c;
__turbopack_context__.k.register(_c, "PackageCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/ui/sectionHeading.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx [app-client] (ecmascript)");
"use client";
;
;
;
function SectionHeading({ label, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-5 h-5 rounded flex items-center justify-center",
                style: {
                    background: "#fdf0f2"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                    d: icon,
                    size: 11,
                    stroke: "#A30A24",
                    sw: 2
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/ui/sectionHeading.jsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/ui/sectionHeading.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-bold uppercase tracking-widest",
                style: {
                    color: "#7a4a50"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/ui/sectionHeading.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 h-px",
                style: {
                    background: "#f0e0e3"
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/ui/sectionHeading.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/ui/sectionHeading.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/ui/divider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Divider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Divider() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-px w-full",
        style: {
            background: "#f0e0e3"
        }
    }, void 0, false, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/ui/divider.jsx",
        lineNumber: 2,
        columnNumber: 10
    }, this);
}
_c = Divider;
var _c;
__turbopack_context__.k.register(_c, "Divider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackageForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$ui$2f$sectionHeading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/ui/sectionHeading.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$components$2f$Toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/components/Toggle.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$ui$2f$divider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/ui/divider.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Simple uid generator to avoid uuid package
const uid = ()=>Math.random().toString(36).substr(2, 9);
function PackageForm({ initial, onSave, onCancel }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PackageForm.useState": ()=>({
                ...JSON.parse(JSON.stringify(initial)),
                type: initial.type || "portrait"
            })
    }["PackageForm.useState"]);
    const [newInc, setNewInc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newAddonLabel, setNewAddonLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newAddonPrice, setNewAddonPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const incRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setF = (k, v)=>setForm((f)=>({
                ...f,
                [k]: v
            }));
    // ── Inclusions ──
    const addInclusion = ()=>{
        const t = newInc.trim();
        if (!t) return;
        setF("inclusions", [
            ...form.inclusions,
            {
                id: uid(),
                text: t
            }
        ]);
        setNewInc("");
        setTimeout(()=>incRef.current?.focus(), 50);
    };
    const removeInclusion = (id)=>setF("inclusions", form.inclusions.filter((i)=>i.id !== id));
    const updateInclusion = (id, text)=>setF("inclusions", form.inclusions.map((i)=>i.id === id ? {
                ...i,
                text
            } : i));
    // ── Add-ons ──
    const addAddon = ()=>{
        const l = newAddonLabel.trim();
        const p = parseFloat(newAddonPrice);
        if (!l || isNaN(p) || p < 0) return;
        setF("addons", [
            ...form.addons,
            {
                id: uid(),
                label: l,
                price: p
            }
        ]);
        setNewAddonLabel("");
        setNewAddonPrice("");
    };
    const removeAddon = (id)=>setF("addons", form.addons.filter((a)=>a.id !== id));
    const updateAddon = (id, key, val)=>setF("addons", form.addons.map((a)=>a.id === id ? {
                ...a,
                [key]: val
            } : a));
    // ── Validation ──
    const validate = ()=>{
        const e = {};
        if (!form.title.trim()) e.title = "Package title is required";
        if (!form.price || isNaN(form.price) || Number(form.price) <= 0) e.price = "Valid price required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };
    const handleSave = async ()=>{
        if (!validate()) return;
        const payload = {
            ...form,
            price: Number(form.price),
            duration: Number(form.duration),
            isActive: !!form.isActive,
            type: form.type,
            inclusions: Array.isArray(form.inclusions) ? form.inclusions : [],
            addons: Array.isArray(form.addons) ? form.addons : []
        };
        try {
            const res = await fetch("/api/packages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (res.ok) {
                alert("Package saved successfully!");
                const savedPackage = {
                    ...payload,
                    id: data.id
                };
                onSave(savedPackage); // ✅ send correct object
            } else {
                console.error("API error:", data.error);
                alert("Failed to save package: " + (data.error || "Unknown error"));
            }
        } catch (err) {
            console.error("Network/server error:", err);
            alert("Failed to save package due to network/server error");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto p-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$ui$2f$sectionHeading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Basic Information",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].tag
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelCls"],
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelSty"],
                                        children: "Package Title *"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"]}${errors.title ? " border-red-400 ring-1 ring-red-200" : ""}`,
                                        style: errors.title ? {
                                            background: "#fff5f5"
                                        } : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                        value: form.title,
                                        onChange: (e)=>setF("title", e.target.value),
                                        placeholder: "e.g. Solo Shoot"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] mt-1 text-red-500 font-semibold",
                                        children: errors.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 109,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelCls"],
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelSty"],
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"],
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                            resize: "none"
                                        },
                                        rows: 3,
                                        value: form.description,
                                        onChange: (e)=>setF("description", e.target.value),
                                        placeholder: "Brief description…"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelCls"],
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelSty"],
                                                children: "Session Duration *"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"],
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                                value: form.duration,
                                                onChange: (e)=>setF("duration", Number(e.target.value)),
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION_OPTIONS"].map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: o.value,
                                                        children: o.label
                                                    }, o.value, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                        lineNumber: 124,
                                                        columnNumber: 44
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelCls"],
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelSty"],
                                                children: "Base Price (₱) *"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"]} pl-6${errors.price ? " border-red-400 ring-1 ring-red-200" : ""}`,
                                                    style: errors.price ? {
                                                        background: "#fff5f5"
                                                    } : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                                    type: "number",
                                                    min: "0",
                                                    step: "50",
                                                    value: form.price,
                                                    onChange: (e)=>setF("price", Number(e.target.value)),
                                                    placeholder: "e.g. 1500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            errors.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] mt-1 text-red-500 font-semibold",
                                                children: errors.price
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 136,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelCls"],
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelSty"],
                                                children: "Accent Color"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5 mt-1",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCENT_COLORS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        title: c,
                                                        onClick: ()=>setF("color", c),
                                                        className: "w-6 h-6 rounded-full transition-all flex items-center justify-center",
                                                        style: {
                                                            background: c,
                                                            border: form.color === c ? "2.5px solid #1a0a0d" : "2px solid transparent",
                                                            boxShadow: form.color === c ? "0 0 0 2px #fff, 0 0 0 4px " + c : "none"
                                                        },
                                                        children: form.color === c && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                            d: "M5 13l4 4L19 7",
                                                            size: 11,
                                                            stroke: "#fff",
                                                            sw: 2.5
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                            lineNumber: 150,
                                                            columnNumber: 42
                                                        }, this)
                                                    }, c, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelCls"],
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelSty"],
                                                children: "Visibility"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$components$2f$Toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        on: form.isActive,
                                                        onChange: ()=>setF("isActive", !form.isActive)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                        lineNumber: 158,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold",
                                                        style: {
                                                            color: form.isActive ? "#059669" : "#9a7a80"
                                                        },
                                                        children: form.isActive ? "Active — visible to clients" : "Inactive — hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$ui$2f$divider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$ui$2f$sectionHeading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Inclusions",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].check
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            form.inclusions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-center py-3 rounded-lg",
                                style: {
                                    color: "#b07a80",
                                    background: "#fdf8f9",
                                    border: "1px dashed #e5d5d8"
                                },
                                children: "No inclusions added yet"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            form.inclusions.map((inc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold",
                                            style: {
                                                background: "#fdf0f2",
                                                border: "1px solid #f5d0d5",
                                                color: "#A30A24"
                                            },
                                            children: idx + 1
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"]} flex-1`,
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                            value: inc.text,
                                            onChange: (e)=>updateInclusion(inc.id, e.target.value),
                                            placeholder: "Inclusion detail…"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeInclusion(inc.id),
                                            className: "w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-red-50 flex-shrink-0",
                                            style: {
                                                color: "#c05070"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].close,
                                                size: 12,
                                                sw: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, inc.id, true, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: incRef,
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"]} flex-1`,
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                        value: newInc,
                                        onChange: (e)=>setNewInc(e.target.value),
                                        onKeyDown: (e)=>e.key === "Enter" && addInclusion(),
                                        placeholder: "Type an inclusion and press Enter…"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: addInclusion,
                                        className: "px-3 py-2 rounded-lg text-xs font-bold text-white flex items-center gap-1 hover:opacity-90 transition-opacity flex-shrink-0",
                                        style: {
                                            background: "#A30A24"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].plus,
                                                size: 11,
                                                stroke: "#fff",
                                                sw: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this),
                                            " Add"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$ui$2f$divider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$ui$2f$sectionHeading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Available Add-ons",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].gift
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            form.addons.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-center py-3 rounded-lg",
                                style: {
                                    color: "#b07a80",
                                    background: "#fdf8f9",
                                    border: "1px dashed #e5d5d8"
                                },
                                children: "No add-ons configured yet"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this),
                            form.addons.map((a, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold",
                                            style: {
                                                background: "#fdf0f2",
                                                border: "1px solid #f5d0d5",
                                                color: "#A30A24"
                                            },
                                            children: idx + 1
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"]} flex-1`,
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                            value: a.label,
                                            onChange: (e)=>updateAddon(a.id, "label", e.target.value),
                                            placeholder: "Add-on name"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex-shrink-0 w-28",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold",
                                                    style: {
                                                        color: "#A30A24"
                                                    },
                                                    children: "₱"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"]} pl-5`,
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                                    type: "number",
                                                    min: "0",
                                                    step: "50",
                                                    value: a.price,
                                                    onChange: (e)=>updateAddon(a.id, "price", Number(e.target.value)),
                                                    placeholder: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeAddon(a.id),
                                            className: "w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-red-50 flex-shrink-0",
                                            style: {
                                                color: "#c05070"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].close,
                                                size: 12,
                                                sw: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, a.id, true, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"]} flex-1`,
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                        value: newAddonLabel,
                                        onChange: (e)=>setNewAddonLabel(e.target.value),
                                        onKeyDown: (e)=>e.key === "Enter" && addAddon(),
                                        placeholder: "Add-on label (e.g. Rush delivery)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-shrink-0 w-28",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold",
                                                style: {
                                                    color: "#A30A24"
                                                },
                                                children: "₱"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 247,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inp"]} pl-5`,
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inpSty"],
                                                type: "number",
                                                min: "0",
                                                step: "50",
                                                value: newAddonPrice,
                                                onChange: (e)=>setNewAddonPrice(e.target.value),
                                                onKeyDown: (e)=>e.key === "Enter" && addAddon(),
                                                placeholder: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: addAddon,
                                        className: "px-3 py-2 rounded-lg text-xs font-bold text-white flex items-center gap-1 hover:opacity-90 transition-opacity flex-shrink-0",
                                        style: {
                                            background: "#f59e0b"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].plus,
                                                size: 11,
                                                stroke: "#fff",
                                                sw: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                                lineNumber: 257,
                                                columnNumber: 15
                                            }, this),
                                            " Add"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$ui$2f$divider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$ui$2f$sectionHeading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Package Type",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].tag
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                        lineNumber: 267,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mt-2",
                        children: [
                            "portrait",
                            "rental"
                        ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setF("type", type),
                                className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${form.type === type ? "bg-[#A30A24] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                children: type.charAt(0).toUpperCase() + type.slice(1)
                            }, type, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 270,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                        lineNumber: 268,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                lineNumber: 266,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$ui$2f$divider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                lineNumber: 286,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-xl p-4",
                style: {
                    background: `${form.color}0d`,
                    border: `1.5px solid ${form.color}25`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-bold uppercase tracking-widest mb-3",
                        style: {
                            color: form.color
                        },
                        children: "Preview"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl flex items-center justify-center",
                                style: {
                                    background: `${form.color}15`,
                                    border: `1px solid ${form.color}30`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].pkg,
                                    size: 18,
                                    stroke: form.color,
                                    sw: 1.8
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold",
                                        style: {
                                            color: "#1a0a0d",
                                            fontFamily: "'Georgia',serif"
                                        },
                                        children: form.title || "Package Title"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] mt-0.5",
                                        style: {
                                            color: "#7a5560"
                                        },
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["durLabel"])(form.duration),
                                            " · ",
                                            form.price ? `₱${Number(form.price).toLocaleString()}` : "₱—",
                                            " · ",
                                            form.inclusions.length,
                                            " inclusions",
                                            form.addons.length > 0 && ` · ${form.addons.length} add-ons`
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-auto text-[9px] font-extrabold px-2 py-0.5 rounded-full",
                                style: form.isActive ? {
                                    background: "#d1fae5",
                                    color: "#059669",
                                    border: "1px solid #a7f3d0"
                                } : {
                                    background: "#f3f3f4",
                                    color: "#9a8a90",
                                    border: "1px solid #e0d8da"
                                },
                                children: form.isActive ? "ACTIVE" : "INACTIVE"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        className: "flex-1 py-2.5 rounded-xl text-xs font-bold border transition-colors hover:bg-red-50",
                        style: {
                            borderColor: "#e5d5d8",
                            color: "#7a4a50",
                            background: "#fff"
                        },
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        className: "flex-1 py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity",
                        style: {
                            background: "#A30A24"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].check,
                                size: 13,
                                stroke: "#fff",
                                sw: 2.5
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            initial.id ? "Save Changes" : "Create Package"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
                lineNumber: 312,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(PackageForm, "4msejV8vcyGH6QaxwX0p2rJnYkQ=");
_c = PackageForm;
var _c;
__turbopack_context__.k.register(_c, "PackageForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackagesTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/lib/postgres/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$DeleteModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/DeleteModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$PackageCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$PackageForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackageForm.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const uid = ()=>Math.random().toString(36).slice(2, 9);
function PackagesTab() {
    _s();
    const [navOpen, setNavOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [packages, setPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // null | pkg object (new pkg has id:"")
    const [deleteTarget, setDeleteTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterActive, setFilterActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all"); // "all" | "active" | "inactive"
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        text: "",
        ok: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PackagesTab.useEffect": ()=>{
            async function loadPackages() {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPackages"])();
                setPackages(data);
            }
            loadPackages();
        }
    }["PackagesTab.useEffect"], []);
    const flash = (text, ok = true)=>{
        setToast({
            text,
            ok
        });
        setTimeout(()=>setToast({
                text: "",
                ok: true
            }), 2800);
    };
    const filtered = packages.filter((p)=>{
        const q = search.toLowerCase();
        const matchSearch = p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
        const matchFilter = filterActive === "all" || (filterActive === "active" ? p.isActive : !p.isActive);
        return matchSearch && matchFilter;
    });
    const handleSave = (savedPkg)=>{
        setPackages((prev)=>{
            const exists = prev.some((p)=>p.id === savedPkg.id);
            if (exists) {
                return prev.map((p)=>p.id === savedPkg.id ? savedPkg : p);
            } else {
                return [
                    savedPkg,
                    ...prev
                ]; // add to top
            }
        });
        flash(savedPkg.id ? "Package updated successfully." : "Package created successfully.");
        setEditing(null);
    };
    const handleToggle = (id)=>{
        setPackages((ps)=>ps.map((p)=>p.id === id ? {
                    ...p,
                    isActive: !p.isActive
                } : p));
    };
    const handleDuplicate = (pkg)=>{
        const copy = {
            ...JSON.parse(JSON.stringify(pkg)),
            id: `pkg-${uid()}`,
            title: `${pkg.title} (Copy)`,
            isActive: false
        };
        setPackages((ps)=>[
                ...ps,
                copy
            ]);
        flash("Package duplicated.");
    };
    const handleDelete = ()=>{
        if (!deleteTarget) return;
        setPackages((ps)=>ps.filter((p)=>p.id !== deleteTarget.id));
        flash("Package deleted.", false);
        setDeleteTarget(null);
    };
    const activeCount = packages.filter((p)=>p.isActive).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen overflow-hidden",
        style: {
            background: "#f7f0f1",
            fontFamily: "'DM Sans','Segoe UI',sans-serif"
        },
        children: [
            deleteTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$DeleteModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: deleteTarget.title,
                onConfirm: handleDelete,
                onCancel: ()=>setDeleteTarget(null)
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            toast.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg",
                style: {
                    background: toast.ok ? "#d1fae5" : "#fee2e2",
                    color: toast.ok ? "#059669" : "#dc2626",
                    border: `1px solid ${toast.ok ? "#a7f3d0" : "#fca5a5"}`
                },
                children: [
                    toast.ok ? "✓ " : "⚠ ",
                    toast.text
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                lineNumber: 104,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "flex items-center justify-between px-7 py-4 bg-white border-b shrink-0",
                                style: {
                                    borderColor: "#ede0e2"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl font-bold",
                                                style: {
                                                    color: "#1a0a0d",
                                                    fontFamily: "'Georgia',serif"
                                                },
                                                children: "Service Packages"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs mt-0.5",
                                                style: {
                                                    color: "#9a6a72"
                                                },
                                                children: [
                                                    activeCount,
                                                    " active · ",
                                                    packages.length,
                                                    " total packages"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEditing(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_PKG"]),
                                        className: "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white hover:opacity-90 transition-opacity",
                                        style: {
                                            background: "#A30A24"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].plus,
                                                size: 13,
                                                stroke: "#fff",
                                                sw: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            "New Package"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 px-7 py-3 bg-white border-b shrink-0 flex-wrap",
                                style: {
                                    borderColor: "#ede0e2"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "12",
                                                    height: "12",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "#9a6a72",
                                                    strokeWidth: "2.5",
                                                    strokeLinecap: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "11",
                                                            cy: "11",
                                                            r: "8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M21 21l-4.35-4.35"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                            lineNumber: 146,
                                                            columnNumber: 51
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "pl-8 pr-3 py-2 rounded-xl text-xs border outline-none w-52 transition-all focus:border-[#A30A24] focus:ring-1 focus:ring-[#A30A24]/20 placeholder:text-[#9a6a72]",
                                                style: {
                                                    borderColor: "#e5d5d8",
                                                    background: "#fdfafa"
                                                },
                                                placeholder: "Search packages…",
                                                value: search,
                                                onChange: (e)=>setSearch(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            {
                                                key: "all",
                                                label: `All (${packages.length})`
                                            },
                                            {
                                                key: "active",
                                                label: `Active (${activeCount})`
                                            },
                                            {
                                                key: "inactive",
                                                label: `Inactive (${packages.length - activeCount})`
                                            }
                                        ].map(({ key, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setFilterActive(key),
                                                className: "px-3 py-1.5 rounded-full text-[11px] font-bold transition-all",
                                                style: filterActive === key ? {
                                                    background: "#A30A24",
                                                    color: "#fff",
                                                    border: "1px solid #A30A24"
                                                } : {
                                                    background: "transparent",
                                                    color: "#7a4a50",
                                                    border: "1px solid #e5d5d8"
                                                },
                                                children: label
                                            }, key, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-5",
                                children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center h-full gap-3 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-14 h-14 rounded-2xl flex items-center justify-center",
                                            style: {
                                                background: "#fdf0f2",
                                                border: "1.5px solid #f5d0d5"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].pkg,
                                                size: 26,
                                                stroke: "#c07080",
                                                sw: 1.5
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold",
                                            style: {
                                                color: "#7a4a50",
                                                fontFamily: "'Georgia',serif"
                                            },
                                            children: search ? "No matching packages" : "No packages yet"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs",
                                            style: {
                                                color: "#b07a80"
                                            },
                                            children: search ? "Try a different search term" : "Click \"New Package\" to create your first service package"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        !search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setEditing(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_PKG"]),
                                            className: "mt-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white hover:opacity-90",
                                            style: {
                                                background: "#A30A24"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                                        d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].plus,
                                                        size: 12,
                                                        stroke: "#fff",
                                                        sw: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                        lineNumber: 195,
                                                        columnNumber: 23
                                                    }, this),
                                                    " Create First Package"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                lineNumber: 194,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                            lineNumber: 191,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 max-w-2xl mx-auto",
                                    children: filtered.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$PackageCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            pkg: pkg,
                                            onEdit: setEditing,
                                            onDuplicate: handleDuplicate,
                                            onDelete: (id)=>setDeleteTarget(packages.find((p)=>p.id === id)),
                                            onToggle: handleToggle
                                        }, pkg.id, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    editing !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "w-[380px] shrink-0 flex flex-col overflow-hidden border-l",
                        style: {
                            background: "#fff",
                            borderColor: "#ede0e2"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-6 py-4 border-b shrink-0",
                                style: {
                                    borderColor: "#f0e0e3",
                                    background: "#fdf5f6"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-bold text-sm",
                                                style: {
                                                    color: "#1a0a0d",
                                                    fontFamily: "'Georgia',serif"
                                                },
                                                children: editing.id ? "Edit Package" : "New Package"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] mt-0.5",
                                                style: {
                                                    color: "#9a6a72"
                                                },
                                                children: editing.id ? `Editing: ${editing.title}` : "Fill in the details below"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEditing(null),
                                        className: "w-7 h-7 rounded-lg flex items-center justify-center hover:bg-red-50 transition-colors",
                                        style: {
                                            color: "#A30A24"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ic"], {
                                            d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].close,
                                            size: 15,
                                            sw: 2.2
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$PackageForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initial: editing,
                                onSave: handleSave,
                                onCancel: ()=>setEditing(null)
                            }, editing.id || "new", false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(PackagesTab, "QAEq+UPmXP4gujnWgtOTZkHYU8E=");
_c = PackagesTab;
var _c;
__turbopack_context__.k.register(_c, "PackagesTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingsDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/utils/dateUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/data/compData.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/StatCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/Modal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$BookingForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$ViewBooking$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/ViewBooking.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$DeleteConfirm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/DeleteConfirm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$CalendarComponents$2f$CalendarTab$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/CalendarComponents/CalendarTab.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$PackagesTab$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/PackagesComponents/PackagesTab.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function BookingsDashboard() {
    _s();
    const [bookings, setBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingsDashboard.useEffect": ()=>{
            const fetchBookings = {
                "BookingsDashboard.useEffect.fetchBookings": async ()=>{
                    try {
                        const res = await fetch("/api/bookings");
                        const data = await res.json();
                        // ✅ FIX: ensure it's always an array
                        const safeData = Array.isArray(data) ? data : [];
                        const normalized = safeData.map({
                            "BookingsDashboard.useEffect.fetchBookings.normalized": (b)=>({
                                    ...b,
                                    customerName: b.customer?.name || "Unknown",
                                    customerEmail: b.customer?.email || "",
                                    serviceTitle: b.service?.title || "Service"
                                })
                        }["BookingsDashboard.useEffect.fetchBookings.normalized"]);
                        setBookings(normalized);
                    } catch (err) {
                        console.error(err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["BookingsDashboard.useEffect.fetchBookings"];
            fetchBookings();
        }
    }["BookingsDashboard.useEffect"], []);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // { type: "create"|"edit"|"view"|"delete", booking? }
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Bookings");
    const filtered = bookings.filter((b)=>{
        const q = search.toLowerCase();
        const matchQ = !q || b.customer.name.toLowerCase().includes(q) || b.id.toLowerCase().includes(q) || b.service.title.toLowerCase().includes(q);
        const matchS = statusFilter === "All" || b.status === statusFilter;
        return matchQ && matchS;
    });
    const stats = {
        total: bookings.length,
        confirmed: bookings.filter((b)=>b.status === "Confirmed").length,
        pending: bookings.filter((b)=>b.status === "Pending").length,
        revenue: bookings.filter((b)=>b.status !== "Cancelled").reduce((s, b)=>s + b.totalPrice, 0)
    };
    const closeModal = ()=>setModal(null);
    const handleCreate = (data)=>{
        setBookings((prev)=>[
                ...prev,
                {
                    ...data,
                    id: uid(),
                    proof: null
                }
            ]);
        closeModal();
    };
    const handleEdit = (data)=>{
        setBookings((prev)=>prev.map((b)=>b.id === modal.booking.id ? {
                    ...b,
                    ...data,
                    id: b.id
                } : b));
        closeModal();
    };
    const handleDelete = ()=>{
        setBookings((prev)=>prev.filter((b)=>b.id !== modal.booking.id));
        closeModal();
    };
    // ── Update booking status ──
    const updateBookingStatus = async (id, newStatus)=>{
        const previous = bookings;
        try {
            // optimistic update
            setBookings((prev)=>prev.map((b)=>b.id === id ? {
                        ...b,
                        status: newStatus
                    } : b));
            const res = await fetch(`/api/bookings/${id}/status`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: newStatus
                })
            });
            if (!res.ok) throw new Error("Failed to update status");
        } catch (err) {
            console.error(err);
            // rollback
            setBookings(previous);
            alert("Failed to update booking status");
        }
    };
    const isPastBooking = (b)=>{
        if (!b.date) return false;
        const bookingDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseLocalDateTime"])(b.date, b.time); // returns Date object
        const now = new Date();
        return bookingDate < now;
    };
    const currentBookings = filtered.filter((b)=>!isPastBooking(b));
    const pastBookings = filtered.filter((b)=>isPastBooking(b));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen font-sans overflow-hidden",
        style: {
            background: "#f7f0f1",
            fontFamily: "'DM Sans', 'Segoe UI', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "flex flex-col shrink-0 transition-all duration-300",
                style: {
                    width: sidebarOpen ? 240 : 68,
                    background: "#A30A24",
                    color: "#fff"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 px-4 py-5 border-b",
                        style: {
                            borderColor: "rgba(255,255,255,0.1)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
                                style: {
                                    background: "rgba(255,255,255,0.2)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].logo,
                                    size: 18,
                                    stroke: "#fff",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-sm leading-tight",
                                        style: {
                                            fontFamily: "'Georgia', serif"
                                        },
                                        children: "StudioRed"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs opacity-60",
                                        children: "Booking Manager"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 py-4 space-y-1 px-2",
                        children: [
                            {
                                label: "Bookings",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].bookings
                            },
                            {
                                label: "Calendar",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].calendar
                            },
                            {
                                label: "Packages",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].package
                            }
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(item.label),
                                className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all",
                                style: {
                                    background: activeTab === item.label ? "rgba(255,255,255,0.18)" : "transparent",
                                    color: activeTab === item.label ? "#fff" : "rgba(255,255,255,0.65)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        d: item.icon,
                                        size: 16,
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                        lineNumber: 202,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSidebarOpen((o)=>!o),
                        className: "mx-2 mb-4 flex items-center justify-center gap-2 py-2 rounded-lg text-xs transition-colors",
                        style: {
                            background: "rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.75)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                d: sidebarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].close : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].filter,
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            sidebarOpen && "Collapse"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 overflow-y-auto px-7 py-6 space-y-6",
                    children: activeTab === "Calendar" ? // CalendarTab bookings prop mapping
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$CalendarComponents$2f$CalendarTab$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        bookings: bookings.map((b)=>{
                            const dt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseLocalDateTime"])(b.date, b.time);
                            return {
                                id: b.id,
                                status: b.status,
                                customer: b.customer?.name || "Unknown",
                                service: b.service?.title || "Service",
                                date: dt.toISOString().slice(0, 10),
                                time: dt.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })
                            };
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                        lineNumber: 229,
                        columnNumber: 13
                    }, this) : activeTab === "Packages" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$PackagesComponents$2f$PackagesTab$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                        lineNumber: 247,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-7 py-4 bg-white border-b",
                                style: {
                                    borderColor: "#ede0e2"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-xl font-bold",
                                            style: {
                                                color: "#1a0a0d",
                                                fontFamily: "'Georgia', serif"
                                            },
                                            children: "Bookings"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                            lineNumber: 255,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs mt-0.5",
                                            style: {
                                                color: "#9a6a72"
                                            },
                                            children: "Manage all your customer bookings"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                    lineNumber: 254,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Total Bookings",
                                        value: stats.total,
                                        sub: "All time",
                                        iconPath: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].bookings,
                                        accent: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Confirmed",
                                        value: stats.confirmed,
                                        sub: "Active bookings",
                                        iconPath: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].check
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                        lineNumber: 275,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Pending",
                                        value: stats.pending,
                                        sub: "Awaiting confirmation",
                                        iconPath: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].calendar
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Revenue",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtPrice"])(stats.revenue),
                                        sub: "Confirmed + Pending",
                                        iconPath: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].money
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                        lineNumber: 287,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl overflow-hidden",
                                style: {
                                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                                    border: "1px solid #f0e0e3"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 px-6 py-4 border-b",
                                        style: {
                                            borderColor: "#f5eaec"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1 max-w-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2",
                                                        style: {
                                                            color: "#b0707a"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].search,
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                            lineNumber: 313,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none text-[#6e6e6e]",
                                                        style: {
                                                            background: "#fdfafa",
                                                            border: "1.5px solid #e5d5d8"
                                                        },
                                                        placeholder: "Search bookings…",
                                                        value: search,
                                                        onChange: (e)=>setSearch(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                        lineNumber: 315,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1.5",
                                                children: [
                                                    "All",
                                                    "Confirmed",
                                                    "Pending",
                                                    "Cancelled"
                                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setStatusFilter(s),
                                                        className: "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all",
                                                        style: statusFilter === s ? {
                                                            background: "#A30A24",
                                                            color: "#fff"
                                                        } : {
                                                            background: "#fdfafa",
                                                            color: "#7a3a42",
                                                            border: "1.5px solid #e5d5d8"
                                                        },
                                                        children: s
                                                    }, s, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                        lineNumber: 328,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-auto text-xs",
                                                style: {
                                                    color: "#9a6a72"
                                                },
                                                children: [
                                                    filtered.length,
                                                    " record",
                                                    filtered.length !== 1 ? "s" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                        lineNumber: 304,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: "#fdf5f6"
                                                        },
                                                        children: [
                                                            "Booking ID",
                                                            "Customer",
                                                            "Service",
                                                            "Schedule",
                                                            "Total",
                                                            "Status",
                                                            "Actions"
                                                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left px-6 py-3.5 text-xs font-bold uppercase tracking-wider",
                                                                style: {
                                                                    color: "#b0707a"
                                                                },
                                                                children: h
                                                            }, h, false, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                lineNumber: 368,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                        lineNumber: 358,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                    lineNumber: 357,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 7,
                                                            className: "text-center py-16 text-sm",
                                                            style: {
                                                                color: "#b0707a"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                        d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].bookings,
                                                                        size: 28,
                                                                        stroke: "#d4a0a8",
                                                                        strokeWidth: 1.5
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                        lineNumber: 387,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    "No bookings found"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                lineNumber: 386,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                            lineNumber: 381,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                        lineNumber: 380,
                                                        columnNumber: 25
                                                    }, this) : currentBookings.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-t transition-colors hover:bg-red-50/40",
                                                            style: {
                                                                borderColor: "#f5eaec"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-xs font-bold px-2 py-1 rounded",
                                                                        style: {
                                                                            background: "#FEF0F2",
                                                                            color: "#A30A24"
                                                                        },
                                                                        children: b.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                        lineNumber: 405,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 404,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0",
                                                                                style: {
                                                                                    background: "#A30A24"
                                                                                },
                                                                                children: (b.customer?.name || b.customer || "?")[0]
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                                lineNumber: 417,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-semibold text-xs",
                                                                                        style: {
                                                                                            color: "#1a0a0d"
                                                                                        },
                                                                                        children: b.customer?.name || b.customer || "Unknown"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                                        lineNumber: 424,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs",
                                                                                        style: {
                                                                                            color: "#9a6a72"
                                                                                        },
                                                                                        children: b.customer?.email || "-"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                                        lineNumber: 432,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                                lineNumber: 423,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                        lineNumber: 416,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium text-xs",
                                                                            style: {
                                                                                color: "#1a0a0d"
                                                                            },
                                                                            children: b.service.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                            lineNumber: 442,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        b.addons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs mt-0.5",
                                                                            style: {
                                                                                color: "#9a6a72"
                                                                            },
                                                                            children: [
                                                                                b.addons.length,
                                                                                " add-on",
                                                                                b.addons.length > 1 ? "s" : ""
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                            lineNumber: 449,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 441,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-medium",
                                                                        style: {
                                                                            color: "#1a0a0d"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseLocalDateTime"])(b.date, b.time))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                        lineNumber: 459,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-xs",
                                                                        style: {
                                                                            color: "#A30A24",
                                                                            fontFamily: "'Georgia', serif"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtPrice"])(b.totalPrice)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                        lineNumber: 469,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 468,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-semibold ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_STYLES"][b.status]}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `w-1.5 h-1.5 rounded-full ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_DOT"][b.status]}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                                lineNumber: 483,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            b.status
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                        lineNumber: 480,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 479,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setModal({
                                                                                        type: "view",
                                                                                        booking: b
                                                                                    }),
                                                                                title: "View",
                                                                                className: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-red-50",
                                                                                style: {
                                                                                    color: "#A30A24"
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].eye,
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                                    lineNumber: 499,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                                lineNumber: 491,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setModal({
                                                                                        type: "edit",
                                                                                        booking: b
                                                                                    }),
                                                                                title: "Edit",
                                                                                className: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-blue-50",
                                                                                style: {
                                                                                    color: "#2563eb"
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].edit,
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                                    lineNumber: 509,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                                lineNumber: 501,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            b.status !== "Confirmed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>updateBookingStatus(b.id, "Confirmed"),
                                                                                className: "px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors cursor-pointer",
                                                                                title: "Mark as Confirmed",
                                                                                children: "Confirm"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                                lineNumber: 513,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            b.status !== "Cancelled" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>updateBookingStatus(b.id, "Cancelled"),
                                                                                className: "px-3 py-1.5 text-xs font-semibold rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer",
                                                                                title: "Mark as Cancelled",
                                                                                children: "Cancel"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                                lineNumber: 525,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                        lineNumber: 490,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, b.id, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                            lineNumber: 399,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                    lineNumber: 378,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                            lineNumber: 356,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                        lineNumber: 355,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                lineNumber: 296,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl overflow-hidden mt-6",
                                style: {
                                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                                    border: "1px solid #f0e0e3"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-4 border-b",
                                        style: {
                                            borderColor: "#f5eaec"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-bold",
                                            style: {
                                                color: "#A30A24"
                                            },
                                            children: "Past Bookings"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                            lineNumber: 557,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                        lineNumber: 553,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: "#fdf5f6"
                                                        },
                                                        children: [
                                                            "Booking ID",
                                                            "Customer",
                                                            "Service",
                                                            "Schedule",
                                                            "Total",
                                                            "Status"
                                                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left px-6 py-3.5 text-xs font-bold uppercase tracking-wider",
                                                                style: {
                                                                    color: "#b0707a"
                                                                },
                                                                children: h
                                                            }, h, false, {
                                                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                lineNumber: 577,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                        lineNumber: 568,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                    lineNumber: 567,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: pastBookings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 6,
                                                            className: "text-center py-10 text-xs",
                                                            children: "No past bookings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                            lineNumber: 591,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                        lineNumber: 590,
                                                        columnNumber: 25
                                                    }, this) : pastBookings.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-t",
                                                            style: {
                                                                borderColor: "#f5eaec"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: b.id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 602,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: b.customer?.name || "Unknown"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 604,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: b.service?.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 608,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseLocalDateTime"])(b.date, b.time))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 610,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtPrice"])(b.totalPrice)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 616,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `px-2 py-1 rounded text-xs ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$data$2f$compData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_STYLES"][b.status]}`,
                                                                        children: b.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                        lineNumber: 621,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, b.id, true, {
                                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                            lineNumber: 597,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                                    lineNumber: 588,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                            lineNumber: 566,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                        lineNumber: 565,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                                lineNumber: 546,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                        lineNumber: 249,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            modal?.type === "create" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "New Booking",
                onClose: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$BookingForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSave: handleCreate,
                    onCancel: closeModal
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                    lineNumber: 644,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                lineNumber: 643,
                columnNumber: 9
            }, this),
            modal?.type === "edit" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Edit Booking",
                onClose: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$BookingForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    initial: modal.booking,
                    onSave: handleEdit,
                    onCancel: closeModal
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                    lineNumber: 649,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                lineNumber: 648,
                columnNumber: 9
            }, this),
            modal?.type === "view" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Booking Details",
                onClose: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$ViewBooking$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    booking: modal.booking,
                    onClose: closeModal
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                    lineNumber: 658,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                lineNumber: 657,
                columnNumber: 9
            }, this),
            modal?.type === "delete" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Confirm Deletion",
                onClose: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$app$2f$dashboard$2f$DashboardComponents$2f$DeleteConfirm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    booking: modal.booking,
                    onConfirm: handleDelete,
                    onCancel: closeModal
                }, void 0, false, {
                    fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                    lineNumber: 663,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
                lineNumber: 662,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/dashboard/DashboardComponents/BookingDashboard.jsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s(BookingsDashboard, "1VXDrxyUi7Abkv45+CRc1yWT7UU=");
_c = BookingsDashboard;
var _c;
__turbopack_context__.k.register(_c, "BookingsDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_bcs-apps-frontend_apps_BCS-Studio-Website_8fb9198f._.js.map