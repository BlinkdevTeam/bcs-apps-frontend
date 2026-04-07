module.exports = [
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].AppRouterContext; //# sourceMappingURL=app-router-context.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HooksClientContext; //# sourceMappingURL=hooks-client-context.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    NOT_FOUND_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    computeSelectedLayoutSegment: null,
    getSegmentValue: null,
    getSelectedLayoutSegmentPath: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    NOT_FOUND_SEGMENT_KEY: function() {
        return NOT_FOUND_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    computeSelectedLayoutSegment: function() {
        return computeSelectedLayoutSegment;
    },
    getSegmentValue: function() {
        return getSegmentValue;
    },
    getSelectedLayoutSegmentPath: function() {
        return getSelectedLayoutSegmentPath;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
function computeSelectedLayoutSegment(segments, parallelRouteKey) {
    if (!segments || segments.length === 0) {
        return null;
    }
    // For 'children', use first segment; for other parallel routes, use last segment
    const rawSegment = parallelRouteKey === 'children' ? segments[0] : segments[segments.length - 1];
    // If the default slot is showing, return null since it's not technically "selected" (it's a fallback)
    // Returning an internal value like `__DEFAULT__` would be confusing
    return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        node = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__';
const NOT_FOUND_SEGMENT_KEY = '/_not-found'; //# sourceMappingURL=segment.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].ServerInsertedHtml; //# sourceMappingURL=server-inserted-html.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UnrecognizedActionError: null,
    unstable_isUnrecognizedActionError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UnrecognizedActionError: function() {
        return UnrecognizedActionError;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    }
});
class UnrecognizedActionError extends Error {
    constructor(...args){
        super(...args);
        this.name = 'UnrecognizedActionError';
    }
}
function unstable_isUnrecognizedActionError(error) {
    return !!(error && typeof error === 'object' && error instanceof UnrecognizedActionError);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unrecognized-action-error.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function() {
        return ReadonlyURLSearchParams;
    }
});
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=readonly-url-search-params.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : "TURBOPACK unreachable";
function getRedirectError(url, type, statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect) {
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = `${_redirecterror.REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    type ??= actionAsyncStorage?.getStore()?.isAction ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type = _redirecterror.RedirectType.replace) {
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
function notFound() {
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};403`;
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`forbidden()\` is experimental and only allowed to be enabled when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};401`;
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`unauthorized()\` is experimental and only allowed to be used when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isHangingPromiseRejectionError: null,
    makeDevtoolsIOAwarePromise: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
    if (requestStore.stagedRendering) {
        // We resolve each stage in a timeout, so React DevTools will pick this up as IO.
        return requestStore.stagedRendering.delayUntilStage(stage, undefined, underlying);
    }
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
} //# sourceMappingURL=dynamic-rendering-utils.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createRenderInBrowserAbortSignal: null,
    delayUntilRuntimeStage: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    getStaticShellDisallowedDynamicReasons: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackDynamicHoleInRuntimeShell: null,
    trackDynamicHoleInStaticShell: null,
    useDynamicRouteParams: null,
    useDynamicSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
    },
    delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    getStaticShellDisallowedDynamicReasons: function() {
        return getStaticShellDisallowedDynamicReasons;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackDynamicHoleInRuntimeShell: function() {
        return trackDynamicHoleInRuntimeShell;
    },
    trackDynamicHoleInStaticShell: function() {
        return trackDynamicHoleInStaticShell;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    },
    useDynamicSearchParams: function() {
        return useDynamicSearchParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _boundaryconstants = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
                if (runtimeStagePromise) {
                    runtimeStagePromise.then(()=>(0, _scheduler.scheduleOnNextTick)(()=>controller.abort()));
                } else {
                    (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
function useDynamicSearchParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore) {
        // We assume pages router context and just return
        return;
    }
    if (!workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(expression);
    }
    switch(workUnitStore.type){
        case 'prerender-client':
            {
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                break;
            }
        case 'prerender-legacy':
        case 'prerender-ppr':
            {
                if (workStore.forceStatic) {
                    return;
                }
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(expression), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-runtime':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E795",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'unstable-cache':
        case 'private-cache':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E745",
                enumerable: false,
                configurable: true
            });
        case 'request':
            return;
        default:
            workUnitStore;
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data was accessed outside of ` + '<Suspense>. This delays the entire page from rendering, resulting in a ' + 'slow user experience. Learn more: ' + 'https://nextjs.org/docs/messages/blocking-route';
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function trackDynamicHoleInRuntimeShell(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function trackDynamicHoleInStaticShell(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    // TODO go back to owner stack here if available. This is temporarily using componentStack to get the right
    //
    error.stack = error.name + ': ' + message + (ownerStack || componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function getStaticShellDisallowedDynamicReasons(workStore, prelude, dynamicValidation) {
    if (dynamicValidation.hasSuspenseAboveBody) {
        // This route has opted into allowing fully dynamic rendering
        // by including a Suspense boundary above the body. In this case
        // a lack of a shell is not considered disallowed so we simply return
        return [];
    }
    if (prelude !== 0) {
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            return [
                Object.defineProperty(new _invarianterror.InvariantError(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
                    value: "E936",
                    enumerable: false,
                    configurable: true
                })
            ];
        }
    } else {
        // We have a prelude but we might still have dynamic metadata without any other dynamic access
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicErrors.length === 0 && dynamicValidation.dynamicMetadata) {
            return [
                dynamicValidation.dynamicMetadata
            ];
        }
    }
    // We had a non-empty prelude and there are no dynamic holes
    return [];
}
function delayUntilRuntimeStage(prerenderStore, result) {
    if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(()=>result);
    }
    return result;
} //# sourceMappingURL=dynamic-rendering.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)").unstable_rethrow : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)");
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    // We need the same class that was used to instantiate the context value
    // Otherwise instanceof checks will fail in usercode
    ReadonlyURLSearchParams: function() {
        return _hooksclientcontextsharedruntime.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)");
const _unrecognizedactionerror = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)");
const _navigationreactserver = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)");
const useDynamicRouteParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicRouteParams : "TURBOPACK unreachable";
const useDynamicSearchParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicSearchParams : "TURBOPACK unreachable";
function useSearchParams() {
    useDynamicSearchParams?.('useSearchParams()');
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _hooksclientcontextsharedruntime.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.searchParams);
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams?.('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    const pathname = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.pathname);
        }
    }
    return pathname;
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams?.('useParams()');
    const params = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.params);
        }
    }
    return params;
}
function useSelectedLayoutSegments(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            const promise = navigationPromises.selectedLayoutSegmentsPromises?.get(parallelRouteKey);
            if (promise) {
                // We should always have a promise here, but if we don't, it's not worth erroring over.
                // We just won't be able to instrument it, but can still provide the value.
                return (0, _react.use)(promise);
            }
        }
    }
    return (0, _segment.getSelectedLayoutSegmentPath)(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegment()');
    const navigationPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && navigationPromises && 'use' in _react.default) {
        const promise = navigationPromises.selectedLayoutSegmentPromises?.get(parallelRouteKey);
        if (promise) {
            // We should always have a promise here, but if we don't, it's not worth erroring over.
            // We just won't be able to instrument it, but can still provide the value.
            return (0, _react.use)(promise);
        }
    }
    return (0, _segment.computeSelectedLayoutSegment)(selectedLayoutSegments, parallelRouteKey);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-ssr] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/use-merged-ref.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parsePath", {
    enumerable: true,
    get: function() {
        return parsePath;
    }
});
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
} //# sourceMappingURL=parse-path.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathPrefix", {
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
});
const _parsepath = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-ssr] (ecmascript)");
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return `${prefix}${pathname}${query}${hash}`;
} //# sourceMappingURL=add-path-prefix.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeTrailingSlash", {
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
} //# sourceMappingURL=remove-trailing-slash.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/normalize-trailing-slash.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
});
const _removetrailingslash = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-ssr] (ecmascript)");
const _parsepath = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-ssr] (ecmascript)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith('/') || ("TURBOPACK compile-time value", void 0)) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return `${(0, _removetrailingslash.removeTrailingSlash)(pathname)}${query}${hash}`;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/add-base-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function() {
        return addBasePath;
    }
});
const _addpathprefix = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-ssr] (ecmascript)");
const _normalizetrailingslash = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/normalize-trailing-slash.js [app-ssr] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "warnOnce", {
    enumerable: true,
    get: function() {
        return warnOnce;
    }
});
let warnOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const warnings = new Set();
    warnOnce = (msg)=>{
        if (!warnings.has(msg)) {
            console.warn(msg);
        }
        warnings.add(msg);
    };
} //# sourceMappingURL=warn-once.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Shared types and constants for the Segment Cache.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    FetchStrategy: null,
    NavigationResultTag: null,
    PrefetchPriority: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FetchStrategy: function() {
        return FetchStrategy;
    },
    NavigationResultTag: function() {
        return NavigationResultTag;
    },
    PrefetchPriority: function() {
        return PrefetchPriority;
    }
});
var NavigationResultTag = /*#__PURE__*/ function(NavigationResultTag) {
    NavigationResultTag[NavigationResultTag["MPA"] = 0] = "MPA";
    NavigationResultTag[NavigationResultTag["Success"] = 1] = "Success";
    NavigationResultTag[NavigationResultTag["NoOp"] = 2] = "NoOp";
    NavigationResultTag[NavigationResultTag["Async"] = 3] = "Async";
    return NavigationResultTag;
}({});
var PrefetchPriority = /*#__PURE__*/ function(PrefetchPriority) {
    /**
   * Assigned to the most recently hovered/touched link. Special network
   * bandwidth is reserved for this task only. There's only ever one Intent-
   * priority task at a time; when a new Intent task is scheduled, the previous
   * one is bumped down to Default.
   */ PrefetchPriority[PrefetchPriority["Intent"] = 2] = "Intent";
    /**
   * The default priority for prefetch tasks.
   */ PrefetchPriority[PrefetchPriority["Default"] = 1] = "Default";
    /**
   * Assigned to tasks when they spawn non-blocking background work, like
   * revalidating a partially cached entry to see if more data is available.
   */ PrefetchPriority[PrefetchPriority["Background"] = 0] = "Background";
    return PrefetchPriority;
}({});
var FetchStrategy = /*#__PURE__*/ function(FetchStrategy) {
    // Deliberately ordered so we can easily compare two segments
    // and determine if one segment is "more specific" than another
    // (i.e. if it's likely that it contains more data)
    FetchStrategy[FetchStrategy["LoadingBoundary"] = 0] = "LoadingBoundary";
    FetchStrategy[FetchStrategy["PPR"] = 1] = "PPR";
    FetchStrategy[FetchStrategy["PPRRuntime"] = 2] = "PPRRuntime";
    FetchStrategy[FetchStrategy["Full"] = 3] = "Full";
    return FetchStrategy;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=types.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// TypeScript trick to simulate opaque types, like in Flow.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createCacheKey", {
    enumerable: true,
    get: function() {
        return createCacheKey;
    }
});
function createCacheKey(originalHref, nextUrl) {
    const originalUrl = new URL(originalHref);
    const cacheKey = {
        pathname: originalUrl.pathname,
        search: originalUrl.search,
        nextUrl: nextUrl
    };
    return cacheKey;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=cache-key.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/app-router-types.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * App Router types - Client-safe types for the Next.js App Router
 *
 * This file contains type definitions that can be safely imported
 * by both client-side and server-side code without circular dependencies.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HasLoadingBoundary", {
    enumerable: true,
    get: function() {
        return HasLoadingBoundary;
    }
});
var HasLoadingBoundary = /*#__PURE__*/ function(HasLoadingBoundary) {
    // There is a loading boundary in this particular segment
    HasLoadingBoundary[HasLoadingBoundary["SegmentHasLoadingBoundary"] = 1] = "SegmentHasLoadingBoundary";
    // There is a loading boundary somewhere in the subtree (but not in
    // this segment)
    HasLoadingBoundary[HasLoadingBoundary["SubtreeHasLoadingBoundary"] = 2] = "SubtreeHasLoadingBoundary";
    // There is no loading boundary in this segment or any of its descendants
    HasLoadingBoundary[HasLoadingBoundary["SubtreeHasNoLoadingBoundary"] = 3] = "SubtreeHasNoLoadingBoundary";
    return HasLoadingBoundary;
}({}); //# sourceMappingURL=app-router-types.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/match-segments.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "matchSegment", {
    enumerable: true,
    get: function() {
        return matchSegment;
    }
});
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === 'string') {
        if (typeof segment === 'string') {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === 'string') {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/app-router-headers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HEADER: null,
    FLIGHT_HEADERS: null,
    NEXT_ACTION_NOT_FOUND_HEADER: null,
    NEXT_ACTION_REVALIDATED_HEADER: null,
    NEXT_DID_POSTPONE_HEADER: null,
    NEXT_HMR_REFRESH_HASH_COOKIE: null,
    NEXT_HMR_REFRESH_HEADER: null,
    NEXT_HTML_REQUEST_ID_HEADER: null,
    NEXT_IS_PRERENDER_HEADER: null,
    NEXT_REQUEST_ID_HEADER: null,
    NEXT_REWRITTEN_PATH_HEADER: null,
    NEXT_REWRITTEN_QUERY_HEADER: null,
    NEXT_ROUTER_PREFETCH_HEADER: null,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: null,
    NEXT_ROUTER_STALE_TIME_HEADER: null,
    NEXT_ROUTER_STATE_TREE_HEADER: null,
    NEXT_RSC_UNION_QUERY: null,
    NEXT_URL: null,
    RSC_CONTENT_TYPE_HEADER: null,
    RSC_HEADER: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HEADER: function() {
        return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
    },
    NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return NEXT_ACTION_NOT_FOUND_HEADER;
    },
    NEXT_ACTION_REVALIDATED_HEADER: function() {
        return NEXT_ACTION_REVALIDATED_HEADER;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
    },
    NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_HTML_REQUEST_ID_HEADER: function() {
        return NEXT_HTML_REQUEST_ID_HEADER;
    },
    NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_REQUEST_ID_HEADER: function() {
        return NEXT_REQUEST_ID_HEADER;
    },
    NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = 'rsc';
const ACTION_HEADER = 'next-action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'next-router-state-tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'next-router-prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'next-router-segment-prefetch';
const NEXT_HMR_REFRESH_HEADER = 'next-hmr-refresh';
const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
const NEXT_URL = 'next-url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
const NEXT_ACTION_NOT_FOUND_HEADER = 'x-nextjs-action-not-found';
const NEXT_REQUEST_ID_HEADER = 'x-nextjs-request-id';
const NEXT_HTML_REQUEST_ID_HEADER = 'x-nextjs-html-request-id';
const NEXT_ACTION_REVALIDATED_HEADER = 'x-action-revalidated';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactServerDOMTurbopackClient; //# sourceMappingURL=react-server-dom-turbopack-client.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HMR_REFRESH: null,
    ACTION_NAVIGATE: null,
    ACTION_REFRESH: null,
    ACTION_RESTORE: null,
    ACTION_SERVER_ACTION: null,
    ACTION_SERVER_PATCH: null,
    PrefetchKind: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HMR_REFRESH: function() {
        return ACTION_HMR_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchKind: function() {
        return PrefetchKind;
    }
});
const ACTION_REFRESH = 'refresh';
const ACTION_NAVIGATE = 'navigate';
const ACTION_RESTORE = 'restore';
const ACTION_SERVER_PATCH = 'server-patch';
const ACTION_HMR_REFRESH = 'hmr-refresh';
const ACTION_SERVER_ACTION = 'server-action';
var PrefetchKind = /*#__PURE__*/ function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    return PrefetchKind;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/is-thenable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isThenable", {
    enumerable: true,
    get: function() {
        return isThenable;
    }
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/next-devtools/dev-overlay.shim.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    dispatcher: null,
    renderAppDevOverlay: null,
    renderPagesDevOverlay: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dispatcher: function() {
        return dispatcher;
    },
    renderAppDevOverlay: function() {
        return renderAppDevOverlay;
    },
    renderPagesDevOverlay: function() {
        return renderPagesDevOverlay;
    }
});
function renderAppDevOverlay() {
    throw Object.defineProperty(new Error("Next DevTools: Can't render in this environment. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E697",
        enumerable: false,
        configurable: true
    });
}
function renderPagesDevOverlay() {
    throw Object.defineProperty(new Error("Next DevTools: Can't render in this environment. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E697",
        enumerable: false,
        configurable: true
    });
}
const dispatcher = new Proxy({}, {
    get: (_, prop)=>{
        return ()=>{
            throw Object.defineProperty(new Error(`Next DevTools: Can't dispatch ${String(prop)} in this environment. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
                value: "E698",
                enumerable: false,
                configurable: true
            });
        };
    }
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-overlay.shim.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useAppDevRenderingIndicator", {
    enumerable: true,
    get: function() {
        return useAppDevRenderingIndicator;
    }
});
const _react = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _nextdevtools = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/next-devtools/dev-overlay.shim.js [app-ssr] (ecmascript)");
const useAppDevRenderingIndicator = ()=>{
    const [isPending, startTransition] = (0, _react.useTransition)();
    (0, _react.useEffect)(()=>{
        if (isPending) {
            _nextdevtools.dispatcher.renderingIndicatorShow();
        } else {
            _nextdevtools.dispatcher.renderingIndicatorHide();
        }
    }, [
        isPending
    ]);
    return startTransition;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-app-dev-rendering-indicator.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/use-action-queue.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    dispatchAppRouterAction: null,
    useActionQueue: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dispatchAppRouterAction: function() {
        return dispatchAppRouterAction;
    },
    useActionQueue: function() {
        return useActionQueue;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _isthenable = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/is-thenable.js [app-ssr] (ecmascript)");
// The app router state lives outside of React, so we can import the dispatch
// method directly wherever we need it, rather than passing it around via props
// or context.
let dispatch = null;
function dispatchAppRouterAction(action) {
    if (dispatch === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    dispatch(action);
}
const __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
const promisesWithDebugInfo = ("TURBOPACK compile-time truthy", 1) ? new WeakMap() : "TURBOPACK unreachable";
function useActionQueue(actionQueue) {
    const [state, setState] = _react.default.useState(actionQueue.state);
    // Because of a known issue that requires to decode Flight streams inside the
    // render phase, we have to be a bit clever and assign the dispatch method to
    // a module-level variable upon initialization. The useState hook in this
    // module only exists to synchronize state that lives outside of React.
    // Ideally, what we'd do instead is pass the state as a prop to root.render;
    // this is conceptually how we're modeling the app router state, despite the
    // weird implementation details.
    if ("TURBOPACK compile-time truthy", 1) {
        const { useAppDevRenderingIndicator } = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-ssr] (ecmascript)");
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const appDevRenderingIndicator = useAppDevRenderingIndicator();
        dispatch = (action)=>{
            appDevRenderingIndicator(()=>{
                actionQueue.dispatch(action, setState);
            });
        };
    } else //TURBOPACK unreachable
    ;
    // When navigating to a non-prefetched route, then App Router state will be
    // blocked until the server responds. We need to transfer the `_debugInfo`
    // from the underlying Flight response onto the top-level promise that is
    // passed to React (via `use`) so that the latency is accurately represented
    // in the React DevTools.
    const stateWithDebugInfo = (0, _react.useMemo)(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ((0, _isthenable.isThenable)(state)) {
            // useMemo can't be used to cache a Promise since the memoized value is thrown
            // away when we suspend. So we use a WeakMap to cache the Promise with debug info.
            let promiseWithDebugInfo = promisesWithDebugInfo.get(state);
            if (promiseWithDebugInfo === undefined) {
                const debugInfo = [];
                promiseWithDebugInfo = Promise.resolve(state).then((asyncState)=>{
                    if (asyncState.debugInfo !== null) {
                        debugInfo.push(...asyncState.debugInfo);
                    }
                    return asyncState;
                });
                promiseWithDebugInfo._debugInfo = debugInfo;
                promisesWithDebugInfo.set(state, promiseWithDebugInfo);
            }
            return promiseWithDebugInfo;
        }
        return state;
    }, [
        state
    ]);
    return (0, _isthenable.isThenable)(stateWithDebugInfo) ? (0, _react.use)(stateWithDebugInfo) : stateWithDebugInfo;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-action-queue.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "callServer", {
    enumerable: true,
    get: function() {
        return callServer;
    }
});
const _react = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/use-action-queue.js [app-ssr] (ecmascript)");
async function callServer(actionId, actionArgs) {
    return new Promise((resolve, reject)=>{
        (0, _react.startTransition)(()=>{
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                actionId,
                actionArgs,
                resolve,
                reject
            });
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findSourceMapURL", {
    enumerable: true,
    get: function() {
        return findSourceMapURL;
    }
});
const basePath = ("TURBOPACK compile-time value", "") || '';
const pathname = `${basePath}/__nextjs_source-map`;
const findSourceMapURL = ("TURBOPACK compile-time truthy", 1) ? function findSourceMapURL(filename) {
    if (filename === '') {
        return null;
    }
    if (filename.startsWith(document.location.origin) && filename.includes('/_next/static')) {
        // This is a request for a client chunk. This can only happen when
        // using Turbopack. In this case, since we control how those source
        // maps are generated, we can safely assume that the sourceMappingURL
        // is relative to the filename, with an added `.map` extension. The
        // browser can just request this file, and it gets served through the
        // normal dev server, without the need to route this through
        // the `/__nextjs_source-map` dev middleware.
        return `${filename}.map`;
    }
    const url = new URL(pathname, document.location.origin);
    url.searchParams.set('filename', filename);
    return url.href;
} : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-find-source-map-url.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HEAD_REQUEST_KEY: null,
    ROOT_SEGMENT_REQUEST_KEY: null,
    appendSegmentRequestKeyPart: null,
    convertSegmentPathToStaticExportFilename: null,
    createSegmentRequestKeyPart: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HEAD_REQUEST_KEY: function() {
        return HEAD_REQUEST_KEY;
    },
    ROOT_SEGMENT_REQUEST_KEY: function() {
        return ROOT_SEGMENT_REQUEST_KEY;
    },
    appendSegmentRequestKeyPart: function() {
        return appendSegmentRequestKeyPart;
    },
    convertSegmentPathToStaticExportFilename: function() {
        return convertSegmentPathToStaticExportFilename;
    },
    createSegmentRequestKeyPart: function() {
        return createSegmentRequestKeyPart;
    }
});
const _segment = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const ROOT_SEGMENT_REQUEST_KEY = '';
const HEAD_REQUEST_KEY = '/_head';
function createSegmentRequestKeyPart(segment) {
    if (typeof segment === 'string') {
        if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
            // The Flight Router State type sometimes includes the search params in
            // the page segment. However, the Segment Cache tracks this as a separate
            // key. So, we strip the search params here, and then add them back when
            // the cache entry is turned back into a FlightRouterState. This is an
            // unfortunate consequence of the FlightRouteState being used both as a
            // transport type and as a cache key; we'll address this once more of the
            // Segment Cache implementation has settled.
            // TODO: We should hoist the search params out of the FlightRouterState
            // type entirely, This is our plan for dynamic route params, too.
            return _segment.PAGE_SEGMENT_KEY;
        }
        const safeName = // But params typically don't include the leading slash. We should use
        // a different encoding to avoid this special case.
        segment === '/_not-found' ? '_not-found' : encodeToFilesystemAndURLSafeString(segment);
        // Since this is not a dynamic segment, it's fully encoded. It does not
        // need to be "hydrated" with a param value.
        return safeName;
    }
    const name = segment[0];
    const paramType = segment[2];
    const safeName = encodeToFilesystemAndURLSafeString(name);
    const encodedName = '$' + paramType + '$' + safeName;
    return encodedName;
}
function appendSegmentRequestKeyPart(parentRequestKey, parallelRouteKey, childRequestKeyPart) {
    // Aside from being filesystem safe, segment keys are also designed so that
    // each segment and parallel route creates its own subdirectory. Roughly in
    // the same shape as the source app directory. This is mostly just for easier
    // debugging (you can open up the build folder and navigate the output); if
    // we wanted to do we could just use a flat structure.
    // Omit the parallel route key for children, since this is the most
    // common case. Saves some bytes (and it's what the app directory does).
    const slotKey = parallelRouteKey === 'children' ? childRequestKeyPart : `@${encodeToFilesystemAndURLSafeString(parallelRouteKey)}/${childRequestKeyPart}`;
    return parentRequestKey + '/' + slotKey;
}
// Define a regex pattern to match the most common characters found in a route
// param. It excludes anything that might not be cross-platform filesystem
// compatible, like |. It does not need to be precise because the fallback is to
// just base64url-encode the whole parameter, which is fine; we just don't do it
// by default for compactness, and for easier debugging.
const simpleParamValueRegex = /^[a-zA-Z0-9\-_@]+$/;
function encodeToFilesystemAndURLSafeString(value) {
    if (simpleParamValueRegex.test(value)) {
        return value;
    }
    // If there are any unsafe characters, base64url-encode the entire value.
    // We also add a ! prefix so it doesn't collide with the simple case.
    const base64url = btoa(value).replace(/\+/g, '-') // Replace '+' with '-'
    .replace(/\//g, '_') // Replace '/' with '_'
    .replace(/=+$/, '') // Remove trailing '='
    ;
    return '!' + base64url;
}
function convertSegmentPathToStaticExportFilename(segmentPath) {
    return `__next${segmentPath.replace(/\//g, '.')}.txt`;
} //# sourceMappingURL=segment-value-encoding.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/route-params.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    doesStaticSegmentAppearInURL: null,
    getCacheKeyForDynamicParam: null,
    getParamValueFromCacheKey: null,
    getRenderedPathname: null,
    getRenderedSearch: null,
    parseDynamicParamFromURLPart: null,
    urlSearchParamsToParsedUrlQuery: null,
    urlToUrlWithoutFlightMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    doesStaticSegmentAppearInURL: function() {
        return doesStaticSegmentAppearInURL;
    },
    getCacheKeyForDynamicParam: function() {
        return getCacheKeyForDynamicParam;
    },
    getParamValueFromCacheKey: function() {
        return getParamValueFromCacheKey;
    },
    getRenderedPathname: function() {
        return getRenderedPathname;
    },
    getRenderedSearch: function() {
        return getRenderedSearch;
    },
    parseDynamicParamFromURLPart: function() {
        return parseDynamicParamFromURLPart;
    },
    urlSearchParamsToParsedUrlQuery: function() {
        return urlSearchParamsToParsedUrlQuery;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    }
});
const _segment = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _segmentvalueencoding = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-ssr] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/app-router-headers.js [app-ssr] (ecmascript)");
function getRenderedSearch(response) {
    // If the server performed a rewrite, the search params used to render the
    // page will be different from the params in the request URL. In this case,
    // the response will include a header that gives the rewritten search query.
    const rewrittenQuery = response.headers.get(_approuterheaders.NEXT_REWRITTEN_QUERY_HEADER);
    if (rewrittenQuery !== null) {
        return rewrittenQuery === '' ? '' : '?' + rewrittenQuery;
    }
    // If the header is not present, there was no rewrite, so we use the search
    // query of the response URL.
    return urlToUrlWithoutFlightMarker(new URL(response.url)).search;
}
function getRenderedPathname(response) {
    // If the server performed a rewrite, the pathname used to render the
    // page will be different from the pathname in the request URL. In this case,
    // the response will include a header that gives the rewritten pathname.
    const rewrittenPath = response.headers.get(_approuterheaders.NEXT_REWRITTEN_PATH_HEADER);
    return rewrittenPath ?? urlToUrlWithoutFlightMarker(new URL(response.url)).pathname;
}
function parseDynamicParamFromURLPart(paramType, pathnameParts, partIndex) {
    // This needs to match the behavior in get-dynamic-param.ts.
    switch(paramType){
        // Catchalls
        case 'c':
            {
                // Catchalls receive all the remaining URL parts. If there are no
                // remaining pathname parts, return an empty array.
                return partIndex < pathnameParts.length ? pathnameParts.slice(partIndex).map((s)=>encodeURIComponent(s)) : [];
            }
        // Catchall intercepted
        case 'ci(..)(..)':
        case 'ci(.)':
        case 'ci(..)':
        case 'ci(...)':
            {
                const prefix = paramType.length - 2;
                return partIndex < pathnameParts.length ? pathnameParts.slice(partIndex).map((s, i)=>{
                    if (i === 0) {
                        return encodeURIComponent(s.slice(prefix));
                    }
                    return encodeURIComponent(s);
                }) : [];
            }
        // Optional catchalls
        case 'oc':
            {
                // Optional catchalls receive all the remaining URL parts, unless this is
                // the end of the pathname, in which case they return null.
                return partIndex < pathnameParts.length ? pathnameParts.slice(partIndex).map((s)=>encodeURIComponent(s)) : null;
            }
        // Dynamic
        case 'd':
            {
                if (partIndex >= pathnameParts.length) {
                    // The route tree expected there to be more parts in the URL than there
                    // actually are. This could happen if the x-nextjs-rewritten-path header
                    // is incorrectly set, or potentially due to bug in Next.js. TODO:
                    // Should this be a hard error? During a prefetch, we can just abort.
                    // During a client navigation, we could trigger a hard refresh. But if
                    // it happens during initial render, we don't really have any
                    // recovery options.
                    return '';
                }
                return encodeURIComponent(pathnameParts[partIndex]);
            }
        // Dynamic intercepted
        case 'di(..)(..)':
        case 'di(.)':
        case 'di(..)':
        case 'di(...)':
            {
                const prefix = paramType.length - 2;
                if (partIndex >= pathnameParts.length) {
                    // The route tree expected there to be more parts in the URL than there
                    // actually are. This could happen if the x-nextjs-rewritten-path header
                    // is incorrectly set, or potentially due to bug in Next.js. TODO:
                    // Should this be a hard error? During a prefetch, we can just abort.
                    // During a client navigation, we could trigger a hard refresh. But if
                    // it happens during initial render, we don't really have any
                    // recovery options.
                    return '';
                }
                return encodeURIComponent(pathnameParts[partIndex].slice(prefix));
            }
        default:
            paramType;
            return '';
    }
}
function doesStaticSegmentAppearInURL(segment) {
    // This is not a parameterized segment; however, we need to determine
    // whether or not this segment appears in the URL. For example, this route
    // groups do not appear in the URL, so they should be skipped. Any other
    // special cases must be handled here.
    // TODO: Consider encoding this directly into the router tree instead of
    // inferring it on the client based on the segment type. Something like
    // a `doesAppearInURL` flag in FlightRouterState.
    if (segment === _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY || // For some reason, the loader tree sometimes includes extra __PAGE__
    // "layouts" when part of a parallel route. But it's not a leaf node.
    // Otherwise, we wouldn't need this special case because pages are
    // always leaf nodes.
    // TODO: Investigate why the loader produces these fake page segments.
    segment.startsWith(_segment.PAGE_SEGMENT_KEY) || // Route groups.
    segment[0] === '(' && segment.endsWith(')') || segment === _segment.DEFAULT_SEGMENT_KEY || segment === '/_not-found') {
        return false;
    } else {
        // All other segment types appear in the URL
        return true;
    }
}
function getCacheKeyForDynamicParam(paramValue, renderedSearch) {
    // This needs to match the logic in get-dynamic-param.ts, until we're able to
    // unify the various implementations so that these are always computed on
    // the client.
    if (typeof paramValue === 'string') {
        // TODO: Refactor or remove this helper function to accept a string rather
        // than the whole segment type. Also we can probably just append the
        // search string instead of turning it into JSON.
        const pageSegmentWithSearchParams = (0, _segment.addSearchParamsIfPageSegment)(paramValue, Object.fromEntries(new URLSearchParams(renderedSearch)));
        return pageSegmentWithSearchParams;
    } else if (paramValue === null) {
        return '';
    } else {
        return paramValue.join('/');
    }
}
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return urlWithoutFlightParameters;
}
function getParamValueFromCacheKey(paramCacheKey, paramType) {
    // Turn the cache key string sent by the server (as part of FlightRouterState)
    // into a value that can be passed to `useParams` and client components.
    const isCatchAll = paramType === 'c' || paramType === 'oc';
    if (isCatchAll) {
        // Catch-all param keys are a concatenation of the path segments.
        // See equivalent logic in `getSelectedParams`.
        // TODO: We should just pass the array directly, rather than concatenate
        // it to a string and then split it back to an array. It needs to be an
        // array in some places, like when passing a key React, but we can convert
        // it at runtime in those places.
        return paramCacheKey.split('/');
    }
    return paramCacheKey;
}
function urlSearchParamsToParsedUrlQuery(searchParams) {
    // Converts a URLSearchParams object to the same type used by the server when
    // creating search params props, i.e. the type returned by Node's
    // "querystring" module.
    const result = {};
    for (const [key, value] of searchParams.entries()){
        if (result[key] === undefined) {
            result[key] = value;
        } else if (Array.isArray(result[key])) {
            result[key].push(value);
        } else {
            result[key] = [
                result[key],
                value
            ];
        }
    }
    return result;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-params.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createHrefFromUrl", {
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
});
function createHrefFromUrl(url, includeHash = true) {
    return url.pathname + url.search + (includeHash ? url.hash : '');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/flight-data-helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createInitialRSCPayloadFromFallbackPrerender: null,
    getFlightDataPartsFromPath: null,
    getNextFlightSegmentPath: null,
    normalizeFlightData: null,
    prepareFlightRouterStateForRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createInitialRSCPayloadFromFallbackPrerender: function() {
        return createInitialRSCPayloadFromFallbackPrerender;
    },
    getFlightDataPartsFromPath: function() {
        return getFlightDataPartsFromPath;
    },
    getNextFlightSegmentPath: function() {
        return getNextFlightSegmentPath;
    },
    normalizeFlightData: function() {
        return normalizeFlightData;
    },
    prepareFlightRouterStateForRequest: function() {
        return prepareFlightRouterStateForRequest;
    }
});
const _segment = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/route-params.js [app-ssr] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-ssr] (ecmascript)");
function getFlightDataPartsFromPath(flightDataPath) {
    // Pick the last 4 items from the `FlightDataPath` to get the [tree, seedData, viewport, isHeadPartial].
    const flightDataPathLength = 4;
    // tree, seedData, and head are *always* the last three items in the `FlightDataPath`.
    const [tree, seedData, head, isHeadPartial] = flightDataPath.slice(-flightDataPathLength);
    // The `FlightSegmentPath` is everything except the last three items. For a root render, it won't be present.
    const segmentPath = flightDataPath.slice(0, -flightDataPathLength);
    return {
        // TODO: Unify these two segment path helpers. We are inconsistently pushing an empty segment ("")
        // to the start of the segment path in some places which makes it hard to use solely the segment path.
        // Look for "// TODO-APP: remove ''" in the codebase.
        pathToSegment: segmentPath.slice(0, -1),
        segmentPath,
        // if the `FlightDataPath` corresponds with the root, there'll be no segment path,
        // in which case we default to ''.
        segment: segmentPath[segmentPath.length - 1] ?? '',
        tree,
        seedData,
        head,
        isHeadPartial,
        isRootRender: flightDataPath.length === flightDataPathLength
    };
}
function createInitialRSCPayloadFromFallbackPrerender(response, fallbackInitialRSCPayload) {
    // This is a static fallback page. In order to hydrate the page, we need to
    // parse the client params from the URL, but to account for the possibility
    // that the page was rewritten, we need to check the response headers
    // for x-nextjs-rewritten-path or x-nextjs-rewritten-query headers. Since
    // we can't access the headers of the initial document response, the client
    // performs a fetch request to the current location. Since it's possible that
    // the fetch request will be dynamically rewritten to a different path than
    // the initial document, this fetch request delivers _all_ the hydration data
    // for the page; it was not inlined into the document, like it normally
    // would be.
    //
    // TODO: Consider treating the case where fetch is rewritten to a different
    // path from the document as a special deopt case. We should optimistically
    // assume this won't happen, inline the data into the document, and perform
    // a minimal request (like a HEAD or range request) to verify that the
    // response matches. Tricky to get right because we need to account for
    // all the different deployment environments we support, like output:
    // "export" mode, where we currently don't assume that custom response
    // headers are present.
    // Patch the Flight data sent by the server with the correct params parsed
    // from the URL + response object.
    const renderedPathname = (0, _routeparams.getRenderedPathname)(response);
    const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
    const canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(new URL(location.href));
    const originalFlightDataPath = fallbackInitialRSCPayload.f[0];
    const originalFlightRouterState = originalFlightDataPath[0];
    return {
        b: fallbackInitialRSCPayload.b,
        c: canonicalUrl.split('/'),
        q: renderedSearch,
        i: fallbackInitialRSCPayload.i,
        f: [
            [
                fillInFallbackFlightRouterState(originalFlightRouterState, renderedPathname, renderedSearch),
                originalFlightDataPath[1],
                originalFlightDataPath[2],
                originalFlightDataPath[2]
            ]
        ],
        m: fallbackInitialRSCPayload.m,
        G: fallbackInitialRSCPayload.G,
        S: fallbackInitialRSCPayload.S
    };
}
function fillInFallbackFlightRouterState(flightRouterState, renderedPathname, renderedSearch) {
    const pathnameParts = renderedPathname.split('/').filter((p)=>p !== '');
    const index = 0;
    return fillInFallbackFlightRouterStateImpl(flightRouterState, renderedSearch, pathnameParts, index);
}
function fillInFallbackFlightRouterStateImpl(flightRouterState, renderedSearch, pathnameParts, pathnamePartsIndex) {
    const originalSegment = flightRouterState[0];
    let newSegment;
    let doesAppearInURL;
    if (typeof originalSegment === 'string') {
        newSegment = originalSegment;
        doesAppearInURL = (0, _routeparams.doesStaticSegmentAppearInURL)(originalSegment);
    } else {
        const paramName = originalSegment[0];
        const paramType = originalSegment[2];
        const paramValue = (0, _routeparams.parseDynamicParamFromURLPart)(paramType, pathnameParts, pathnamePartsIndex);
        const cacheKey = (0, _routeparams.getCacheKeyForDynamicParam)(paramValue, renderedSearch);
        newSegment = [
            paramName,
            cacheKey,
            paramType
        ];
        doesAppearInURL = true;
    }
    // Only increment the index if the segment appears in the URL. If it's a
    // "virtual" segment, like a route group, it remains the same.
    const childPathnamePartsIndex = doesAppearInURL ? pathnamePartsIndex + 1 : pathnamePartsIndex;
    const children = flightRouterState[1];
    const newChildren = {};
    for(let key in children){
        const childFlightRouterState = children[key];
        newChildren[key] = fillInFallbackFlightRouterStateImpl(childFlightRouterState, renderedSearch, pathnameParts, childPathnamePartsIndex);
    }
    const newState = [
        newSegment,
        newChildren,
        null,
        flightRouterState[3],
        flightRouterState[4]
    ];
    return newState;
}
function getNextFlightSegmentPath(flightSegmentPath) {
    // Since `FlightSegmentPath` is a repeated tuple of `Segment` and `ParallelRouteKey`, we slice off two items
    // to get the next segment path.
    return flightSegmentPath.slice(2);
}
function normalizeFlightData(flightData) {
    // FlightData can be a string when the server didn't respond with a proper flight response,
    // or when a redirect happens, to signal to the client that it needs to perform an MPA navigation.
    if (typeof flightData === 'string') {
        return flightData;
    }
    return flightData.map((flightDataPath)=>getFlightDataPartsFromPath(flightDataPath));
}
function prepareFlightRouterStateForRequest(flightRouterState, isHmrRefresh) {
    // HMR requests need the complete, unmodified state for proper functionality
    if (isHmrRefresh) {
        return encodeURIComponent(JSON.stringify(flightRouterState));
    }
    return encodeURIComponent(JSON.stringify(stripClientOnlyDataFromFlightRouterState(flightRouterState)));
}
/**
 * Recursively strips client-only data from FlightRouterState while preserving
 * server-needed information for proper rendering decisions.
 */ function stripClientOnlyDataFromFlightRouterState(flightRouterState) {
    const [segment, parallelRoutes, _url, refreshMarker, isRootLayout, hasLoadingBoundary] = flightRouterState;
    // __PAGE__ segments are always fetched from the server, so there's
    // no need to send them up
    const cleanedSegment = stripSearchParamsFromPageSegment(segment);
    // Recursively process parallel routes
    const cleanedParallelRoutes = {};
    for (const [key, childState] of Object.entries(parallelRoutes)){
        cleanedParallelRoutes[key] = stripClientOnlyDataFromFlightRouterState(childState);
    }
    const result = [
        cleanedSegment,
        cleanedParallelRoutes,
        null,
        shouldPreserveRefreshMarker(refreshMarker) ? refreshMarker : null
    ];
    // Append optional fields if present
    if (isRootLayout !== undefined) {
        result[4] = isRootLayout;
    }
    if (hasLoadingBoundary !== undefined) {
        result[5] = hasLoadingBoundary;
    }
    return result;
}
/**
 * Strips search parameters from __PAGE__ segments to prevent sensitive
 * client-side data from being sent to the server.
 */ function stripSearchParamsFromPageSegment(segment) {
    if (typeof segment === 'string' && segment.startsWith(_segment.PAGE_SEGMENT_KEY + '?')) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
/**
 * Determines whether the refresh marker should be sent to the server
 * Client-only markers like 'refresh' are stripped, while server-needed markers
 * like 'refetch' and 'inside-shared-layout' are preserved.
 */ function shouldPreserveRefreshMarker(refreshMarker) {
    return Boolean(refreshMarker && refreshMarker !== 'refresh');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=flight-data-helpers.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/app-build-id.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This gets assigned as a side-effect during app initialization. Because it
// represents the build used to create the JS bundle, it should never change
// after being set, so we store it in a global variable.
//
// When performing RSC requests, if the incoming data has a different build ID,
// we perform an MPA navigation/refresh to load the updated build and ensure
// that the client and server in sync.
// Starts as an empty string. In practice, because setAppBuildId is called
// during initialization before hydration starts, this will always get
// reassigned to the actual build ID before it's ever needed by a navigation.
// If for some reasons it didn't, due to a bug or race condition, then on
// navigation the build comparision would fail and trigger an MPA navigation.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getAppBuildId: null,
    setAppBuildId: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAppBuildId: function() {
        return getAppBuildId;
    },
    setAppBuildId: function() {
        return setAppBuildId;
    }
});
let globalBuildId = '';
function setAppBuildId(buildId) {
    globalBuildId = buildId;
}
function getAppBuildId() {
    return globalBuildId;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-build-id.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/hash.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    djb2Hash: null,
    hexHash: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    djb2Hash: function() {
        return djb2Hash;
    },
    hexHash: function() {
        return hexHash;
    }
});
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char & 0xffffffff;
    }
    return hash >>> 0;
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
} //# sourceMappingURL=hash.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/cache-busting-search-param.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "computeCacheBustingSearchParam", {
    enumerable: true,
    get: function() {
        return computeCacheBustingSearchParam;
    }
});
const _hash = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/hash.js [app-ssr] (ecmascript)");
function computeCacheBustingSearchParam(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    if ((prefetchHeader === undefined || prefetchHeader === '0') && segmentPrefetchHeader === undefined && stateTreeHeader === undefined && nextUrlHeader === undefined) {
        return '';
    }
    return (0, _hash.hexHash)([
        prefetchHeader || '0',
        segmentPrefetchHeader || '0',
        stateTreeHeader || '0',
        nextUrlHeader || '0'
    ].join(','));
} //# sourceMappingURL=cache-busting-search-param.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/set-cache-busting-search-param.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    setCacheBustingSearchParam: null,
    setCacheBustingSearchParamWithHash: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    setCacheBustingSearchParam: function() {
        return setCacheBustingSearchParam;
    },
    setCacheBustingSearchParamWithHash: function() {
        return setCacheBustingSearchParamWithHash;
    }
});
const _cachebustingsearchparam = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/cache-busting-search-param.js [app-ssr] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/app-router-headers.js [app-ssr] (ecmascript)");
const setCacheBustingSearchParam = (url, headers)=>{
    const uniqueCacheKey = (0, _cachebustingsearchparam.computeCacheBustingSearchParam)(headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER], headers[_approuterheaders.NEXT_URL]);
    setCacheBustingSearchParamWithHash(url, uniqueCacheKey);
};
const setCacheBustingSearchParamWithHash = (url, hash)=>{
    /**
   * Note that we intentionally do not use `url.searchParams.set` here:
   *
   * const url = new URL('https://example.com/search?q=custom%20spacing');
   * url.searchParams.set('_rsc', 'abc123');
   * console.log(url.toString()); // Outputs: https://example.com/search?q=custom+spacing&_rsc=abc123
   *                                                                             ^ <--- this is causing confusion
   * This is in fact intended based on https://url.spec.whatwg.org/#interface-urlsearchparams, but
   * we want to preserve the %20 as %20 if that's what the user passed in, hence the custom
   * logic below.
   */ const existingSearch = url.search;
    const rawQuery = existingSearch.startsWith('?') ? existingSearch.slice(1) : existingSearch;
    // Always remove any existing cache busting param and add a fresh one to ensure
    // we have the correct value based on current request headers
    const pairs = rawQuery.split('&').filter((pair)=>pair && !pair.startsWith(`${_approuterheaders.NEXT_RSC_UNION_QUERY}=`));
    if (hash.length > 0) {
        pairs.push(`${_approuterheaders.NEXT_RSC_UNION_QUERY}=${hash}`);
    } else {
        pairs.push(`${_approuterheaders.NEXT_RSC_UNION_QUERY}`);
    }
    url.search = pairs.length ? `?${pairs.join('&')}` : '';
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-cache-busting-search-param.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/deployment-id.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This could also be a variable instead of a function, but some unit tests want to change the ID at
// runtime. Even though that would never happen in a real deployment.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getDeploymentId: null,
    getDeploymentIdQueryOrEmptyString: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getDeploymentId: function() {
        return getDeploymentId;
    },
    getDeploymentIdQueryOrEmptyString: function() {
        return getDeploymentIdQueryOrEmptyString;
    }
});
function getDeploymentId() {
    return "TURBOPACK compile-time value", false;
}
function getDeploymentIdQueryOrEmptyString() {
    let deploymentId = getDeploymentId();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return '';
} //# sourceMappingURL=deployment-id.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createFetch: null,
    createFromNextReadableStream: null,
    fetchServerResponse: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createFetch: function() {
        return createFetch;
    },
    createFromNextReadableStream: function() {
        return createFromNextReadableStream;
    },
    fetchServerResponse: function() {
        return fetchServerResponse;
    }
});
const _client = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/app-router-headers.js [app-ssr] (ecmascript)");
const _appcallserver = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/flight-data-helpers.js [app-ssr] (ecmascript)");
const _appbuildid = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/app-build-id.js [app-ssr] (ecmascript)");
const _setcachebustingsearchparam = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/set-cache-busting-search-param.js [app-ssr] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/route-params.js [app-ssr] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/deployment-id.js [app-ssr] (ecmascript)");
const createFromReadableStream = _client.createFromReadableStream;
const createFromFetch = _client.createFromFetch;
let createDebugChannel;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function doMpaNavigation(url) {
    return (0, _routeparams.urlToUrlWithoutFlightMarker)(new URL(url, location.origin)).toString();
}
let isPageUnloading = false;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
async function fetchServerResponse(url, options) {
    const { flightRouterState, nextUrl } = options;
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC_HEADER]: '1',
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER]: (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(flightRouterState, options.isHmrRefresh)
    };
    if (("TURBOPACK compile-time value", "development") === 'development' && options.isHmrRefresh) {
        headers[_approuterheaders.NEXT_HMR_REFRESH_HEADER] = '1';
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    // In static export mode, we need to modify the URL to request the .txt file,
    // but we should preserve the original URL for the canonical URL and error handling.
    const originalUrl = url;
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Typically, during a navigation, we decode the response using Flight's
        // `createFromFetch` API, which accepts a `fetch` promise.
        // TODO: Remove this check once the old PPR flag is removed
        const isLegacyPPR = ("TURBOPACK compile-time value", false) && !("TURBOPACK compile-time value", false);
        const shouldImmediatelyDecode = !isLegacyPPR;
        const res = await createFetch(url, headers, 'auto', shouldImmediatelyDecode);
        const responseUrl = (0, _routeparams.urlToUrlWithoutFlightMarker)(new URL(res.url));
        const canonicalUrl = res.redirected ? responseUrl : originalUrl;
        const contentType = res.headers.get('content-type') || '';
        const interception = !!res.headers.get('vary')?.includes(_approuterheaders.NEXT_URL);
        const postponed = !!res.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER);
        const staleTimeHeaderSeconds = res.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER);
        const staleTime = staleTimeHeaderSeconds !== null ? parseInt(staleTimeHeaderSeconds, 10) * 1000 : -1;
        let isFlightResponse = contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok || !res.body) {
            // in case the original URL came with a hash, preserve it before redirecting to the new URL
            if (url.hash) {
                responseUrl.hash = url.hash;
            }
            return doMpaNavigation(responseUrl.toString());
        }
        // We may navigate to a page that requires a different Webpack runtime.
        // In prod, every page will have the same Webpack runtime.
        // In dev, the Webpack runtime is minimal for each page.
        // We need to ensure the Webpack runtime is updated before executing client-side JS of the new page.
        // TODO: This needs to happen in the Flight Client.
        // Or Webpack needs to include the runtime update in the Flight response as
        // a blocking script.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let flightResponsePromise = res.flightResponse;
        if (flightResponsePromise === null) {
            // Typically, `createFetch` would have already started decoding the
            // Flight response. If it hasn't, though, we need to decode it now.
            // TODO: This should only be reachable if legacy PPR is enabled (i.e. PPR
            // without Cache Components). Remove this branch once legacy PPR
            // is deleted.
            const flightStream = postponed ? createUnclosingPrefetchStream(res.body) : res.body;
            flightResponsePromise = createFromNextReadableStream(flightStream, headers);
        }
        const flightResponse = await flightResponsePromise;
        if ((0, _appbuildid.getAppBuildId)() !== flightResponse.b) {
            return doMpaNavigation(res.url);
        }
        const normalizedFlightData = (0, _flightdatahelpers.normalizeFlightData)(flightResponse.f);
        if (typeof normalizedFlightData === 'string') {
            return doMpaNavigation(normalizedFlightData);
        }
        return {
            flightData: normalizedFlightData,
            canonicalUrl: canonicalUrl,
            renderedSearch: (0, _routeparams.getRenderedSearch)(res),
            couldBeIntercepted: interception,
            prerendered: flightResponse.S,
            postponed,
            staleTime,
            debugInfo: flightResponsePromise._debugInfo ?? null
        };
    } catch (err) {
        if (!isPageUnloading) {
            console.error(`Failed to fetch RSC payload for ${originalUrl}. Falling back to browser navigation.`, err);
        }
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return originalUrl.toString();
    }
}
async function createFetch(url, headers, fetchPriority, shouldImmediatelyDecode, signal) {
    // TODO: In output: "export" mode, the headers do nothing. Omit them (and the
    // cache busting search param) from the request so they're
    // maximally cacheable.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const deploymentId = (0, _deploymentid.getDeploymentId)();
    if (deploymentId) {
        headers['x-deployment-id'] = deploymentId;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (self.__next_r) {
            headers[_approuterheaders.NEXT_HTML_REQUEST_ID_HEADER] = self.__next_r;
        }
        // Create a new request ID for the server action request. The server uses
        // this to tag debug information sent via WebSocket to the client, which
        // then routes those chunks to the debug channel associated with this ID.
        headers[_approuterheaders.NEXT_REQUEST_ID_HEADER] = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
    }
    const fetchOptions = {
        // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
        credentials: 'same-origin',
        headers,
        priority: fetchPriority || undefined,
        signal
    };
    // `fetchUrl` is slightly different from `url` because we add a cache-busting
    // search param to it. This should not leak outside of this function, so we
    // track them separately.
    let fetchUrl = new URL(url);
    (0, _setcachebustingsearchparam.setCacheBustingSearchParam)(fetchUrl, headers);
    let fetchPromise = fetch(fetchUrl, fetchOptions);
    // Immediately pass the fetch promise to the Flight client so that the debug
    // info includes the latency from the client to the server. The internal timer
    // in React starts as soon as `createFromFetch` is called.
    //
    // The only case where we don't do this is during a prefetch, because we have
    // to do some extra processing of the response stream (see
    // `createUnclosingPrefetchStream`). But this is fine, because a top-level
    // prefetch response never blocks a navigation; if it hasn't already been
    // written into the cache by the time the navigation happens, the router will
    // go straight to a dynamic request.
    let flightResponsePromise = shouldImmediatelyDecode ? createFromNextFetch(fetchPromise, headers) : null;
    let browserResponse = await fetchPromise;
    // If the server responds with a redirect (e.g. 307), and the redirected
    // location does not contain the cache busting search param set in the
    // original request, the response is likely invalid — when following the
    // redirect, the browser forwards the request headers, but since the cache
    // busting search param is missing, the server will reject the request due to
    // a mismatch.
    //
    // Ideally, we would be able to intercept the redirect response and perform it
    // manually, instead of letting the browser automatically follow it, but this
    // is not allowed by the fetch API.
    //
    // So instead, we must "replay" the redirect by fetching the new location
    // again, but this time we'll append the cache busting search param to prevent
    // a mismatch.
    //
    // TODO: We can optimize Next.js's built-in middleware APIs by returning a
    // custom status code, to prevent the browser from automatically following it.
    //
    // This does not affect Server Action-based redirects; those are encoded
    // differently, as part of the Flight body. It only affects redirects that
    // occur in a middleware or a third-party proxy.
    let redirected = browserResponse.redirected;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Remove the cache busting search param from the response URL, to prevent it
    // from leaking outside of this function.
    const responseUrl = new URL(browserResponse.url, fetchUrl);
    responseUrl.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    const rscResponse = {
        url: responseUrl.href,
        // This is true if any redirects occurred, either automatically by the
        // browser, or manually by us. So it's different from
        // `browserResponse.redirected`, which only tells us whether the browser
        // followed a redirect, and only for the last response in the chain.
        redirected,
        // These can be copied from the last browser response we received. We
        // intentionally only expose the subset of fields that are actually used
        // elsewhere in the codebase.
        ok: browserResponse.ok,
        headers: browserResponse.headers,
        body: browserResponse.body,
        status: browserResponse.status,
        // This is the exact promise returned by `createFromFetch`. It contains
        // debug information that we need to transfer to any derived promises that
        // are later rendered by React.
        flightResponse: flightResponsePromise
    };
    return rscResponse;
}
function createFromNextReadableStream(flightStream, requestHeaders) {
    return createFromReadableStream(flightStream, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel: createDebugChannel && createDebugChannel(requestHeaders)
    });
}
function createFromNextFetch(promiseForResponse, requestHeaders) {
    return createFromFetch(promiseForResponse, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel: createDebugChannel && createDebugChannel(requestHeaders)
    });
}
function createUnclosingPrefetchStream(originalFlightStream) {
    // When PPR is enabled, prefetch streams may contain references that never
    // resolve, because that's how we encode dynamic data access. In the decoded
    // object returned by the Flight client, these are reified into hanging
    // promises that suspend during render, which is effectively what we want.
    // The UI resolves when it switches to the dynamic data stream
    // (via useDeferredValue(dynamic, static)).
    //
    // However, the Flight implementation currently errors if the server closes
    // the response before all the references are resolved. As a cheat to work
    // around this, we wrap the original stream in a new stream that never closes,
    // and therefore doesn't error.
    const reader = originalFlightStream.getReader();
    return new ReadableStream({
        async pull (controller) {
            while(true){
                const { done, value } = await reader.read();
                if (!done) {
                    // Pass to the target stream and keep consuming the Flight response
                    // from the server.
                    controller.enqueue(value);
                    continue;
                }
                // The server stream has closed. Exit, but intentionally do not close
                // the target stream.
                return;
            }
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/lru.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    deleteFromLru: null,
    lruPut: null,
    updateLruSize: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    deleteFromLru: function() {
        return deleteFromLru;
    },
    lruPut: function() {
        return lruPut;
    },
    updateLruSize: function() {
        return updateLruSize;
    }
});
const _cachemap = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-ssr] (ecmascript)");
// We use an LRU for memory management. We must update this whenever we add or
// remove a new cache entry, or when an entry changes size.
let head = null;
let didScheduleCleanup = false;
let lruSize = 0;
// TODO: I chose the max size somewhat arbitrarily. Consider setting this based
// on navigator.deviceMemory, or some other heuristic. We should make this
// customizable via the Next.js config, too.
const maxLruSize = 50 * 1024 * 1024 // 50 MB
;
function lruPut(node) {
    if (head === node) {
        // Already at the head
        return;
    }
    const prev = node.prev;
    const next = node.next;
    if (next === null || prev === null) {
        // This is an insertion
        lruSize += node.size;
        // Whenever we add an entry, we need to check if we've exceeded the
        // max size. We don't evict entries immediately; they're evicted later in
        // an asynchronous task.
        ensureCleanupIsScheduled();
    } else {
        // This is a move. Remove from its current position.
        prev.next = next;
        next.prev = prev;
    }
    // Move to the front of the list
    if (head === null) {
        // This is the first entry
        node.prev = node;
        node.next = node;
    } else {
        // Add to the front of the list
        const tail = head.prev;
        node.prev = tail;
        // In practice, this is never null, but that isn't encoded in the type
        if (tail !== null) {
            tail.next = node;
        }
        node.next = head;
        head.prev = node;
    }
    head = node;
}
function updateLruSize(node, newNodeSize) {
    // This is a separate function from `put` so that we can resize the entry
    // regardless of whether it's currently being tracked by the LRU.
    const prevNodeSize = node.size;
    node.size = newNodeSize;
    if (node.next === null) {
        // This entry is not currently being tracked by the LRU.
        return;
    }
    // Update the total LRU size
    lruSize = lruSize - prevNodeSize + newNodeSize;
    ensureCleanupIsScheduled();
}
function deleteFromLru(deleted) {
    const next = deleted.next;
    const prev = deleted.prev;
    if (next !== null && prev !== null) {
        lruSize -= deleted.size;
        deleted.next = null;
        deleted.prev = null;
        // Remove from the list
        if (head === deleted) {
            // Update the head
            if (next === head) {
                // This was the last entry
                head = null;
            } else {
                head = next;
                prev.next = next;
                next.prev = prev;
            }
        } else {
            prev.next = next;
            next.prev = prev;
        }
    } else {
    // Already deleted
    }
}
function ensureCleanupIsScheduled() {
    if (didScheduleCleanup || lruSize <= maxLruSize) {
        return;
    }
    didScheduleCleanup = true;
    requestCleanupCallback(cleanup);
}
function cleanup() {
    didScheduleCleanup = false;
    // Evict entries until we're at 90% capacity. We can assume this won't
    // infinite loop because even if `maxLruSize` were 0, eventually
    // `deleteFromLru` sets `head` to `null` when we run out entries.
    const ninetyPercentMax = maxLruSize * 0.9;
    while(lruSize > ninetyPercentMax && head !== null){
        const tail = head.prev;
        // In practice, this is never null, but that isn't encoded in the type
        if (tail !== null) {
            // Delete the entry from the map. In turn, this will remove it from
            // the LRU.
            (0, _cachemap.deleteMapEntry)(tail);
        }
    }
}
const requestCleanupCallback = typeof requestIdleCallback === 'function' ? requestIdleCallback : (cb)=>setTimeout(cb, 0);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=lru.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Fallback: null,
    createCacheMap: null,
    deleteFromCacheMap: null,
    deleteMapEntry: null,
    getFromCacheMap: null,
    isValueExpired: null,
    setInCacheMap: null,
    setSizeInCacheMap: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Fallback: function() {
        return Fallback;
    },
    createCacheMap: function() {
        return createCacheMap;
    },
    deleteFromCacheMap: function() {
        return deleteFromCacheMap;
    },
    deleteMapEntry: function() {
        return deleteMapEntry;
    },
    getFromCacheMap: function() {
        return getFromCacheMap;
    },
    isValueExpired: function() {
        return isValueExpired;
    },
    setInCacheMap: function() {
        return setInCacheMap;
    },
    setSizeInCacheMap: function() {
        return setSizeInCacheMap;
    }
});
const _lru = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/lru.js [app-ssr] (ecmascript)");
const Fallback = {};
// This is a special internal key that is used for "revalidation" entries. It's
// an implementation detail that shouldn't leak outside of this module.
const Revalidation = {};
function createCacheMap() {
    const cacheMap = {
        parent: null,
        key: null,
        value: null,
        map: null,
        // LRU-related fields
        prev: null,
        next: null,
        size: 0
    };
    return cacheMap;
}
function getOrInitialize(cacheMap, keys, isRevalidation) {
    // Go through each level of keys until we find the entry that matches, or
    // create a new entry if one doesn't exist.
    //
    // This function will only return entries that match the keypath _exactly_.
    // Unlike getWithFallback, it will not access fallback entries unless it's
    // explicitly part of the keypath.
    let entry = cacheMap;
    let remainingKeys = keys;
    let key = null;
    while(true){
        const previousKey = key;
        if (remainingKeys !== null) {
            key = remainingKeys.value;
            remainingKeys = remainingKeys.parent;
        } else if (isRevalidation && previousKey !== Revalidation) {
            // During a revalidation, we append an internal "Revalidation" key to
            // the end of the keypath. The "normal" entry is its parent.
            // However, if the parent entry is currently empty, we don't need to store
            // this as a revalidation entry. Just insert the revalidation into the
            // normal slot.
            if (entry.value === null) {
                return entry;
            }
            // Otheriwse, create a child entry.
            key = Revalidation;
        } else {
            break;
        }
        let map = entry.map;
        if (map !== null) {
            const existingEntry = map.get(key);
            if (existingEntry !== undefined) {
                // Found a match. Keep going.
                entry = existingEntry;
                continue;
            }
        } else {
            map = new Map();
            entry.map = map;
        }
        // No entry exists yet at this level. Create a new one.
        const newEntry = {
            parent: entry,
            key,
            value: null,
            map: null,
            // LRU-related fields
            prev: null,
            next: null,
            size: 0
        };
        map.set(key, newEntry);
        entry = newEntry;
    }
    return entry;
}
function getFromCacheMap(now, currentCacheVersion, rootEntry, keys, isRevalidation) {
    const entry = getEntryWithFallbackImpl(now, currentCacheVersion, rootEntry, keys, isRevalidation, 0);
    if (entry === null || entry.value === null) {
        return null;
    }
    // This is an LRU access. Move the entry to the front of the list.
    (0, _lru.lruPut)(entry);
    return entry.value;
}
function isValueExpired(now, currentCacheVersion, value) {
    return value.staleAt <= now || value.version < currentCacheVersion;
}
function lazilyEvictIfNeeded(now, currentCacheVersion, entry) {
    // We have a matching entry, but before we can return it, we need to check if
    // it's still fresh. Otherwise it should be treated the same as a cache miss.
    if (entry.value === null) {
        // This entry has no value, so there's nothing to evict.
        return entry;
    }
    const value = entry.value;
    if (isValueExpired(now, currentCacheVersion, value)) {
        // The value expired. Lazily evict it from the cache, and return null. This
        // is conceptually the same as a cache miss.
        deleteMapEntry(entry);
        return null;
    }
    // The matched entry has not expired. Return it.
    return entry;
}
function getEntryWithFallbackImpl(now, currentCacheVersion, entry, keys, isRevalidation, previousKey) {
    // This is similar to getExactEntry, but if an exact match is not found for
    // a key, it will return the fallback entry instead. This is recursive at
    // every level, e.g. an entry with keypath [a, Fallback, c, Fallback] is
    // valid match for [a, b, c, d].
    //
    // It will return the most specific match available.
    let key;
    let remainingKeys;
    if (keys !== null) {
        key = keys.value;
        remainingKeys = keys.parent;
    } else if (isRevalidation && previousKey !== Revalidation) {
        // During a revalidation, we append an internal "Revalidation" key to
        // the end of the keypath.
        key = Revalidation;
        remainingKeys = null;
    } else {
        // There are no more keys. This is the terminal entry.
        // TODO: When performing a lookup during a navigation, as opposed to a
        // prefetch, we may want to skip entries that are Pending if there's also
        // a Fulfilled fallback entry. Tricky to say, though, since if it's
        // already pending, it's likely to stream in soon. Maybe we could do this
        // just on slow connections and offline mode.
        return lazilyEvictIfNeeded(now, currentCacheVersion, entry);
    }
    const map = entry.map;
    if (map !== null) {
        const existingEntry = map.get(key);
        if (existingEntry !== undefined) {
            // Found an exact match for this key. Keep searching.
            const result = getEntryWithFallbackImpl(now, currentCacheVersion, existingEntry, remainingKeys, isRevalidation, key);
            if (result !== null) {
                return result;
            }
        }
        // No match found for this key. Check if there's a fallback.
        const fallbackEntry = map.get(Fallback);
        if (fallbackEntry !== undefined) {
            // Found a fallback for this key. Keep searching.
            return getEntryWithFallbackImpl(now, currentCacheVersion, fallbackEntry, remainingKeys, isRevalidation, key);
        }
    }
    return null;
}
function setInCacheMap(cacheMap, keys, value, isRevalidation) {
    // Add a value to the map at the given keypath. If the value is already
    // part of the map, it's removed from its previous keypath. (NOTE: This is
    // unlike a regular JS map, but the behavior is intentional.)
    const entry = getOrInitialize(cacheMap, keys, isRevalidation);
    setMapEntryValue(entry, value);
    // This is an LRU access. Move the entry to the front of the list.
    (0, _lru.lruPut)(entry);
    (0, _lru.updateLruSize)(entry, value.size);
}
function setMapEntryValue(entry, value) {
    if (entry.value !== null) {
        // There's already a value at the given keypath. Disconnect the old value
        // from the map. We're not calling `deleteMapEntry` here because the
        // entry itself is still in the map. We just want to overwrite its value.
        dropRef(entry.value);
        entry.value = null;
    }
    // This value may already be in the map at a different keypath.
    // Grab a reference before we overwrite it.
    const oldEntry = value.ref;
    entry.value = value;
    value.ref = entry;
    (0, _lru.updateLruSize)(entry, value.size);
    if (oldEntry !== null && oldEntry !== entry && oldEntry.value === value) {
        // This value is already in the map at a different keypath in the map.
        // Values only exist at a single keypath at a time. Remove it from the
        // previous keypath.
        //
        // Note that only the internal map entry is garbage collected; we don't
        // call `dropRef` here because it's still in the map, just
        // at a new keypath (the one we just set, above).
        deleteMapEntry(oldEntry);
    }
}
function deleteFromCacheMap(value) {
    const entry = value.ref;
    if (entry === null) {
        // This value is not a member of any map.
        return;
    }
    dropRef(value);
    deleteMapEntry(entry);
}
function dropRef(value) {
    // Drop the value from the map by setting its `ref` backpointer to
    // null. This is a separate operation from `deleteMapEntry` because when
    // re-keying a value we need to be able to delete the old, internal map
    // entry without garbage collecting the value itself.
    value.ref = null;
}
function deleteMapEntry(entry) {
    // Delete the entry from the cache.
    entry.value = null;
    (0, _lru.deleteFromLru)(entry);
    // Check if we can garbage collect the entry.
    const map = entry.map;
    if (map === null) {
        // Since this entry has no value, and also no child entries, we can
        // garbage collect it. Remove it from its parent, and keep garbage
        // collecting the parents until we reach a non-empty entry.
        let parent = entry.parent;
        let key = entry.key;
        while(parent !== null){
            const parentMap = parent.map;
            if (parentMap !== null) {
                parentMap.delete(key);
                if (parentMap.size === 0) {
                    // We just removed the last entry in the parent map.
                    parent.map = null;
                    if (parent.value === null) {
                        // The parent node has no child entries, nor does it have a value
                        // on itself. It can be garbage collected. Keep going.
                        key = parent.key;
                        parent = parent.parent;
                        continue;
                    }
                }
            }
            break;
        }
    } else {
        // Check if there's a revalidating entry. If so, promote it to a
        // "normal" entry, since the normal one was just deleted.
        const revalidatingEntry = map.get(Revalidation);
        if (revalidatingEntry !== undefined && revalidatingEntry.value !== null) {
            setMapEntryValue(entry, revalidatingEntry.value);
        }
    }
}
function setSizeInCacheMap(value, size) {
    const entry = value.ref;
    if (entry === null) {
        // This value is not a member of any map.
        return;
    }
    // Except during initialization (when the size is set to 0), this is the only
    // place the `size` field should be updated, to ensure it's in sync with the
    // the LRU.
    value.size = size;
    (0, _lru.updateLruSize)(entry, size);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=cache-map.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    appendLayoutVaryPath: null,
    clonePageVaryPathWithNewSearchParams: null,
    finalizeLayoutVaryPath: null,
    finalizeMetadataVaryPath: null,
    finalizePageVaryPath: null,
    getFulfilledRouteVaryPath: null,
    getRouteVaryPath: null,
    getSegmentVaryPathForRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    appendLayoutVaryPath: function() {
        return appendLayoutVaryPath;
    },
    clonePageVaryPathWithNewSearchParams: function() {
        return clonePageVaryPathWithNewSearchParams;
    },
    finalizeLayoutVaryPath: function() {
        return finalizeLayoutVaryPath;
    },
    finalizeMetadataVaryPath: function() {
        return finalizeMetadataVaryPath;
    },
    finalizePageVaryPath: function() {
        return finalizePageVaryPath;
    },
    getFulfilledRouteVaryPath: function() {
        return getFulfilledRouteVaryPath;
    },
    getRouteVaryPath: function() {
        return getRouteVaryPath;
    },
    getSegmentVaryPathForRequest: function() {
        return getSegmentVaryPathForRequest;
    }
});
const _types = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _cachemap = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-ssr] (ecmascript)");
const _segmentvalueencoding = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-ssr] (ecmascript)");
function getRouteVaryPath(pathname, search, nextUrl) {
    // requestKey -> searchParams -> nextUrl
    const varyPath = {
        value: pathname,
        parent: {
            value: search,
            parent: {
                value: nextUrl,
                parent: null
            }
        }
    };
    return varyPath;
}
function getFulfilledRouteVaryPath(pathname, search, nextUrl, couldBeIntercepted) {
    // This is called when a route's data is fulfilled. The cache entry will be
    // re-keyed based on which inputs the response varies by.
    // requestKey -> searchParams -> nextUrl
    const varyPath = {
        value: pathname,
        parent: {
            value: search,
            parent: {
                value: couldBeIntercepted ? nextUrl : _cachemap.Fallback,
                parent: null
            }
        }
    };
    return varyPath;
}
function appendLayoutVaryPath(parentPath, cacheKey) {
    const varyPathPart = {
        value: cacheKey,
        parent: parentPath
    };
    return varyPathPart;
}
function finalizeLayoutVaryPath(requestKey, varyPath) {
    const layoutVaryPath = {
        value: requestKey,
        parent: varyPath
    };
    return layoutVaryPath;
}
function finalizePageVaryPath(requestKey, renderedSearch, varyPath) {
    // Unlike layouts, a page segment's vary path also includes the search string.
    // requestKey -> searchParams -> pathParams
    const pageVaryPath = {
        value: requestKey,
        parent: {
            value: renderedSearch,
            parent: varyPath
        }
    };
    return pageVaryPath;
}
function finalizeMetadataVaryPath(pageRequestKey, renderedSearch, varyPath) {
    // The metadata "segment" is not a real segment because it doesn't exist in
    // the normal structure of the route tree, but in terms of caching, it
    // behaves like a page segment because it varies by all the same params as
    // a page.
    //
    // To keep the protocol for querying the server simple, the request key for
    // the metadata does not include any path information. It's unnecessary from
    // the server's perspective, because unlike page segments, there's only one
    // metadata response per URL, i.e. there's no need to distinguish multiple
    // parallel pages.
    //
    // However, this means the metadata request key is insufficient for
    // caching the the metadata in the client cache, because on the client we
    // use the request key to distinguish the metadata entry from all other
    // page's metadata entries.
    //
    // So instead we create a simulated request key based on the page segment.
    // Conceptually this is equivalent to the request key the server would have
    // assigned the metadata segment if it treated it as part of the actual
    // route structure.
    // If there are multiple parallel pages, we use whichever is the first one.
    // This is fine because the only difference between request keys for
    // different parallel pages are things like route groups and parallel
    // route slots. As long as it's always the same one, it doesn't matter.
    const pageVaryPath = {
        // Append the actual metadata request key to the page request key. Note
        // that we're not using a separate vary path part; it's unnecessary because
        // these are not conceptually separate inputs.
        value: pageRequestKey + _segmentvalueencoding.HEAD_REQUEST_KEY,
        parent: {
            value: renderedSearch,
            parent: varyPath
        }
    };
    return pageVaryPath;
}
function getSegmentVaryPathForRequest(fetchStrategy, tree) {
    // This is used for storing pending requests in the cache. We want to choose
    // the most generic vary path based on the strategy used to fetch it, i.e.
    // static/PPR versus runtime prefetching, so that it can be reused as much
    // as possible.
    //
    // We may be able to re-key the response to something even more generic once
    // we receive it — for example, if the server tells us that the response
    // doesn't vary on a particular param — but even before we send the request,
    // we know some params are reusable based on the fetch strategy alone. For
    // example, a static prefetch will never vary on search params.
    //
    // The original vary path with all the params filled in is stored on the
    // route tree object. We will clone this one to create a new vary path
    // where certain params are replaced with Fallback.
    //
    // This result of this function is not stored anywhere. It's only used to
    // access the cache a single time.
    //
    // TODO: Rather than create a new list object just to access the cache, the
    // plan is to add the concept of a "vary mask". This will represent all the
    // params that can be treated as Fallback. (Or perhaps the inverse.)
    const originalVaryPath = tree.varyPath;
    // Only page segments (and the special "metadata" segment, which is treated
    // like a page segment for the purposes of caching) may contain search
    // params. There's no reason to include them in the vary path otherwise.
    if (tree.isPage) {
        // Only a runtime prefetch will include search params in the vary path.
        // Static prefetches never include search params, so they can be reused
        // across all possible search param values.
        const doesVaryOnSearchParams = fetchStrategy === _types.FetchStrategy.Full || fetchStrategy === _types.FetchStrategy.PPRRuntime;
        if (!doesVaryOnSearchParams) {
            // The response from the the server will not vary on search params. Clone
            // the end of the original vary path to replace the search params
            // with Fallback.
            //
            // requestKey -> searchParams -> pathParams
            //               ^ This part gets replaced with Fallback
            const searchParamsVaryPath = originalVaryPath.parent;
            const pathParamsVaryPath = searchParamsVaryPath.parent;
            const patchedVaryPath = {
                value: originalVaryPath.value,
                parent: {
                    value: _cachemap.Fallback,
                    parent: pathParamsVaryPath
                }
            };
            return patchedVaryPath;
        }
    }
    // The request does vary on search params. We don't need to modify anything.
    return originalVaryPath;
}
function clonePageVaryPathWithNewSearchParams(originalVaryPath, newSearch) {
    // requestKey -> searchParams -> pathParams
    //               ^ This part gets replaced with newSearch
    const searchParamsVaryPath = originalVaryPath.parent;
    const clonedVaryPath = {
        value: originalVaryPath.value,
        parent: {
            value: newSearch,
            parent: searchParamsVaryPath.parent
        }
    };
    return clonedVaryPath;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=vary-path.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureLeadingSlash", {
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
});
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    normalizeAppPath: null,
    normalizeRscURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return `${pathname}/${segment}`;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    INTERCEPTION_ROUTE_MARKERS: null,
    extractInterceptionRouteInformation: null,
    isInterceptionRouteAppPath: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-ssr] (ecmascript)");
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute;
    let marker;
    let interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    computeChangedPath: null,
    extractPathFromFlightRouterState: null,
    getSelectedParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    computeChangedPath: function() {
        return computeChangedPath;
    },
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    getSelectedParams: function() {
        return getSelectedParams;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/match-segments.js [app-ssr] (ecmascript)");
const removeLeadingSlash = (segment)=>{
    return segment[0] === '/' ? segment.slice(1) : segment;
};
const segmentToPathname = (segment)=>{
    if (typeof segment === 'string') {
        // 'children' is not a valid path -- it's technically a parallel route that corresponds with the current segment's page
        // if we don't skip it, then the computed pathname might be something like `/children` which doesn't make sense.
        if (segment === 'children') return '';
        return segment;
    }
    return segment[1];
};
function normalizeSegments(segments) {
    return segments.reduce((acc, segment)=>{
        segment = removeLeadingSlash(segment);
        if (segment === '' || (0, _segment.isGroupSegment)(segment)) {
            return acc;
        }
        return `${acc}/${segment}`;
    }, '') || '/';
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === _segment.DEFAULT_SEGMENT_KEY || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) return '';
    const segments = [
        segmentToPathname(segment)
    ];
    const parallelRoutes = flightRouterState[1] ?? {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        segments.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === 'children') continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                segments.push(childPath);
            }
        }
    }
    return normalizeSegments(segments);
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return '';
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return extractPathFromFlightRouterState(treeB) ?? '';
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return `${segmentToPathname(segmentB)}/${changedPath}`;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === '/') {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizeSegments(changedPath.split('/'));
}
function getSelectedParams(currentTree, params = {}) {
    const parallelRoutes = currentTree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === 'c' || segment[2] === 'oc');
        if (isCatchAll) {
            params[segment[0]] = segment[1].split('/');
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleMutable", {
    enumerable: true,
    get: function() {
        return handleMutable;
    }
});
const _computechangedpath = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-ssr] (ecmascript)");
function isNotUndefined(value) {
    return typeof value !== 'undefined';
}
function handleMutable(state, mutable) {
    // shouldScroll is true by default, can override to false.
    const shouldScroll = mutable.shouldScroll ?? true;
    let previousNextUrl = state.previousNextUrl;
    let nextUrl = state.nextUrl;
    if (isNotUndefined(mutable.patchedTree)) {
        // If we received a patched tree, we need to compute the changed path.
        const changedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree);
        if (changedPath) {
            // If the tree changed, we need to update the nextUrl
            previousNextUrl = nextUrl;
            nextUrl = changedPath;
        } else if (!nextUrl) {
            // if the tree ends up being the same (ie, no changed path), and we don't have a nextUrl, then we should use the canonicalUrl
            nextUrl = state.canonicalUrl;
        }
    // otherwise this will be a no-op and continue to use the existing nextUrl
    }
    return {
        // Set href.
        canonicalUrl: mutable.canonicalUrl ?? state.canonicalUrl,
        renderedSearch: mutable.renderedSearch ?? state.renderedSearch,
        pushRef: {
            pendingPush: isNotUndefined(mutable.pendingPush) ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: isNotUndefined(mutable.mpaNavigation) ? mutable.mpaNavigation : state.pushRef.mpaNavigation,
            preserveCustomHistoryState: isNotUndefined(mutable.preserveCustomHistoryState) ? mutable.preserveCustomHistoryState : state.pushRef.preserveCustomHistoryState
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: shouldScroll ? isNotUndefined(mutable?.scrollableSegments) ? true : state.focusAndScrollRef.apply : false,
            onlyHashChange: mutable.onlyHashChange || false,
            hashFragment: shouldScroll ? mutable.hashFragment && mutable.hashFragment !== '' ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment : null,
            segmentPaths: shouldScroll ? mutable?.scrollableSegments ?? state.focusAndScrollRef.segmentPaths : []
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        // Apply patched router state.
        tree: isNotUndefined(mutable.patchedTree) ? mutable.patchedTree : state.tree,
        nextUrl,
        previousNextUrl: previousNextUrl,
        debugInfo: mutable.collectedDebugInfo ?? null
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-mutable.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRouterCacheKey", {
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
});
const _segment = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
function createRouterCacheKey(segment, withoutSearchParameters = false) {
    // if the segment is an array, it means it's a dynamic segment
    // for example, ['lang', 'en', 'd']. We need to convert it to a string to store it as a cache node key.
    if (Array.isArray(segment)) {
        return `${segment[0]}|${segment[1]}|${segment[2]}`;
    }
    // Page segments might have search parameters, ie __PAGE__?foo=bar
    // When `withoutSearchParameters` is true, we only want to return the page segment
    if (withoutSearchParameters && segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNavigatingToNewRootLayout", {
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
});
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    FreshnessPolicy: null,
    createInitialCacheNodeForHydration: null,
    isDeferredRsc: null,
    spawnDynamicRequests: null,
    startPPRNavigation: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FreshnessPolicy: function() {
        return FreshnessPolicy;
    },
    createInitialCacheNodeForHydration: function() {
        return createInitialCacheNodeForHydration;
    },
    isDeferredRsc: function() {
        return isDeferredRsc;
    },
    spawnDynamicRequests: function() {
        return spawnDynamicRequests;
    },
    startPPRNavigation: function() {
        return startPPRNavigation;
    }
});
const _segment = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/match-segments.js [app-ssr] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-ssr] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-ssr] (ecmascript)");
const _fetchserverresponse = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-ssr] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/use-action-queue.js [app-ssr] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-ssr] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-ssr] (ecmascript)");
const _navigation = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/navigation.js [app-ssr] (ecmascript)");
var FreshnessPolicy = /*#__PURE__*/ function(FreshnessPolicy) {
    FreshnessPolicy[FreshnessPolicy["Default"] = 0] = "Default";
    FreshnessPolicy[FreshnessPolicy["Hydration"] = 1] = "Hydration";
    FreshnessPolicy[FreshnessPolicy["HistoryTraversal"] = 2] = "HistoryTraversal";
    FreshnessPolicy[FreshnessPolicy["RefreshAll"] = 3] = "RefreshAll";
    FreshnessPolicy[FreshnessPolicy["HMRRefresh"] = 4] = "HMRRefresh";
    return FreshnessPolicy;
}({});
const noop = ()=>{};
function createInitialCacheNodeForHydration(navigatedAt, initialTree, seedData, seedHead) {
    // Create the initial cache node tree, using the data embedded into the
    // HTML document.
    const accumulation = {
        scrollableSegments: null,
        separateRefreshUrls: null
    };
    const task = createCacheNodeOnNavigation(navigatedAt, initialTree, undefined, 1, seedData, seedHead, null, null, false, null, null, false, accumulation);
    // NOTE: We intentionally don't check if any data needs to be fetched from the
    // server. We assume the initial hydration payload is sufficient to render
    // the page.
    //
    // The completeness of the initial data is an important property that we rely
    // on as a last-ditch mechanism for recovering the app; we must always be able
    // to reload a fresh HTML document to get to a consistent state.
    //
    // In the future, there may be cases where the server intentionally sends
    // partial data and expects the client to fill in the rest, in which case this
    // logic may change. (There already is a similar case where the server sends
    // _no_ hydration data in the HTML document at all, and the client fetches it
    // separately, but that's different because we still end up hydrating with a
    // complete tree.)
    return task.node;
}
function startPPRNavigation(navigatedAt, oldUrl, oldCacheNode, oldRouterState, newRouterState, freshness, seedData, seedHead, prefetchData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, accumulation) {
    const didFindRootLayout = false;
    const parentNeedsDynamicRequest = false;
    const parentRefreshUrl = null;
    return updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNode !== null ? oldCacheNode : undefined, oldRouterState, newRouterState, freshness, didFindRootLayout, seedData, seedHead, prefetchData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, null, null, parentNeedsDynamicRequest, parentRefreshUrl, accumulation);
}
function updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNode, oldRouterState, newRouterState, freshness, didFindRootLayout, seedData, seedHead, prefetchData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, parentSegmentPath, parentParallelRouteKey, parentNeedsDynamicRequest, parentRefreshUrl, accumulation) {
    // Check if this segment matches the one in the previous route.
    const oldSegment = oldRouterState[0];
    const newSegment = newRouterState[0];
    if (!(0, _matchsegments.matchSegment)(newSegment, oldSegment)) {
        // This segment does not match the previous route. We're now entering the
        // new part of the target route. Switch to the "create" path.
        if (// highest-level layout in a route tree is referred to as the "root"
        // layout.) This could mean that we're navigating between two different
        // root layouts. When this happens, we perform a full-page (MPA-style)
        // navigation.
        //
        // However, the algorithm for deciding where to start rendering a route
        // (i.e. the one performed in order to reach this function) is stricter
        // than the one used to detect a change in the root layout. So just
        // because we're re-rendering a segment outside of the root layout does
        // not mean we should trigger a full-page navigation.
        //
        // Specifically, we handle dynamic parameters differently: two segments
        // are considered the same even if their parameter values are different.
        //
        // Refer to isNavigatingToNewRootLayout for details.
        //
        // Note that we only have to perform this extra traversal if we didn't
        // already discover a root layout in the part of the tree that is
        // unchanged. We also only need to compare the subtree that is not
        // shared. In the common case, this branch is skipped completely.
        !didFindRootLayout && (0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(oldRouterState, newRouterState) || // The global Not Found route (app/global-not-found.tsx) is a special
        // case, because it acts like a root layout, but in the router tree, it
        // is rendered in the same position as app/layout.tsx.
        //
        // Any navigation to the global Not Found route should trigger a
        // full-page navigation.
        //
        // TODO: We should probably model this by changing the key of the root
        // segment when this happens. Then the root layout check would work
        // as expected, without a special case.
        newSegment === _segment.NOT_FOUND_SEGMENT_KEY) {
            return null;
        }
        if (parentSegmentPath === null || parentParallelRouteKey === null) {
            // The root should never mismatch. If it does, it suggests an internal
            // Next.js error, or a malformed server response. Trigger a full-
            // page navigation.
            return null;
        }
        return createCacheNodeOnNavigation(navigatedAt, newRouterState, oldCacheNode, freshness, seedData, seedHead, prefetchData, prefetchHead, isPrefetchHeadPartial, parentSegmentPath, parentParallelRouteKey, parentNeedsDynamicRequest, accumulation);
    }
    // TODO: The segment paths are tracked so that LayoutRouter knows which
    // segments to scroll to after a navigation. But we should just mark this
    // information on the CacheNode directly. It used to be necessary to do this
    // separately because CacheNodes were created lazily during render, not when
    // rather than when creating the route tree.
    const segmentPath = parentParallelRouteKey !== null && parentSegmentPath !== null ? parentSegmentPath.concat([
        parentParallelRouteKey,
        newSegment
    ]) : [];
    const newRouterStateChildren = newRouterState[1];
    const oldRouterStateChildren = oldRouterState[1];
    const seedDataChildren = seedData !== null ? seedData[1] : null;
    const prefetchDataChildren = prefetchData !== null ? prefetchData[1] : null;
    // We're currently traversing the part of the tree that was also part of
    // the previous route. If we discover a root layout, then we don't need to
    // trigger an MPA navigation.
    const isRootLayout = newRouterState[4] === true;
    const childDidFindRootLayout = didFindRootLayout || isRootLayout;
    const oldParallelRoutes = oldCacheNode !== undefined ? oldCacheNode.parallelRoutes : undefined;
    // Clone the current set of segment children, even if they aren't active in
    // the new tree.
    // TODO: We currently retain all the inactive segments indefinitely, until
    // there's an explicit refresh, or a parent layout is lazily refreshed. We
    // rely on this for popstate navigations, which update the Router State Tree
    // but do not eagerly perform a data fetch, because they expect the segment
    // data to already be in the Cache Node tree. For highly static sites that
    // are mostly read-only, this may happen only rarely, causing memory to
    // leak. We should figure out a better model for the lifetime of inactive
    // segments, so we can maintain instant back/forward navigations without
    // leaking memory indefinitely.
    let shouldDropSiblingCaches = false;
    let shouldRefreshDynamicData = false;
    switch(freshness){
        case 0:
        case 2:
        case 1:
            // We should never drop dynamic data in shared layouts, except during
            // a refresh.
            shouldDropSiblingCaches = false;
            shouldRefreshDynamicData = false;
            break;
        case 3:
        case 4:
            shouldDropSiblingCaches = true;
            shouldRefreshDynamicData = true;
            break;
        default:
            freshness;
            break;
    }
    const newParallelRoutes = new Map(shouldDropSiblingCaches ? undefined : oldParallelRoutes);
    // TODO: We're not consistent about how we do this check. Some places
    // check if the segment starts with PAGE_SEGMENT_KEY, but most seem to
    // check if there any any children, which is why I'm doing it here. We
    // should probably encode an empty children set as `null` though. Either
    // way, we should update all the checks to be consistent.
    const isLeafSegment = Object.keys(newRouterStateChildren).length === 0;
    // Get the data for this segment. Since it was part of the previous route,
    // usually we just clone the data from the old CacheNode. However, during a
    // refresh or a revalidation, there won't be any existing CacheNode. So we
    // may need to consult the prefetch cache, like we would for a new segment.
    let newCacheNode;
    let needsDynamicRequest;
    if (oldCacheNode !== undefined && !shouldRefreshDynamicData && // During a same-page navigation, we always refetch the page segments
    !(isLeafSegment && isSamePageNavigation)) {
        // Reuse the existing CacheNode
        const dropPrefetchRsc = false;
        newCacheNode = reuseDynamicCacheNode(dropPrefetchRsc, oldCacheNode, newParallelRoutes);
        needsDynamicRequest = false;
    } else if (seedData !== null && seedData[0] !== null) {
        // If this navigation was the result of an action, then check if the
        // server sent back data in the action response. We should favor using
        // that, rather than performing a separate request. This is both better
        // for performance and it's more likely to be consistent with any
        // writes that were just performed by the action, compared to a
        // separate request.
        const seedRsc = seedData[0];
        const seedLoading = seedData[2];
        const isSeedRscPartial = false;
        const isSeedHeadPartial = seedHead === null;
        newCacheNode = readCacheNodeFromSeedData(seedRsc, seedLoading, isSeedRscPartial, seedHead, isSeedHeadPartial, isLeafSegment, newParallelRoutes, navigatedAt);
        needsDynamicRequest = isLeafSegment && isSeedHeadPartial;
    } else if (prefetchData !== null) {
        // Consult the prefetch cache.
        const prefetchRsc = prefetchData[0];
        const prefetchLoading = prefetchData[2];
        const isPrefetchRSCPartial = prefetchData[3];
        newCacheNode = readCacheNodeFromSeedData(prefetchRsc, prefetchLoading, isPrefetchRSCPartial, prefetchHead, isPrefetchHeadPartial, isLeafSegment, newParallelRoutes, navigatedAt);
        needsDynamicRequest = isPrefetchRSCPartial || isLeafSegment && isPrefetchHeadPartial;
    } else {
        // Spawn a request to fetch new data from the server.
        newCacheNode = spawnNewCacheNode(newParallelRoutes, isLeafSegment, navigatedAt, freshness);
        needsDynamicRequest = true;
    }
    // During a refresh navigation, there's a special case that happens when
    // entering a "default" slot. The default slot may not be part of the
    // current route; it may have been reused from an older route. If so,
    // we need to fetch its data from the old route's URL rather than current
    // route's URL. Keep track of this as we traverse the tree.
    const href = newRouterState[2];
    const refreshUrl = typeof href === 'string' && newRouterState[3] === 'refresh' ? href : parentRefreshUrl;
    // If this segment itself needs to fetch new data from the server, then by
    // definition it is being refreshed. Track its refresh URL so we know which
    // URL to request the data from.
    if (needsDynamicRequest && refreshUrl !== null) {
        accumulateRefreshUrl(accumulation, refreshUrl);
    }
    // As we diff the trees, we may sometimes modify (copy-on-write, not mutate)
    // the Route Tree that was returned by the server — for example, in the case
    // of default parallel routes, we preserve the currently active segment. To
    // avoid mutating the original tree, we clone the router state children along
    // the return path.
    let patchedRouterStateChildren = {};
    let taskChildren = null;
    // Most navigations require a request to fetch additional data from the
    // server, either because the data was not already prefetched, or because the
    // target route contains dynamic data that cannot be prefetched.
    //
    // However, if the target route is fully static, and it's already completely
    // loaded into the segment cache, then we can skip the server request.
    //
    // This starts off as `false`, and is set to `true` if any of the child
    // routes requires a dynamic request.
    let childNeedsDynamicRequest = false;
    // As we traverse the children, we'll construct a FlightRouterState that can
    // be sent to the server to request the dynamic data. If it turns out that
    // nothing in the subtree is dynamic (i.e. childNeedsDynamicRequest is false
    // at the end), then this will be discarded.
    // TODO: We can probably optimize the format of this data structure to only
    // include paths that are dynamic. Instead of reusing the
    // FlightRouterState type.
    let dynamicRequestTreeChildren = {};
    for(let parallelRouteKey in newRouterStateChildren){
        let newRouterStateChild = newRouterStateChildren[parallelRouteKey];
        const oldRouterStateChild = oldRouterStateChildren[parallelRouteKey];
        if (oldRouterStateChild === undefined) {
            // This should never happen, but if it does, it suggests a malformed
            // server response. Trigger a full-page navigation.
            return null;
        }
        const oldSegmentMapChild = oldParallelRoutes !== undefined ? oldParallelRoutes.get(parallelRouteKey) : undefined;
        let seedDataChild = seedDataChildren !== null ? seedDataChildren[parallelRouteKey] : null;
        let prefetchDataChild = prefetchDataChildren !== null ? prefetchDataChildren[parallelRouteKey] : null;
        let newSegmentChild = newRouterStateChild[0];
        let seedHeadChild = seedHead;
        let prefetchHeadChild = prefetchHead;
        let isPrefetchHeadPartialChild = isPrefetchHeadPartial;
        if (// was stashed in the history entry as-is.
        freshness !== 2 && newSegmentChild === _segment.DEFAULT_SEGMENT_KEY) {
            // This is a "default" segment. These are never sent by the server during
            // a soft navigation; instead, the client reuses whatever segment was
            // already active in that slot on the previous route.
            newRouterStateChild = reuseActiveSegmentInDefaultSlot(oldUrl, oldRouterStateChild);
            newSegmentChild = newRouterStateChild[0];
            // Since we're switching to a different route tree, these are no
            // longer valid, because they correspond to the outer tree.
            seedDataChild = null;
            seedHeadChild = null;
            prefetchDataChild = null;
            prefetchHeadChild = null;
            isPrefetchHeadPartialChild = false;
        }
        const newSegmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(newSegmentChild);
        const oldCacheNodeChild = oldSegmentMapChild !== undefined ? oldSegmentMapChild.get(newSegmentKeyChild) : undefined;
        const taskChild = updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNodeChild, oldRouterStateChild, newRouterStateChild, freshness, childDidFindRootLayout, seedDataChild ?? null, seedHeadChild, prefetchDataChild ?? null, prefetchHeadChild, isPrefetchHeadPartialChild, isSamePageNavigation, segmentPath, parallelRouteKey, parentNeedsDynamicRequest || needsDynamicRequest, refreshUrl, accumulation);
        if (taskChild === null) {
            // One of the child tasks discovered a change to the root layout.
            // Immediately unwind from this recursive traversal. This will trigger a
            // full-page navigation.
            return null;
        }
        // Recursively propagate up the child tasks.
        if (taskChildren === null) {
            taskChildren = new Map();
        }
        taskChildren.set(parallelRouteKey, taskChild);
        const newCacheNodeChild = taskChild.node;
        if (newCacheNodeChild !== null) {
            const newSegmentMapChild = new Map(shouldDropSiblingCaches ? undefined : oldSegmentMapChild);
            newSegmentMapChild.set(newSegmentKeyChild, newCacheNodeChild);
            newParallelRoutes.set(parallelRouteKey, newSegmentMapChild);
        }
        // The child tree's route state may be different from the prefetched
        // route sent by the server. We need to clone it as we traverse back up
        // the tree.
        const taskChildRoute = taskChild.route;
        patchedRouterStateChildren[parallelRouteKey] = taskChildRoute;
        const dynamicRequestTreeChild = taskChild.dynamicRequestTree;
        if (dynamicRequestTreeChild !== null) {
            // Something in the child tree is dynamic.
            childNeedsDynamicRequest = true;
            dynamicRequestTreeChildren[parallelRouteKey] = dynamicRequestTreeChild;
        } else {
            dynamicRequestTreeChildren[parallelRouteKey] = taskChildRoute;
        }
    }
    return {
        status: needsDynamicRequest ? 0 : 1,
        route: patchRouterStateWithNewChildren(newRouterState, patchedRouterStateChildren),
        node: newCacheNode,
        dynamicRequestTree: createDynamicRequestTree(newRouterState, dynamicRequestTreeChildren, needsDynamicRequest, childNeedsDynamicRequest, parentNeedsDynamicRequest),
        refreshUrl,
        children: taskChildren
    };
}
function createCacheNodeOnNavigation(navigatedAt, newRouterState, oldCacheNode, freshness, seedData, seedHead, prefetchData, prefetchHead, isPrefetchHeadPartial, parentSegmentPath, parentParallelRouteKey, parentNeedsDynamicRequest, accumulation) {
    // Same traversal as updateCacheNodeNavigation, but simpler. We switch to this
    // path once we reach the part of the tree that was not in the previous route.
    // We don't need to diff against the old tree, we just need to create a new
    // one. We also don't need to worry about any refresh-related logic.
    //
    // For the most part, this is a subset of updateCacheNodeOnNavigation, so any
    // change that happens in this function likely needs to be applied to that
    // one, too. However there are some places where the behavior intentionally
    // diverges, which is why we keep them separate.
    const newSegment = newRouterState[0];
    const segmentPath = parentParallelRouteKey !== null && parentSegmentPath !== null ? parentSegmentPath.concat([
        parentParallelRouteKey,
        newSegment
    ]) : [];
    const newRouterStateChildren = newRouterState[1];
    const prefetchDataChildren = prefetchData !== null ? prefetchData[1] : null;
    const seedDataChildren = seedData !== null ? seedData[1] : null;
    const oldParallelRoutes = oldCacheNode !== undefined ? oldCacheNode.parallelRoutes : undefined;
    let shouldDropSiblingCaches = false;
    let shouldRefreshDynamicData = false;
    let dropPrefetchRsc = false;
    switch(freshness){
        case 0:
            // We should never drop dynamic data in sibling caches except during
            // a refresh.
            shouldDropSiblingCaches = false;
            // Only reuse the dynamic data if experimental.staleTimes.dynamic config
            // is set, and the data is not stale. (This is not a recommended API with
            // Cache Components, but it's supported for backwards compatibility. Use
            // cacheLife instead.)
            //
            // DYNAMIC_STALETIME_MS defaults to 0, but it can be increased.
            shouldRefreshDynamicData = oldCacheNode === undefined || navigatedAt - oldCacheNode.navigatedAt >= _navigatereducer.DYNAMIC_STALETIME_MS;
            dropPrefetchRsc = false;
            break;
        case 1:
            // During hydration, we assume the data sent by the server is both
            // consistent and complete.
            shouldRefreshDynamicData = false;
            shouldDropSiblingCaches = false;
            dropPrefetchRsc = false;
            break;
        case 2:
            // During back/forward navigations, we reuse the dynamic data regardless
            // of how stale it may be.
            shouldRefreshDynamicData = false;
            shouldRefreshDynamicData = false;
            // Only show prefetched data if the dynamic data is still pending. This
            // avoids a flash back to the prefetch state in a case where it's highly
            // likely to have already streamed in.
            //
            // Tehnically, what we're actually checking is whether the dynamic network
            // response was received. But since it's a streaming response, this does
            // not mean that all the dynamic data has fully streamed in. It just means
            // that _some_ of the dynamic data was received. But as a heuristic, we
            // assume that the rest dynamic data will stream in quickly, so it's still
            // better to skip the prefetch state.
            if (oldCacheNode !== undefined) {
                const oldRsc = oldCacheNode.rsc;
                const oldRscDidResolve = !isDeferredRsc(oldRsc) || oldRsc.status !== 'pending';
                dropPrefetchRsc = oldRscDidResolve;
            } else {
                dropPrefetchRsc = false;
            }
            break;
        case 3:
        case 4:
            // Drop all dynamic data.
            shouldRefreshDynamicData = true;
            shouldDropSiblingCaches = true;
            dropPrefetchRsc = false;
            break;
        default:
            freshness;
            break;
    }
    const newParallelRoutes = new Map(shouldDropSiblingCaches ? undefined : oldParallelRoutes);
    const isLeafSegment = Object.keys(newRouterStateChildren).length === 0;
    if (isLeafSegment) {
        // The segment path of every leaf segment (i.e. page) is collected into
        // a result array. This is used by the LayoutRouter to scroll to ensure that
        // new pages are visible after a navigation.
        //
        // This only happens for new pages, not for refreshed pages.
        //
        // TODO: We should use a string to represent the segment path instead of
        // an array. We already use a string representation for the path when
        // accessing the Segment Cache, so we can use the same one.
        if (accumulation.scrollableSegments === null) {
            accumulation.scrollableSegments = [];
        }
        accumulation.scrollableSegments.push(segmentPath);
    }
    let newCacheNode;
    let needsDynamicRequest;
    if (!shouldRefreshDynamicData && oldCacheNode !== undefined) {
        // Reuse the existing CacheNode
        newCacheNode = reuseDynamicCacheNode(dropPrefetchRsc, oldCacheNode, newParallelRoutes);
        needsDynamicRequest = false;
    } else if (seedData !== null && seedData[0] !== null) {
        // If this navigation was the result of an action, then check if the
        // server sent back data in the action response. We should favor using
        // that, rather than performing a separate request. This is both better
        // for performance and it's more likely to be consistent with any
        // writes that were just performed by the action, compared to a
        // separate request.
        const seedRsc = seedData[0];
        const seedLoading = seedData[2];
        const isSeedRscPartial = false;
        const isSeedHeadPartial = seedHead === null && freshness !== 1;
        newCacheNode = readCacheNodeFromSeedData(seedRsc, seedLoading, isSeedRscPartial, seedHead, isSeedHeadPartial, isLeafSegment, newParallelRoutes, navigatedAt);
        needsDynamicRequest = isLeafSegment && isSeedHeadPartial;
    } else if (freshness === 1 && isLeafSegment && seedHead !== null) {
        // This is another weird case related to "not found" pages and hydration.
        // There will be a head sent by the server, but no page seed data.
        // TODO: We really should get rid of all these "not found" specific quirks
        // and make sure the tree is always consistent.
        const seedRsc = null;
        const seedLoading = null;
        const isSeedRscPartial = false;
        const isSeedHeadPartial = false;
        newCacheNode = readCacheNodeFromSeedData(seedRsc, seedLoading, isSeedRscPartial, seedHead, isSeedHeadPartial, isLeafSegment, newParallelRoutes, navigatedAt);
        needsDynamicRequest = false;
    } else if (freshness !== 1 && prefetchData !== null) {
        // Consult the prefetch cache.
        const prefetchRsc = prefetchData[0];
        const prefetchLoading = prefetchData[2];
        const isPrefetchRSCPartial = prefetchData[3];
        newCacheNode = readCacheNodeFromSeedData(prefetchRsc, prefetchLoading, isPrefetchRSCPartial, prefetchHead, isPrefetchHeadPartial, isLeafSegment, newParallelRoutes, navigatedAt);
        needsDynamicRequest = isPrefetchRSCPartial || isLeafSegment && isPrefetchHeadPartial;
    } else {
        // Spawn a request to fetch new data from the server.
        newCacheNode = spawnNewCacheNode(newParallelRoutes, isLeafSegment, navigatedAt, freshness);
        needsDynamicRequest = true;
    }
    let patchedRouterStateChildren = {};
    let taskChildren = null;
    let childNeedsDynamicRequest = false;
    let dynamicRequestTreeChildren = {};
    for(let parallelRouteKey in newRouterStateChildren){
        const newRouterStateChild = newRouterStateChildren[parallelRouteKey];
        const oldSegmentMapChild = oldParallelRoutes !== undefined ? oldParallelRoutes.get(parallelRouteKey) : undefined;
        const seedDataChild = seedDataChildren !== null ? seedDataChildren[parallelRouteKey] : null;
        const prefetchDataChild = prefetchDataChildren !== null ? prefetchDataChildren[parallelRouteKey] : null;
        const newSegmentChild = newRouterStateChild[0];
        const newSegmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(newSegmentChild);
        const oldCacheNodeChild = oldSegmentMapChild !== undefined ? oldSegmentMapChild.get(newSegmentKeyChild) : undefined;
        const taskChild = createCacheNodeOnNavigation(navigatedAt, newRouterStateChild, oldCacheNodeChild, freshness, seedDataChild ?? null, seedHead, prefetchDataChild ?? null, prefetchHead, isPrefetchHeadPartial, segmentPath, parallelRouteKey, parentNeedsDynamicRequest || needsDynamicRequest, accumulation);
        if (taskChildren === null) {
            taskChildren = new Map();
        }
        taskChildren.set(parallelRouteKey, taskChild);
        const newCacheNodeChild = taskChild.node;
        if (newCacheNodeChild !== null) {
            const newSegmentMapChild = new Map(shouldDropSiblingCaches ? undefined : oldSegmentMapChild);
            newSegmentMapChild.set(newSegmentKeyChild, newCacheNodeChild);
            newParallelRoutes.set(parallelRouteKey, newSegmentMapChild);
        }
        const taskChildRoute = taskChild.route;
        patchedRouterStateChildren[parallelRouteKey] = taskChildRoute;
        const dynamicRequestTreeChild = taskChild.dynamicRequestTree;
        if (dynamicRequestTreeChild !== null) {
            childNeedsDynamicRequest = true;
            dynamicRequestTreeChildren[parallelRouteKey] = dynamicRequestTreeChild;
        } else {
            dynamicRequestTreeChildren[parallelRouteKey] = taskChildRoute;
        }
    }
    return {
        status: needsDynamicRequest ? 0 : 1,
        route: patchRouterStateWithNewChildren(newRouterState, patchedRouterStateChildren),
        node: newCacheNode,
        dynamicRequestTree: createDynamicRequestTree(newRouterState, dynamicRequestTreeChildren, needsDynamicRequest, childNeedsDynamicRequest, parentNeedsDynamicRequest),
        // This route is not part of the current tree, so there's no reason to
        // track the refresh URL.
        refreshUrl: null,
        children: taskChildren
    };
}
function patchRouterStateWithNewChildren(baseRouterState, newChildren) {
    const clone = [
        baseRouterState[0],
        newChildren
    ];
    // Based on equivalent logic in apply-router-state-patch-to-tree, but should
    // confirm whether we need to copy all of these fields. Not sure the server
    // ever sends, e.g. the refetch marker.
    if (2 in baseRouterState) {
        clone[2] = baseRouterState[2];
    }
    if (3 in baseRouterState) {
        clone[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clone[4] = baseRouterState[4];
    }
    return clone;
}
function createDynamicRequestTree(newRouterState, dynamicRequestTreeChildren, needsDynamicRequest, childNeedsDynamicRequest, parentNeedsDynamicRequest) {
    // Create a FlightRouterState that instructs the server how to render the
    // requested segment.
    //
    // Or, if neither this segment nor any of the children require a new data,
    // then we return `null` to skip the request.
    let dynamicRequestTree = null;
    if (needsDynamicRequest) {
        dynamicRequestTree = patchRouterStateWithNewChildren(newRouterState, dynamicRequestTreeChildren);
        // The "refetch" marker is set on the top-most segment that requires new
        // data. We can omit it if a parent was already marked.
        if (!parentNeedsDynamicRequest) {
            dynamicRequestTree[3] = 'refetch';
        }
    } else if (childNeedsDynamicRequest) {
        // This segment does not request new data, but at least one of its
        // children does.
        dynamicRequestTree = patchRouterStateWithNewChildren(newRouterState, dynamicRequestTreeChildren);
    } else {
        dynamicRequestTree = null;
    }
    return dynamicRequestTree;
}
function accumulateRefreshUrl(accumulation, refreshUrl) {
    // This is a refresh navigation, and we're inside a "default" slot that's
    // not part of the current route; it was reused from an older route. In
    // order to get fresh data for this reused route, we need to issue a
    // separate request using the old route's URL.
    //
    // Track these extra URLs in the accumulated result. Later, we'll construct
    // an appropriate request for each unique URL in the final set. The reason
    // we don't do it immediately here is so we can deduplicate multiple
    // instances of the same URL into a single request. See
    // listenForDynamicRequest for more details.
    const separateRefreshUrls = accumulation.separateRefreshUrls;
    if (separateRefreshUrls === null) {
        accumulation.separateRefreshUrls = new Set([
            refreshUrl
        ]);
    } else {
        separateRefreshUrls.add(refreshUrl);
    }
}
function reuseActiveSegmentInDefaultSlot(oldUrl, oldRouterState) {
    // This is a "default" segment. These are never sent by the server during a
    // soft navigation; instead, the client reuses whatever segment was already
    // active in that slot on the previous route. This means if we later need to
    // refresh the segment, it will have to be refetched from the previous route's
    // URL. We store it in the Flight Router State.
    //
    // TODO: We also mark the segment with a "refresh" marker but I think we can
    // get rid of that eventually by making sure we only add URLs to page segments
    // that are reused. Then the presence of the URL alone is enough.
    let reusedRouterState;
    const oldRefreshMarker = oldRouterState[3];
    if (oldRefreshMarker === 'refresh') {
        // This segment was already reused from an even older route. Keep its
        // existing URL and refresh marker.
        reusedRouterState = oldRouterState;
    } else {
        // This segment was not previously reused, and it's not on the new route.
        // So it must have been delivered in the old route.
        reusedRouterState = patchRouterStateWithNewChildren(oldRouterState, oldRouterState[1]);
        reusedRouterState[2] = (0, _createhreffromurl.createHrefFromUrl)(oldUrl);
        reusedRouterState[3] = 'refresh';
    }
    return reusedRouterState;
}
function reuseDynamicCacheNode(dropPrefetchRsc, existingCacheNode, parallelRoutes) {
    // Clone an existing CacheNode's data, with (possibly) new children.
    const cacheNode = {
        rsc: existingCacheNode.rsc,
        prefetchRsc: dropPrefetchRsc ? null : existingCacheNode.prefetchRsc,
        head: existingCacheNode.head,
        prefetchHead: dropPrefetchRsc ? null : existingCacheNode.prefetchHead,
        loading: existingCacheNode.loading,
        parallelRoutes,
        // Don't update the navigatedAt timestamp, since we're reusing
        // existing data.
        navigatedAt: existingCacheNode.navigatedAt
    };
    return cacheNode;
}
function readCacheNodeFromSeedData(seedRsc, seedLoading, isSeedRscPartial, seedHead, isSeedHeadPartial, isPageSegment, parallelRoutes, navigatedAt) {
    // TODO: Currently this is threaded through the navigation logic using the
    // CacheNodeSeedData type, but in the future this will read directly from
    // the Segment Cache. See readRenderSnapshotFromCache.
    let rsc;
    let prefetchRsc;
    if (isSeedRscPartial) {
        // The prefetched data contains dynamic holes. Create a pending promise that
        // will be fulfilled when the dynamic data is received from the server.
        prefetchRsc = seedRsc;
        rsc = createDeferredRsc();
    } else {
        // The prefetched data is complete. Use it directly.
        prefetchRsc = null;
        rsc = seedRsc;
    }
    // If this is a page segment, also read the head.
    let prefetchHead;
    let head;
    if (isPageSegment) {
        if (isSeedHeadPartial) {
            prefetchHead = seedHead;
            head = createDeferredRsc();
        } else {
            prefetchHead = null;
            head = seedHead;
        }
    } else {
        prefetchHead = null;
        head = null;
    }
    const cacheNode = {
        rsc,
        prefetchRsc,
        head,
        prefetchHead,
        // TODO: Technically, a loading boundary could contain dynamic data. We
        // should have separate `loading` and `prefetchLoading` fields to handle
        // this, like we do for the segment data and head.
        loading: seedLoading,
        parallelRoutes,
        navigatedAt
    };
    return cacheNode;
}
function spawnNewCacheNode(parallelRoutes, isLeafSegment, navigatedAt, freshness) {
    // We should never spawn network requests during hydration. We must treat the
    // initial payload as authoritative, because the initial page load is used
    // as a last-ditch mechanism for recovering the app.
    //
    // This is also an important safety check because if this leaks into the
    // server rendering path (which theoretically it never should because
    // the server payload should be consistent), the server would hang because
    // these promises would never resolve.
    //
    // TODO: There is an existing case where the global "not found" boundary
    // triggers this path. But it does render correctly despite that. That's an
    // unusual render path so it's not surprising, but we should look into
    // modeling it in a more consistent way. See also the /_notFound special
    // case in updateCacheNodeOnNavigation.
    const isHydration = freshness === 1;
    const cacheNode = {
        rsc: !isHydration ? createDeferredRsc() : null,
        prefetchRsc: null,
        head: !isHydration && isLeafSegment ? createDeferredRsc() : null,
        prefetchHead: null,
        loading: !isHydration ? createDeferredRsc() : null,
        parallelRoutes,
        navigatedAt
    };
    return cacheNode;
}
// Represents whether the previuos navigation resulted in a route tree mismatch.
// A mismatch results in a refresh of the page. If there are two successive
// mismatches, we will fall back to an MPA navigation, to prevent a retry loop.
let previousNavigationDidMismatch = false;
function spawnDynamicRequests(task, primaryUrl, nextUrl, freshnessPolicy, accumulation) {
    const dynamicRequestTree = task.dynamicRequestTree;
    if (dynamicRequestTree === null) {
        // This navigation was fully cached. There are no dynamic requests to spawn.
        previousNavigationDidMismatch = false;
        return;
    }
    // This is intentionally not an async function to discourage the caller from
    // awaiting the result. Any subsequent async operations spawned by this
    // function should result in a separate navigation task, rather than
    // block the original one.
    //
    // In this function we spawn (but do not await) all the network requests that
    // block the navigation, and collect the promises. The next function,
    // `finishNavigationTask`, can await the promises in any order without
    // accidentally introducing a network waterfall.
    const primaryRequestPromise = fetchMissingDynamicData(task, dynamicRequestTree, primaryUrl, nextUrl, freshnessPolicy);
    const separateRefreshUrls = accumulation.separateRefreshUrls;
    let refreshRequestPromises = null;
    if (separateRefreshUrls !== null) {
        // There are multiple URLs that we need to request the data from. This
        // happens when a "default" parallel route slot is present in the tree, and
        // its data cannot be fetched from the current route. We need to split the
        // combined dynamic request tree into separate requests per URL.
        // TODO: Create a scoped dynamic request tree that omits anything that
        // is not relevant to the given URL. Without doing this, the server may
        // sometimes render more data than necessary; this is not a regression
        // compared to the pre-Segment Cache implementation, though, just an
        // optimization we can make in the future.
        // Construct a request tree for each additional refresh URL. This will
        // prune away everything except the parts of the tree that match the
        // given refresh URL.
        refreshRequestPromises = [];
        const canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(primaryUrl);
        for (const refreshUrl of separateRefreshUrls){
            if (refreshUrl === canonicalUrl) {
                continue;
            }
            // TODO: Create a scoped dynamic request tree that omits anything that
            // is not relevant to the given URL. Without doing this, the server may
            // sometimes render more data than necessary; this is not a regression
            // compared to the pre-Segment Cache implementation, though, just an
            // optimization we can make in the future.
            // const scopedDynamicRequestTree = splitTaskByURL(task, refreshUrl)
            const scopedDynamicRequestTree = dynamicRequestTree;
            if (scopedDynamicRequestTree !== null) {
                refreshRequestPromises.push(fetchMissingDynamicData(task, scopedDynamicRequestTree, new URL(refreshUrl, location.origin), // time the refresh URL was set, not the current Next-Url. Need to
                // start tracking this alongside the refresh URL. In the meantime,
                // if a refresh fails due to a mismatch, it will trigger a
                // hard refresh.
                nextUrl, freshnessPolicy));
            }
        }
    }
    // Further async operations are moved into this separate function to
    // discourage sequential network requests.
    const voidPromise = finishNavigationTask(task, nextUrl, primaryRequestPromise, refreshRequestPromises);
    // `finishNavigationTask` is responsible for error handling, so we can attach
    // noop callbacks to this promise.
    voidPromise.then(noop, noop);
}
async function finishNavigationTask(task, nextUrl, primaryRequestPromise, refreshRequestPromises) {
    // Wait for all the requests to finish, or for the first one to fail.
    let exitStatus = await waitForRequestsToFinish(primaryRequestPromise, refreshRequestPromises);
    // Once the all the requests have finished, check the tree for any remaining
    // pending tasks. If anything is still pending, it means the server response
    // does not match the client, and we must refresh to get back to a consistent
    // state. We can skip this step if we already detected a mismatch during the
    // first phase; it doesn't matter in that case because we're going to refresh
    // the whole tree regardless.
    if (exitStatus === 0) {
        exitStatus = abortRemainingPendingTasks(task, null, null);
    }
    switch(exitStatus){
        case 0:
            {
                // The task has completely finished. There's no missing data. Exit.
                previousNavigationDidMismatch = false;
                return;
            }
        case 1:
            {
                // Some data failed to finish loading. Trigger a soft retry.
                // TODO: As an extra precaution against soft retry loops, consider
                // tracking whether a navigation was itself triggered by a retry. If two
                // happen in a row, fall back to a hard retry.
                const isHardRetry = false;
                const primaryRequestResult = await primaryRequestPromise;
                dispatchRetryDueToTreeMismatch(isHardRetry, primaryRequestResult.url, nextUrl, primaryRequestResult.seed, task.route);
                return;
            }
        case 2:
            {
                // Some data failed to finish loading in a non-recoverable way, such as a
                // network error. Trigger an MPA navigation.
                //
                // Hard navigating/refreshing is how we prevent an infinite retry loop
                // caused by a network error — when the network fails, we fall back to the
                // browser behavior for offline navigations. In the future, Next.js may
                // introduce its own custom handling of offline navigations, but that
                // doesn't exist yet.
                const isHardRetry = true;
                const primaryRequestResult = await primaryRequestPromise;
                dispatchRetryDueToTreeMismatch(isHardRetry, primaryRequestResult.url, nextUrl, primaryRequestResult.seed, task.route);
                return;
            }
        default:
            {
                return exitStatus;
            }
    }
}
function waitForRequestsToFinish(primaryRequestPromise, refreshRequestPromises) {
    // Custom async combinator logic. This could be replaced by Promise.any but
    // we don't assume that's available.
    //
    // Each promise resolves once the server responsds and the data is written
    // into the CacheNode tree. Resolve the combined promise once all the
    // requests finish.
    //
    // Or, resolve as soon as one of the requests fails, without waiting for the
    // others to finish.
    return new Promise((resolve)=>{
        const onFulfill = (result)=>{
            if (result.exitStatus === 0) {
                remainingCount--;
                if (remainingCount === 0) {
                    // All the requests finished successfully.
                    resolve(0);
                }
            } else {
                // One of the requests failed. Exit with a failing status.
                // NOTE: It's possible for one of the requests to fail with SoftRetry
                // and a later one to fail with HardRetry. In this case, we choose to
                // retry immediately, rather than delay the retry until all the requests
                // finish. If it fails again, we will hard retry on the next
                // attempt, anyway.
                resolve(result.exitStatus);
            }
        };
        // onReject shouldn't ever be called because fetchMissingDynamicData's
        // entire body is wrapped in a try/catch. This is just defensive.
        const onReject = ()=>resolve(2);
        // Attach the listeners to the promises.
        let remainingCount = 1;
        primaryRequestPromise.then(onFulfill, onReject);
        if (refreshRequestPromises !== null) {
            remainingCount += refreshRequestPromises.length;
            refreshRequestPromises.forEach((refreshRequestPromise)=>refreshRequestPromise.then(onFulfill, onReject));
        }
    });
}
function dispatchRetryDueToTreeMismatch(isHardRetry, retryUrl, retryNextUrl, seed, baseTree) {
    // If this is the second time in a row that a navigation resulted in a
    // mismatch, fall back to a hard (MPA) refresh.
    isHardRetry = isHardRetry || previousNavigationDidMismatch;
    previousNavigationDidMismatch = true;
    const retryAction = {
        type: _routerreducertypes.ACTION_SERVER_PATCH,
        previousTree: baseTree,
        url: retryUrl,
        nextUrl: retryNextUrl,
        seed,
        mpa: isHardRetry
    };
    (0, _useactionqueue.dispatchAppRouterAction)(retryAction);
}
async function fetchMissingDynamicData(task, dynamicRequestTree, url, nextUrl, freshnessPolicy) {
    try {
        const result = await (0, _fetchserverresponse.fetchServerResponse)(url, {
            flightRouterState: dynamicRequestTree,
            nextUrl,
            isHmrRefresh: freshnessPolicy === 4
        });
        if (typeof result === 'string') {
            // fetchServerResponse will return an href to indicate that the SPA
            // navigation failed. For example, if the server triggered a hard
            // redirect, or the fetch request errored. Initiate an MPA navigation
            // to the given href.
            return {
                exitStatus: 2,
                url: new URL(result, location.origin),
                seed: null
            };
        }
        const seed = (0, _navigation.convertServerPatchToFullTree)(task.route, result.flightData, result.renderedSearch);
        const didReceiveUnknownParallelRoute = writeDynamicDataIntoNavigationTask(task, seed.tree, seed.data, seed.head, result.debugInfo);
        return {
            exitStatus: didReceiveUnknownParallelRoute ? 1 : 0,
            url: new URL(result.canonicalUrl, location.origin),
            seed
        };
    } catch  {
        // This shouldn't happen because fetchServerResponse's entire body is
        // wrapped in a try/catch. If it does, though, it implies the server failed
        // to respond with any tree at all. So we must fall back to a hard retry.
        return {
            exitStatus: 2,
            url: url,
            seed: null
        };
    }
}
function writeDynamicDataIntoNavigationTask(task, serverRouterState, dynamicData, dynamicHead, debugInfo) {
    if (task.status === 0 && dynamicData !== null) {
        task.status = 1;
        finishPendingCacheNode(task.node, dynamicData, dynamicHead, debugInfo);
    }
    const taskChildren = task.children;
    const serverChildren = serverRouterState[1];
    const dynamicDataChildren = dynamicData !== null ? dynamicData[1] : null;
    // Detect whether the server sends a parallel route slot that the client
    // doesn't know about.
    let didReceiveUnknownParallelRoute = false;
    if (taskChildren !== null) {
        for(const parallelRouteKey in serverChildren){
            const serverRouterStateChild = serverChildren[parallelRouteKey];
            const dynamicDataChild = dynamicDataChildren !== null ? dynamicDataChildren[parallelRouteKey] : null;
            const taskChild = taskChildren.get(parallelRouteKey);
            if (taskChild === undefined) {
                // The server sent a child segment that the client doesn't know about.
                //
                // When we receive an unknown parallel route, we must consider it a
                // mismatch. This is unlike the case where the segment itself
                // mismatches, because multiple routes can be active simultaneously.
                // But a given layout should never have a mismatching set of
                // child slots.
                //
                // Theoretically, this should only happen in development during an HMR
                // refresh, because the set of parallel routes for a layout does not
                // change over the lifetime of a build/deployment. In production, we
                // should have already mismatched on either the build id or the segment
                // path. But as an extra precaution, we validate in prod, too.
                didReceiveUnknownParallelRoute = true;
            } else {
                const taskSegment = taskChild.route[0];
                if ((0, _matchsegments.matchSegment)(serverRouterStateChild[0], taskSegment) && dynamicDataChild !== null && dynamicDataChild !== undefined) {
                    // Found a match for this task. Keep traversing down the task tree.
                    const childDidReceiveUnknownParallelRoute = writeDynamicDataIntoNavigationTask(taskChild, serverRouterStateChild, dynamicDataChild, dynamicHead, debugInfo);
                    if (childDidReceiveUnknownParallelRoute) {
                        didReceiveUnknownParallelRoute = true;
                    }
                }
            }
        }
    }
    return didReceiveUnknownParallelRoute;
}
function finishPendingCacheNode(cacheNode, dynamicData, dynamicHead, debugInfo) {
    // Writes a dynamic response into an existing Cache Node tree. This does _not_
    // create a new tree, it updates the existing tree in-place. So it must follow
    // the Suspense rules of cache safety — it can resolve pending promises, but
    // it cannot overwrite existing data. It can add segments to the tree (because
    // a missing segment will cause the layout router to suspend).
    // but it cannot delete them.
    //
    // We must resolve every promise in the tree, or else it will suspend
    // indefinitely. If we did not receive data for a segment, we will resolve its
    // data promise to `null` to trigger a lazy fetch during render.
    // Use the dynamic data from the server to fulfill the deferred RSC promise
    // on the Cache Node.
    const rsc = cacheNode.rsc;
    const dynamicSegmentData = dynamicData[0];
    if (dynamicSegmentData === null) {
        // This is an empty CacheNode; this particular server request did not
        // render this segment. There may be a separate pending request that will,
        // though, so we won't abort the task until all pending requests finish.
        return;
    }
    if (rsc === null) {
        // This is a lazy cache node. We can overwrite it. This is only safe
        // because we know that the LayoutRouter suspends if `rsc` is `null`.
        cacheNode.rsc = dynamicSegmentData;
    } else if (isDeferredRsc(rsc)) {
        // This is a deferred RSC promise. We can fulfill it with the data we just
        // received from the server. If it was already resolved by a different
        // navigation, then this does nothing because we can't overwrite data.
        rsc.resolve(dynamicSegmentData, debugInfo);
    } else {
    // This is not a deferred RSC promise, nor is it empty, so it must have
    // been populated by a different navigation. We must not overwrite it.
    }
    // If we navigated without a prefetch, then `loading` will be a deferred promise too.
    // Fulfill it using the dynamic response so that we can display the loading boundary.
    const loading = cacheNode.loading;
    if (isDeferredRsc(loading)) {
        const dynamicLoading = dynamicData[2];
        loading.resolve(dynamicLoading, debugInfo);
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved with the dynamic head from
    // the server.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(dynamicHead, debugInfo);
    }
}
function abortRemainingPendingTasks(task, error, debugInfo) {
    let exitStatus;
    if (task.status === 0) {
        // The data for this segment is still missing.
        task.status = 2;
        abortPendingCacheNode(task.node, error, debugInfo);
        // If the server failed to fulfill the data for this segment, it implies
        // that the route tree received from the server mismatched the tree that
        // was previously prefetched.
        //
        // In an app with fully static routes and no proxy-driven redirects or
        // rewrites, this should never happen, because the route for a URL would
        // always be the same across multiple requests. So, this implies that some
        // runtime routing condition changed, likely in a proxy, without being
        // pushed to the client.
        //
        // When this happens, we treat this the same as a refresh(). The entire
        // tree will be re-rendered from the root.
        if (task.refreshUrl === null) {
            // Trigger a "soft" refresh. Essentially the same as calling `refresh()`
            // in a Server Action.
            exitStatus = 1;
        } else {
            // The mismatch was discovered inside an inactive parallel route. This
            // implies the inactive parallel route is no longer reachable at the URL
            // that originally rendered it. Fall back to an MPA refresh.
            // TODO: An alternative could be to trigger a soft refresh but to _not_
            // re-use the inactive parallel routes this time. Similar to what would
            // happen if were to do a hard refrehs, but without the HTML page.
            exitStatus = 2;
        }
    } else {
        // This segment finished. (An error here is treated as Done because they are
        // surfaced to the application during render.)
        exitStatus = 0;
    }
    const taskChildren = task.children;
    if (taskChildren !== null) {
        for (const [, taskChild] of taskChildren){
            const childExitStatus = abortRemainingPendingTasks(taskChild, error, debugInfo);
            // Propagate the exit status up the tree. The statuses are ordered by
            // their precedence.
            if (childExitStatus > exitStatus) {
                exitStatus = childExitStatus;
            }
        }
    }
    return exitStatus;
}
function abortPendingCacheNode(cacheNode, error, debugInfo) {
    const rsc = cacheNode.rsc;
    if (isDeferredRsc(rsc)) {
        if (error === null) {
            // This will trigger a lazy fetch during render.
            rsc.resolve(null, debugInfo);
        } else {
            // This will trigger an error during rendering.
            rsc.reject(error, debugInfo);
        }
    }
    const loading = cacheNode.loading;
    if (isDeferredRsc(loading)) {
        loading.resolve(null, debugInfo);
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved. If an error was provided, we
    // will not resolve it with an error, since this is rendered at the root of
    // the app. We want the segment to error, not the entire app.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(null, debugInfo);
    }
}
const DEFERRED = Symbol();
function isDeferredRsc(value) {
    return value && typeof value === 'object' && value.tag === DEFERRED;
}
function createDeferredRsc() {
    // Create an unresolved promise that represents data derived from a Flight
    // response. The promise will be resolved later as soon as we start receiving
    // data from the server, i.e. as soon as the Flight client decodes and returns
    // the top-level response object.
    // The `_debugInfo` field contains profiling information. Promises that are
    // created by Flight already have this info added by React; for any derived
    // promise created by the router, we need to transfer the Flight debug info
    // onto the derived promise.
    //
    // The debug info represents the latency between the start of the navigation
    // and the start of rendering. (It does not represent the time it takes for
    // whole stream to finish.)
    const debugInfo = [];
    let resolve;
    let reject;
    const pendingRsc = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    pendingRsc.status = 'pending';
    pendingRsc.resolve = (value, responseDebugInfo)=>{
        if (pendingRsc.status === 'pending') {
            const fulfilledRsc = pendingRsc;
            fulfilledRsc.status = 'fulfilled';
            fulfilledRsc.value = value;
            if (responseDebugInfo !== null) {
                // Transfer the debug info to the derived promise.
                debugInfo.push.apply(debugInfo, responseDebugInfo);
            }
            resolve(value);
        }
    };
    pendingRsc.reject = (error, responseDebugInfo)=>{
        if (pendingRsc.status === 'pending') {
            const rejectedRsc = pendingRsc;
            rejectedRsc.status = 'rejected';
            rejectedRsc.reason = error;
            if (responseDebugInfo !== null) {
                // Transfer the debug info to the derived promise.
                debugInfo.push.apply(debugInfo, responseDebugInfo);
            }
            reject(error);
        }
    };
    pendingRsc.tag = DEFERRED;
    pendingRsc._debugInfo = debugInfo;
    return pendingRsc;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ppr-navigations.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    convertServerPatchToFullTree: null,
    navigate: null,
    navigateToSeededRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    convertServerPatchToFullTree: function() {
        return convertServerPatchToFullTree;
    },
    navigate: function() {
        return navigate;
    },
    navigateToSeededRoute: function() {
        return navigateToSeededRoute;
    }
});
const _fetchserverresponse = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-ssr] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-ssr] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-ssr] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache.js [app-ssr] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
function navigate(url, currentUrl, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, shouldScroll, accumulation) {
    const now = Date.now();
    const href = url.href;
    // We special case navigations to the exact same URL as the current location.
    // It's a common UI pattern for apps to refresh when you click a link to the
    // current page. So when this happens, we refresh the dynamic data in the page
    // segments.
    //
    // Note that this does not apply if the any part of the hash or search query
    // has changed. This might feel a bit weird but it makes more sense when you
    // consider that the way to trigger this behavior is to click the same link
    // multiple times.
    //
    // TODO: We should probably refresh the *entire* route when this case occurs,
    // not just the page segments. Essentially treating it the same as a refresh()
    // triggered by an action, which is the more explicit way of modeling the UI
    // pattern described above.
    //
    // Also note that this only refreshes the dynamic data, not static/ cached
    // data. If the page segment is fully static and prefetched, the request is
    // skipped. (This is also how refresh() works.)
    const isSamePageNavigation = href === currentUrl.href;
    const cacheKey = (0, _cachekey.createCacheKey)(href, nextUrl);
    const route = (0, _cache.readRouteCacheEntry)(now, cacheKey);
    if (route !== null && route.status === _cache.EntryStatus.Fulfilled) {
        // We have a matching prefetch.
        const snapshot = readRenderSnapshotFromCache(now, route, route.tree);
        const prefetchFlightRouterState = snapshot.flightRouterState;
        const prefetchSeedData = snapshot.seedData;
        const headSnapshot = readHeadSnapshotFromCache(now, route);
        const prefetchHead = headSnapshot.rsc;
        const isPrefetchHeadPartial = headSnapshot.isPartial;
        // TODO: The "canonicalUrl" stored in the cache doesn't include the hash,
        // because hash entries do not vary by hash fragment. However, the one
        // we set in the router state *does* include the hash, and it's used to
        // sync with the actual browser location. To make this less of a refactor
        // hazard, we should always track the hash separately from the rest of
        // the URL.
        const newCanonicalUrl = route.canonicalUrl + url.hash;
        const renderedSearch = route.renderedSearch;
        return navigateUsingPrefetchedRouteTree(now, url, currentUrl, nextUrl, isSamePageNavigation, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, newCanonicalUrl, renderedSearch, freshnessPolicy, shouldScroll);
    }
    // There was no matching route tree in the cache. Let's see if we can
    // construct an "optimistic" route tree.
    //
    // Do not construct an optimistic route tree if there was a cache hit, but
    // the entry has a rejected status, since it may have been rejected due to a
    // rewrite or redirect based on the search params.
    //
    // TODO: There are multiple reasons a prefetch might be rejected; we should
    // track them explicitly and choose what to do here based on that.
    if (route === null || route.status !== _cache.EntryStatus.Rejected) {
        const optimisticRoute = (0, _cache.requestOptimisticRouteCacheEntry)(now, url, nextUrl);
        if (optimisticRoute !== null) {
            // We have an optimistic route tree. Proceed with the normal flow.
            const snapshot = readRenderSnapshotFromCache(now, optimisticRoute, optimisticRoute.tree);
            const prefetchFlightRouterState = snapshot.flightRouterState;
            const prefetchSeedData = snapshot.seedData;
            const headSnapshot = readHeadSnapshotFromCache(now, optimisticRoute);
            const prefetchHead = headSnapshot.rsc;
            const isPrefetchHeadPartial = headSnapshot.isPartial;
            const newCanonicalUrl = optimisticRoute.canonicalUrl + url.hash;
            const newRenderedSearch = optimisticRoute.renderedSearch;
            return navigateUsingPrefetchedRouteTree(now, url, currentUrl, nextUrl, isSamePageNavigation, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, newCanonicalUrl, newRenderedSearch, freshnessPolicy, shouldScroll);
        }
    }
    // There's no matching prefetch for this route in the cache.
    let collectedDebugInfo = accumulation.collectedDebugInfo ?? [];
    if (accumulation.collectedDebugInfo === undefined) {
        collectedDebugInfo = accumulation.collectedDebugInfo = [];
    }
    return {
        tag: _types.NavigationResultTag.Async,
        data: navigateDynamicallyWithNoPrefetch(now, url, currentUrl, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, shouldScroll, collectedDebugInfo)
    };
}
function navigateToSeededRoute(now, url, canonicalUrl, navigationSeed, currentUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, nextUrl, shouldScroll) {
    // A version of navigate() that accepts the target route tree as an argument
    // rather than reading it from the prefetch cache.
    const accumulation = {
        scrollableSegments: null,
        separateRefreshUrls: null
    };
    const isSamePageNavigation = url.href === currentUrl.href;
    const task = (0, _pprnavigations.startPPRNavigation)(now, currentUrl, currentCacheNode, currentFlightRouterState, navigationSeed.tree, freshnessPolicy, navigationSeed.data, navigationSeed.head, null, null, false, isSamePageNavigation, accumulation);
    if (task !== null) {
        (0, _pprnavigations.spawnDynamicRequests)(task, url, nextUrl, freshnessPolicy, accumulation);
        return navigationTaskToResult(task, canonicalUrl, navigationSeed.renderedSearch, accumulation.scrollableSegments, shouldScroll, url.hash);
    }
    // Could not perform a SPA navigation. Revert to a full-page (MPA) navigation.
    return {
        tag: _types.NavigationResultTag.MPA,
        data: canonicalUrl
    };
}
function navigateUsingPrefetchedRouteTree(now, url, currentUrl, nextUrl, isSamePageNavigation, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, canonicalUrl, renderedSearch, freshnessPolicy, shouldScroll) {
    // Recursively construct a prefetch tree by reading from the Segment Cache. To
    // maintain compatibility, we output the same data structures as the old
    // prefetching implementation: FlightRouterState and CacheNodeSeedData.
    // TODO: Eventually updateCacheNodeOnNavigation (or the equivalent) should
    // read from the Segment Cache directly. It's only structured this way for now
    // so we can share code with the old prefetching implementation.
    const accumulation = {
        scrollableSegments: null,
        separateRefreshUrls: null
    };
    const seedData = null;
    const seedHead = null;
    const task = (0, _pprnavigations.startPPRNavigation)(now, currentUrl, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, freshnessPolicy, seedData, seedHead, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, accumulation);
    if (task !== null) {
        (0, _pprnavigations.spawnDynamicRequests)(task, url, nextUrl, freshnessPolicy, accumulation);
        return navigationTaskToResult(task, canonicalUrl, renderedSearch, accumulation.scrollableSegments, shouldScroll, url.hash);
    }
    // Could not perform a SPA navigation. Revert to a full-page (MPA) navigation.
    return {
        tag: _types.NavigationResultTag.MPA,
        data: canonicalUrl
    };
}
function navigationTaskToResult(task, canonicalUrl, renderedSearch, scrollableSegments, shouldScroll, hash) {
    return {
        tag: _types.NavigationResultTag.Success,
        data: {
            flightRouterState: task.route,
            cacheNode: task.node,
            canonicalUrl,
            renderedSearch,
            scrollableSegments,
            shouldScroll,
            hash
        }
    };
}
function readRenderSnapshotFromCache(now, route, tree) {
    let childRouterStates = {};
    let childSeedDatas = {};
    const slots = tree.slots;
    if (slots !== null) {
        for(const parallelRouteKey in slots){
            const childTree = slots[parallelRouteKey];
            const childResult = readRenderSnapshotFromCache(now, route, childTree);
            childRouterStates[parallelRouteKey] = childResult.flightRouterState;
            childSeedDatas[parallelRouteKey] = childResult.seedData;
        }
    }
    let rsc = null;
    let loading = null;
    let isPartial = true;
    const segmentEntry = (0, _cache.readSegmentCacheEntry)(now, tree.varyPath);
    if (segmentEntry !== null) {
        switch(segmentEntry.status){
            case _cache.EntryStatus.Fulfilled:
                {
                    // Happy path: a cache hit
                    rsc = segmentEntry.rsc;
                    loading = segmentEntry.loading;
                    isPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Pending:
                {
                    // We haven't received data for this segment yet, but there's already
                    // an in-progress request. Since it's extremely likely to arrive
                    // before the dynamic data response, we might as well use it.
                    const promiseForFulfilledEntry = (0, _cache.waitForSegmentCacheEntry)(segmentEntry);
                    rsc = promiseForFulfilledEntry.then((entry)=>entry !== null ? entry.rsc : null);
                    loading = promiseForFulfilledEntry.then((entry)=>entry !== null ? entry.loading : null);
                    // Because the request is still pending, we typically don't know yet
                    // whether the response will be partial. We shouldn't skip this segment
                    // during the dynamic navigation request. Otherwise, we might need to
                    // do yet another request to fill in the remaining data, creating
                    // a waterfall.
                    //
                    // The one exception is if this segment is being fetched with via
                    // prefetch={true} (i.e. the "force stale" or "full" strategy). If so,
                    // we can assume the response will be full. This field is set to `false`
                    // for such segments.
                    isPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Empty:
            case _cache.EntryStatus.Rejected:
                break;
            default:
                segmentEntry;
        }
    }
    // The navigation implementation expects the search params to be
    // included in the segment. However, the Segment Cache tracks search
    // params separately from the rest of the segment key. So we need to
    // add them back here.
    //
    // See corresponding comment in convertFlightRouterStateToTree.
    //
    // TODO: What we should do instead is update the navigation diffing
    // logic to compare search params explicitly. This is a temporary
    // solution until more of the Segment Cache implementation has settled.
    const segment = (0, _segment.addSearchParamsIfPageSegment)(tree.segment, Object.fromEntries(new URLSearchParams(route.renderedSearch)));
    // We don't need this information in a render snapshot, so this can just be a placeholder.
    const hasRuntimePrefetch = false;
    return {
        flightRouterState: [
            segment,
            childRouterStates,
            null,
            null,
            tree.isRootLayout
        ],
        seedData: [
            rsc,
            childSeedDatas,
            loading,
            isPartial,
            hasRuntimePrefetch
        ]
    };
}
function readHeadSnapshotFromCache(now, route) {
    // Same as readRenderSnapshotFromCache, but for the head
    let rsc = null;
    let isPartial = true;
    const segmentEntry = (0, _cache.readSegmentCacheEntry)(now, route.metadata.varyPath);
    if (segmentEntry !== null) {
        switch(segmentEntry.status){
            case _cache.EntryStatus.Fulfilled:
                {
                    rsc = segmentEntry.rsc;
                    isPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Pending:
                {
                    const promiseForFulfilledEntry = (0, _cache.waitForSegmentCacheEntry)(segmentEntry);
                    rsc = promiseForFulfilledEntry.then((entry)=>entry !== null ? entry.rsc : null);
                    isPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Empty:
            case _cache.EntryStatus.Rejected:
                break;
            default:
                segmentEntry;
        }
    }
    return {
        rsc,
        isPartial
    };
}
// Used to request all the dynamic data for a route, rather than just a subset,
// e.g. during a refresh or a revalidation. Typically this gets constructed
// during the normal flow when diffing the route tree, but for an unprefetched
// navigation, where we don't know the structure of the target route, we use
// this instead.
const DynamicRequestTreeForEntireRoute = [
    '',
    {},
    null,
    'refetch'
];
async function navigateDynamicallyWithNoPrefetch(now, url, currentUrl, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, shouldScroll, collectedDebugInfo) {
    // Runs when a navigation happens but there's no cached prefetch we can use.
    // Don't bother to wait for a prefetch response; go straight to a full
    // navigation that contains both static and dynamic data in a single stream.
    // (This is unlike the old navigation implementation, which instead blocks
    // the dynamic request until a prefetch request is received.)
    //
    // To avoid duplication of logic, we're going to pretend that the tree
    // returned by the dynamic request is, in fact, a prefetch tree. Then we can
    // use the same server response to write the actual data into the CacheNode
    // tree. So it's the same flow as the "happy path" (prefetch, then
    // navigation), except we use a single server response for both stages.
    let dynamicRequestTree;
    switch(freshnessPolicy){
        case _pprnavigations.FreshnessPolicy.Default:
        case _pprnavigations.FreshnessPolicy.HistoryTraversal:
            dynamicRequestTree = currentFlightRouterState;
            break;
        case _pprnavigations.FreshnessPolicy.Hydration:
        case _pprnavigations.FreshnessPolicy.RefreshAll:
        case _pprnavigations.FreshnessPolicy.HMRRefresh:
            dynamicRequestTree = DynamicRequestTreeForEntireRoute;
            break;
        default:
            freshnessPolicy;
            dynamicRequestTree = currentFlightRouterState;
            break;
    }
    const promiseForDynamicServerResponse = (0, _fetchserverresponse.fetchServerResponse)(url, {
        flightRouterState: dynamicRequestTree,
        nextUrl
    });
    const result = await promiseForDynamicServerResponse;
    if (typeof result === 'string') {
        // This is an MPA navigation.
        const newUrl = result;
        return {
            tag: _types.NavigationResultTag.MPA,
            data: newUrl
        };
    }
    const { flightData, canonicalUrl, renderedSearch, debugInfo: debugInfoFromResponse } = result;
    if (debugInfoFromResponse !== null) {
        collectedDebugInfo.push(...debugInfoFromResponse);
    }
    // Since the response format of dynamic requests and prefetches is slightly
    // different, we'll need to massage the data a bit. Create FlightRouterState
    // tree that simulates what we'd receive as the result of a prefetch.
    const navigationSeed = convertServerPatchToFullTree(currentFlightRouterState, flightData, renderedSearch);
    return navigateToSeededRoute(now, url, (0, _createhreffromurl.createHrefFromUrl)(canonicalUrl), navigationSeed, currentUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, nextUrl, shouldScroll);
}
function convertServerPatchToFullTree(currentTree, flightData, renderedSearch) {
    // During a client navigation or prefetch, the server sends back only a patch
    // for the parts of the tree that have changed.
    //
    // This applies the patch to the base tree to create a full representation of
    // the resulting tree.
    //
    // The return type includes a full FlightRouterState tree and a full
    // CacheNodeSeedData tree. (Conceptually these are the same tree, and should
    // eventually be unified, but there's still lots of existing code that
    // operates on FlightRouterState trees alone without the CacheNodeSeedData.)
    //
    // TODO: This similar to what apply-router-state-patch-to-tree does. It
    // will eventually fully replace it. We should get rid of all the remaining
    // places where we iterate over the server patch format. This should also
    // eventually replace normalizeFlightData.
    let baseTree = currentTree;
    let baseData = null;
    let head = null;
    for (const { segmentPath, tree: treePatch, seedData: dataPatch, head: headPatch } of flightData){
        const result = convertServerPatchToFullTreeImpl(baseTree, baseData, treePatch, dataPatch, segmentPath, 0);
        baseTree = result.tree;
        baseData = result.data;
        // This is the same for all patches per response, so just pick an
        // arbitrary one
        head = headPatch;
    }
    return {
        tree: baseTree,
        data: baseData,
        renderedSearch,
        head
    };
}
function convertServerPatchToFullTreeImpl(baseRouterState, baseData, treePatch, dataPatch, segmentPath, index) {
    if (index === segmentPath.length) {
        // We reached the part of the tree that we need to patch.
        return {
            tree: treePatch,
            data: dataPatch
        };
    }
    // segmentPath represents the parent path of subtree. It's a repeating
    // pattern of parallel route key and segment:
    //
    //   [string, Segment, string, Segment, string, Segment, ...]
    //
    // This path tells us which part of the base tree to apply the tree patch.
    //
    // NOTE: We receive the FlightRouterState patch in the same request as the
    // seed data patch. Therefore we don't need to worry about diffing the segment
    // values; we can assume the server sent us a correct result.
    const updatedParallelRouteKey = segmentPath[index];
    // const segment: Segment = segmentPath[index + 1] <-- Not used, see note above
    const baseTreeChildren = baseRouterState[1];
    const baseSeedDataChildren = baseData !== null ? baseData[1] : null;
    const newTreeChildren = {};
    const newSeedDataChildren = {};
    for(const parallelRouteKey in baseTreeChildren){
        const childBaseRouterState = baseTreeChildren[parallelRouteKey];
        const childBaseSeedData = baseSeedDataChildren !== null ? baseSeedDataChildren[parallelRouteKey] ?? null : null;
        if (parallelRouteKey === updatedParallelRouteKey) {
            const result = convertServerPatchToFullTreeImpl(childBaseRouterState, childBaseSeedData, treePatch, dataPatch, segmentPath, // the end of the segment path.
            index + 2);
            newTreeChildren[parallelRouteKey] = result.tree;
            newSeedDataChildren[parallelRouteKey] = result.data;
        } else {
            // This child is not being patched. Copy it over as-is.
            newTreeChildren[parallelRouteKey] = childBaseRouterState;
            newSeedDataChildren[parallelRouteKey] = childBaseSeedData;
        }
    }
    let clonedTree;
    let clonedSeedData;
    // Clone all the fields except the children.
    // Clone the FlightRouterState tree. Based on equivalent logic in
    // apply-router-state-patch-to-tree, but should confirm whether we need to
    // copy all of these fields. Not sure the server ever sends, e.g. the
    // refetch marker.
    clonedTree = [
        baseRouterState[0],
        newTreeChildren
    ];
    if (2 in baseRouterState) {
        clonedTree[2] = baseRouterState[2];
    }
    if (3 in baseRouterState) {
        clonedTree[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clonedTree[4] = baseRouterState[4];
    }
    // Clone the CacheNodeSeedData tree.
    const isEmptySeedDataPartial = true;
    clonedSeedData = [
        null,
        newSeedDataChildren,
        null,
        isEmptySeedDataPartial,
        false
    ];
    return {
        tree: clonedTree,
        data: clonedSeedData
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DYNAMIC_STALETIME_MS: null,
    STATIC_STALETIME_MS: null,
    generateSegmentsFromPatch: null,
    handleExternalUrl: null,
    handleNavigationResult: null,
    navigateReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DYNAMIC_STALETIME_MS: function() {
        return DYNAMIC_STALETIME_MS;
    },
    STATIC_STALETIME_MS: function() {
        return STATIC_STALETIME_MS;
    },
    generateSegmentsFromPatch: function() {
        return generateSegmentsFromPatch;
    },
    handleExternalUrl: function() {
        return handleExternalUrl;
    },
    handleNavigationResult: function() {
        return handleNavigationResult;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _createhreffromurl = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-ssr] (ecmascript)");
const _handlemutable = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-ssr] (ecmascript)");
const _navigation = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/navigation.js [app-ssr] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache.js [app-ssr] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-ssr] (ecmascript)");
const DYNAMIC_STALETIME_MS = Number(("TURBOPACK compile-time value", "0")) * 1000;
const STATIC_STALETIME_MS = (0, _cache.getStaleTimeMs)(Number(("TURBOPACK compile-time value", "300")));
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = undefined;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function generateSegmentsFromPatch(flightRouterPatch) {
    const segments = [];
    const [segment, parallelRoutes] = flightRouterPatch;
    if (Object.keys(parallelRoutes).length === 0) {
        return [
            [
                segment
            ]
        ];
    }
    for (const [parallelRouteKey, parallelRoute] of Object.entries(parallelRoutes)){
        for (const childSegment of generateSegmentsFromPatch(parallelRoute)){
            // If the segment is empty, it means we are at the root of the tree
            if (segment === '') {
                segments.push([
                    parallelRouteKey,
                    ...childSegment
                ]);
            } else {
                segments.push([
                    segment,
                    parallelRouteKey,
                    ...childSegment
                ]);
            }
        }
    }
    return segments;
}
function handleNavigationResult(url, state, mutable, pendingPush, result) {
    switch(result.tag){
        case _types.NavigationResultTag.MPA:
            {
                // Perform an MPA navigation.
                const newUrl = result.data;
                return handleExternalUrl(state, mutable, newUrl, pendingPush);
            }
        case _types.NavigationResultTag.Success:
            {
                // Received a new result.
                mutable.cache = result.data.cacheNode;
                mutable.patchedTree = result.data.flightRouterState;
                mutable.renderedSearch = result.data.renderedSearch;
                mutable.canonicalUrl = result.data.canonicalUrl;
                // TODO: During a refresh, we don't set the `scrollableSegments`. There's
                // some confusing and subtle logic in `handleMutable` that decides what
                // to do when `shouldScroll` is set but `scrollableSegments` is not. I'm
                // not convinced it's totally coherent but the tests assert on this
                // particular behavior so I've ported the logic as-is from the previous
                // router implementation, for now.
                mutable.scrollableSegments = result.data.scrollableSegments ?? undefined;
                mutable.shouldScroll = result.data.shouldScroll;
                mutable.hashFragment = result.data.hash;
                // Check if the only thing that changed was the hash fragment.
                const oldUrl = new URL(state.canonicalUrl, url);
                const onlyHashChange = // navigations are always same-origin.
                url.pathname === oldUrl.pathname && url.search === oldUrl.search && url.hash !== oldUrl.hash;
                if (onlyHashChange) {
                    // The only updated part of the URL is the hash.
                    mutable.onlyHashChange = true;
                    mutable.shouldScroll = result.data.shouldScroll;
                    mutable.hashFragment = url.hash;
                    // Setting this to an empty array triggers a scroll for all new and
                    // updated segments. See `ScrollAndFocusHandler` for more details.
                    mutable.scrollableSegments = [];
                }
                return (0, _handlemutable.handleMutable)(state, mutable);
            }
        case _types.NavigationResultTag.Async:
            {
                return result.data.then((asyncResult)=>handleNavigationResult(url, state, mutable, pendingPush, asyncResult), // TODO: This matches the current behavior but we need to do something
                // better here if the network fails.
                ()=>{
                    return state;
                });
            }
        default:
            {
                result;
                return state;
            }
    }
}
function navigateReducer(state, action) {
    const { url, isExternalUrl, navigateType, shouldScroll } = action;
    const mutable = {};
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === 'push';
    mutable.preserveCustomHistoryState = false;
    mutable.pendingPush = pendingPush;
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    // Handles case where `<meta http-equiv="refresh">` tag is present,
    // which will trigger an MPA navigation.
    if (document.getElementById('__next-page-redirect')) {
        return handleExternalUrl(state, mutable, href, pendingPush);
    }
    // Temporary glue code between the router reducer and the new navigation
    // implementation. Eventually we'll rewrite the router reducer to a
    // state machine.
    const currentUrl = new URL(state.canonicalUrl, location.origin);
    const result = (0, _navigation.navigate)(url, currentUrl, state.cache, state.tree, state.nextUrl, _pprnavigations.FreshnessPolicy.Default, shouldScroll, mutable);
    return handleNavigationResult(url, state, mutable, pendingPush, result);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createPromiseWithResolvers", {
    enumerable: true,
    get: function() {
        return createPromiseWithResolvers;
    }
});
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise
    };
} //# sourceMappingURL=promise-with-resolvers.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    EntryStatus: null,
    canNewFetchStrategyProvideMoreContent: null,
    convertRouteTreeToFlightRouterState: null,
    createDetachedSegmentCacheEntry: null,
    fetchRouteOnCacheMiss: null,
    fetchSegmentOnCacheMiss: null,
    fetchSegmentPrefetchesUsingDynamicRequest: null,
    getCurrentCacheVersion: null,
    getStaleTimeMs: null,
    overwriteRevalidatingSegmentCacheEntry: null,
    pingInvalidationListeners: null,
    readOrCreateRevalidatingSegmentEntry: null,
    readOrCreateRouteCacheEntry: null,
    readOrCreateSegmentCacheEntry: null,
    readRouteCacheEntry: null,
    readSegmentCacheEntry: null,
    requestOptimisticRouteCacheEntry: null,
    revalidateEntireCache: null,
    upgradeToPendingSegment: null,
    upsertSegmentEntry: null,
    waitForSegmentCacheEntry: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    EntryStatus: function() {
        return EntryStatus;
    },
    canNewFetchStrategyProvideMoreContent: function() {
        return canNewFetchStrategyProvideMoreContent;
    },
    convertRouteTreeToFlightRouterState: function() {
        return convertRouteTreeToFlightRouterState;
    },
    createDetachedSegmentCacheEntry: function() {
        return createDetachedSegmentCacheEntry;
    },
    fetchRouteOnCacheMiss: function() {
        return fetchRouteOnCacheMiss;
    },
    fetchSegmentOnCacheMiss: function() {
        return fetchSegmentOnCacheMiss;
    },
    fetchSegmentPrefetchesUsingDynamicRequest: function() {
        return fetchSegmentPrefetchesUsingDynamicRequest;
    },
    getCurrentCacheVersion: function() {
        return getCurrentCacheVersion;
    },
    getStaleTimeMs: function() {
        return getStaleTimeMs;
    },
    overwriteRevalidatingSegmentCacheEntry: function() {
        return overwriteRevalidatingSegmentCacheEntry;
    },
    pingInvalidationListeners: function() {
        return pingInvalidationListeners;
    },
    readOrCreateRevalidatingSegmentEntry: function() {
        return readOrCreateRevalidatingSegmentEntry;
    },
    readOrCreateRouteCacheEntry: function() {
        return readOrCreateRouteCacheEntry;
    },
    readOrCreateSegmentCacheEntry: function() {
        return readOrCreateSegmentCacheEntry;
    },
    readRouteCacheEntry: function() {
        return readRouteCacheEntry;
    },
    readSegmentCacheEntry: function() {
        return readSegmentCacheEntry;
    },
    requestOptimisticRouteCacheEntry: function() {
        return requestOptimisticRouteCacheEntry;
    },
    revalidateEntireCache: function() {
        return revalidateEntireCache;
    },
    upgradeToPendingSegment: function() {
        return upgradeToPendingSegment;
    },
    upsertSegmentEntry: function() {
        return upsertSegmentEntry;
    },
    waitForSegmentCacheEntry: function() {
        return waitForSegmentCacheEntry;
    }
});
const _approutertypes = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/app-router-types.js [app-ssr] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/app-router-headers.js [app-ssr] (ecmascript)");
const _fetchserverresponse = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-ssr] (ecmascript)");
const _varypath = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-ssr] (ecmascript)");
const _appbuildid = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/app-build-id.js [app-ssr] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-ssr] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-ssr] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/route-params.js [app-ssr] (ecmascript)");
const _cachemap = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-ssr] (ecmascript)");
const _segmentvalueencoding = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-ssr] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/flight-data-helpers.js [app-ssr] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-ssr] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/links.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)");
function getStaleTimeMs(staleTimeSeconds) {
    return Math.max(staleTimeSeconds, 30) * 1000;
}
var EntryStatus = /*#__PURE__*/ function(EntryStatus) {
    EntryStatus[EntryStatus["Empty"] = 0] = "Empty";
    EntryStatus[EntryStatus["Pending"] = 1] = "Pending";
    EntryStatus[EntryStatus["Fulfilled"] = 2] = "Fulfilled";
    EntryStatus[EntryStatus["Rejected"] = 3] = "Rejected";
    return EntryStatus;
}({});
const isOutputExportMode = ("TURBOPACK compile-time value", "development") === 'production' && ("TURBOPACK compile-time value", void 0) === 'export';
const MetadataOnlyRequestTree = [
    '',
    {},
    null,
    'metadata-only'
];
let routeCacheMap = (0, _cachemap.createCacheMap)();
let segmentCacheMap = (0, _cachemap.createCacheMap)();
// All invalidation listeners for the whole cache are tracked in single set.
// Since we don't yet support tag or path-based invalidation, there's no point
// tracking them any more granularly than this. Once we add granular
// invalidation, that may change, though generally the model is to just notify
// the listeners and allow the caller to poll the prefetch cache with a new
// prefetch task if desired.
let invalidationListeners = null;
// Incrementing counter used to track cache invalidations.
let currentCacheVersion = 0;
function getCurrentCacheVersion() {
    return currentCacheVersion;
}
function revalidateEntireCache(nextUrl, tree) {
    // Increment the current cache version. This does not eagerly evict anything
    // from the cache, but because all the entries are versioned, and we check
    // the version when reading from the cache, this effectively causes all
    // entries to be evicted lazily. We do it lazily because in the future,
    // actions like revalidateTag or refresh will not evict the entire cache,
    // but rather some subset of the entries.
    currentCacheVersion++;
    // Start a cooldown before re-prefetching to allow CDN cache propagation.
    (0, _scheduler.startRevalidationCooldown)();
    // Prefetch all the currently visible links again, to re-fill the cache.
    (0, _links.pingVisibleLinks)(nextUrl, tree);
    // Similarly, notify all invalidation listeners (i.e. those passed to
    // `router.prefetch(onInvalidate)`), so they can trigger a new prefetch
    // if needed.
    pingInvalidationListeners(nextUrl, tree);
}
function attachInvalidationListener(task) {
    // This function is called whenever a prefetch task reads a cache entry. If
    // the task has an onInvalidate function associated with it — i.e. the one
    // optionally passed to router.prefetch(onInvalidate) — then we attach that
    // listener to the every cache entry that the task reads. Then, if an entry
    // is invalidated, we call the function.
    if (task.onInvalidate !== null) {
        if (invalidationListeners === null) {
            invalidationListeners = new Set([
                task
            ]);
        } else {
            invalidationListeners.add(task);
        }
    }
}
function notifyInvalidationListener(task) {
    const onInvalidate = task.onInvalidate;
    if (onInvalidate !== null) {
        // Clear the callback from the task object to guarantee it's not called more
        // than once.
        task.onInvalidate = null;
        // This is a user-space function, so we must wrap in try/catch.
        try {
            onInvalidate();
        } catch (error) {
            if (typeof reportError === 'function') {
                reportError(error);
            } else {
                console.error(error);
            }
        }
    }
}
function pingInvalidationListeners(nextUrl, tree) {
    // The rough equivalent of pingVisibleLinks, but for onInvalidate callbacks.
    // This is called when the Next-Url or the base tree changes, since those
    // may affect the result of a prefetch task. It's also called after a
    // cache invalidation.
    if (invalidationListeners !== null) {
        const tasks = invalidationListeners;
        invalidationListeners = null;
        for (const task of tasks){
            if ((0, _scheduler.isPrefetchTaskDirty)(task, nextUrl, tree)) {
                notifyInvalidationListener(task);
            }
        }
    }
}
function readRouteCacheEntry(now, key) {
    const varyPath = (0, _varypath.getRouteVaryPath)(key.pathname, key.search, key.nextUrl);
    const isRevalidation = false;
    return (0, _cachemap.getFromCacheMap)(now, getCurrentCacheVersion(), routeCacheMap, varyPath, isRevalidation);
}
function readSegmentCacheEntry(now, varyPath) {
    const isRevalidation = false;
    return (0, _cachemap.getFromCacheMap)(now, getCurrentCacheVersion(), segmentCacheMap, varyPath, isRevalidation);
}
function readRevalidatingSegmentCacheEntry(now, varyPath) {
    const isRevalidation = true;
    return (0, _cachemap.getFromCacheMap)(now, getCurrentCacheVersion(), segmentCacheMap, varyPath, isRevalidation);
}
function waitForSegmentCacheEntry(pendingEntry) {
    // Because the entry is pending, there's already a in-progress request.
    // Attach a promise to the entry that will resolve when the server responds.
    let promiseWithResolvers = pendingEntry.promise;
    if (promiseWithResolvers === null) {
        promiseWithResolvers = pendingEntry.promise = (0, _promisewithresolvers.createPromiseWithResolvers)();
    } else {
    // There's already a promise we can use
    }
    return promiseWithResolvers.promise;
}
function readOrCreateRouteCacheEntry(now, task, key) {
    attachInvalidationListener(task);
    const existingEntry = readRouteCacheEntry(now, key);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache.
    const pendingEntry = {
        canonicalUrl: null,
        status: 0,
        blockedTasks: null,
        tree: null,
        metadata: null,
        // This is initialized to true because we don't know yet whether the route
        // could be intercepted. It's only set to false once we receive a response
        // from the server.
        couldBeIntercepted: true,
        // Similarly, we don't yet know if the route supports PPR.
        isPPREnabled: false,
        renderedSearch: null,
        // Map-related fields
        ref: null,
        size: 0,
        // Since this is an empty entry, there's no reason to ever evict it. It will
        // be updated when the data is populated.
        staleAt: Infinity,
        version: getCurrentCacheVersion()
    };
    const varyPath = (0, _varypath.getRouteVaryPath)(key.pathname, key.search, key.nextUrl);
    const isRevalidation = false;
    (0, _cachemap.setInCacheMap)(routeCacheMap, varyPath, pendingEntry, isRevalidation);
    return pendingEntry;
}
function requestOptimisticRouteCacheEntry(now, requestedUrl, nextUrl) {
    // This function is called during a navigation when there was no matching
    // route tree in the prefetch cache. Before de-opting to a blocking,
    // unprefetched navigation, we will first attempt to construct an "optimistic"
    // route tree by checking the cache for similar routes.
    //
    // Check if there's a route with the same pathname, but with different
    // search params. We can then base our optimistic route tree on this entry.
    //
    // Conceptually, we are simulating what would happen if we did perform a
    // prefetch the requested URL, under the assumption that the server will
    // not redirect or rewrite the request in a different manner than the
    // base route tree. This assumption might not hold, in which case we'll have
    // to recover when we perform the dynamic navigation request. However, this
    // is what would happen if a route were dynamically rewritten/redirected
    // in between the prefetch and the navigation. So the logic needs to exist
    // to handle this case regardless.
    // Look for a route with the same pathname, but with an empty search string.
    // TODO: There's nothing inherently special about the empty search string;
    // it's chosen somewhat arbitrarily, with the rationale that it's the most
    // likely one to exist. But we should update this to match _any_ search
    // string. The plan is to generalize this logic alongside other improvements
    // related to "fallback" cache entries.
    const requestedSearch = requestedUrl.search;
    if (requestedSearch === '') {
        // The caller would have already checked if a route with an empty search
        // string is in the cache. So we can bail out here.
        return null;
    }
    const urlWithoutSearchParams = new URL(requestedUrl);
    urlWithoutSearchParams.search = '';
    const routeWithNoSearchParams = readRouteCacheEntry(now, (0, _cachekey.createCacheKey)(urlWithoutSearchParams.href, nextUrl));
    if (routeWithNoSearchParams === null || routeWithNoSearchParams.status !== 2) {
        // Bail out of constructing an optimistic route tree. This will result in
        // a blocking, unprefetched navigation.
        return null;
    }
    // Now we have a base route tree we can "patch" with our optimistic values.
    // Optimistically assume that redirects for the requested pathname do
    // not vary on the search string. Therefore, if the base route was
    // redirected to a different search string, then the optimistic route
    // should be redirected to the same search string. Otherwise, we use
    // the requested search string.
    const canonicalUrlForRouteWithNoSearchParams = new URL(routeWithNoSearchParams.canonicalUrl, requestedUrl.origin);
    const optimisticCanonicalSearch = canonicalUrlForRouteWithNoSearchParams.search !== '' ? canonicalUrlForRouteWithNoSearchParams.search : requestedSearch;
    // Similarly, optimistically assume that rewrites for the requested
    // pathname do not vary on the search string. Therefore, if the base
    // route was rewritten to a different search string, then the optimistic
    // route should be rewritten to the same search string. Otherwise, we use
    // the requested search string.
    const optimisticRenderedSearch = routeWithNoSearchParams.renderedSearch !== '' ? routeWithNoSearchParams.renderedSearch : requestedSearch;
    const optimisticUrl = new URL(routeWithNoSearchParams.canonicalUrl, location.origin);
    optimisticUrl.search = optimisticCanonicalSearch;
    const optimisticCanonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(optimisticUrl);
    const optimisticRouteTree = createOptimisticRouteTree(routeWithNoSearchParams.tree, optimisticRenderedSearch);
    const optimisticMetadataTree = createOptimisticRouteTree(routeWithNoSearchParams.metadata, optimisticRenderedSearch);
    // Clone the base route tree, and override the relevant fields with our
    // optimistic values.
    const optimisticEntry = {
        canonicalUrl: optimisticCanonicalUrl,
        status: 2,
        // This isn't cloned because it's instance-specific
        blockedTasks: null,
        tree: optimisticRouteTree,
        metadata: optimisticMetadataTree,
        couldBeIntercepted: routeWithNoSearchParams.couldBeIntercepted,
        isPPREnabled: routeWithNoSearchParams.isPPREnabled,
        // Override the rendered search with the optimistic value.
        renderedSearch: optimisticRenderedSearch,
        // Map-related fields
        ref: null,
        size: 0,
        staleAt: routeWithNoSearchParams.staleAt,
        version: routeWithNoSearchParams.version
    };
    // Do not insert this entry into the cache. It only exists so we can
    // perform the current navigation. Just return it to the caller.
    return optimisticEntry;
}
function createOptimisticRouteTree(tree, newRenderedSearch) {
    // Create a new route tree that identical to the original one except for
    // the rendered search string, which is contained in the vary path.
    let clonedSlots = null;
    const originalSlots = tree.slots;
    if (originalSlots !== null) {
        clonedSlots = {};
        for(const parallelRouteKey in originalSlots){
            const childTree = originalSlots[parallelRouteKey];
            clonedSlots[parallelRouteKey] = createOptimisticRouteTree(childTree, newRenderedSearch);
        }
    }
    // We only need to clone the vary path if the route is a page.
    if (tree.isPage) {
        return {
            requestKey: tree.requestKey,
            segment: tree.segment,
            varyPath: (0, _varypath.clonePageVaryPathWithNewSearchParams)(tree.varyPath, newRenderedSearch),
            isPage: true,
            slots: clonedSlots,
            isRootLayout: tree.isRootLayout,
            hasLoadingBoundary: tree.hasLoadingBoundary,
            hasRuntimePrefetch: tree.hasRuntimePrefetch
        };
    }
    return {
        requestKey: tree.requestKey,
        segment: tree.segment,
        varyPath: tree.varyPath,
        isPage: false,
        slots: clonedSlots,
        isRootLayout: tree.isRootLayout,
        hasLoadingBoundary: tree.hasLoadingBoundary,
        hasRuntimePrefetch: tree.hasRuntimePrefetch
    };
}
function readOrCreateSegmentCacheEntry(now, fetchStrategy, route, tree) {
    const existingEntry = readSegmentCacheEntry(now, tree.varyPath);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache.
    const varyPathForRequest = (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
    const pendingEntry = createDetachedSegmentCacheEntry(route.staleAt);
    const isRevalidation = false;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPathForRequest, pendingEntry, isRevalidation);
    return pendingEntry;
}
function readOrCreateRevalidatingSegmentEntry(now, fetchStrategy, route, tree) {
    // This function is called when we've already confirmed that a particular
    // segment is cached, but we want to perform another request anyway in case it
    // returns more complete and/or fresher data than we already have. The logic
    // for deciding whether to replace the existing entry is handled elsewhere;
    // this function just handles retrieving a cache entry that we can use to
    // track the revalidation.
    //
    // The reason revalidations are stored in the cache is because we need to be
    // able to dedupe multiple revalidation requests. The reason they have to be
    // handled specially is because we shouldn't overwrite a "normal" entry if
    // one exists at the same keypath. So, for each internal cache location, there
    // is a special "revalidation" slot that is used solely for this purpose.
    //
    // You can think of it as if all the revalidation entries were stored in a
    // separate cache map from the canonical entries, and then transfered to the
    // canonical cache map once the request is complete — this isn't how it's
    // actually implemented, since it's more efficient to store them in the same
    // data structure as the normal entries, but that's how it's modeled
    // conceptually.
    // TODO: Once we implement Fallback behavior for params, where an entry is
    // re-keyed based on response information, we'll need to account for the
    // possibility that the keypath of the previous entry is more generic than
    // the keypath of the revalidating entry. In other words, the server could
    // return a less generic entry upon revalidation. For now, though, this isn't
    // a concern because the keypath is based solely on the prefetch strategy,
    // not on data contained in the response.
    const existingEntry = readRevalidatingSegmentCacheEntry(now, tree.varyPath);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache.
    const varyPathForRequest = (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
    const pendingEntry = createDetachedSegmentCacheEntry(route.staleAt);
    const isRevalidation = true;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPathForRequest, pendingEntry, isRevalidation);
    return pendingEntry;
}
function overwriteRevalidatingSegmentCacheEntry(fetchStrategy, route, tree) {
    // This function is called when we've already decided to replace an existing
    // revalidation entry. Create a new entry and write it into the cache,
    // overwriting the previous value.
    const varyPathForRequest = (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
    const pendingEntry = createDetachedSegmentCacheEntry(route.staleAt);
    const isRevalidation = true;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPathForRequest, pendingEntry, isRevalidation);
    return pendingEntry;
}
function upsertSegmentEntry(now, varyPath, candidateEntry) {
    // We have a new entry that has not yet been inserted into the cache. Before
    // we do so, we need to confirm whether it takes precedence over the existing
    // entry (if one exists).
    // TODO: We should not upsert an entry if its key was invalidated in the time
    // since the request was made. We can do that by passing the "owner" entry to
    // this function and confirming it's the same as `existingEntry`.
    if ((0, _cachemap.isValueExpired)(now, getCurrentCacheVersion(), candidateEntry)) {
        // The entry is expired. We cannot upsert it.
        return null;
    }
    const existingEntry = readSegmentCacheEntry(now, varyPath);
    if (existingEntry !== null) {
        // Don't replace a more specific segment with a less-specific one. A case where this
        // might happen is if the existing segment was fetched via
        // `<Link prefetch={true}>`.
        if (// than the segment we already have in the cache, so it can't have more content.
        candidateEntry.fetchStrategy !== existingEntry.fetchStrategy && !canNewFetchStrategyProvideMoreContent(existingEntry.fetchStrategy, candidateEntry.fetchStrategy) || // The existing entry isn't partial, but the new one is.
        // (TODO: can this be true if `candidateEntry.fetchStrategy >= existingEntry.fetchStrategy`?)
        !existingEntry.isPartial && candidateEntry.isPartial) {
            // We're going to leave revalidating entry in the cache so that it doesn't
            // get revalidated again unnecessarily. Downgrade the Fulfilled entry to
            // Rejected and null out the data so it can be garbage collected. We leave
            // `staleAt` intact to prevent subsequent revalidation attempts only until
            // the entry expires.
            const rejectedEntry = candidateEntry;
            rejectedEntry.status = 3;
            rejectedEntry.loading = null;
            rejectedEntry.rsc = null;
            return null;
        }
        // Evict the existing entry from the cache.
        (0, _cachemap.deleteFromCacheMap)(existingEntry);
    }
    const isRevalidation = false;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPath, candidateEntry, isRevalidation);
    return candidateEntry;
}
function createDetachedSegmentCacheEntry(staleAt) {
    const emptyEntry = {
        status: 0,
        // Default to assuming the fetch strategy will be PPR. This will be updated
        // when a fetch is actually initiated.
        fetchStrategy: _types.FetchStrategy.PPR,
        rsc: null,
        loading: null,
        isPartial: true,
        promise: null,
        // Map-related fields
        ref: null,
        size: 0,
        staleAt,
        version: 0
    };
    return emptyEntry;
}
function upgradeToPendingSegment(emptyEntry, fetchStrategy) {
    const pendingEntry = emptyEntry;
    pendingEntry.status = 1;
    pendingEntry.fetchStrategy = fetchStrategy;
    if (fetchStrategy === _types.FetchStrategy.Full) {
        // We can assume the response will contain the full segment data. Set this
        // to false so we know it's OK to omit this segment from any navigation
        // requests that may happen while the data is still pending.
        pendingEntry.isPartial = false;
    }
    // Set the version here, since this is right before the request is initiated.
    // The next time the global cache version is incremented, the entry will
    // effectively be evicted. This happens before initiating the request, rather
    // than when receiving the response, because it's guaranteed to happen
    // before the data is read on the server.
    pendingEntry.version = getCurrentCacheVersion();
    return pendingEntry;
}
function pingBlockedTasks(entry) {
    const blockedTasks = entry.blockedTasks;
    if (blockedTasks !== null) {
        for (const task of blockedTasks){
            (0, _scheduler.pingPrefetchTask)(task);
        }
        entry.blockedTasks = null;
    }
}
function fulfillRouteCacheEntry(entry, tree, metadataVaryPath, staleAt, couldBeIntercepted, canonicalUrl, renderedSearch, isPPREnabled) {
    // The Head is not actually part of the route tree, but other than that, it's
    // fetched and cached like a segment. Some functions expect a RouteTree
    // object, so rather than fork the logic in all those places, we use this
    // "fake" one.
    const metadata = {
        requestKey: _segmentvalueencoding.HEAD_REQUEST_KEY,
        segment: _segmentvalueencoding.HEAD_REQUEST_KEY,
        varyPath: metadataVaryPath,
        // The metadata isn't really a "page" (though it isn't really a "segment"
        // either) but for the purposes of how this field is used, it behaves like
        // one. If this logic ever gets more complex we can change this to an enum.
        isPage: true,
        slots: null,
        isRootLayout: false,
        hasLoadingBoundary: _approutertypes.HasLoadingBoundary.SubtreeHasNoLoadingBoundary,
        hasRuntimePrefetch: false
    };
    const fulfilledEntry = entry;
    fulfilledEntry.status = 2;
    fulfilledEntry.tree = tree;
    fulfilledEntry.metadata = metadata;
    fulfilledEntry.staleAt = staleAt;
    fulfilledEntry.couldBeIntercepted = couldBeIntercepted;
    fulfilledEntry.canonicalUrl = canonicalUrl;
    fulfilledEntry.renderedSearch = renderedSearch;
    fulfilledEntry.isPPREnabled = isPPREnabled;
    pingBlockedTasks(entry);
    return fulfilledEntry;
}
function fulfillSegmentCacheEntry(segmentCacheEntry, rsc, loading, staleAt, isPartial) {
    const fulfilledEntry = segmentCacheEntry;
    fulfilledEntry.status = 2;
    fulfilledEntry.rsc = rsc;
    fulfilledEntry.loading = loading;
    fulfilledEntry.staleAt = staleAt;
    fulfilledEntry.isPartial = isPartial;
    // Resolve any listeners that were waiting for this data.
    if (segmentCacheEntry.promise !== null) {
        segmentCacheEntry.promise.resolve(fulfilledEntry);
        // Free the promise for garbage collection.
        fulfilledEntry.promise = null;
    }
    return fulfilledEntry;
}
function rejectRouteCacheEntry(entry, staleAt) {
    const rejectedEntry = entry;
    rejectedEntry.status = 3;
    rejectedEntry.staleAt = staleAt;
    pingBlockedTasks(entry);
}
function rejectSegmentCacheEntry(entry, staleAt) {
    const rejectedEntry = entry;
    rejectedEntry.status = 3;
    rejectedEntry.staleAt = staleAt;
    if (entry.promise !== null) {
        // NOTE: We don't currently propagate the reason the prefetch was canceled
        // but we could by accepting a `reason` argument.
        entry.promise.resolve(null);
        entry.promise = null;
    }
}
function convertRootTreePrefetchToRouteTree(rootTree, renderedPathname, renderedSearch, acc) {
    // Remove trailing and leading slashes
    const pathnameParts = renderedPathname.split('/').filter((p)=>p !== '');
    const index = 0;
    const rootSegment = _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY;
    return convertTreePrefetchToRouteTree(rootTree.tree, rootSegment, null, _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY, pathnameParts, index, renderedSearch, acc);
}
function convertTreePrefetchToRouteTree(prefetch, segment, partialVaryPath, requestKey, pathnameParts, pathnamePartsIndex, renderedSearch, acc) {
    // Converts the route tree sent by the server into the format used by the
    // cache. The cached version of the tree includes additional fields, such as a
    // cache key for each segment. Since this is frequently accessed, we compute
    // it once instead of on every access. This same cache key is also used to
    // request the segment from the server.
    let slots = null;
    let isPage;
    let varyPath;
    const prefetchSlots = prefetch.slots;
    if (prefetchSlots !== null) {
        isPage = false;
        varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        slots = {};
        for(let parallelRouteKey in prefetchSlots){
            const childPrefetch = prefetchSlots[parallelRouteKey];
            const childParamName = childPrefetch.name;
            const childParamType = childPrefetch.paramType;
            const childServerSentParamKey = childPrefetch.paramKey;
            let childDoesAppearInURL;
            let childSegment;
            let childPartialVaryPath;
            if (childParamType !== null) {
                // This segment is parameterized. Get the param from the pathname.
                const childParamValue = (0, _routeparams.parseDynamicParamFromURLPart)(childParamType, pathnameParts, pathnamePartsIndex);
                // Assign a cache key to the segment, based on the param value. In the
                // pre-Segment Cache implementation, the server computes this and sends
                // it in the body of the response. In the Segment Cache implementation,
                // the server sends an empty string and we fill it in here.
                // TODO: We're intentionally not adding the search param to page
                // segments here; it's tracked separately and added back during a read.
                // This would clearer if we waited to construct the segment until it's
                // read from the cache, since that's effectively what we're
                // doing anyway.
                const childParamKey = // cacheComponents is enabled.
                childServerSentParamKey !== null ? childServerSentParamKey : (0, _routeparams.getCacheKeyForDynamicParam)(childParamValue, '');
                childPartialVaryPath = (0, _varypath.appendLayoutVaryPath)(partialVaryPath, childParamKey);
                childSegment = [
                    childParamName,
                    childParamKey,
                    childParamType
                ];
                childDoesAppearInURL = true;
            } else {
                // This segment does not have a param. Inherit the partial vary path of
                // the parent.
                childPartialVaryPath = partialVaryPath;
                childSegment = childParamName;
                childDoesAppearInURL = (0, _routeparams.doesStaticSegmentAppearInURL)(childParamName);
            }
            // Only increment the index if the segment appears in the URL. If it's a
            // "virtual" segment, like a route group, it remains the same.
            const childPathnamePartsIndex = childDoesAppearInURL ? pathnamePartsIndex + 1 : pathnamePartsIndex;
            const childRequestKeyPart = (0, _segmentvalueencoding.createSegmentRequestKeyPart)(childSegment);
            const childRequestKey = (0, _segmentvalueencoding.appendSegmentRequestKeyPart)(requestKey, parallelRouteKey, childRequestKeyPart);
            slots[parallelRouteKey] = convertTreePrefetchToRouteTree(childPrefetch, childSegment, childPartialVaryPath, childRequestKey, pathnameParts, childPathnamePartsIndex, renderedSearch, acc);
        }
    } else {
        if (requestKey.endsWith(_segment.PAGE_SEGMENT_KEY)) {
            // This is a page segment.
            isPage = true;
            varyPath = (0, _varypath.finalizePageVaryPath)(requestKey, renderedSearch, partialVaryPath);
            // The metadata "segment" is not part the route tree, but it has the same
            // conceptual params as a page segment. Write the vary path into the
            // accumulator object. If there are multiple parallel pages, we use the
            // first one. Which page we choose is arbitrary as long as it's
            // consistently the same one every time every time. See
            // finalizeMetadataVaryPath for more details.
            if (acc.metadataVaryPath === null) {
                acc.metadataVaryPath = (0, _varypath.finalizeMetadataVaryPath)(requestKey, renderedSearch, partialVaryPath);
            }
        } else {
            // This is a layout segment.
            isPage = false;
            varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        }
    }
    return {
        requestKey,
        segment,
        varyPath,
        // TODO: Cheating the type system here a bit because TypeScript can't tell
        // that the type of isPage and varyPath are consistent. The fix would be to
        // create separate constructors and call the appropriate one from each of
        // the branches above. Just seems a bit overkill only for one field so I'll
        // leave it as-is for now. If isPage were wrong it would break the behavior
        // and we'd catch it quickly, anyway.
        isPage: isPage,
        slots,
        isRootLayout: prefetch.isRootLayout,
        // This field is only relevant to dynamic routes. For a PPR/static route,
        // there's always some partial loading state we can fetch.
        hasLoadingBoundary: _approutertypes.HasLoadingBoundary.SegmentHasLoadingBoundary,
        hasRuntimePrefetch: prefetch.hasRuntimePrefetch
    };
}
function convertRootFlightRouterStateToRouteTree(flightRouterState, renderedSearch, acc) {
    return convertFlightRouterStateToRouteTree(flightRouterState, _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY, null, renderedSearch, acc);
}
function convertFlightRouterStateToRouteTree(flightRouterState, requestKey, parentPartialVaryPath, renderedSearch, acc) {
    const originalSegment = flightRouterState[0];
    let segment;
    let partialVaryPath;
    let isPage;
    let varyPath;
    if (Array.isArray(originalSegment)) {
        isPage = false;
        const paramCacheKey = originalSegment[1];
        partialVaryPath = (0, _varypath.appendLayoutVaryPath)(parentPartialVaryPath, paramCacheKey);
        varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        segment = originalSegment;
    } else {
        // This segment does not have a param. Inherit the partial vary path of
        // the parent.
        partialVaryPath = parentPartialVaryPath;
        if (requestKey.endsWith(_segment.PAGE_SEGMENT_KEY)) {
            // This is a page segment.
            isPage = true;
            // The navigation implementation expects the search params to be included
            // in the segment. However, in the case of a static response, the search
            // params are omitted. So the client needs to add them back in when reading
            // from the Segment Cache.
            //
            // For consistency, we'll do this for dynamic responses, too.
            //
            // TODO: We should move search params out of FlightRouterState and handle
            // them entirely on the client, similar to our plan for dynamic params.
            segment = _segment.PAGE_SEGMENT_KEY;
            varyPath = (0, _varypath.finalizePageVaryPath)(requestKey, renderedSearch, partialVaryPath);
            // The metadata "segment" is not part the route tree, but it has the same
            // conceptual params as a page segment. Write the vary path into the
            // accumulator object. If there are multiple parallel pages, we use the
            // first one. Which page we choose is arbitrary as long as it's
            // consistently the same one every time every time. See
            // finalizeMetadataVaryPath for more details.
            if (acc.metadataVaryPath === null) {
                acc.metadataVaryPath = (0, _varypath.finalizeMetadataVaryPath)(requestKey, renderedSearch, partialVaryPath);
            }
        } else {
            // This is a layout segment.
            isPage = false;
            segment = originalSegment;
            varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        }
    }
    let slots = null;
    const parallelRoutes = flightRouterState[1];
    for(let parallelRouteKey in parallelRoutes){
        const childRouterState = parallelRoutes[parallelRouteKey];
        const childSegment = childRouterState[0];
        // TODO: Eventually, the param values will not be included in the response
        // from the server. We'll instead fill them in on the client by parsing
        // the URL. This is where we'll do that.
        const childRequestKeyPart = (0, _segmentvalueencoding.createSegmentRequestKeyPart)(childSegment);
        const childRequestKey = (0, _segmentvalueencoding.appendSegmentRequestKeyPart)(requestKey, parallelRouteKey, childRequestKeyPart);
        const childTree = convertFlightRouterStateToRouteTree(childRouterState, childRequestKey, partialVaryPath, renderedSearch, acc);
        if (slots === null) {
            slots = {
                [parallelRouteKey]: childTree
            };
        } else {
            slots[parallelRouteKey] = childTree;
        }
    }
    return {
        requestKey,
        segment,
        varyPath,
        // TODO: Cheating the type system here a bit because TypeScript can't tell
        // that the type of isPage and varyPath are consistent. The fix would be to
        // create separate constructors and call the appropriate one from each of
        // the branches above. Just seems a bit overkill only for one field so I'll
        // leave it as-is for now. If isPage were wrong it would break the behavior
        // and we'd catch it quickly, anyway.
        isPage: isPage,
        slots,
        isRootLayout: flightRouterState[4] === true,
        hasLoadingBoundary: flightRouterState[5] !== undefined ? flightRouterState[5] : _approutertypes.HasLoadingBoundary.SubtreeHasNoLoadingBoundary,
        // Non-static tree responses are only used by apps that haven't adopted
        // Cache Components. So this is always false.
        hasRuntimePrefetch: false
    };
}
function convertRouteTreeToFlightRouterState(routeTree) {
    const parallelRoutes = {};
    if (routeTree.slots !== null) {
        for(const parallelRouteKey in routeTree.slots){
            parallelRoutes[parallelRouteKey] = convertRouteTreeToFlightRouterState(routeTree.slots[parallelRouteKey]);
        }
    }
    const flightRouterState = [
        routeTree.segment,
        parallelRoutes,
        null,
        null,
        routeTree.isRootLayout
    ];
    return flightRouterState;
}
async function fetchRouteOnCacheMiss(entry, task, key) {
    // This function is allowed to use async/await because it contains the actual
    // fetch that gets issued on a cache miss. Notice it writes the result to the
    // cache entry directly, rather than return data that is then written by
    // the caller.
    const pathname = key.pathname;
    const search = key.search;
    const nextUrl = key.nextUrl;
    const segmentPath = '/_tree';
    const headers = {
        [_approuterheaders.RSC_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: segmentPath
    };
    if (nextUrl !== null) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    try {
        const url = new URL(pathname + search, location.origin);
        let response;
        let urlAfterRedirects;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // "Server" mode. We can use request headers instead of the pathname.
            // TODO: The eventual plan is to get rid of our custom request headers and
            // encode everything into the URL, using a similar strategy to the
            // "output: export" block above.
            response = await fetchPrefetchResponse(url, headers);
            urlAfterRedirects = response !== null && response.redirected ? new URL(response.url) : url;
        }
        if (!response || !response.ok || // 204 is a Cache miss. Though theoretically this shouldn't happen when
        // PPR is enabled, because we always respond to route tree requests, even
        // if it needs to be blockingly generated on demand.
        response.status === 204 || !response.body) {
            // Server responded with an error, or with a miss. We should still cache
            // the response, but we can try again after 10 seconds.
            rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
            return null;
        }
        // TODO: The canonical URL is the href without the origin. I think
        // historically the reason for this is because the initial canonical URL
        // gets passed as a prop to the top-level React component, which means it
        // needs to be computed during SSR. If it were to include the origin, it
        // would need to always be same as location.origin on the client, to prevent
        // a hydration mismatch. To sidestep this complexity, we omit the origin.
        //
        // However, since this is neither a native URL object nor a fully qualified
        // URL string, we need to be careful about how we use it. To prevent subtle
        // mistakes, we should create a special type for it, instead of just string.
        // Or, we should just use a (readonly) URL object instead. The type of the
        // prop that we pass to seed the initial state does not need to be the same
        // type as the state itself.
        const canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(urlAfterRedirects);
        // Check whether the response varies based on the Next-Url header.
        const varyHeader = response.headers.get('vary');
        const couldBeIntercepted = varyHeader !== null && varyHeader.includes(_approuterheaders.NEXT_URL);
        // Track when the network connection closes.
        const closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
        // This checks whether the response was served from the per-segment cache,
        // rather than the old prefetching flow. If it fails, it implies that PPR
        // is disabled on this route.
        const routeIsPPREnabled = response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) === '2' || // In output: "export" mode, we can't rely on response headers. But if we
        // receive a well-formed response, we can assume it's a static response,
        // because all data is static in this mode.
        isOutputExportMode;
        if (routeIsPPREnabled) {
            const prefetchStream = createPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(size) {
                (0, _cachemap.setSizeInCacheMap)(entry, size);
            });
            const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers);
            if (serverData.buildId !== (0, _appbuildid.getAppBuildId)()) {
                // The server build does not match the client. Treat as a 404. During
                // an actual navigation, the router will trigger an MPA navigation.
                // TODO: Consider moving the build ID to a response header so we can check
                // it before decoding the response, and so there's one way of checking
                // across all response types.
                // TODO: We should cache the fact that this is an MPA navigation.
                rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                return null;
            }
            // Get the params that were used to render the target page. These may
            // be different from the params in the request URL, if the page
            // was rewritten.
            const renderedPathname = (0, _routeparams.getRenderedPathname)(response);
            const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
            // Convert the server-sent data into the RouteTree format used by the
            // client cache.
            //
            // During this traversal, we accumulate additional data into this
            // "accumulator" object.
            const acc = {
                metadataVaryPath: null
            };
            const routeTree = convertRootTreePrefetchToRouteTree(serverData, renderedPathname, renderedSearch, acc);
            const metadataVaryPath = acc.metadataVaryPath;
            if (metadataVaryPath === null) {
                rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                return null;
            }
            const staleTimeMs = getStaleTimeMs(serverData.staleTime);
            fulfillRouteCacheEntry(entry, routeTree, metadataVaryPath, Date.now() + staleTimeMs, couldBeIntercepted, canonicalUrl, renderedSearch, routeIsPPREnabled);
        } else {
            // PPR is not enabled for this route. The server responds with a
            // different format (FlightRouterState) that we need to convert.
            // TODO: We will unify the responses eventually. I'm keeping the types
            // separate for now because FlightRouterState has so many
            // overloaded concerns.
            const prefetchStream = createPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(size) {
                (0, _cachemap.setSizeInCacheMap)(entry, size);
            });
            const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers);
            if (serverData.b !== (0, _appbuildid.getAppBuildId)()) {
                // The server build does not match the client. Treat as a 404. During
                // an actual navigation, the router will trigger an MPA navigation.
                // TODO: Consider moving the build ID to a response header so we can check
                // it before decoding the response, and so there's one way of checking
                // across all response types.
                // TODO: We should cache the fact that this is an MPA navigation.
                rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                return null;
            }
            writeDynamicTreeResponseIntoCache(Date.now(), task, // using the LoadingBoundary fetch strategy, so mark their cache entries accordingly.
            _types.FetchStrategy.LoadingBoundary, response, serverData, entry, couldBeIntercepted, canonicalUrl, routeIsPPREnabled);
        }
        if (!couldBeIntercepted) {
            // This route will never be intercepted. So we can use this entry for all
            // requests to this route, regardless of the Next-Url header. This works
            // because when reading the cache we always check for a valid
            // non-intercepted entry first.
            // Re-key the entry. The `set` implementation handles removing it from
            // its previous position in the cache. We don't need to do anything to
            // update the LRU, because the entry is already in it.
            // TODO: Treat this as an upsert — should check if an entry already
            // exists at the new keypath, and if so, whether we should keep that
            // one instead.
            const fulfilledVaryPath = (0, _varypath.getFulfilledRouteVaryPath)(pathname, search, nextUrl, couldBeIntercepted);
            const isRevalidation = false;
            (0, _cachemap.setInCacheMap)(routeCacheMap, fulfilledVaryPath, entry, isRevalidation);
        }
        // Return a promise that resolves when the network connection closes, so
        // the scheduler can track the number of concurrent network connections.
        return {
            value: null,
            closed: closed.promise
        };
    } catch (error) {
        // Either the connection itself failed, or something bad happened while
        // decoding the response.
        rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
        return null;
    }
}
async function fetchSegmentOnCacheMiss(route, segmentCacheEntry, routeKey, tree) {
    // This function is allowed to use async/await because it contains the actual
    // fetch that gets issued on a cache miss. Notice it writes the result to the
    // cache entry directly, rather than return data that is then written by
    // the caller.
    //
    // Segment fetches are non-blocking so we don't need to ping the scheduler
    // on completion.
    // Use the canonical URL to request the segment, not the original URL. These
    // are usually the same, but the canonical URL will be different if the route
    // tree response was redirected. To avoid an extra waterfall on every segment
    // request, we pass the redirected URL instead of the original one.
    const url = new URL(route.canonicalUrl, location.origin);
    const nextUrl = routeKey.nextUrl;
    const requestKey = tree.requestKey;
    const normalizedRequestKey = requestKey === _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY ? // `_index` instead of as an empty string. This should be treated as
    // an implementation detail and not as a stable part of the protocol.
    // It just needs to match the equivalent logic that happens when
    // prerendering the responses. It should not leak outside of Next.js.
    '/_index' : requestKey;
    const headers = {
        [_approuterheaders.RSC_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: normalizedRequestKey
    };
    if (nextUrl !== null) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    const requestUrl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : url;
    try {
        const response = await fetchPrefetchResponse(requestUrl, headers);
        if (!response || !response.ok || response.status === 204 || // Cache miss
        // This checks whether the response was served from the per-segment cache,
        // rather than the old prefetching flow. If it fails, it implies that PPR
        // is disabled on this route. Theoretically this should never happen
        // because we only issue requests for segments once we've verified that
        // the route supports PPR.
        response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) !== '2' && // In output: "export" mode, we can't rely on response headers. But if
        // we receive a well-formed response, we can assume it's a static
        // response, because all data is static in this mode.
        !isOutputExportMode || !response.body) {
            // Server responded with an error, or with a miss. We should still cache
            // the response, but we can try again after 10 seconds.
            rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
            return null;
        }
        // Track when the network connection closes.
        const closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
        // Wrap the original stream in a new stream that never closes. That way the
        // Flight client doesn't error if there's a hanging promise.
        const prefetchStream = createPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(size) {
            (0, _cachemap.setSizeInCacheMap)(segmentCacheEntry, size);
        });
        const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers);
        if (serverData.buildId !== (0, _appbuildid.getAppBuildId)()) {
            // The server build does not match the client. Treat as a 404. During
            // an actual navigation, the router will trigger an MPA navigation.
            // TODO: Consider moving the build ID to a response header so we can check
            // it before decoding the response, and so there's one way of checking
            // across all response types.
            rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
            return null;
        }
        return {
            value: fulfillSegmentCacheEntry(segmentCacheEntry, serverData.rsc, serverData.loading, // So we use the stale time of the route.
            route.staleAt, serverData.isPartial),
            // Return a promise that resolves when the network connection closes, so
            // the scheduler can track the number of concurrent network connections.
            closed: closed.promise
        };
    } catch (error) {
        // Either the connection itself failed, or something bad happened while
        // decoding the response.
        rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
        return null;
    }
}
async function fetchSegmentPrefetchesUsingDynamicRequest(task, route, fetchStrategy, dynamicRequestTree, spawnedEntries) {
    const key = task.key;
    const url = new URL(route.canonicalUrl, location.origin);
    const nextUrl = key.nextUrl;
    if (spawnedEntries.size === 1 && spawnedEntries.has(route.metadata.requestKey)) {
        // The only thing pending is the head. Instruct the server to
        // skip over everything else.
        dynamicRequestTree = MetadataOnlyRequestTree;
    }
    const headers = {
        [_approuterheaders.RSC_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER]: (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(dynamicRequestTree)
    };
    if (nextUrl !== null) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    switch(fetchStrategy){
        case _types.FetchStrategy.Full:
            {
                break;
            }
        case _types.FetchStrategy.PPRRuntime:
            {
                headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = '2';
                break;
            }
        case _types.FetchStrategy.LoadingBoundary:
            {
                headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = '1';
                break;
            }
        default:
            {
                fetchStrategy;
            }
    }
    try {
        const response = await fetchPrefetchResponse(url, headers);
        if (!response || !response.ok || !response.body) {
            // Server responded with an error, or with a miss. We should still cache
            // the response, but we can try again after 10 seconds.
            rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
            return null;
        }
        const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
        if (renderedSearch !== route.renderedSearch) {
            // The search params that were used to render the target page are
            // different from the search params in the request URL. This only happens
            // when there's a dynamic rewrite in between the tree prefetch and the
            // data prefetch.
            // TODO: For now, since this is an edge case, we reject the prefetch, but
            // the proper way to handle this is to evict the stale route tree entry
            // then fill the cache with the new response.
            rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
            return null;
        }
        // Track when the network connection closes.
        const closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
        let fulfilledEntries = null;
        const prefetchStream = createPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(totalBytesReceivedSoFar) {
            // When processing a dynamic response, we don't know how large each
            // individual segment is, so approximate by assiging each segment
            // the average of the total response size.
            if (fulfilledEntries === null) {
                // Haven't received enough data yet to know which segments
                // were included.
                return;
            }
            const averageSize = totalBytesReceivedSoFar / fulfilledEntries.length;
            for (const entry of fulfilledEntries){
                (0, _cachemap.setSizeInCacheMap)(entry, averageSize);
            }
        });
        const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers);
        const isResponsePartial = fetchStrategy === _types.FetchStrategy.PPRRuntime ? serverData.rp?.[0] === true : false;
        // Aside from writing the data into the cache, this function also returns
        // the entries that were fulfilled, so we can streamingly update their sizes
        // in the LRU as more data comes in.
        fulfilledEntries = writeDynamicRenderResponseIntoCache(Date.now(), task, fetchStrategy, response, serverData, isResponsePartial, route, spawnedEntries);
        // Return a promise that resolves when the network connection closes, so
        // the scheduler can track the number of concurrent network connections.
        return {
            value: null,
            closed: closed.promise
        };
    } catch (error) {
        rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
        return null;
    }
}
function writeDynamicTreeResponseIntoCache(now, task, fetchStrategy, response, serverData, entry, couldBeIntercepted, canonicalUrl, routeIsPPREnabled) {
    // Get the URL that was used to render the target page. This may be different
    // from the URL in the request URL, if the page was rewritten.
    const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
    const normalizedFlightDataResult = (0, _flightdatahelpers.normalizeFlightData)(serverData.f);
    if (// MPA navigation.
    typeof normalizedFlightDataResult === 'string' || normalizedFlightDataResult.length !== 1) {
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    const flightData = normalizedFlightDataResult[0];
    if (!flightData.isRootRender) {
        // Unexpected response format.
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    const flightRouterState = flightData.tree;
    // For runtime prefetches, stale time is in the payload at rp[1].
    // For other responses, fall back to the header.
    const staleTimeSeconds = typeof serverData.rp?.[1] === 'number' ? serverData.rp[1] : parseInt(response.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER) ?? '', 10);
    const staleTimeMs = !isNaN(staleTimeSeconds) ? getStaleTimeMs(staleTimeSeconds) : _navigatereducer.STATIC_STALETIME_MS;
    // If the response contains dynamic holes, then we must conservatively assume
    // that any individual segment might contain dynamic holes, and also the
    // head. If it did not contain dynamic holes, then we can assume every segment
    // and the head is completely static.
    const isResponsePartial = response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) === '1';
    // Convert the server-sent data into the RouteTree format used by the
    // client cache.
    //
    // During this traversal, we accumulate additional data into this
    // "accumulator" object.
    const acc = {
        metadataVaryPath: null
    };
    const routeTree = convertRootFlightRouterStateToRouteTree(flightRouterState, renderedSearch, acc);
    const metadataVaryPath = acc.metadataVaryPath;
    if (metadataVaryPath === null) {
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    const fulfilledEntry = fulfillRouteCacheEntry(entry, routeTree, metadataVaryPath, now + staleTimeMs, couldBeIntercepted, canonicalUrl, renderedSearch, routeIsPPREnabled);
    // If the server sent segment data as part of the response, we should write
    // it into the cache to prevent a second, redundant prefetch request.
    //
    // TODO: When `clientSegmentCache` is enabled, the server does not include
    // segment data when responding to a route tree prefetch request. However,
    // when `clientSegmentCache` is set to "client-only", and PPR is enabled (or
    // the page is fully static), the normal check is bypassed and the server
    // responds with the full page. This is a temporary situation until we can
    // remove the "client-only" option. Then, we can delete this function call.
    writeDynamicRenderResponseIntoCache(now, task, fetchStrategy, response, serverData, isResponsePartial, fulfilledEntry, null);
}
function rejectSegmentEntriesIfStillPending(entries, staleAt) {
    const fulfilledEntries = [];
    for (const entry of entries.values()){
        if (entry.status === 1) {
            rejectSegmentCacheEntry(entry, staleAt);
        } else if (entry.status === 2) {
            fulfilledEntries.push(entry);
        }
    }
    return fulfilledEntries;
}
function writeDynamicRenderResponseIntoCache(now, task, fetchStrategy, response, serverData, isResponsePartial, route, spawnedEntries) {
    if (serverData.b !== (0, _appbuildid.getAppBuildId)()) {
        // The server build does not match the client. Treat as a 404. During
        // an actual navigation, the router will trigger an MPA navigation.
        // TODO: Consider moving the build ID to a response header so we can check
        // it before decoding the response, and so there's one way of checking
        // across all response types.
        if (spawnedEntries !== null) {
            rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
        }
        return null;
    }
    const flightDatas = (0, _flightdatahelpers.normalizeFlightData)(serverData.f);
    if (typeof flightDatas === 'string') {
        // This means navigating to this route will result in an MPA navigation.
        // TODO: We should cache this, too, so that the MPA navigation is immediate.
        return null;
    }
    // For runtime prefetches, stale time is in the payload at rp[1].
    // For other responses, fall back to the header.
    const staleTimeSeconds = typeof serverData.rp?.[1] === 'number' ? serverData.rp[1] : parseInt(response.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER) ?? '', 10);
    const staleTimeMs = !isNaN(staleTimeSeconds) ? getStaleTimeMs(staleTimeSeconds) : _navigatereducer.STATIC_STALETIME_MS;
    const staleAt = now + staleTimeMs;
    for (const flightData of flightDatas){
        const seedData = flightData.seedData;
        if (seedData !== null) {
            // The data sent by the server represents only a subtree of the app. We
            // need to find the part of the task tree that matches the response.
            //
            // segmentPath represents the parent path of subtree. It's a repeating
            // pattern of parallel route key and segment:
            //
            //   [string, Segment, string, Segment, string, Segment, ...]
            const segmentPath = flightData.segmentPath;
            let tree = route.tree;
            for(let i = 0; i < segmentPath.length; i += 2){
                const parallelRouteKey = segmentPath[i];
                if (tree?.slots?.[parallelRouteKey] !== undefined) {
                    tree = tree.slots[parallelRouteKey];
                } else {
                    if (spawnedEntries !== null) {
                        rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
                    }
                    return null;
                }
            }
            writeSeedDataIntoCache(now, task, fetchStrategy, route, tree, staleAt, seedData, isResponsePartial, spawnedEntries);
        }
        const head = flightData.head;
        if (head !== null) {
            fulfillEntrySpawnedByRuntimePrefetch(now, fetchStrategy, route, head, null, flightData.isHeadPartial, staleAt, route.metadata, spawnedEntries);
        }
    }
    // Any entry that's still pending was intentionally not rendered by the
    // server, because it was inside the loading boundary. Mark them as rejected
    // so we know not to fetch them again.
    // TODO: If PPR is enabled on some routes but not others, then it's possible
    // that a different page is able to do a per-segment prefetch of one of the
    // segments we're marking as rejected here. We should mark on the segment
    // somehow that the reason for the rejection is because of a non-PPR prefetch.
    // That way a per-segment prefetch knows to disregard the rejection.
    if (spawnedEntries !== null) {
        const fulfilledEntries = rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
        return fulfilledEntries;
    }
    return null;
}
function writeSeedDataIntoCache(now, task, fetchStrategy, route, tree, staleAt, seedData, isResponsePartial, entriesOwnedByCurrentTask) {
    // This function is used to write the result of a runtime server request
    // (CacheNodeSeedData) into the prefetch cache.
    const rsc = seedData[0];
    const loading = seedData[2];
    const isPartial = rsc === null || isResponsePartial;
    fulfillEntrySpawnedByRuntimePrefetch(now, fetchStrategy, route, rsc, loading, isPartial, staleAt, tree, entriesOwnedByCurrentTask);
    // Recursively write the child data into the cache.
    const slots = tree.slots;
    if (slots !== null) {
        const seedDataChildren = seedData[1];
        for(const parallelRouteKey in slots){
            const childTree = slots[parallelRouteKey];
            const childSeedData = seedDataChildren[parallelRouteKey];
            if (childSeedData !== null && childSeedData !== undefined) {
                writeSeedDataIntoCache(now, task, fetchStrategy, route, childTree, staleAt, childSeedData, isResponsePartial, entriesOwnedByCurrentTask);
            }
        }
    }
}
function fulfillEntrySpawnedByRuntimePrefetch(now, fetchStrategy, route, rsc, loading, isPartial, staleAt, tree, entriesOwnedByCurrentTask) {
    // We should only write into cache entries that are owned by us. Or create
    // a new one and write into that. We must never write over an entry that was
    // created by a different task, because that causes data races.
    const ownedEntry = entriesOwnedByCurrentTask !== null ? entriesOwnedByCurrentTask.get(tree.requestKey) : undefined;
    if (ownedEntry !== undefined) {
        fulfillSegmentCacheEntry(ownedEntry, rsc, loading, staleAt, isPartial);
    } else {
        // There's no matching entry. Attempt to create a new one.
        const possiblyNewEntry = readOrCreateSegmentCacheEntry(now, fetchStrategy, route, tree);
        if (possiblyNewEntry.status === 0) {
            // Confirmed this is a new entry. We can fulfill it.
            const newEntry = possiblyNewEntry;
            fulfillSegmentCacheEntry(upgradeToPendingSegment(newEntry, fetchStrategy), rsc, loading, staleAt, isPartial);
        } else {
            // There was already an entry in the cache. But we may be able to
            // replace it with the new one from the server.
            const newEntry = fulfillSegmentCacheEntry(upgradeToPendingSegment(createDetachedSegmentCacheEntry(staleAt), fetchStrategy), rsc, loading, staleAt, isPartial);
            upsertSegmentEntry(now, (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree), newEntry);
        }
    }
}
async function fetchPrefetchResponse(url, headers) {
    const fetchPriority = 'low';
    // When issuing a prefetch request, don't immediately decode the response; we
    // use the lower level `createFromResponse` API instead because we need to do
    // some extra processing of the response stream. See
    // `createPrefetchResponseStream` for more details.
    const shouldImmediatelyDecode = false;
    const response = await (0, _fetchserverresponse.createFetch)(url, headers, fetchPriority, shouldImmediatelyDecode);
    if (!response.ok) {
        return null;
    }
    // Check the content type
    if ("TURBOPACK compile-time falsy", 0) {
    // In output: "export" mode, we relaxed about the content type, since it's
    // not Next.js that's serving the response. If the status is OK, assume the
    // response is valid. If it's not a valid response, the Flight client won't
    // be able to decode it, and we'll treat it as a miss.
    } else {
        const contentType = response.headers.get('content-type');
        const isFlightResponse = contentType && contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER);
        if (!isFlightResponse) {
            return null;
        }
    }
    return response;
}
function createPrefetchResponseStream(originalFlightStream, onStreamClose, onResponseSizeUpdate) {
    // When PPR is enabled, prefetch streams may contain references that never
    // resolve, because that's how we encode dynamic data access. In the decoded
    // object returned by the Flight client, these are reified into hanging
    // promises that suspend during render, which is effectively what we want.
    // The UI resolves when it switches to the dynamic data stream
    // (via useDeferredValue(dynamic, static)).
    //
    // However, the Flight implementation currently errors if the server closes
    // the response before all the references are resolved. As a cheat to work
    // around this, we wrap the original stream in a new stream that never closes,
    // and therefore doesn't error.
    //
    // While processing the original stream, we also incrementally update the size
    // of the cache entry in the LRU.
    let totalByteLength = 0;
    const reader = originalFlightStream.getReader();
    return new ReadableStream({
        async pull (controller) {
            while(true){
                const { done, value } = await reader.read();
                if (!done) {
                    // Pass to the target stream and keep consuming the Flight response
                    // from the server.
                    controller.enqueue(value);
                    // Incrementally update the size of the cache entry in the LRU.
                    // NOTE: Since prefetch responses are delivered in a single chunk,
                    // it's not really necessary to do this streamingly, but I'm doing it
                    // anyway in case this changes in the future.
                    totalByteLength += value.byteLength;
                    onResponseSizeUpdate(totalByteLength);
                    continue;
                }
                // The server stream has closed. Exit, but intentionally do not close
                // the target stream. We do notify the caller, though.
                onStreamClose();
                return;
            }
        }
    });
}
function addSegmentPathToUrlInOutputExportMode(url, segmentPath) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return url;
}
function canNewFetchStrategyProvideMoreContent(currentStrategy, newStrategy) {
    return currentStrategy < newStrategy;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=cache.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelPrefetchTask: null,
    isPrefetchTaskDirty: null,
    pingPrefetchTask: null,
    reschedulePrefetchTask: null,
    schedulePrefetchTask: null,
    startRevalidationCooldown: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelPrefetchTask: function() {
        return cancelPrefetchTask;
    },
    isPrefetchTaskDirty: function() {
        return isPrefetchTaskDirty;
    },
    pingPrefetchTask: function() {
        return pingPrefetchTask;
    },
    reschedulePrefetchTask: function() {
        return reschedulePrefetchTask;
    },
    schedulePrefetchTask: function() {
        return schedulePrefetchTask;
    },
    startRevalidationCooldown: function() {
        return startRevalidationCooldown;
    }
});
const _approutertypes = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/app-router-types.js [app-ssr] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/match-segments.js [app-ssr] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache.js [app-ssr] (ecmascript)");
const _varypath = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-ssr] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-ssr] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const scheduleMicrotask = typeof queueMicrotask === 'function' ? queueMicrotask : (fn)=>Promise.resolve().then(fn).catch((error)=>setTimeout(()=>{
            throw error;
        }));
