import { PathWatcher, IOManager } from "./utils";
import { ModuleUtils, MODULES } from "./modules";

import type { IYTCustomEvent } from "../types/CustomEvent";

/*
 * Notes:
 * - Potentially useful YT events:
 * 	 * "yt-navigate-finish",
 * 	 * "yt-page-data-fetched",
 */

// (function main()
// {
new PathWatcher(
	MODULES,
	IOManager.GLOBAL_MANAGER,
	true
)
	.start();

ModuleUtils.onModuleEvent(MODULES, "onDocumentStart", []);

globalThis.addEventListener(
	"yt-page-data-fetched",
	(payload: IYTCustomEvent) =>
		ModuleUtils.onModuleEvent(MODULES, "onPageDataFetch", [payload])
);

globalThis.addEventListener(
	"load",
	() => ModuleUtils.onModuleEvent(MODULES, "onDocumentLoad", [])
);
// })();