export const manifest = {
	appDir: "_app",
	appPath: "PATH242.github.io/_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8170dbb7.js","imports":["_app/immutable/entry/start.8170dbb7.js","_app/immutable/chunks/index.13786dfa.js","_app/immutable/chunks/singletons.5e62350d.js","_app/immutable/chunks/paths.d2d89693.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c29de9da.js","imports":["_app/immutable/entry/app.c29de9da.js","_app/immutable/chunks/index.13786dfa.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
