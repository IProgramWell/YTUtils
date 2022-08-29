import { PathWatcher, IOManager } from "./utils";
import { ModuleUtils, MODULES } from "./modules";

import type { IYTCustomEvent } from "../types/CustomEvent";

/*
 * Notes:
 * - Potentially useful YT events:
 * 	 * "yt-navigate-finish",
 * 	 * "yt-page-data-fetched",
 */

//TODO: Fix custom playlist stats module shitting itself if playlist is too long.

// (function main()
// {
new PathWatcher(
	MODULES,
	IOManager.GLOBAL_MANAGER
)
	.start();

ModuleUtils.onModuleEvent("onDocumentStart", []);

globalThis.addEventListener(
	"yt-page-data-fetched",
	(payload: IYTCustomEvent) =>
		ModuleUtils.onModuleEvent("onPageDataFetch", [payload])
);

globalThis.addEventListener(
	"load",
	() => ModuleUtils.onModuleEvent("onDocumentLoad", [])
);
// })();