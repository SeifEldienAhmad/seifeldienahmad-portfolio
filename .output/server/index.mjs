globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"3c1d1-B6WK3pfrYQlmaTG3PWX/xrIyxYc\"",
		"mtime": "2026-07-06T00:54:10.347Z",
		"size": 246225,
		"path": "../public/favicon.ico"
	},
	"/logo.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3c1d1-B6WK3pfrYQlmaTG3PWX/xrIyxYc\"",
		"mtime": "2026-07-06T00:54:10.348Z",
		"size": 246225,
		"path": "../public/logo.jpeg"
	},
	"/assets/routes-omolaXS0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a185-RI/JOSWFIKjVvt+nIf9nT8qn1Dw\"",
		"mtime": "2026-07-06T00:54:09.490Z",
		"size": 41349,
		"path": "../public/assets/routes-omolaXS0.js"
	},
	"/assets/styles-DDcPJbEG.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12f6d-enTu1Wd+yxZ3dPviPbYLjP8l8iY\"",
		"mtime": "2026-07-06T00:54:09.490Z",
		"size": 77677,
		"path": "../public/assets/styles-DDcPJbEG.css"
	},
	"/images/certificates/Introduction to cybersecurity.png": {
		"type": "image/png",
		"etag": "\"2bd67-7NXN1+vHuRW4m9vvYq8Ugmeo96A\"",
		"mtime": "2026-07-06T00:54:10.348Z",
		"size": 179559,
		"path": "../public/images/certificates/Introduction to cybersecurity.png"
	},
	"/images/certificates/Networking Basics.jpg": {
		"type": "image/jpeg",
		"etag": "\"496a1-qN8DQBKTy0mzneaKkU1+1e9/ToM\"",
		"mtime": "2026-07-06T00:54:10.366Z",
		"size": 300705,
		"path": "../public/images/certificates/Networking Basics.jpg"
	},
	"/images/certificates/Python Essentials 1.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2038b-NubAYAv9VEH4hh9rCByPSwZIGAo\"",
		"mtime": "2026-07-06T00:54:10.374Z",
		"size": 131979,
		"path": "../public/images/certificates/Python Essentials 1.jpeg"
	},
	"/images/certificates/Seif Eldien Ahmad - Cybersecurity nti.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4c6f2-OIYio+Yhp6AnagxQE1cNsi4aIXo\"",
		"mtime": "2026-07-06T00:54:10.374Z",
		"size": 313074,
		"path": "../public/images/certificates/Seif Eldien Ahmad - Cybersecurity nti.jpeg"
	},
	"/assets/index-DaS31sed.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72103-FfRyOjRWcSHxKheuzAvHqdRSeNA\"",
		"mtime": "2026-07-06T00:54:09.487Z",
		"size": 467203,
		"path": "../public/assets/index-DaS31sed.js"
	},
	"/images/Projects/Penetration Testing on Metasploitable2.png": {
		"type": "image/png",
		"etag": "\"fb5ae-qTAaY/+apdykIrltOXgZGeLTpVc\"",
		"mtime": "2026-07-06T00:54:10.347Z",
		"size": 1029550,
		"path": "../public/images/Projects/Penetration Testing on Metasploitable2.png"
	},
	"/images/certificates/Python Essential 2.jpg": {
		"type": "image/jpeg",
		"etag": "\"87c50-mnvettxILmAcQNIdJ4+Gdtj08tk\"",
		"mtime": "2026-07-06T00:54:10.372Z",
		"size": 556112,
		"path": "../public/images/certificates/Python Essential 2.jpg"
	},
	"/images/certificates/Seif Eldein Ahmad Mohammad - IT.jpg": {
		"type": "image/jpeg",
		"etag": "\"86c31-YoF9IxxOUuzpN5bfst2BBoeWL3U\"",
		"mtime": "2026-07-06T00:54:10.374Z",
		"size": 551985,
		"path": "../public/images/certificates/Seif Eldein Ahmad Mohammad - IT.jpg"
	},
	"/images/Projects/passwordCrackingProject.png": {
		"type": "image/png",
		"etag": "\"138a52-BRi3kGGjX5CRe79ohSSPrTuBU9c\"",
		"mtime": "2026-07-06T00:54:10.362Z",
		"size": 1280594,
		"path": "../public/images/Projects/passwordCrackingProject.png"
	},
	"/images/Projects/bash_scripts.png": {
		"type": "image/png",
		"etag": "\"1502d7-q+NazQwFy6IAUZrkDu4BdxNsrHA\"",
		"mtime": "2026-07-06T00:54:10.350Z",
		"size": 1376983,
		"path": "../public/images/Projects/bash_scripts.png"
	},
	"/images/Projects/websiteHacking.png": {
		"type": "image/png",
		"etag": "\"11e04b-TZtj7VcoCDpToIoZkoFRggrC4lA\"",
		"mtime": "2026-07-06T00:54:10.363Z",
		"size": 1171531,
		"path": "../public/images/Projects/websiteHacking.png"
	},
	"/images/certificates/Networking_Devices_and_Initial_Configuration_certificate.jpg": {
		"type": "image/jpeg",
		"etag": "\"162c9d-0iGeNCUui9p42co4us7oGp2wUEA\"",
		"mtime": "2026-07-06T00:54:10.372Z",
		"size": 1453213,
		"path": "../public/images/certificates/Networking_Devices_and_Initial_Configuration_certificate.jpg"
	},
	"/images/Projects/cctv.png": {
		"type": "image/png",
		"etag": "\"1944c7-jtRsx1WxwMQGeELWNa5bYRLamyQ\"",
		"mtime": "2026-07-06T00:54:10.351Z",
		"size": 1656007,
		"path": "../public/images/Projects/cctv.png"
	},
	"/images/Projects/ghost0Assistant.png": {
		"type": "image/png",
		"etag": "\"1b49c3-FFdE9YhzabiWCKo6Z3ygtWSvvVQ\"",
		"mtime": "2026-07-06T00:54:10.353Z",
		"size": 1788355,
		"path": "../public/images/Projects/ghost0Assistant.png"
	},
	"/images/Projects/rhsa.png": {
		"type": "image/png",
		"etag": "\"1f78e7-4P8UqS09HhPm8QiWfoR3S7M7V18\"",
		"mtime": "2026-07-06T00:54:10.363Z",
		"size": 2062567,
		"path": "../public/images/Projects/rhsa.png"
	},
	"/profile.png": {
		"type": "image/png",
		"etag": "\"22fea6-qzeJQuCe5SR+Zd1chcbilChH9P8\"",
		"mtime": "2026-07-06T00:54:10.348Z",
		"size": 2293414,
		"path": "../public/profile.png"
	},
	"/images/certificates/Seif Eldien Ahmad Mohammad Internship Certificate.jpg": {
		"type": "image/jpeg",
		"etag": "\"2531c2-1YqdA3C+Fr1FZ0MmsmWZuuHEUmg\"",
		"mtime": "2026-07-06T00:54:10.379Z",
		"size": 2437570,
		"path": "../public/images/certificates/Seif Eldien Ahmad Mohammad Internship Certificate.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_qttjY3 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_qttjY3
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
