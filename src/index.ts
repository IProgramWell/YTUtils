import { GLOBAL_WATCHER } from "./config";
import * as Modules from "./modules";

import type { IYTCustomEvent } from "../types/CustomEvent";

/*
 * Notes:
 * - Potentially useful YT events:
 * 	 * "yt-navigate-finish",
 * 	 * "yt-page-data-fetched",
 * 
 * TODO:
 * - Fix custom playlist stats module shitting itself if playlist is too long.
 */

// (function main()
// {
GLOBAL_WATCHER.start();

Modules.onModuleEvent("onDocumentStart", []);

globalThis.addEventListener(
	"yt-page-data-fetched",
	(payload: IYTCustomEvent) =>
		Modules.onModuleEvent("onPageDataFetch", [payload])
);

globalThis.addEventListener(
	"load",
	() => Modules.onModuleEvent("onDocumentLoad", [])
);
// })();