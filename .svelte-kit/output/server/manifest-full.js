export const manifest = {
	appDir: "_app",
	appPath: "PATH242.github.io/_app",
	assets: new Set(["background.jpg","loading.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.032ef498.js","imports":["_app/immutable/entry/start.032ef498.js","_app/immutable/chunks/index.13786dfa.js","_app/immutable/chunks/singletons.de2fff6e.js","_app/immutable/chunks/paths.ed4acb02.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.60c69e79.js","imports":["_app/immutable/entry/app.60c69e79.js","_app/immutable/chunks/index.13786dfa.js"],"stylesheets":[],"fonts":[]}},
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
