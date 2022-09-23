import { modules, utils } from "userscriptbase";
import moduleList from "./modules";

import type { IYTCustomEvent } from "../types/CustomEvent";

new utils.PathWatcher({
	moduleList: moduleList,
	watchWholeURL: true,
})
	.start();

modules.ModuleUtils.onModuleEvent({
	moduleList: moduleList,
	eventHandlerName: "onDocumentStart",
	handlerArgs: [],
	logger: utils.IOManager.GLOBAL_MANAGER,
});

globalThis.addEventListener(
	"yt-page-data-fetched",
	(payload: IYTCustomEvent) => modules.ModuleUtils.callAllModulesMethod({
		moduleList: moduleList,
		methodName: "onPageDataFetch",
		methodArgs: [payload],
		logger: utils.IOManager.GLOBAL_MANAGER,
		onlyIfShouldBeActive: true,
	})
);

globalThis.addEventListener(
	"load",
	() => modules.ModuleUtils.onModuleEvent({
		moduleList: moduleList,
		eventHandlerName: "onDocumentLoad",
		handlerArgs: [],
		logger: utils.IOManager.GLOBAL_MANAGER,
	})
);
