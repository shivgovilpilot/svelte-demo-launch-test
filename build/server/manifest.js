const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.93ba3d07.js","app":"_app/immutable/entry/app.478cdece.js","imports":["_app/immutable/entry/start.93ba3d07.js","_app/immutable/chunks/index.fb970b68.js","_app/immutable/chunks/singletons.aa53793f.js","_app/immutable/chunks/index.562a36d8.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.478cdece.js","_app/immutable/chunks/index.fb970b68.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-6919ba35.js'),
			() => import('./chunks/1-ff597fd1.js'),
			() => import('./chunks/4-412b0ff5.js')
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
