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
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/lib/postgres/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "query",
    ()=>query
]);
// lib/postgres/db.ts
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const pool = global.pgPool || new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$pg$29$__["Pool"]({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: parseInt(process.env.PGPORT ?? "5432", 10)
});
if ("TURBOPACK compile-time truthy", 1) global.pgPool = pool;
const query = (text, params)=>pool.query(text, params);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/app/api/packages/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/lib/postgres/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/uuid/dist-node/v4.js [app-route] (ecmascript) <export default as v4>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
// ── Helper: upsert inclusions & add-ons ──
async function upsertDetails(packageId, inclusions, addons) {
    // Clear old records
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`DELETE FROM package_inclusions WHERE package_id = $1`, [
        packageId
    ]);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`DELETE FROM package_addons WHERE package_id = $1`, [
        packageId
    ]);
    // Insert new inclusions
    for (const inc of inclusions){
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`INSERT INTO package_inclusions (id, package_id, text) VALUES ($1, $2, $3)`, [
            inc.id,
            packageId,
            inc.text
        ]);
    }
    // Insert new add-ons
    for (const a of addons){
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`INSERT INTO package_addons (id, package_id, label, price) VALUES ($1, $2, $3, $4)`, [
            a.id,
            packageId,
            a.label,
            a.price
        ]);
    }
}
async function GET() {
    try {
        const packagesRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`SELECT * FROM packages ORDER BY created_at DESC`);
        const inclusionsRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`SELECT * FROM package_inclusions`);
        const addonsRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`SELECT * FROM package_addons`);
        const packages = packagesRes.rows.map((pkg)=>({
                ...pkg,
                isActive: pkg.is_active,
                inclusions: inclusionsRes.rows.filter((i)=>i.package_id === pkg.id).map((i)=>({
                        id: i.id,
                        text: i.text
                    })),
                addons: addonsRes.rows.filter((a)=>a.package_id === pkg.id).map((a)=>({
                        id: a.id,
                        label: a.label,
                        price: a.price
                    }))
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(packages);
    } catch (err) {
        console.error(err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch packages"
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        const body = await req.json();
        const { id, title, description = "", duration, price, isActive, color = "", type = "portrait", inclusions = [], addons = [] } = body;
        // Ensure packageId
        const packageId = id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
        if (id) {
            // Update existing package
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`UPDATE packages
         SET title=$1, description=$2, duration=$3, price=$4, is_active=$5, color=$6, type=$7
         WHERE id=$8`, [
                title,
                description,
                duration,
                price,
                isActive,
                color,
                type,
                id
            ]);
        } else {
            // Insert new package
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`INSERT INTO packages (id, title, description, duration, price, is_active, color, type, created_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,NOW())`, [
                packageId,
                title,
                description,
                duration,
                price,
                isActive,
                color,
                type
            ]);
        }
        // ── Upsert inclusions ──
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`DELETE FROM package_inclusions WHERE package_id = $1`, [
            packageId
        ]);
        for (const inc of inclusions){
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`INSERT INTO package_inclusions (id, package_id, text) VALUES ($1, $2, $3)`, [
                inc.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                packageId,
                inc.text
            ]);
        }
        // ── Upsert add-ons ──
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`DELETE FROM package_addons WHERE package_id = $1`, [
            packageId
        ]);
        for (const a of addons){
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$lib$2f$postgres$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`INSERT INTO package_addons (id, package_id, label, price) VALUES ($1, $2, $3, $4)`, [
                a.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                packageId,
                a.label,
                a.price
            ]);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            id: packageId
        });
    } catch (err) {
        console.error("Failed to save package:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to save package"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3a93ee39._.js.map