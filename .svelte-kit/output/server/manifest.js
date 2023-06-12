export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.fa14f559.js","app":"_app/immutable/entry/app.47a4554a.js","imports":["_app/immutable/entry/start.fa14f559.js","_app/immutable/chunks/index.fb970b68.js","_app/immutable/chunks/singletons.4ee6c544.js","_app/immutable/chunks/index.562a36d8.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.47a4554a.js","_app/immutable/chunks/index.fb970b68.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js')
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
