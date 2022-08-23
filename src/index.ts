import { GLOBAL_WATCHER } from "./config";
import { MODULES } from "./modules";

/*
 * Notes:
 * - Potentially useful YT events:
 * 	 * "yt-navigate-finish",
 * 	 * "yt-page-data-fetched",
 * 
 * TODO:
 * - Fix modules starting before data is available (or is even fetched).
 * 	 Mainly when navigating to a playlist from a channel's page (w/o a refresh).
 * 	 ("Uncaught TypeError: Cannot read properties of undefined (reading 'sectionListRenderer')").
 * - Fix custom playlist stats module shitting itself if playlist is too long.
 */

// (function main()
// {
GLOBAL_WATCHER.start();
for (let module of MODULES)
	if (module.pathRegex.test(document.location.pathname) && module.methods.onDocumentStart)
		module.isActive = module.methods.onDocumentStart?.() ?? true;

globalThis.addEventListener(
	"load",
	() =>
	{
		for (let module of MODULES)
			if (module.pathRegex.test(document.location.pathname) && module.methods.onDocumentLoad)
				module.isActive = module.methods.onDocumentLoad?.() ?? true;
	}
);
// })();