const taskHeap = [];
let inProgressRequests = 0;
let sortIdCounter = 0;
let didScheduleMicrotask = false;
// The most recently hovered (or touched, etc) link, i.e. the most recent task
// scheduled at Intent priority. There's only ever a single task at Intent
// priority at a time. We reserve special network bandwidth for this task only.
let mostRecentlyHoveredLink = null;
// CDN cache propagation delay after revalidation (in milliseconds)
const REVALIDATION_COOLDOWN_MS = 300;
// Timeout handle for the revalidation cooldown. When non-null, prefetch
// requests are blocked to allow CDN cache propagation.
let revalidationCooldownTimeoutHandle = null;
function startRevalidationCooldown() {
    // Clear any existing timeout in case multiple revalidations happen
    // in quick succession.
    if (revalidationCooldownTimeoutHandle !== null) {
        clearTimeout(revalidationCooldownTimeoutHandle);
    }
    // Schedule the cooldown to expire after the delay.
    revalidationCooldownTimeoutHandle = setTimeout(()=>{
        revalidationCooldownTimeoutHandle = null;
        // Retry the prefetch queue now that the cooldown has expired.
        ensureWorkIsScheduled();
    }, REVALIDATION_COOLDOWN_MS);
}
function schedulePrefetchTask(key, treeAtTimeOfPrefetch, fetchStrategy, priority, onInvalidate) {
    // Spawn a new prefetch task
    const task = {
        key,
        treeAtTimeOfPrefetch,
        cacheVersion: (0, _cache.getCurrentCacheVersion)(),
        priority,
        phase: 1,
        hasBackgroundWork: false,
        spawnedRuntimePrefetches: null,
        fetchStrategy,
        sortId: sortIdCounter++,
        isCanceled: false,
        onInvalidate,
        _heapIndex: -1
    };
    trackMostRecentlyHoveredLink(task);
    heapPush(taskHeap, task);
    // Schedule an async task to process the queue.
    //
    // The main reason we process the queue in an async task is for batching.
    // It's common for a single JS task/event to trigger multiple prefetches.
    // By deferring to a microtask, we only process the queue once per JS task.
    // If they have different priorities, it also ensures they are processed in
    // the optimal order.
    ensureWorkIsScheduled();
    return task;
}
function cancelPrefetchTask(task) {
    // Remove the prefetch task from the queue. If the task already completed,
    // then this is a no-op.
    //
    // We must also explicitly mark the task as canceled so that a blocked task
    // does not get added back to the queue when it's pinged by the network.
    task.isCanceled = true;
    heapDelete(taskHeap, task);
}
function reschedulePrefetchTask(task, treeAtTimeOfPrefetch, fetchStrategy, priority) {
    // Bump the prefetch task to the top of the queue, as if it were a fresh
    // task. This is essentially the same as canceling the task and scheduling
    // a new one, except it reuses the original object.
    //
    // The primary use case is to increase the priority of a Link-initated
    // prefetch on hover.
    // Un-cancel the task, in case it was previously canceled.
    task.isCanceled = false;
    task.phase = 1;
    // Assign a new sort ID to move it ahead of all other tasks at the same
    // priority level. (Higher sort IDs are processed first.)
    task.sortId = sortIdCounter++;
    task.priority = // Intent priority, even if the rescheduled priority is lower.
    task === mostRecentlyHoveredLink ? _types.PrefetchPriority.Intent : priority;
    task.treeAtTimeOfPrefetch = treeAtTimeOfPrefetch;
    task.fetchStrategy = fetchStrategy;
    trackMostRecentlyHoveredLink(task);
    if (task._heapIndex !== -1) {
        // The task is already in the queue.
        heapResift(taskHeap, task);
    } else {
        heapPush(taskHeap, task);
    }
    ensureWorkIsScheduled();
}
function isPrefetchTaskDirty(task, nextUrl, tree) {
    // This is used to quickly bail out of a prefetch task if the result is
    // guaranteed to not have changed since the task was initiated. This is
    // strictly an optimization — theoretically, if it always returned true, no
    // behavior should change because a full prefetch task will effectively
    // perform the same checks.
    const currentCacheVersion = (0, _cache.getCurrentCacheVersion)();
    return task.cacheVersion !== currentCacheVersion || task.treeAtTimeOfPrefetch !== tree || task.key.nextUrl !== nextUrl;
}
function trackMostRecentlyHoveredLink(task) {
    // Track the mostly recently hovered link, i.e. the most recently scheduled
    // task at Intent priority. There must only be one such task at a time.
    if (task.priority === _types.PrefetchPriority.Intent && task !== mostRecentlyHoveredLink) {
        if (mostRecentlyHoveredLink !== null) {
            // Bump the previously hovered link's priority down to Default.
            if (mostRecentlyHoveredLink.priority !== _types.PrefetchPriority.Background) {
                mostRecentlyHoveredLink.priority = _types.PrefetchPriority.Default;
                heapResift(taskHeap, mostRecentlyHoveredLink);
            }
        }
        mostRecentlyHoveredLink = task;
    }
}
function ensureWorkIsScheduled() {
    if (didScheduleMicrotask) {
        // Already scheduled a task to process the queue
        return;
    }
    didScheduleMicrotask = true;
    scheduleMicrotask(processQueueInMicrotask);
}
/**
 * Checks if we've exceeded the maximum number of concurrent prefetch requests,
 * to avoid saturating the browser's internal network queue. This is a
 * cooperative limit — prefetch tasks should check this before issuing
 * new requests.
 *
 * Also checks if we're within the revalidation cooldown window, during which
 * prefetch requests are delayed to allow CDN cache propagation.
 */ function hasNetworkBandwidth(task) {
    // Check if we're within the revalidation cooldown window
    if (revalidationCooldownTimeoutHandle !== null) {
        // We're within the cooldown window. Return false to prevent prefetching.
        // When the cooldown expires, the timeout will call ensureWorkIsScheduled()
        // to retry the queue.
        return false;
    }
    // TODO: Also check if there's an in-progress navigation. We should never
    // add prefetch requests to the network queue if an actual navigation is
    // taking place, to ensure there's sufficient bandwidth for render-blocking
    // data and resources.
    // TODO: Consider reserving some amount of bandwidth for static prefetches.
    if (task.priority === _types.PrefetchPriority.Intent) {
        // The most recently hovered link is allowed to exceed the default limit.
        //
        // The goal is to always have enough bandwidth to start a new prefetch
        // request when hovering over a link.
        //
        // However, because we don't abort in-progress requests, it's still possible
        // we'll run out of bandwidth. When links are hovered in quick succession,
        // there could be multiple hover requests running simultaneously.
        return inProgressRequests < 12;
    }
    // The default limit is lower than the limit for a hovered link.
    return inProgressRequests < 4;
}
function spawnPrefetchSubtask(prefetchSubtask) {
    // When the scheduler spawns an async task, we don't await its result.
    // Instead, the async task writes its result directly into the cache, then
    // pings the scheduler to continue.
    //
    // We process server responses streamingly, so the prefetch subtask will
    // likely resolve before we're finished receiving all the data. The subtask
    // result includes a promise that resolves once the network connection is
    // closed. The scheduler uses this to control network bandwidth by tracking
    // and limiting the number of concurrent requests.
    inProgressRequests++;
    return prefetchSubtask.then((result)=>{
        if (result === null) {
            // The prefetch task errored before it could start processing the
            // network stream. Assume the connection is closed.
            onPrefetchConnectionClosed();
            return null;
        }
        // Wait for the connection to close before freeing up more bandwidth.
        result.closed.then(onPrefetchConnectionClosed);
        return result.value;
    });
}
function onPrefetchConnectionClosed() {
    inProgressRequests--;
    // Notify the scheduler that we have more bandwidth, and can continue
    // processing tasks.
    ensureWorkIsScheduled();
}
function pingPrefetchTask(task) {
    // "Ping" a prefetch that's already in progress to notify it of new data.
    if (task.isCanceled || // Check if prefetch is already queued.
    task._heapIndex !== -1) {
        return;
    }
    // Add the task back to the queue.
    heapPush(taskHeap, task);
    ensureWorkIsScheduled();
}
function processQueueInMicrotask() {
    didScheduleMicrotask = false;
    // We aim to minimize how often we read the current time. Since nearly all
    // functions in the prefetch scheduler are synchronous, we can read the time
    // once and pass it as an argument wherever it's needed.
    const now = Date.now();
    // Process the task queue until we run out of network bandwidth.
    let task = heapPeek(taskHeap);
    while(task !== null && hasNetworkBandwidth(task)){
        task.cacheVersion = (0, _cache.getCurrentCacheVersion)();
        const exitStatus = pingRoute(now, task);
        // These fields are only valid for a single attempt. Reset them after each
        // iteration of the task queue.
        const hasBackgroundWork = task.hasBackgroundWork;
        task.hasBackgroundWork = false;
        task.spawnedRuntimePrefetches = null;
        switch(exitStatus){
            case 0:
                // The task yielded because there are too many requests in progress.
                // Stop processing tasks until we have more bandwidth.
                return;
            case 1:
                // The task is blocked. It needs more data before it can proceed.
                // Keep the task out of the queue until the server responds.
                heapPop(taskHeap);
                // Continue to the next task
                task = heapPeek(taskHeap);
                continue;
            case 2:
                if (task.phase === 1) {
                    // Finished prefetching the route tree. Proceed to prefetching
                    // the segments.
                    task.phase = 0;
                    heapResift(taskHeap, task);
                } else if (hasBackgroundWork) {
                    // The task spawned additional background work. Reschedule the task
                    // at background priority.
                    task.priority = _types.PrefetchPriority.Background;
                    heapResift(taskHeap, task);
                } else {
                    // The prefetch is complete. Continue to the next task.
                    heapPop(taskHeap);
                }
                task = heapPeek(taskHeap);
                continue;
            default:
                exitStatus;
        }
    }
}
/**
 * Check this during a prefetch task to determine if background work can be
 * performed. If so, it evaluates to `true`. Otherwise, it returns `false`,
 * while also scheduling a background task to run later. Usage:
 *
 * @example
 * if (background(task)) {
 *   // Perform background-pri work
 * }
 */ function background(task) {
    if (task.priority === _types.PrefetchPriority.Background) {
        return true;
    }
    task.hasBackgroundWork = true;
    return false;
}
function pingRoute(now, task) {
    const key = task.key;
    const route = (0, _cache.readOrCreateRouteCacheEntry)(now, task, key);
    const exitStatus = pingRootRouteTree(now, task, route);
    if (exitStatus !== 0 && key.search !== '') {
        // If the URL has a non-empty search string, also prefetch the pathname
        // without the search string. We use the searchless route tree as a base for
        // optimistic routing; see requestOptimisticRouteCacheEntry for details.
        //
        // Note that we don't need to prefetch any of the segment data. Just the
        // route tree.
        //
        // TODO: This is a temporary solution; the plan is to replace this by adding
        // a wildcard lookup method to the TupleMap implementation. This is
        // non-trivial to implement because it needs to account for things like
        // fallback route entries, hence this temporary workaround.
        const url = new URL(key.pathname, location.origin);
        const keyWithoutSearch = (0, _cachekey.createCacheKey)(url.href, key.nextUrl);
        const routeWithoutSearch = (0, _cache.readOrCreateRouteCacheEntry)(now, task, keyWithoutSearch);
        switch(routeWithoutSearch.status){
            case _cache.EntryStatus.Empty:
                {
                    if (background(task)) {
                        routeWithoutSearch.status = _cache.EntryStatus.Pending;
                        spawnPrefetchSubtask((0, _cache.fetchRouteOnCacheMiss)(routeWithoutSearch, task, keyWithoutSearch));
                    }
                    break;
                }
            case _cache.EntryStatus.Pending:
            case _cache.EntryStatus.Fulfilled:
            case _cache.EntryStatus.Rejected:
                {
                    break;
                }
            default:
                routeWithoutSearch;
        }
    }
    return exitStatus;
}
function pingRootRouteTree(now, task, route) {
    switch(route.status){
        case _cache.EntryStatus.Empty:
            {
                // Route is not yet cached, and there's no request already in progress.
                // Spawn a task to request the route, load it into the cache, and ping
                // the task to continue.
                // TODO: There are multiple strategies in the <Link> API for prefetching
                // a route. Currently we've only implemented the main one: per-segment,
                // static-data only.
                //
                // There's also `<Link prefetch={true}>`
                // which prefetch both static *and* dynamic data.
                // Similarly, we need to fallback to the old, per-page
                // behavior if PPR is disabled for a route (via the incremental opt-in).
                //
                // Those cases will be handled here.
                spawnPrefetchSubtask((0, _cache.fetchRouteOnCacheMiss)(route, task, task.key));
                // If the request takes longer than a minute, a subsequent request should
                // retry instead of waiting for this one. When the response is received,
                // this value will be replaced by a new value based on the stale time sent
                // from the server.
                // TODO: We should probably also manually abort the fetch task, to reclaim
                // server bandwidth.
                route.staleAt = now + 60 * 1000;
                // Upgrade to Pending so we know there's already a request in progress
                route.status = _cache.EntryStatus.Pending;
            // Intentional fallthrough to the Pending branch
            }
        case _cache.EntryStatus.Pending:
            {
                // Still pending. We can't start prefetching the segments until the route
                // tree has loaded. Add the task to the set of blocked tasks so that it
                // is notified when the route tree is ready.
                const blockedTasks = route.blockedTasks;
                if (blockedTasks === null) {
                    route.blockedTasks = new Set([
                        task
                    ]);
                } else {
                    blockedTasks.add(task);
                }
                return 1;
            }
        case _cache.EntryStatus.Rejected:
            {
                // Route tree failed to load. Treat as a 404.
                return 2;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                if (task.phase !== 0) {
                    // Do not prefetch segment data until we've entered the segment phase.
                    return 2;
                }
                // Recursively fill in the segment tree.
                if (!hasNetworkBandwidth(task)) {
                    // Stop prefetching segments until there's more bandwidth.
                    return 0;
                }
                const tree = route.tree;
                // A task's fetch strategy gets set to `PPR` for any "auto" prefetch.
                // If it turned out that the route isn't PPR-enabled, we need to use `LoadingBoundary` instead.
                // We don't need to do this for runtime prefetches, because those are only available in
                // `cacheComponents`, where every route is PPR.
                const fetchStrategy = task.fetchStrategy === _types.FetchStrategy.PPR ? route.isPPREnabled ? _types.FetchStrategy.PPR : _types.FetchStrategy.LoadingBoundary : task.fetchStrategy;
                switch(fetchStrategy){
                    case _types.FetchStrategy.PPR:
                        {
                            // For Cache Components pages, each segment may be prefetched
                            // statically or using a runtime request, based on various
                            // configurations and heuristics. We'll do this in two passes: first
                            // traverse the tree and perform all the static prefetches.
                            //
                            // Then, if there are any segments that need a runtime request,
                            // do another pass to perform a runtime prefetch.
                            pingStaticHead(now, task, route);
                            const exitStatus = pingSharedPartOfCacheComponentsTree(now, task, route, task.treeAtTimeOfPrefetch, tree);
                            if (exitStatus === 0) {
                                // Child yielded without finishing.
                                return 0;
                            }
                            const spawnedRuntimePrefetches = task.spawnedRuntimePrefetches;
                            if (spawnedRuntimePrefetches !== null) {
                                // During the first pass, we discovered segments that require a
                                // runtime prefetch. Do a second pass to construct a request tree.
                                const spawnedEntries = new Map();
                                pingRuntimeHead(now, task, route, spawnedEntries, _types.FetchStrategy.PPRRuntime);
                                const requestTree = pingRuntimePrefetches(now, task, route, tree, spawnedRuntimePrefetches, spawnedEntries);
                                let needsDynamicRequest = spawnedEntries.size > 0;
                                if (needsDynamicRequest) {
                                    // Perform a dynamic prefetch request and populate the cache with
                                    // the result.
                                    spawnPrefetchSubtask((0, _cache.fetchSegmentPrefetchesUsingDynamicRequest)(task, route, _types.FetchStrategy.PPRRuntime, requestTree, spawnedEntries));
                                }
                            }
                            return 2;
                        }
                    case _types.FetchStrategy.Full:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.LoadingBoundary:
                        {
                            // Prefetch multiple segments using a single dynamic request.
                            // TODO: We can consolidate this branch with previous one by modeling
                            // it as if the first segment in the new tree has runtime prefetching
                            // enabled. Will do this as a follow-up refactor. Might want to remove
                            // the special metatdata case below first. In the meantime, it's not
                            // really that much duplication, just would be nice to remove one of
                            // these codepaths.
                            const spawnedEntries = new Map();
                            pingRuntimeHead(now, task, route, spawnedEntries, fetchStrategy);
                            const dynamicRequestTree = diffRouteTreeAgainstCurrent(now, task, route, task.treeAtTimeOfPrefetch, tree, spawnedEntries, fetchStrategy);
                            let needsDynamicRequest = spawnedEntries.size > 0;
                            if (needsDynamicRequest) {
                                spawnPrefetchSubtask((0, _cache.fetchSegmentPrefetchesUsingDynamicRequest)(task, route, fetchStrategy, dynamicRequestTree, spawnedEntries));
                            }
                            return 2;
                        }
                    default:
                        fetchStrategy;
                }
                break;
            }
        default:
            {
                route;
            }
    }
    return 2;
}
function pingStaticHead(now, task, route) {
    // The Head data for a page (metadata, viewport) is not really a route
    // segment, in the sense that it doesn't appear in the route tree. But we
    // store it in the cache as if it were, using a special key.
    pingStaticSegmentData(now, task, route, (0, _cache.readOrCreateSegmentCacheEntry)(now, _types.FetchStrategy.PPR, route, route.metadata), task.key, route.metadata);
}
function pingRuntimeHead(now, task, route, spawnedEntries, fetchStrategy) {
    pingRouteTreeAndIncludeDynamicData(now, task, route, route.metadata, false, spawnedEntries, // and LoadingBoundary
    fetchStrategy === _types.FetchStrategy.LoadingBoundary ? _types.FetchStrategy.Full : fetchStrategy);
}
// TODO: Rename dynamic -> runtime throughout this module
function pingSharedPartOfCacheComponentsTree(now, task, route, oldTree, newTree) {
    // When Cache Components is enabled (or PPR, or a fully static route when PPR
    // is disabled; those cases are treated equivalently to Cache Components), we
    // start by prefetching each segment individually. Once we reach the "new"
    // part of the tree — the part that doesn't exist on the current page — we
    // may choose to switch to a runtime prefetch instead, based on the
    // information sent by the server in the route tree.
    //
    // The traversal starts in the "shared" part of the tree. Once we reach the
    // "new" part of the tree, we switch to a different traversal,
    // pingNewPartOfCacheComponentsTree.
    // Prefetch this segment's static data.
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, route, newTree);
    pingStaticSegmentData(now, task, route, segment, task.key, newTree);
    // Recursively ping the children.
    const oldTreeChildren = oldTree[1];
    const newTreeChildren = newTree.slots;
    if (newTreeChildren !== null) {
        for(const parallelRouteKey in newTreeChildren){
            if (!hasNetworkBandwidth(task)) {
                // Stop prefetching segments until there's more bandwidth.
                return 0;
            }
            const newTreeChild = newTreeChildren[parallelRouteKey];
            const newTreeChildSegment = newTreeChild.segment;
            const oldTreeChild = oldTreeChildren[parallelRouteKey];
            const oldTreeChildSegment = oldTreeChild?.[0];
            let childExitStatus;
            if (oldTreeChildSegment !== undefined && doesCurrentSegmentMatchCachedSegment(route, newTreeChildSegment, oldTreeChildSegment)) {
                // We're still in the "shared" part of the tree.
                childExitStatus = pingSharedPartOfCacheComponentsTree(now, task, route, oldTreeChild, newTreeChild);
            } else {
                // We've entered the "new" part of the tree. Switch
                // traversal functions.
                childExitStatus = pingNewPartOfCacheComponentsTree(now, task, route, newTreeChild);
            }
            if (childExitStatus === 0) {
                // Child yielded without finishing.
                return 0;
            }
        }
    }
    return 2;
}
function pingNewPartOfCacheComponentsTree(now, task, route, tree) {
    // We're now prefetching in the "new" part of the tree, the part that doesn't
    // exist on the current page. (In other words, we're deeper than the
    // shared layouts.) Segments in here default to being prefetched statically.
    // However, if the server instructs us to, we may switch to a runtime
    // prefetch instead. Traverse the tree and check at each segment.
    if (tree.hasRuntimePrefetch) {
        // This route has a runtime prefetch response. Since we're below the shared
        // layout, everything from this point should be prefetched using a single,
        // combined runtime request, rather than using per-segment static requests.
        // This is true even if some of the child segments are known to be fully
        // static — once we've decided to perform a runtime prefetch, we might as
        // well respond with the static segments in the same roundtrip. (That's how
        // regular navigations work, too.) We'll still skip over segments that are
        // already cached, though.
        //
        // It's the server's responsibility to set a reasonable value of
        // `hasRuntimePrefetch`. Currently it's user-defined, but eventually, the
        // server may send a value of `false` even if the user opts in, if it
        // determines during build that the route is always fully static. There are
        // more optimizations we can do once we implement fallback param
        // tracking, too.
        //
        // Use the task object to collect the segments that need a runtime prefetch.
        // This will signal to the outer task queue that a second traversal is
        // required to construct a request tree.
        if (task.spawnedRuntimePrefetches === null) {
            task.spawnedRuntimePrefetches = new Set([
                tree.requestKey
            ]);
        } else {
            task.spawnedRuntimePrefetches.add(tree.requestKey);
        }
        // Then exit the traversal without prefetching anything further.
        return 2;
    }
    // This segment should not be runtime prefetched. Prefetch its static data.
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, route, tree);
    pingStaticSegmentData(now, task, route, segment, task.key, tree);
    if (tree.slots !== null) {
        if (!hasNetworkBandwidth(task)) {
            // Stop prefetching segments until there's more bandwidth.
            return 0;
        }
        // Recursively ping the children.
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            const childExitStatus = pingNewPartOfCacheComponentsTree(now, task, route, childTree);
            if (childExitStatus === 0) {
                // Child yielded without finishing.
                return 0;
            }
        }
    }
    // This segment and all its children have finished prefetching.
    return 2;
}
function diffRouteTreeAgainstCurrent(now, task, route, oldTree, newTree, spawnedEntries, fetchStrategy) {
    // This is a single recursive traversal that does multiple things:
    // - Finds the parts of the target route (newTree) that are not part of
    //   of the current page (oldTree) by diffing them, using the same algorithm
    //   as a real navigation.
    // - Constructs a request tree (FlightRouterState) that describes which
    //   segments need to be prefetched and which ones are already cached.
    // - Creates a set of pending cache entries for the segments that need to
    //   be prefetched, so that a subsequent prefetch task does not request the
    //   same segments again.
    const oldTreeChildren = oldTree[1];
    const newTreeChildren = newTree.slots;
    let requestTreeChildren = {};
    if (newTreeChildren !== null) {
        for(const parallelRouteKey in newTreeChildren){
            const newTreeChild = newTreeChildren[parallelRouteKey];
            const newTreeChildSegment = newTreeChild.segment;
            const oldTreeChild = oldTreeChildren[parallelRouteKey];
            const oldTreeChildSegment = oldTreeChild?.[0];
            if (oldTreeChildSegment !== undefined && doesCurrentSegmentMatchCachedSegment(route, newTreeChildSegment, oldTreeChildSegment)) {
                // This segment is already part of the current route. Keep traversing.
                const requestTreeChild = diffRouteTreeAgainstCurrent(now, task, route, oldTreeChild, newTreeChild, spawnedEntries, fetchStrategy);
                requestTreeChildren[parallelRouteKey] = requestTreeChild;
            } else {
                // This segment is not part of the current route. We're entering a
                // part of the tree that we need to prefetch (unless everything is
                // already cached).
                switch(fetchStrategy){
                    case _types.FetchStrategy.LoadingBoundary:
                        {
                            // When PPR is disabled, we can't prefetch per segment. We must
                            // fallback to the old prefetch behavior and send a dynamic request.
                            // Only routes that include a loading boundary can be prefetched in
                            // this way.
                            //
                            // This is simlar to a "full" prefetch, but we're much more
                            // conservative about which segments to include in the request.
                            //
                            // The server will only render up to the first loading boundary
                            // inside new part of the tree. If there's no loading boundary
                            // anywhere in the tree, the server will never return any data, so
                            // we can skip the request.
                            const subtreeHasLoadingBoundary = newTreeChild.hasLoadingBoundary !== _approutertypes.HasLoadingBoundary.SubtreeHasNoLoadingBoundary;
                            const requestTreeChild = subtreeHasLoadingBoundary ? pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, newTreeChild, null, spawnedEntries) : (0, _cache.convertRouteTreeToFlightRouterState)(newTreeChild);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild;
                            break;
                        }
                    case _types.FetchStrategy.PPRRuntime:
                        {
                            // This is a runtime prefetch. Fetch all cacheable data in the tree,
                            // not just the static PPR shell.
                            const requestTreeChild = pingRouteTreeAndIncludeDynamicData(now, task, route, newTreeChild, false, spawnedEntries, fetchStrategy);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild;
                            break;
                        }
                    case _types.FetchStrategy.Full:
                        {
                            // This is a "full" prefetch. Fetch all the data in the tree, both
                            // static and dynamic. We issue roughly the same request that we
                            // would during a real navigation. The goal is that once the
                            // navigation occurs, the router should not have to fetch any
                            // additional data.
                            //
                            // Although the response will include dynamic data, opting into a
                            // Full prefetch — via <Link prefetch={true}> — implicitly
                            // instructs the cache to treat the response as "static", or non-
                            // dynamic, since the whole point is to cache it for
                            // future navigations.
                            //
                            // Construct a tree (currently a FlightRouterState) that represents
                            // which segments need to be prefetched and which ones are already
                            // cached. If the tree is empty, then we can exit. Otherwise, we'll
                            // send the request tree to the server and use the response to
                            // populate the segment cache.
                            const requestTreeChild = pingRouteTreeAndIncludeDynamicData(now, task, route, newTreeChild, false, spawnedEntries, fetchStrategy);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild;
                            break;
                        }
                    default:
                        fetchStrategy;
                }
            }
        }
    }
    const requestTree = [
        newTree.segment,
        requestTreeChildren,
        null,
        null,
        newTree.isRootLayout
    ];
    return requestTree;
}
function pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, tree, refetchMarkerContext, spawnedEntries) {
    // This function is similar to pingRouteTreeAndIncludeDynamicData, except the
    // server is only going to return a minimal loading state — it will stop
    // rendering at the first loading boundary. Whereas a Full prefetch is
    // intentionally aggressive and tries to pretfetch all the data that will be
    // needed for a navigation, a LoadingBoundary prefetch is much more
    // conservative. For example, it will omit from the request tree any segment
    // that is already cached, regardles of whether it's partial or full. By
    // contrast, a Full prefetch will refetch partial segments.
    // "inside-shared-layout" tells the server where to start looking for a
    // loading boundary.
    let refetchMarker = refetchMarkerContext === null ? 'inside-shared-layout' : null;
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, route, tree);
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            {
                // This segment is not cached. Add a refetch marker so the server knows
                // to start rendering here.
                // TODO: Instead of a "refetch" marker, we could just omit this subtree's
                // FlightRouterState from the request tree. I think this would probably
                // already work even without any updates to the server. For consistency,
                // though, I'll send the full tree and we'll look into this later as part
                // of a larger redesign of the request protocol.
                // Add the pending cache entry to the result map.
                spawnedEntries.set(tree.requestKey, (0, _cache.upgradeToPendingSegment)(segment, // might not include it in the pending response. If another route is able
                // to issue a per-segment request, we'll do that in the background.
                _types.FetchStrategy.LoadingBoundary));
                if (refetchMarkerContext !== 'refetch') {
                    refetchMarker = refetchMarkerContext = 'refetch';
                } else {
                // There's already a parent with a refetch marker, so we don't need
                // to add another one.
                }
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                // The segment is already cached.
                const segmentHasLoadingBoundary = tree.hasLoadingBoundary === _approutertypes.HasLoadingBoundary.SegmentHasLoadingBoundary;
                if (segmentHasLoadingBoundary) {
                    // This segment has a loading boundary, which means the server won't
                    // render its children. So there's nothing left to prefetch along this
                    // path. We can bail out.
                    return (0, _cache.convertRouteTreeToFlightRouterState)(tree);
                }
                break;
            }
        case _cache.EntryStatus.Pending:
            {
                break;
            }
        case _cache.EntryStatus.Rejected:
            {
                break;
            }
        default:
            segment;
    }
    const requestTreeChildren = {};
    if (tree.slots !== null) {
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, childTree, refetchMarkerContext, spawnedEntries);
        }
    }
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        refetchMarker,
        tree.isRootLayout
    ];
    return requestTree;
}
function pingRouteTreeAndIncludeDynamicData(now, task, route, tree, isInsideRefetchingParent, spawnedEntries, fetchStrategy) {
    // The tree we're constructing is the same shape as the tree we're navigating
    // to. But even though this is a "new" tree, some of the individual segments
    // may be cached as a result of other route prefetches.
    //
    // So we need to find the first uncached segment along each path add an
    // explicit "refetch" marker so the server knows where to start rendering.
    // Once the server starts rendering along a path, it keeps rendering the
    // entire subtree.
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, // and we have to use the former here.
    // We can have a task with `FetchStrategy.PPR` where some of its segments are configured to
    // always use runtime prefetching (via `export const prefetch`), and those should check for
    // entries that include search params.
    fetchStrategy, route, tree);
    let spawnedSegment = null;
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            {
                // This segment is not cached. Include it in the request.
                spawnedSegment = (0, _cache.upgradeToPendingSegment)(segment, fetchStrategy);
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                // The segment is already cached.
                if (segment.isPartial && (0, _cache.canNewFetchStrategyProvideMoreContent)(segment.fetchStrategy, fetchStrategy)) {
                    // The cached segment contains dynamic holes, and was prefetched using a less specific strategy than the current one.
                    // This means we're in one of these cases:
                    //   - we have a static prefetch, and we're doing a runtime prefetch
                    //   - we have a static or runtime prefetch, and we're doing a Full prefetch (or a navigation).
                    // In either case, we need to include it in the request to get a more specific (or full) version.
                    spawnedSegment = pingFullSegmentRevalidation(now, route, tree, fetchStrategy);
                }
                break;
            }
        case _cache.EntryStatus.Pending:
        case _cache.EntryStatus.Rejected:
            {
                // There's either another prefetch currently in progress, or the previous
                // attempt failed. If the new strategy can provide more content, fetch it again.
                if ((0, _cache.canNewFetchStrategyProvideMoreContent)(segment.fetchStrategy, fetchStrategy)) {
                    spawnedSegment = pingFullSegmentRevalidation(now, route, tree, fetchStrategy);
                }
                break;
            }
        default:
            segment;
    }
    const requestTreeChildren = {};
    if (tree.slots !== null) {
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingRouteTreeAndIncludeDynamicData(now, task, route, childTree, isInsideRefetchingParent || spawnedSegment !== null, spawnedEntries, fetchStrategy);
        }
    }
    if (spawnedSegment !== null) {
        // Add the pending entry to the result map.
        spawnedEntries.set(tree.requestKey, spawnedSegment);
    }
    // Don't bother to add a refetch marker if one is already present in a parent.
    const refetchMarker = !isInsideRefetchingParent && spawnedSegment !== null ? 'refetch' : null;
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        refetchMarker,
        tree.isRootLayout
    ];
    return requestTree;
}
function pingRuntimePrefetches(now, task, route, tree, spawnedRuntimePrefetches, spawnedEntries) {
    // Construct a request tree (FlightRouterState) for a runtime prefetch. If
    // a segment is part of the runtime prefetch, the tree is constructed by
    // diffing against what's already in the prefetch cache. Otherwise, we send
    // a regular FlightRouterState with no special markers.
    //
    // See pingRouteTreeAndIncludeDynamicData for details.
    if (spawnedRuntimePrefetches.has(tree.requestKey)) {
        // This segment needs a runtime prefetch.
        return pingRouteTreeAndIncludeDynamicData(now, task, route, tree, false, spawnedEntries, _types.FetchStrategy.PPRRuntime);
    }
    let requestTreeChildren = {};
    const slots = tree.slots;
    if (slots !== null) {
        for(const parallelRouteKey in slots){
            const childTree = slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingRuntimePrefetches(now, task, route, childTree, spawnedRuntimePrefetches, spawnedEntries);
        }
    }
    // This segment is not part of the runtime prefetch. Clone the base tree.
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        null
    ];
    return requestTree;
}
function pingStaticSegmentData(now, task, route, segment, routeKey, tree) {
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            // Upgrade to Pending so we know there's already a request in progress
            spawnPrefetchSubtask((0, _cache.fetchSegmentOnCacheMiss)(route, (0, _cache.upgradeToPendingSegment)(segment, _types.FetchStrategy.PPR), routeKey, tree));
            break;
        case _cache.EntryStatus.Pending:
            {
                // There's already a request in progress. Depending on what kind of
                // request it is, we may want to revalidate it.
                switch(segment.fetchStrategy){
                    case _types.FetchStrategy.PPR:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.Full:
                        break;
                    case _types.FetchStrategy.LoadingBoundary:
                        // There's a pending request, but because it's using the old
                        // prefetching strategy, we can't be sure if it will be fulfilled by
                        // the response — it might be inside the loading boundary. Perform
                        // a revalidation, but because it's speculative, wait to do it at
                        // background priority.
                        if (background(task)) {
                            // TODO: Instead of speculatively revalidating, consider including
                            // `hasLoading` in the route tree prefetch response.
                            pingPPRSegmentRevalidation(now, route, routeKey, tree);
                        }
                        break;
                    default:
                        segment.fetchStrategy;
                }
                break;
            }
        case _cache.EntryStatus.Rejected:
            {
                // The existing entry in the cache was rejected. Depending on how it
                // was originally fetched, we may or may not want to revalidate it.
                switch(segment.fetchStrategy){
                    case _types.FetchStrategy.PPR:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.Full:
                        break;
                    case _types.FetchStrategy.LoadingBoundary:
                        // There's a rejected entry, but it was fetched using the loading
                        // boundary strategy. So the reason it wasn't returned by the server
                        // might just be because it was inside a loading boundary. Or because
                        // there was a dynamic rewrite. Revalidate it using the per-
                        // segment strategy.
                        //
                        // Because a rejected segment will definitely prevent the segment (and
                        // all of its children) from rendering, we perform this revalidation
                        // immediately instead of deferring it to a background task.
                        pingPPRSegmentRevalidation(now, route, routeKey, tree);
                        break;
                    default:
                        segment.fetchStrategy;
                }
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            break;
        default:
            segment;
    }
// Segments do not have dependent tasks, so once the prefetch is initiated,
// there's nothing else for us to do (except write the server data into the
// entry, which is handled by `fetchSegmentOnCacheMiss`).
}
function pingPPRSegmentRevalidation(now, route, routeKey, tree) {
    const revalidatingSegment = (0, _cache.readOrCreateRevalidatingSegmentEntry)(now, _types.FetchStrategy.PPR, route, tree);
    switch(revalidatingSegment.status){
        case _cache.EntryStatus.Empty:
            // Spawn a prefetch request and upsert the segment into the cache
            // upon completion.
            upsertSegmentOnCompletion(spawnPrefetchSubtask((0, _cache.fetchSegmentOnCacheMiss)(route, (0, _cache.upgradeToPendingSegment)(revalidatingSegment, _types.FetchStrategy.PPR), routeKey, tree)), (0, _varypath.getSegmentVaryPathForRequest)(_types.FetchStrategy.PPR, tree));
            break;
        case _cache.EntryStatus.Pending:
            break;
        case _cache.EntryStatus.Fulfilled:
        case _cache.EntryStatus.Rejected:
            break;
        default:
            revalidatingSegment;
    }
}
function pingFullSegmentRevalidation(now, route, tree, fetchStrategy) {
    const revalidatingSegment = (0, _cache.readOrCreateRevalidatingSegmentEntry)(now, fetchStrategy, route, tree);
    if (revalidatingSegment.status === _cache.EntryStatus.Empty) {
        // During a Full/PPRRuntime prefetch, a single dynamic request is made for all the
        // segments that we need. So we don't initiate a request here directly. By
        // returning a pending entry from this function, it signals to the caller
        // that this segment should be included in the request that's sent to
        // the server.
        const pendingSegment = (0, _cache.upgradeToPendingSegment)(revalidatingSegment, fetchStrategy);
        upsertSegmentOnCompletion((0, _cache.waitForSegmentCacheEntry)(pendingSegment), (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree));
        return pendingSegment;
    } else {
        // There's already a revalidation in progress.
        const nonEmptyRevalidatingSegment = revalidatingSegment;
        if ((0, _cache.canNewFetchStrategyProvideMoreContent)(nonEmptyRevalidatingSegment.fetchStrategy, fetchStrategy)) {
            // The existing revalidation was fetched using a less specific strategy.
            // Reset it and start a new revalidation.
            const emptySegment = (0, _cache.overwriteRevalidatingSegmentCacheEntry)(fetchStrategy, route, tree);
            const pendingSegment = (0, _cache.upgradeToPendingSegment)(emptySegment, fetchStrategy);
            upsertSegmentOnCompletion((0, _cache.waitForSegmentCacheEntry)(pendingSegment), (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree));
            return pendingSegment;
        }
        switch(nonEmptyRevalidatingSegment.status){
            case _cache.EntryStatus.Pending:
                // There's already an in-progress prefetch that includes this segment.
                return null;
            case _cache.EntryStatus.Fulfilled:
            case _cache.EntryStatus.Rejected:
                // A previous revalidation attempt finished, but we chose not to replace
                // the existing entry in the cache. Don't try again until or unless the
                // revalidation entry expires.
                return null;
            default:
                nonEmptyRevalidatingSegment;
                return null;
        }
    }
}
const noop = ()=>{};
function upsertSegmentOnCompletion(promise, varyPath) {
    // Wait for a segment to finish loading, then upsert it into the cache
    promise.then((fulfilled)=>{
        if (fulfilled !== null) {
            // Received new data. Attempt to replace the existing entry in the cache.
            (0, _cache.upsertSegmentEntry)(Date.now(), varyPath, fulfilled);
        }
    }, noop);
}
function doesCurrentSegmentMatchCachedSegment(route, currentSegment, cachedSegment) {
    if (cachedSegment === _segment.PAGE_SEGMENT_KEY) {
        // In the FlightRouterState stored by the router, the page segment has the
        // rendered search params appended to the name of the segment. In the
        // prefetch cache, however, this is stored separately. So, when comparing
        // the router's current FlightRouterState to the cached FlightRouterState,
        // we need to make sure we compare both parts of the segment.
        // TODO: This is not modeled clearly. We use the same type,
        // FlightRouterState, for both the CacheNode tree _and_ the prefetch cache
        // _and_ the server response format, when conceptually those are three
        // different things and treated in different ways. We should encode more of
        // this information into the type design so mistakes are less likely.
        return currentSegment === (0, _segment.addSearchParamsIfPageSegment)(_segment.PAGE_SEGMENT_KEY, Object.fromEntries(new URLSearchParams(route.renderedSearch)));
    }
    // Non-page segments are compared using the same function as the server
    return (0, _matchsegments.matchSegment)(cachedSegment, currentSegment);
}
// -----------------------------------------------------------------------------
// The remainder of the module is a MinHeap implementation. Try not to put any
// logic below here unless it's related to the heap algorithm. We can extract
// this to a separate module if/when we need multiple kinds of heaps.
// -----------------------------------------------------------------------------
function compareQueuePriority(a, b) {
    // Since the queue is a MinHeap, this should return a positive number if b is
    // higher priority than a, and a negative number if a is higher priority
    // than b.
    // `priority` is an integer, where higher numbers are higher priority.
    const priorityDiff = b.priority - a.priority;
    if (priorityDiff !== 0) {
        return priorityDiff;
    }
    // If the priority is the same, check which phase the prefetch is in — is it
    // prefetching the route tree, or the segments? Route trees are prioritized.
    const phaseDiff = b.phase - a.phase;
    if (phaseDiff !== 0) {
        return phaseDiff;
    }
    // Finally, check the insertion order. `sortId` is an incrementing counter
    // assigned to prefetches. We want to process the newest prefetches first.
    return b.sortId - a.sortId;
}
function heapPush(heap, node) {
    const index = heap.length;
    heap.push(node);
    node._heapIndex = index;
    heapSiftUp(heap, node, index);
}
function heapPeek(heap) {
    return heap.length === 0 ? null : heap[0];
}
function heapPop(heap) {
    if (heap.length === 0) {
        return null;
    }
    const first = heap[0];
    first._heapIndex = -1;
    const last = heap.pop();
    if (last !== first) {
        heap[0] = last;
        last._heapIndex = 0;
        heapSiftDown(heap, last, 0);
    }
    return first;
}
function heapDelete(heap, node) {
    const index = node._heapIndex;
    if (index !== -1) {
        node._heapIndex = -1;
        if (heap.length !== 0) {
            const last = heap.pop();
            if (last !== node) {
                heap[index] = last;
                last._heapIndex = index;
                heapSiftDown(heap, last, index);
            }
        }
    }
}
function heapResift(heap, node) {
    const index = node._heapIndex;
    if (index !== -1) {
        if (index === 0) {
            heapSiftDown(heap, node, 0);
        } else {
            const parentIndex = index - 1 >>> 1;
            const parent = heap[parentIndex];
            if (compareQueuePriority(parent, node) > 0) {
                // The parent is larger. Sift up.
                heapSiftUp(heap, node, index);
            } else {
                // The parent is smaller (or equal). Sift down.
                heapSiftDown(heap, node, index);
            }
        }
    }
}
function heapSiftUp(heap, node, i) {
    let index = i;
    while(index > 0){
        const parentIndex = index - 1 >>> 1;
        const parent = heap[parentIndex];
        if (compareQueuePriority(parent, node) > 0) {
            // The parent is larger. Swap positions.
            heap[parentIndex] = node;
            node._heapIndex = parentIndex;
            heap[index] = parent;
            parent._heapIndex = index;
            index = parentIndex;
        } else {
            // The parent is smaller. Exit.
            return;
        }
    }
}
function heapSiftDown(heap, node, i) {
    let index = i;
    const length = heap.length;
    const halfLength = length >>> 1;
    while(index < halfLength){
        const leftIndex = (index + 1) * 2 - 1;
        const left = heap[leftIndex];
        const rightIndex = leftIndex + 1;
        const right = heap[rightIndex];
        // If the left or right node is smaller, swap with the smaller of those.
        if (compareQueuePriority(left, node) < 0) {
            if (rightIndex < length && compareQueuePriority(right, left) < 0) {
                heap[index] = right;
                right._heapIndex = index;
                heap[rightIndex] = node;
                node._heapIndex = rightIndex;
                index = rightIndex;
            } else {
                heap[index] = left;
                left._heapIndex = index;
                heap[leftIndex] = node;
                node._heapIndex = leftIndex;
                index = leftIndex;
            }
        } else if (rightIndex < length && compareQueuePriority(right, node) < 0) {
            heap[index] = right;
            right._heapIndex = index;
            heap[rightIndex] = node;
            node._heapIndex = rightIndex;
            index = rightIndex;
        } else {
            // Neither child is smaller. Exit.
            return;
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/links.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    IDLE_LINK_STATUS: null,
    PENDING_LINK_STATUS: null,
    mountFormInstance: null,
    mountLinkInstance: null,
    onLinkVisibilityChanged: null,
    onNavigationIntent: null,
    pingVisibleLinks: null,
    setLinkForCurrentNavigation: null,
    unmountLinkForCurrentNavigation: null,
    unmountPrefetchableInstance: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    IDLE_LINK_STATUS: function() {
        return IDLE_LINK_STATUS;
    },
    PENDING_LINK_STATUS: function() {
        return PENDING_LINK_STATUS;
    },
    mountFormInstance: function() {
        return mountFormInstance;
    },
    mountLinkInstance: function() {
        return mountLinkInstance;
    },
    onLinkVisibilityChanged: function() {
        return onLinkVisibilityChanged;
    },
    onNavigationIntent: function() {
        return onNavigationIntent;
    },
    pingVisibleLinks: function() {
        return pingVisibleLinks;
    },
    setLinkForCurrentNavigation: function() {
        return setLinkForCurrentNavigation;
    },
    unmountLinkForCurrentNavigation: function() {
        return unmountLinkForCurrentNavigation;
    },
    unmountPrefetchableInstance: function() {
        return unmountPrefetchableInstance;
    }
});
const _types = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-ssr] (ecmascript)");
const _react = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Tracks the most recently navigated link instance. When null, indicates
// the current navigation was not initiated by a link click.
let linkForMostRecentNavigation = null;
const PENDING_LINK_STATUS = {
    pending: true
};
const IDLE_LINK_STATUS = {
    pending: false
};
function setLinkForCurrentNavigation(link) {
    (0, _react.startTransition)(()=>{
        linkForMostRecentNavigation?.setOptimisticLinkStatus(IDLE_LINK_STATUS);
        link?.setOptimisticLinkStatus(PENDING_LINK_STATUS);
        linkForMostRecentNavigation = link;
    });
}
function unmountLinkForCurrentNavigation(link) {
    if (linkForMostRecentNavigation === link) {
        linkForMostRecentNavigation = null;
    }
}
// Use a WeakMap to associate a Link instance with its DOM element. This is
// used by the IntersectionObserver to track the link's visibility.
const prefetchable = typeof WeakMap === 'function' ? new WeakMap() : new Map();
// A Set of the currently visible links. We re-prefetch visible links after a
// cache invalidation, or when the current URL changes. It's a separate data
// structure from the WeakMap above because only the visible links need to
// be enumerated.
const prefetchableAndVisible = new Set();
// A single IntersectionObserver instance shared by all <Link> components.
const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(handleIntersect, {
    rootMargin: '200px'
}) : null;
function observeVisibility(element, instance) {
    const existingInstance = prefetchable.get(element);
    if (existingInstance !== undefined) {
        // This shouldn't happen because each <Link> component should have its own
        // anchor tag instance, but it's defensive coding to avoid a memory leak in
        // case there's a logical error somewhere else.
        unmountPrefetchableInstance(element);
    }
    // Only track prefetchable links that have a valid prefetch URL
    prefetchable.set(element, instance);
    if (observer !== null) {
        observer.observe(element);
    }
}
function coercePrefetchableUrl(href) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return null;
    }
}
function mountLinkInstance(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus) {
    if (prefetchEnabled) {
        const prefetchURL = coercePrefetchableUrl(href);
        if (prefetchURL !== null) {
            const instance = {
                router,
                fetchStrategy,
                isVisible: false,
                prefetchTask: null,
                prefetchHref: prefetchURL.href,
                setOptimisticLinkStatus
            };
            // We only observe the link's visibility if it's prefetchable. For
            // example, this excludes links to external URLs.
            observeVisibility(element, instance);
            return instance;
        }
    }
    // If the link is not prefetchable, we still create an instance so we can
    // track its optimistic state (i.e. useLinkStatus).
    const instance = {
        router,
        fetchStrategy,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: null,
        setOptimisticLinkStatus
    };
    return instance;
}
function mountFormInstance(element, href, router, fetchStrategy) {
    const prefetchURL = coercePrefetchableUrl(href);
    if (prefetchURL === null) {
        // This href is not prefetchable, so we don't track it.
        // TODO: We currently observe/unobserve a form every time its href changes.
        // For Links, this isn't a big deal because the href doesn't usually change,
        // but for forms it's extremely common. We should optimize this.
        return;
    }
    const instance = {
        router,
        fetchStrategy,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: prefetchURL.href,
        setOptimisticLinkStatus: null
    };
    observeVisibility(element, instance);
}
function unmountPrefetchableInstance(element) {
    const instance = prefetchable.get(element);
    if (instance !== undefined) {
        prefetchable.delete(element);
        prefetchableAndVisible.delete(instance);
        const prefetchTask = instance.prefetchTask;
        if (prefetchTask !== null) {
            (0, _scheduler.cancelPrefetchTask)(prefetchTask);
        }
    }
    if (observer !== null) {
        observer.unobserve(element);
    }
}
function handleIntersect(entries) {
    for (const entry of entries){
        // Some extremely old browsers or polyfills don't reliably support
        // isIntersecting so we check intersectionRatio instead. (Do we care? Not
        // really. But whatever this is fine.)
        const isVisible = entry.intersectionRatio > 0;
        onLinkVisibilityChanged(entry.target, isVisible);
    }
}
function onLinkVisibilityChanged(element, isVisible) {
    if ("TURBOPACK compile-time truthy", 1) {
        // Prefetching on viewport is disabled in development for performance
        // reasons, because it requires compiling the target page.
        // TODO: Investigate re-enabling this.
        return;
    }
    //TURBOPACK unreachable
    ;
    const instance = undefined;
}
function onNavigationIntent(element, unstable_upgradeToDynamicPrefetch) {
    const instance = prefetchable.get(element);
    if (instance === undefined) {
        return;
    }
    // Prefetch the link on hover/touchstart.
    if (instance !== undefined) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        rescheduleLinkPrefetch(instance, _types.PrefetchPriority.Intent);
    }
}
function rescheduleLinkPrefetch(instance, priority) {
    // Ensures that app-router-instance is not compiled in the server bundle
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function pingVisibleLinks(nextUrl, tree) {
    // For each currently visible link, cancel the existing prefetch task (if it
    // exists) and schedule a new one. This is effectively the same as if all the
    // visible links left and then re-entered the viewport.
    //
    // This is called when the Next-Url or the base tree changes, since those
    // may affect the result of a prefetch task. It's also called after a
    // cache invalidation.
    for (const instance of prefetchableAndVisible){
        const task = instance.prefetchTask;
        if (task !== null && !(0, _scheduler.isPrefetchTaskDirty)(task, nextUrl, tree)) {
            continue;
        }
        // Something changed. Cancel the existing prefetch task and schedule a
        // new one.
        if (task !== null) {
            (0, _scheduler.cancelPrefetchTask)(task);
        }
        const cacheKey = (0, _cachekey.createCacheKey)(instance.prefetchHref, nextUrl);
        instance.prefetchTask = (0, _scheduler.schedulePrefetchTask)(cacheKey, tree, instance.fetchStrategy, _types.PrefetchPriority.Default, null);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=links.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pathHasPrefix", {
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
});
const _parsepath = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-ssr] (ecmascript)");
function pathHasPrefix(path, prefix) {
    if (typeof path !== 'string') {
        return false;
    }
    const { pathname } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + '/');
} //# sourceMappingURL=path-has-prefix.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/has-base-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasBasePath", {
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
});
const _pathhasprefix = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-ssr] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/utils.js [app-ssr] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/has-base-path.js [app-ssr] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/utils/error-once.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-ssr] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/use-merged-ref.js [app-ssr] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/utils.js [app-ssr] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/add-base-path.js [app-ssr] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/links.js [app-ssr] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-ssr] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/shared/lib/utils/error-once.js [app-ssr] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo(()=>{
        const resolvedHref = formatStringOrUrl(hrefProp);
        return {
            href: resolvedHref,
            as: asProp ? formatStringOrUrl(asProp) : resolvedHref
        };
    }, [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback((element)=>{
        if (router !== null) {
            linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
        }
        return ()=>{
            if (linkInstanceRef.current) {
                (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                linkInstanceRef.current = null;
            }
            (0, _links.unmountPrefetchableInstance)(element);
        };
    }, [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/react-icons/lib/iconContext.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefaultContext",
    ()=>DefaultContext,
    "IconContext",
    ()=>IconContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined
};
var IconContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(DefaultContext);
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/react-icons/lib/iconBase.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GenIcon",
    ()=>GenIcon,
    "IconBase",
    ()=>IconBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/react-icons/lib/iconContext.mjs [app-ssr] (ecmascript)");
var _excluded = [
    "attr",
    "size",
    "title"
];
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source){
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
function Tree2Element(tree) {
    return tree && tree.map((node, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(node.tag, _objectSpread({
            key: i
        }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
    return (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(IconBase, _extends({
            attr: _objectSpread({}, data.attr)
        }, props), Tree2Element(data.child));
}
function IconBase(props) {
    var elem = (conf)=>{
        var { attr, size, title } = props, svgProps = _objectWithoutProperties(props, _excluded);
        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className) className = conf.className;
        if (props.className) className = (className ? className + " " : "") + props.className;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, conf.attr, attr, svgProps, {
            className: className,
            style: _objectSpread(_objectSpread({
                color: props.color || conf.color
            }, conf.style), props.style),
            height: computedSize,
            width: computedSize,
            xmlns: "http://www.w3.org/2000/svg"
        }), title && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title), props.children);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconContext"] !== undefined ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconContext"].Consumer, null, (conf)=>elem(conf)) : elem(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultContext"]);
}
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HiAcademicCap",
    ()=>HiAcademicCap,
    "HiAdjustments",
    ()=>HiAdjustments,
    "HiAnnotation",
    ()=>HiAnnotation,
    "HiArchive",
    ()=>HiArchive,
    "HiArrowCircleDown",
    ()=>HiArrowCircleDown,
    "HiArrowCircleLeft",
    ()=>HiArrowCircleLeft,
    "HiArrowCircleRight",
    ()=>HiArrowCircleRight,
    "HiArrowCircleUp",
    ()=>HiArrowCircleUp,
    "HiArrowDown",
    ()=>HiArrowDown,
    "HiArrowLeft",
    ()=>HiArrowLeft,
    "HiArrowNarrowDown",
    ()=>HiArrowNarrowDown,
    "HiArrowNarrowLeft",
    ()=>HiArrowNarrowLeft,
    "HiArrowNarrowRight",
    ()=>HiArrowNarrowRight,
    "HiArrowNarrowUp",
    ()=>HiArrowNarrowUp,
    "HiArrowRight",
    ()=>HiArrowRight,
    "HiArrowSmDown",
    ()=>HiArrowSmDown,
    "HiArrowSmLeft",
    ()=>HiArrowSmLeft,
    "HiArrowSmRight",
    ()=>HiArrowSmRight,
    "HiArrowSmUp",
    ()=>HiArrowSmUp,
    "HiArrowUp",
    ()=>HiArrowUp,
    "HiArrowsExpand",
    ()=>HiArrowsExpand,
    "HiAtSymbol",
    ()=>HiAtSymbol,
    "HiBackspace",
    ()=>HiBackspace,
    "HiBadgeCheck",
    ()=>HiBadgeCheck,
    "HiBan",
    ()=>HiBan,
    "HiBeaker",
    ()=>HiBeaker,
    "HiBell",
    ()=>HiBell,
    "HiBookOpen",
    ()=>HiBookOpen,
    "HiBookmark",
    ()=>HiBookmark,
    "HiBookmarkAlt",
    ()=>HiBookmarkAlt,
    "HiBriefcase",
    ()=>HiBriefcase,
    "HiCake",
    ()=>HiCake,
    "HiCalculator",
    ()=>HiCalculator,
    "HiCalendar",
    ()=>HiCalendar,
    "HiCamera",
    ()=>HiCamera,
    "HiCash",
    ()=>HiCash,
    "HiChartBar",
    ()=>HiChartBar,
    "HiChartPie",
    ()=>HiChartPie,
    "HiChartSquareBar",
    ()=>HiChartSquareBar,
    "HiChat",
    ()=>HiChat,
    "HiChatAlt",
    ()=>HiChatAlt,
    "HiChatAlt2",
    ()=>HiChatAlt2,
    "HiCheck",
    ()=>HiCheck,
    "HiCheckCircle",
    ()=>HiCheckCircle,
    "HiChevronDoubleDown",
    ()=>HiChevronDoubleDown,
    "HiChevronDoubleLeft",
    ()=>HiChevronDoubleLeft,
    "HiChevronDoubleRight",
    ()=>HiChevronDoubleRight,
    "HiChevronDoubleUp",
    ()=>HiChevronDoubleUp,
    "HiChevronDown",
    ()=>HiChevronDown,
    "HiChevronLeft",
    ()=>HiChevronLeft,
    "HiChevronRight",
    ()=>HiChevronRight,
    "HiChevronUp",
    ()=>HiChevronUp,
    "HiChip",
    ()=>HiChip,
    "HiClipboard",
    ()=>HiClipboard,
    "HiClipboardCheck",
    ()=>HiClipboardCheck,
    "HiClipboardCopy",
    ()=>HiClipboardCopy,
    "HiClipboardList",
    ()=>HiClipboardList,
    "HiClock",
    ()=>HiClock,
    "HiCloud",
    ()=>HiCloud,
    "HiCloudDownload",
    ()=>HiCloudDownload,
    "HiCloudUpload",
    ()=>HiCloudUpload,
    "HiCode",
    ()=>HiCode,
    "HiCog",
    ()=>HiCog,
    "HiCollection",
    ()=>HiCollection,
    "HiColorSwatch",
    ()=>HiColorSwatch,
    "HiCreditCard",
    ()=>HiCreditCard,
    "HiCube",
    ()=>HiCube,
    "HiCubeTransparent",
    ()=>HiCubeTransparent,
    "HiCurrencyBangladeshi",
    ()=>HiCurrencyBangladeshi,
    "HiCurrencyDollar",
    ()=>HiCurrencyDollar,
    "HiCurrencyEuro",
    ()=>HiCurrencyEuro,
    "HiCurrencyPound",
    ()=>HiCurrencyPound,
    "HiCurrencyRupee",
    ()=>HiCurrencyRupee,
    "HiCurrencyYen",
    ()=>HiCurrencyYen,
    "HiCursorClick",
    ()=>HiCursorClick,
    "HiDatabase",
    ()=>HiDatabase,
    "HiDesktopComputer",
    ()=>HiDesktopComputer,
    "HiDeviceMobile",
    ()=>HiDeviceMobile,
    "HiDeviceTablet",
    ()=>HiDeviceTablet,
    "HiDocument",
    ()=>HiDocument,
    "HiDocumentAdd",
    ()=>HiDocumentAdd,
    "HiDocumentDownload",
    ()=>HiDocumentDownload,
    "HiDocumentDuplicate",
    ()=>HiDocumentDuplicate,
    "HiDocumentRemove",
    ()=>HiDocumentRemove,
    "HiDocumentReport",
    ()=>HiDocumentReport,
    "HiDocumentSearch",
    ()=>HiDocumentSearch,
    "HiDocumentText",
    ()=>HiDocumentText,
    "HiDotsCircleHorizontal",
    ()=>HiDotsCircleHorizontal,
    "HiDotsHorizontal",
    ()=>HiDotsHorizontal,
    "HiDotsVertical",
    ()=>HiDotsVertical,
    "HiDownload",
    ()=>HiDownload,
    "HiDuplicate",
    ()=>HiDuplicate,
    "HiEmojiHappy",
    ()=>HiEmojiHappy,
    "HiEmojiSad",
    ()=>HiEmojiSad,
    "HiExclamation",
    ()=>HiExclamation,
    "HiExclamationCircle",
    ()=>HiExclamationCircle,
    "HiExternalLink",
    ()=>HiExternalLink,
    "HiEye",
    ()=>HiEye,
    "HiEyeOff",
    ()=>HiEyeOff,
    "HiFastForward",
    ()=>HiFastForward,
    "HiFilm",
    ()=>HiFilm,
    "HiFilter",
    ()=>HiFilter,
    "HiFingerPrint",
    ()=>HiFingerPrint,
    "HiFire",
    ()=>HiFire,
    "HiFlag",
    ()=>HiFlag,
    "HiFolder",
    ()=>HiFolder,
    "HiFolderAdd",
    ()=>HiFolderAdd,
    "HiFolderDownload",
    ()=>HiFolderDownload,
    "HiFolderOpen",
    ()=>HiFolderOpen,
    "HiFolderRemove",
    ()=>HiFolderRemove,
    "HiGift",
    ()=>HiGift,
    "HiGlobe",
    ()=>HiGlobe,
    "HiGlobeAlt",
    ()=>HiGlobeAlt,
    "HiHand",
    ()=>HiHand,
    "HiHashtag",
    ()=>HiHashtag,
    "HiHeart",
    ()=>HiHeart,
    "HiHome",
    ()=>HiHome,
    "HiIdentification",
    ()=>HiIdentification,
    "HiInbox",
    ()=>HiInbox,
    "HiInboxIn",
    ()=>HiInboxIn,
    "HiInformationCircle",
    ()=>HiInformationCircle,
    "HiKey",
    ()=>HiKey,
    "HiLibrary",
    ()=>HiLibrary,
    "HiLightBulb",
    ()=>HiLightBulb,
    "HiLightningBolt",
    ()=>HiLightningBolt,
    "HiLink",
    ()=>HiLink,
    "HiLocationMarker",
    ()=>HiLocationMarker,
    "HiLockClosed",
    ()=>HiLockClosed,
    "HiLockOpen",
    ()=>HiLockOpen,
    "HiLogin",
    ()=>HiLogin,
    "HiLogout",
    ()=>HiLogout,
    "HiMail",
    ()=>HiMail,
    "HiMailOpen",
    ()=>HiMailOpen,
    "HiMap",
    ()=>HiMap,
    "HiMenu",
    ()=>HiMenu,
    "HiMenuAlt1",
    ()=>HiMenuAlt1,
    "HiMenuAlt2",
    ()=>HiMenuAlt2,
    "HiMenuAlt3",
    ()=>HiMenuAlt3,
    "HiMenuAlt4",
    ()=>HiMenuAlt4,
    "HiMicrophone",
    ()=>HiMicrophone,
    "HiMinus",
    ()=>HiMinus,
    "HiMinusCircle",
    ()=>HiMinusCircle,
    "HiMinusSm",
    ()=>HiMinusSm,
    "HiMoon",
    ()=>HiMoon,
    "HiMusicNote",
    ()=>HiMusicNote,
    "HiNewspaper",
    ()=>HiNewspaper,
    "HiOfficeBuilding",
    ()=>HiOfficeBuilding,
    "HiOutlineAcademicCap",
    ()=>HiOutlineAcademicCap,
    "HiOutlineAdjustments",
    ()=>HiOutlineAdjustments,
    "HiOutlineAnnotation",
    ()=>HiOutlineAnnotation,
    "HiOutlineArchive",
    ()=>HiOutlineArchive,
    "HiOutlineArrowCircleDown",
    ()=>HiOutlineArrowCircleDown,
    "HiOutlineArrowCircleLeft",
    ()=>HiOutlineArrowCircleLeft,
    "HiOutlineArrowCircleRight",
    ()=>HiOutlineArrowCircleRight,
    "HiOutlineArrowCircleUp",
    ()=>HiOutlineArrowCircleUp,
    "HiOutlineArrowDown",
    ()=>HiOutlineArrowDown,
    "HiOutlineArrowLeft",
    ()=>HiOutlineArrowLeft,
    "HiOutlineArrowNarrowDown",
    ()=>HiOutlineArrowNarrowDown,
    "HiOutlineArrowNarrowLeft",
    ()=>HiOutlineArrowNarrowLeft,
    "HiOutlineArrowNarrowRight",
    ()=>HiOutlineArrowNarrowRight,
    "HiOutlineArrowNarrowUp",
    ()=>HiOutlineArrowNarrowUp,
    "HiOutlineArrowRight",
    ()=>HiOutlineArrowRight,
    "HiOutlineArrowSmDown",
    ()=>HiOutlineArrowSmDown,
    "HiOutlineArrowSmLeft",
    ()=>HiOutlineArrowSmLeft,
    "HiOutlineArrowSmRight",
    ()=>HiOutlineArrowSmRight,
    "HiOutlineArrowSmUp",
    ()=>HiOutlineArrowSmUp,
    "HiOutlineArrowUp",
    ()=>HiOutlineArrowUp,
    "HiOutlineArrowsExpand",
    ()=>HiOutlineArrowsExpand,
    "HiOutlineAtSymbol",
    ()=>HiOutlineAtSymbol,
    "HiOutlineBackspace",
    ()=>HiOutlineBackspace,
    "HiOutlineBadgeCheck",
    ()=>HiOutlineBadgeCheck,
    "HiOutlineBan",
    ()=>HiOutlineBan,
    "HiOutlineBeaker",
    ()=>HiOutlineBeaker,
    "HiOutlineBell",
    ()=>HiOutlineBell,
    "HiOutlineBookOpen",
    ()=>HiOutlineBookOpen,
    "HiOutlineBookmark",
    ()=>HiOutlineBookmark,
    "HiOutlineBookmarkAlt",
    ()=>HiOutlineBookmarkAlt,
    "HiOutlineBriefcase",
    ()=>HiOutlineBriefcase,
    "HiOutlineCake",
    ()=>HiOutlineCake,
    "HiOutlineCalculator",
    ()=>HiOutlineCalculator,
    "HiOutlineCalendar",
    ()=>HiOutlineCalendar,
    "HiOutlineCamera",
    ()=>HiOutlineCamera,
    "HiOutlineCash",
    ()=>HiOutlineCash,
    "HiOutlineChartBar",
    ()=>HiOutlineChartBar,
    "HiOutlineChartPie",
    ()=>HiOutlineChartPie,
    "HiOutlineChartSquareBar",
    ()=>HiOutlineChartSquareBar,
    "HiOutlineChat",
    ()=>HiOutlineChat,
    "HiOutlineChatAlt",
    ()=>HiOutlineChatAlt,
    "HiOutlineChatAlt2",
    ()=>HiOutlineChatAlt2,
    "HiOutlineCheck",
    ()=>HiOutlineCheck,
    "HiOutlineCheckCircle",
    ()=>HiOutlineCheckCircle,
    "HiOutlineChevronDoubleDown",
    ()=>HiOutlineChevronDoubleDown,
    "HiOutlineChevronDoubleLeft",
    ()=>HiOutlineChevronDoubleLeft,
    "HiOutlineChevronDoubleRight",
    ()=>HiOutlineChevronDoubleRight,
    "HiOutlineChevronDoubleUp",
    ()=>HiOutlineChevronDoubleUp,
    "HiOutlineChevronDown",
    ()=>HiOutlineChevronDown,
    "HiOutlineChevronLeft",
    ()=>HiOutlineChevronLeft,
    "HiOutlineChevronRight",
    ()=>HiOutlineChevronRight,
    "HiOutlineChevronUp",
    ()=>HiOutlineChevronUp,
    "HiOutlineChip",
    ()=>HiOutlineChip,
    "HiOutlineClipboard",
    ()=>HiOutlineClipboard,
    "HiOutlineClipboardCheck",
    ()=>HiOutlineClipboardCheck,
    "HiOutlineClipboardCopy",
    ()=>HiOutlineClipboardCopy,
    "HiOutlineClipboardList",
    ()=>HiOutlineClipboardList,
    "HiOutlineClock",
    ()=>HiOutlineClock,
    "HiOutlineCloud",
    ()=>HiOutlineCloud,
    "HiOutlineCloudDownload",
    ()=>HiOutlineCloudDownload,
    "HiOutlineCloudUpload",
    ()=>HiOutlineCloudUpload,
    "HiOutlineCode",
    ()=>HiOutlineCode,
    "HiOutlineCog",
    ()=>HiOutlineCog,
    "HiOutlineCollection",
    ()=>HiOutlineCollection,
    "HiOutlineColorSwatch",
    ()=>HiOutlineColorSwatch,
    "HiOutlineCreditCard",
    ()=>HiOutlineCreditCard,
    "HiOutlineCube",
    ()=>HiOutlineCube,
    "HiOutlineCubeTransparent",
    ()=>HiOutlineCubeTransparent,
    "HiOutlineCurrencyBangladeshi",
    ()=>HiOutlineCurrencyBangladeshi,
    "HiOutlineCurrencyDollar",
    ()=>HiOutlineCurrencyDollar,
    "HiOutlineCurrencyEuro",
    ()=>HiOutlineCurrencyEuro,
    "HiOutlineCurrencyPound",
    ()=>HiOutlineCurrencyPound,
    "HiOutlineCurrencyRupee",
    ()=>HiOutlineCurrencyRupee,
    "HiOutlineCurrencyYen",
    ()=>HiOutlineCurrencyYen,
    "HiOutlineCursorClick",
    ()=>HiOutlineCursorClick,
    "HiOutlineDatabase",
    ()=>HiOutlineDatabase,
    "HiOutlineDesktopComputer",
    ()=>HiOutlineDesktopComputer,
    "HiOutlineDeviceMobile",
    ()=>HiOutlineDeviceMobile,
    "HiOutlineDeviceTablet",
    ()=>HiOutlineDeviceTablet,
    "HiOutlineDocument",
    ()=>HiOutlineDocument,
    "HiOutlineDocumentAdd",
    ()=>HiOutlineDocumentAdd,
    "HiOutlineDocumentDownload",
    ()=>HiOutlineDocumentDownload,
    "HiOutlineDocumentDuplicate",
    ()=>HiOutlineDocumentDuplicate,
    "HiOutlineDocumentRemove",
    ()=>HiOutlineDocumentRemove,
    "HiOutlineDocumentReport",
    ()=>HiOutlineDocumentReport,
    "HiOutlineDocumentSearch",
    ()=>HiOutlineDocumentSearch,
    "HiOutlineDocumentText",
    ()=>HiOutlineDocumentText,
    "HiOutlineDotsCircleHorizontal",
    ()=>HiOutlineDotsCircleHorizontal,
    "HiOutlineDotsHorizontal",
    ()=>HiOutlineDotsHorizontal,
    "HiOutlineDotsVertical",
    ()=>HiOutlineDotsVertical,
    "HiOutlineDownload",
    ()=>HiOutlineDownload,
    "HiOutlineDuplicate",
    ()=>HiOutlineDuplicate,
    "HiOutlineEmojiHappy",
    ()=>HiOutlineEmojiHappy,
    "HiOutlineEmojiSad",
    ()=>HiOutlineEmojiSad,
    "HiOutlineExclamation",
    ()=>HiOutlineExclamation,
    "HiOutlineExclamationCircle",
    ()=>HiOutlineExclamationCircle,
    "HiOutlineExternalLink",
    ()=>HiOutlineExternalLink,
    "HiOutlineEye",
    ()=>HiOutlineEye,
    "HiOutlineEyeOff",
    ()=>HiOutlineEyeOff,
    "HiOutlineFastForward",
    ()=>HiOutlineFastForward,
    "HiOutlineFilm",
    ()=>HiOutlineFilm,
    "HiOutlineFilter",
    ()=>HiOutlineFilter,
    "HiOutlineFingerPrint",
    ()=>HiOutlineFingerPrint,
    "HiOutlineFire",
    ()=>HiOutlineFire,
    "HiOutlineFlag",
    ()=>HiOutlineFlag,
    "HiOutlineFolder",
    ()=>HiOutlineFolder,
    "HiOutlineFolderAdd",
    ()=>HiOutlineFolderAdd,
    "HiOutlineFolderDownload",
    ()=>HiOutlineFolderDownload,
    "HiOutlineFolderOpen",
    ()=>HiOutlineFolderOpen,
    "HiOutlineFolderRemove",
    ()=>HiOutlineFolderRemove,
    "HiOutlineGift",
    ()=>HiOutlineGift,
    "HiOutlineGlobe",
    ()=>HiOutlineGlobe,
    "HiOutlineGlobeAlt",
    ()=>HiOutlineGlobeAlt,
    "HiOutlineHand",
    ()=>HiOutlineHand,
    "HiOutlineHashtag",
    ()=>HiOutlineHashtag,
    "HiOutlineHeart",
    ()=>HiOutlineHeart,
    "HiOutlineHome",
    ()=>HiOutlineHome,
    "HiOutlineIdentification",
    ()=>HiOutlineIdentification,
    "HiOutlineInbox",
    ()=>HiOutlineInbox,
    "HiOutlineInboxIn",
    ()=>HiOutlineInboxIn,
    "HiOutlineInformationCircle",
    ()=>HiOutlineInformationCircle,
    "HiOutlineKey",
    ()=>HiOutlineKey,
    "HiOutlineLibrary",
    ()=>HiOutlineLibrary,
    "HiOutlineLightBulb",
    ()=>HiOutlineLightBulb,
    "HiOutlineLightningBolt",
    ()=>HiOutlineLightningBolt,
    "HiOutlineLink",
    ()=>HiOutlineLink,
    "HiOutlineLocationMarker",
    ()=>HiOutlineLocationMarker,
    "HiOutlineLockClosed",
    ()=>HiOutlineLockClosed,
    "HiOutlineLockOpen",
    ()=>HiOutlineLockOpen,
    "HiOutlineLogin",
    ()=>HiOutlineLogin,
    "HiOutlineLogout",
    ()=>HiOutlineLogout,
    "HiOutlineMail",
    ()=>HiOutlineMail,
    "HiOutlineMailOpen",
    ()=>HiOutlineMailOpen,
    "HiOutlineMap",
    ()=>HiOutlineMap,
    "HiOutlineMenu",
    ()=>HiOutlineMenu,
    "HiOutlineMenuAlt1",
    ()=>HiOutlineMenuAlt1,
    "HiOutlineMenuAlt2",
    ()=>HiOutlineMenuAlt2,
    "HiOutlineMenuAlt3",
    ()=>HiOutlineMenuAlt3,
    "HiOutlineMenuAlt4",
    ()=>HiOutlineMenuAlt4,
    "HiOutlineMicrophone",
    ()=>HiOutlineMicrophone,
    "HiOutlineMinus",
    ()=>HiOutlineMinus,
    "HiOutlineMinusCircle",
    ()=>HiOutlineMinusCircle,
    "HiOutlineMinusSm",
    ()=>HiOutlineMinusSm,
    "HiOutlineMoon",
    ()=>HiOutlineMoon,
    "HiOutlineMusicNote",
    ()=>HiOutlineMusicNote,
    "HiOutlineNewspaper",
    ()=>HiOutlineNewspaper,
    "HiOutlineOfficeBuilding",
    ()=>HiOutlineOfficeBuilding,
    "HiOutlinePaperAirplane",
    ()=>HiOutlinePaperAirplane,
    "HiOutlinePaperClip",
    ()=>HiOutlinePaperClip,
    "HiOutlinePause",
    ()=>HiOutlinePause,
    "HiOutlinePencil",
    ()=>HiOutlinePencil,
    "HiOutlinePencilAlt",
    ()=>HiOutlinePencilAlt,
    "HiOutlinePhone",
    ()=>HiOutlinePhone,
    "HiOutlinePhoneIncoming",
    ()=>HiOutlinePhoneIncoming,
    "HiOutlinePhoneMissedCall",
    ()=>HiOutlinePhoneMissedCall,
    "HiOutlinePhoneOutgoing",
    ()=>HiOutlinePhoneOutgoing,
    "HiOutlinePhotograph",
    ()=>HiOutlinePhotograph,
    "HiOutlinePlay",
    ()=>HiOutlinePlay,
    "HiOutlinePlus",
    ()=>HiOutlinePlus,
    "HiOutlinePlusCircle",
    ()=>HiOutlinePlusCircle,
    "HiOutlinePlusSm",
    ()=>HiOutlinePlusSm,
    "HiOutlinePresentationChartBar",
    ()=>HiOutlinePresentationChartBar,
    "HiOutlinePresentationChartLine",
    ()=>HiOutlinePresentationChartLine,
    "HiOutlinePrinter",
    ()=>HiOutlinePrinter,
    "HiOutlinePuzzle",
    ()=>HiOutlinePuzzle,
    "HiOutlineQrcode",
    ()=>HiOutlineQrcode,
    "HiOutlineQuestionMarkCircle",
    ()=>HiOutlineQuestionMarkCircle,
    "HiOutlineReceiptRefund",
    ()=>HiOutlineReceiptRefund,
    "HiOutlineReceiptTax",
    ()=>HiOutlineReceiptTax,
    "HiOutlineRefresh",
    ()=>HiOutlineRefresh,
    "HiOutlineReply",
    ()=>HiOutlineReply,
    "HiOutlineRewind",
    ()=>HiOutlineRewind,
    "HiOutlineRss",
    ()=>HiOutlineRss,
    "HiOutlineSave",
    ()=>HiOutlineSave,
    "HiOutlineSaveAs",
    ()=>HiOutlineSaveAs,
    "HiOutlineScale",
    ()=>HiOutlineScale,
    "HiOutlineScissors",
    ()=>HiOutlineScissors,
    "HiOutlineSearch",
    ()=>HiOutlineSearch,
    "HiOutlineSearchCircle",
    ()=>HiOutlineSearchCircle,
    "HiOutlineSelector",
    ()=>HiOutlineSelector,
    "HiOutlineServer",
    ()=>HiOutlineServer,
    "HiOutlineShare",
    ()=>HiOutlineShare,
    "HiOutlineShieldCheck",
    ()=>HiOutlineShieldCheck,
    "HiOutlineShieldExclamation",
    ()=>HiOutlineShieldExclamation,
    "HiOutlineShoppingBag",
    ()=>HiOutlineShoppingBag,
    "HiOutlineShoppingCart",
    ()=>HiOutlineShoppingCart,
    "HiOutlineSortAscending",
    ()=>HiOutlineSortAscending,
    "HiOutlineSortDescending",
    ()=>HiOutlineSortDescending,
    "HiOutlineSparkles",
    ()=>HiOutlineSparkles,
    "HiOutlineSpeakerphone",
    ()=>HiOutlineSpeakerphone,
    "HiOutlineStar",
    ()=>HiOutlineStar,
    "HiOutlineStatusOffline",
    ()=>HiOutlineStatusOffline,
    "HiOutlineStatusOnline",
    ()=>HiOutlineStatusOnline,
    "HiOutlineStop",
    ()=>HiOutlineStop,
    "HiOutlineSun",
    ()=>HiOutlineSun,
    "HiOutlineSupport",
    ()=>HiOutlineSupport,
    "HiOutlineSwitchHorizontal",
    ()=>HiOutlineSwitchHorizontal,
    "HiOutlineSwitchVertical",
    ()=>HiOutlineSwitchVertical,
    "HiOutlineTable",
    ()=>HiOutlineTable,
    "HiOutlineTag",
    ()=>HiOutlineTag,
    "HiOutlineTemplate",
    ()=>HiOutlineTemplate,
    "HiOutlineTerminal",
    ()=>HiOutlineTerminal,
    "HiOutlineThumbDown",
    ()=>HiOutlineThumbDown,
    "HiOutlineThumbUp",
    ()=>HiOutlineThumbUp,
    "HiOutlineTicket",
    ()=>HiOutlineTicket,
    "HiOutlineTranslate",
    ()=>HiOutlineTranslate,
    "HiOutlineTrash",
    ()=>HiOutlineTrash,
    "HiOutlineTrendingDown",
    ()=>HiOutlineTrendingDown,
    "HiOutlineTrendingUp",
    ()=>HiOutlineTrendingUp,
    "HiOutlineTruck",
    ()=>HiOutlineTruck,
    "HiOutlineUpload",
    ()=>HiOutlineUpload,
    "HiOutlineUser",
    ()=>HiOutlineUser,
    "HiOutlineUserAdd",
    ()=>HiOutlineUserAdd,
    "HiOutlineUserCircle",
    ()=>HiOutlineUserCircle,
    "HiOutlineUserGroup",
    ()=>HiOutlineUserGroup,
    "HiOutlineUserRemove",
    ()=>HiOutlineUserRemove,
    "HiOutlineUsers",
    ()=>HiOutlineUsers,
    "HiOutlineVariable",
    ()=>HiOutlineVariable,
    "HiOutlineVideoCamera",
    ()=>HiOutlineVideoCamera,
    "HiOutlineViewBoards",
    ()=>HiOutlineViewBoards,
    "HiOutlineViewGrid",
    ()=>HiOutlineViewGrid,
    "HiOutlineViewGridAdd",
    ()=>HiOutlineViewGridAdd,
    "HiOutlineViewList",
    ()=>HiOutlineViewList,
    "HiOutlineVolumeOff",
    ()=>HiOutlineVolumeOff,
    "HiOutlineVolumeUp",
    ()=>HiOutlineVolumeUp,
    "HiOutlineWifi",
    ()=>HiOutlineWifi,
    "HiOutlineX",
    ()=>HiOutlineX,
    "HiOutlineXCircle",
    ()=>HiOutlineXCircle,
    "HiOutlineZoomIn",
    ()=>HiOutlineZoomIn,
    "HiOutlineZoomOut",
    ()=>HiOutlineZoomOut,
    "HiPaperAirplane",
    ()=>HiPaperAirplane,
    "HiPaperClip",
    ()=>HiPaperClip,
    "HiPause",
    ()=>HiPause,
    "HiPencil",
    ()=>HiPencil,
    "HiPencilAlt",
    ()=>HiPencilAlt,
    "HiPhone",
    ()=>HiPhone,
    "HiPhoneIncoming",
    ()=>HiPhoneIncoming,
    "HiPhoneMissedCall",
    ()=>HiPhoneMissedCall,
    "HiPhoneOutgoing",
    ()=>HiPhoneOutgoing,
    "HiPhotograph",
    ()=>HiPhotograph,
    "HiPlay",
    ()=>HiPlay,
    "HiPlus",
    ()=>HiPlus,
    "HiPlusCircle",
    ()=>HiPlusCircle,
    "HiPlusSm",
    ()=>HiPlusSm,
    "HiPresentationChartBar",
    ()=>HiPresentationChartBar,
    "HiPresentationChartLine",
    ()=>HiPresentationChartLine,
    "HiPrinter",
    ()=>HiPrinter,
    "HiPuzzle",
    ()=>HiPuzzle,
    "HiQrcode",
    ()=>HiQrcode,
    "HiQuestionMarkCircle",
    ()=>HiQuestionMarkCircle,
    "HiReceiptRefund",
    ()=>HiReceiptRefund,
    "HiReceiptTax",
    ()=>HiReceiptTax,
    "HiRefresh",
    ()=>HiRefresh,
    "HiReply",
    ()=>HiReply,
    "HiRewind",
    ()=>HiRewind,
    "HiRss",
    ()=>HiRss,
    "HiSave",
    ()=>HiSave,
    "HiSaveAs",
    ()=>HiSaveAs,
    "HiScale",
    ()=>HiScale,
    "HiScissors",
    ()=>HiScissors,
    "HiSearch",
    ()=>HiSearch,
    "HiSearchCircle",
    ()=>HiSearchCircle,
    "HiSelector",
    ()=>HiSelector,
    "HiServer",
    ()=>HiServer,
    "HiShare",
    ()=>HiShare,
    "HiShieldCheck",
    ()=>HiShieldCheck,
    "HiShieldExclamation",
    ()=>HiShieldExclamation,
    "HiShoppingBag",
    ()=>HiShoppingBag,
    "HiShoppingCart",
    ()=>HiShoppingCart,
    "HiSortAscending",
    ()=>HiSortAscending,
    "HiSortDescending",
    ()=>HiSortDescending,
    "HiSparkles",
    ()=>HiSparkles,
    "HiSpeakerphone",
    ()=>HiSpeakerphone,
    "HiStar",
    ()=>HiStar,
    "HiStatusOffline",
    ()=>HiStatusOffline,
    "HiStatusOnline",
    ()=>HiStatusOnline,
    "HiStop",
    ()=>HiStop,
    "HiSun",
    ()=>HiSun,
    "HiSupport",
    ()=>HiSupport,
    "HiSwitchHorizontal",
    ()=>HiSwitchHorizontal,
    "HiSwitchVertical",
    ()=>HiSwitchVertical,
    "HiTable",
    ()=>HiTable,
    "HiTag",
    ()=>HiTag,
    "HiTemplate",
    ()=>HiTemplate,
    "HiTerminal",
    ()=>HiTerminal,
    "HiThumbDown",
    ()=>HiThumbDown,
    "HiThumbUp",
    ()=>HiThumbUp,
    "HiTicket",
    ()=>HiTicket,
    "HiTranslate",
    ()=>HiTranslate,
    "HiTrash",
    ()=>HiTrash,
    "HiTrendingDown",
    ()=>HiTrendingDown,
    "HiTrendingUp",
    ()=>HiTrendingUp,
    "HiTruck",
    ()=>HiTruck,
    "HiUpload",
    ()=>HiUpload,
    "HiUser",
    ()=>HiUser,
    "HiUserAdd",
    ()=>HiUserAdd,
    "HiUserCircle",
    ()=>HiUserCircle,
    "HiUserGroup",
    ()=>HiUserGroup,
    "HiUserRemove",
    ()=>HiUserRemove,
    "HiUsers",
    ()=>HiUsers,
    "HiVariable",
    ()=>HiVariable,
    "HiVideoCamera",
    ()=>HiVideoCamera,
    "HiViewBoards",
    ()=>HiViewBoards,
    "HiViewGrid",
    ()=>HiViewGrid,
    "HiViewGridAdd",
    ()=>HiViewGridAdd,
    "HiViewList",
    ()=>HiViewList,
    "HiVolumeOff",
    ()=>HiVolumeOff,
    "HiVolumeUp",
    ()=>HiVolumeUp,
    "HiWifi",
    ()=>HiWifi,
    "HiX",
    ()=>HiX,
    "HiXCircle",
    ()=>HiXCircle,
    "HiZoomIn",
    ()=>HiZoomIn,
    "HiZoomOut",
    ()=>HiZoomOut
]);
// THIS FILE IS AUTO GENERATED
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/react-icons/lib/iconBase.mjs [app-ssr] (ecmascript)");
;
function HiAcademicCap(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiAdjustments(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiAnnotation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArchive(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowCircleDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowCircleLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowCircleRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowCircleUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowNarrowDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowNarrowLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowNarrowRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowNarrowUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowSmDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowSmLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowSmRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowSmUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowsExpand(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiAtSymbol(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBackspace(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBadgeCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBan(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBeaker(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBell(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBookOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBookmarkAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBookmark(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBriefcase(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCake(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCalculator(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCalendar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCamera(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChartBar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChartPie(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChartSquareBar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChatAlt2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChatAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChat(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCheckCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronDoubleDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronDoubleLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronDoubleRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronDoubleUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChip(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M13 7H7v6h6V7z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiClipboardCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiClipboardCopy(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiClipboardList(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiClipboard(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiClock(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCloudDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCloudUpload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M9 13h2v5a1 1 0 11-2 0v-5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCloud(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCode(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCog(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCollection(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiColorSwatch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCreditCard(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCubeTransparent(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCube(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCurrencyBangladeshi(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCurrencyDollar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCurrencyEuro(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCurrencyPound(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCurrencyRupee(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCurrencyYen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCursorClick(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDatabase(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDesktopComputer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDeviceMobile(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDeviceTablet(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentDuplicate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentRemove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentReport(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentSearch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentText(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocument(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDotsCircleHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDotsHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDotsVertical(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDuplicate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiEmojiHappy(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiEmojiSad(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiExclamationCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiExclamation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiExternalLink(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiEyeOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiEye(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 12a2 2 0 100-4 2 2 0 000 4z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFastForward(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFilm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFilter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFingerPrint(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFire(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFlag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFolderAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFolderDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1.586l-.293-.293a1 1 0 10-1.414 1.414l2 2 .002.002a.997.997 0 001.41 0l.002-.002 2-2a1 1 0 00-1.414-1.414l-.293.293V9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFolderOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFolderRemove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm4 6a1 1 0 100 2h4a1 1 0 100-2H8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFolder(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiGift(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiGlobeAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiGlobe(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiHand(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiHashtag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiHeart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiHome(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiIdentification(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiInboxIn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiInbox(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiInformationCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiKey(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLibrary(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLightBulb(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLightningBolt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLink(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLocationMarker(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLockClosed(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLockOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLogin(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLogout(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMailOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMail(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMap(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMenuAlt1(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMenuAlt2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMenuAlt3(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMenuAlt4(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMenu(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMicrophone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMinusCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMinusSm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMinus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMoon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMusicNote(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiNewspaper(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOfficeBuilding(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPaperAirplane(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPaperClip(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPause(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPencilAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPencil(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPhoneIncoming(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPhoneMissedCall(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPhoneOutgoing(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPhone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPhotograph(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPlay(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPlusCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPlusSm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPlus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPresentationChartBar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPresentationChartLine(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPrinter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPuzzle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiQrcode(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiQuestionMarkCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiReceiptRefund(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiReceiptTax(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiRefresh(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiReply(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiRewind(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiRss(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSaveAs(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSave(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiScale(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiScissors(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSearchCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSearch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSelector(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiServer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiShare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiShieldCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiShieldExclamation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiShoppingBag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiShoppingCart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSortAscending(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSortDescending(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSparkles(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSpeakerphone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiStar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiStatusOffline(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiStatusOnline(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiStop(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSun(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSupport(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSwitchHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSwitchVertical(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTable(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTemplate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTerminal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiThumbDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiThumbUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTicket(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTranslate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTrash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTrendingDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTrendingUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTruck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUpload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUserAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUserCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUserGroup(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUserRemove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUser(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUsers(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiVariable(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiVideoCamera(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiViewBoards(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiViewGridAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiViewGrid(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiViewList(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiVolumeOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiVolumeUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiWifi(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiXCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiX(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiZoomIn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiZoomOut(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineAcademicCap(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 14l9-5-9-5-9 5 9 5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineAdjustments(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineAnnotation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArchive(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowCircleDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowCircleLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowCircleRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowCircleUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 14l-7 7m0 0l-7-7m7 7V3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 19l-7-7m0 0l7-7m-7 7h18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowNarrowDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 17l-4 4m0 0l-4-4m4 4V3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowNarrowLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 16l-4-4m0 0l4-4m-4 4h18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowNarrowRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 8l4 4m0 0l-4 4m4-4H3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowNarrowUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 7l4-4m0 0l4 4m-4-4v18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14 5l7 7m0 0l-7 7m7-7H3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowSmDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 13l-5 5m0 0l-5-5m5 5V6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowSmLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 17l-5-5m0 0l5-5m-5 5h12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowSmRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 7l5 5m0 0l-5 5m5-5H6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowSmUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 11l5-5m0 0l5 5m-5-5v12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 10l7-7m0 0l7 7m-7-7v18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowsExpand(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineAtSymbol(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBackspace(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBadgeCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBan(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBeaker(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBell(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBookOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBookmarkAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBookmark(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBriefcase(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCake(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCalculator(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCalendar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCamera(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChartBar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChartPie(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChartSquareBar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChatAlt2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChatAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChat(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCheckCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 13l4 4L19 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronDoubleDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 13l-7 7-7-7m14-8l-7 7-7-7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronDoubleLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 19l-7-7 7-7m8 14l-7-7 7-7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronDoubleRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 5l7 7-7 7M5 5l7 7-7 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronDoubleUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 11l7-7 7 7M5 19l7-7 7 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 9l-7 7-7-7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 19l-7-7 7-7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 5l7 7-7 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 15l7-7 7 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChip(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineClipboardCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineClipboardCopy(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineClipboardList(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineClipboard(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineClock(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCloudDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCloudUpload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCloud(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCode(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCog(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCollection(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineColorSwatch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCreditCard(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCubeTransparent(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCube(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCurrencyBangladeshi(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCurrencyDollar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCurrencyEuro(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCurrencyPound(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCurrencyRupee(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCurrencyYen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCursorClick(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDatabase(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDesktopComputer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDeviceMobile(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDeviceTablet(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentDuplicate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentRemove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentReport(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentSearch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentText(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocument(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDotsCircleHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDotsHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDotsVertical(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDuplicate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineEmojiHappy(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineEmojiSad(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineExclamationCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineExclamation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineExternalLink(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineEyeOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineEye(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFastForward(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFilm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFilter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFingerPrint(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFire(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFlag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFolderAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFolderDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFolderOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFolderRemove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFolder(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineGift(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineGlobeAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineGlobe(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineHand(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineHashtag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineHeart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineHome(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineIdentification(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineInboxIn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineInbox(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineInformationCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineKey(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLibrary(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLightBulb(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLightningBolt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 10V3L4 14h7v7l9-11h-7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLink(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLocationMarker(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLockClosed(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLockOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLogin(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLogout(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMailOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMail(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMap(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMenuAlt1(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 6h16M4 12h8m-8 6h16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMenuAlt2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 6h16M4 12h16M4 18h7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMenuAlt3(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 6h16M4 12h16m-7 6h7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMenuAlt4(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 8h16M4 16h16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMenu(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 6h16M4 12h16M4 18h16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMicrophone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMinusCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMinusSm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M18 12H6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMinus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M20 12H4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMoon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMusicNote(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineNewspaper(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineOfficeBuilding(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePaperAirplane(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePaperClip(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePause(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePencilAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePencil(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePhoneIncoming(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePhoneMissedCall(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePhoneOutgoing(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePhone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePhotograph(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePlay(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePlusCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePlusSm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 6v6m0 0v6m0-6h6m-6 0H6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePlus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 4v16m8-8H4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePresentationChartBar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePresentationChartLine(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePrinter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePuzzle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineQrcode(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineQuestionMarkCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineReceiptRefund(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineReceiptTax(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineRefresh(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineReply(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineRewind(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineRss(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSaveAs(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSave(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineScale(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineScissors(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSearchCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSearch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSelector(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 9l4-4 4 4m0 6l-4 4-4-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineServer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineShare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineShieldCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineShieldExclamation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineShoppingBag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineShoppingCart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSortAscending(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSortDescending(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSparkles(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSpeakerphone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineStar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineStatusOffline(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineStatusOnline(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineStop(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSun(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSupport(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSwitchHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSwitchVertical(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTable(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTemplate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTerminal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineThumbDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineThumbUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTicket(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTranslate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTrash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTrendingDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTrendingUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTruck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUpload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUserAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUserCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUserGroup(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUserRemove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUser(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUsers(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineVariable(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineVideoCamera(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineViewBoards(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineViewGridAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineViewGrid(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineViewList(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 6h16M4 10h16M4 14h16M4 18h16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineVolumeOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineVolumeUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineWifi(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineXCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineX(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M6 18L18 6M6 6l12 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineZoomIn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineZoomOut(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                },
                "child": []
            }
        ]
    })(props);
}
;
}),
"[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/@vercel/analytics/dist/next/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics2
]);
// src/nextjs/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// src/nextjs/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bcs-apps-frontend/apps/BCS-Studio-Website/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        if (!window.vaq) window.vaq = [];
        window.vaq.push(params);
    };
};
// package.json
var name = "@vercel/analytics";
var version = "2.0.1";
// src/utils.ts
function isBrowser() {
    return ("TURBOPACK compile-time value", "undefined") !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch  {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? "TURBOPACK unreachable" : detectEnvironment();
    return mode || "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch  {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getScriptSrc(props) {
    if (props.scriptSrc) {
        return makeAbsolute(props.scriptSrc);
    }
    if (isDevelopment()) {
        return "https://va.vercel-scripts.com/v1/script.debug.js";
    }
    if (props.basePath) {
        return makeAbsolute(`${props.basePath}/insights/script.js`);
    }
    return "/_vercel/insights/script.js";
}
function loadProps(explicitProps, confString) {
    var _a;
    let props = explicitProps;
    if (confString) {
        try {
            props = {
                ...(_a = JSON.parse(confString)) == null ? void 0 : _a.analytics,
                ...explicitProps
            };
        } catch  {}
    }
    setMode(props.mode);
    const dataset = {
        sdkn: name + (props.framework ? `/${props.framework}` : ""),
        sdkv: version
    };
    if (props.disableAutoTrack) {
        dataset.disableAutoTrack = "1";
    }
    if (props.viewEndpoint) {
        dataset.viewEndpoint = makeAbsolute(props.viewEndpoint);
    }
    if (props.eventEndpoint) {
        dataset.eventEndpoint = makeAbsolute(props.eventEndpoint);
    }
    if (props.sessionEndpoint) {
        dataset.sessionEndpoint = makeAbsolute(props.sessionEndpoint);
    }
    if (isDevelopment() && props.debug === false) {
        dataset.debug = "false";
    }
    if (props.dsn) {
        dataset.dsn = props.dsn;
    }
    if (props.endpoint) {
        dataset.endpoint = props.endpoint;
    } else if (props.basePath) {
        dataset.endpoint = makeAbsolute(`${props.basePath}/insights`);
    }
    return {
        beforeSend: props.beforeSend,
        src: getScriptSrc(props),
        dataset
    };
}
function makeAbsolute(url) {
    return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/") ? url : `/${url}`;
}
// src/generic.ts
function inject(props = {
    debug: true
}, confString) {
    var _a;
    if (!isBrowser()) return;
    //TURBOPACK unreachable
    ;
    const beforeSend = undefined, src = undefined, dataset = undefined;
    const script = undefined;
    const key = undefined, value = undefined;
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
// src/react/utils.ts
function getBasePath() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function getConfigString() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
}
// src/react/index.tsx
function Analytics(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var _a;
        if (props.beforeSend) {
            (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
        }
    }, [
        props.beforeSend
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        inject({
            framework: props.framework || "react",
            basePath: props.basePath ?? getBasePath(),
            ...props.route !== void 0 && {
                disableAutoTrack: true
            },
            ...props
        }, props.configString ?? getConfigString());
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (props.route && props.path) {
            pageview({
                route: props.route,
                path: props.path
            });
        }
    }, [
        props.route,
        props.path
    ]);
    return null;
}
;
var useRoute = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!params) {
        return {
            route: null,
            path
        };
    }
    const finalParams = Object.keys(params).length ? params : Object.fromEntries(searchParams.entries());
    return {
        route: computeRoute(path, finalParams),
        path
    };
};
function getBasePath2() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
}
function getConfigString2() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
}
// src/nextjs/index.tsx
function AnalyticsComponent(props) {
    const { route, path } = useRoute();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Analytics, {
        path,
        route,
        ...props,
        basePath: getBasePath2(),
        configString: getConfigString2(),
        framework: "next"
    });
}
function Analytics2(props) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bcs$2d$apps$2d$frontend$2f$apps$2f$BCS$2d$Studio$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(AnalyticsComponent, {
        ...props
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}),
];

//# sourceMappingURL=e9493_d9ad9dde._.js.map