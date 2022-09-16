import { PathWatcher, IOManager } from "./utils";
import { ModuleUtils, MODULES } from "./modules";

import type { IYTCustomEvent } from "../types/CustomEvent";

new PathWatcher({
	moduleList: MODULES,
	watchWholeURL: true,
})
	.start();

ModuleUtils.onModuleEvent({
	moduleList: MODULES,
	eventHandlerName: "onDocumentStart",
	handlerArgs: [],
	logger: IOManager.GLOBAL_MANAGER,
});

globalThis.addEventListener(
	"yt-page-data-fetched",
	(payload: IYTCustomEvent) => ModuleUtils.callAllModulesMethod({
		moduleList: MODULES,
		methodName: "onPageDataFetch",
		methodArgs: [payload],
		logger: IOManager.GLOBAL_MANAGER,
		onlyIfShouldBeActive: true,
	})
);

globalThis.addEventListener(
	"load",
	() => ModuleUtils.onModuleEvent({
		moduleList: MODULES,
		eventHandlerName: "onDocumentLoad",
		handlerArgs: [],
		logger: IOManager.GLOBAL_MANAGER,
	})
);
