const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.f2c0808c.js","app":"_app/immutable/entry/app.9fbba9eb.js","imports":["_app/immutable/entry/start.f2c0808c.js","_app/immutable/chunks/index.fb970b68.js","_app/immutable/chunks/singletons.b745c4b2.js","_app/immutable/chunks/index.562a36d8.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.9fbba9eb.js","_app/immutable/chunks/index.fb970b68.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-7fae9528.js'),
			() => import('./chunks/1-1b3c975a.js'),
			() => import('./chunks/4-3c1602ef.js')
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set(["/","/about","/sverdle/how-to-play"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
