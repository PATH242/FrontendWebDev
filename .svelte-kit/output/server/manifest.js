export const manifest = {
	appDir: "_app",
	appPath: "PATH242.github.io/_app",
	assets: new Set(["background.jpg","loading.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a22125c7.js","imports":["_app/immutable/entry/start.a22125c7.js","_app/immutable/chunks/index.13786dfa.js","_app/immutable/chunks/singletons.d43fbb40.js","_app/immutable/chunks/paths.6b27da73.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.7540ff49.js","imports":["_app/immutable/entry/app.7540ff49.js","_app/immutable/chunks/index.13786dfa.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
