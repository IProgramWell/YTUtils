import { modules, utils } from "userscriptbase";

import moduleList from "./modules";

import type { IYTCustomEvent } from "../types/CustomEvent";

function onYTEvent(moduleEventName: string): (payload: IYTCustomEvent) => void
{
	return function (payload)
	{
		modules.ModuleUtils.callAllModulesMethod({
			moduleList,
			methodName: moduleEventName,
			methodArgs: [payload],
			onlyIfShouldBeActive: true,
		});
	};
}

new utils.PathWatcher({ moduleList, watchWholeURL: true }).start();

modules.ModuleUtils.onModuleEvent({
	moduleList,
	eventHandlerName: "onDocumentStart",
	handlerArgs: [],
});

globalThis.addEventListener("yt-page-data-fetched", onYTEvent("onPageDataFetch"));
globalThis.addEventListener("yt-navigate-finish", onYTEvent("onNavigateFinish"));
globalThis.addEventListener(
	"load",
	() => modules.ModuleUtils.onModuleEvent({
		moduleList,
		eventHandlerName: "onDocumentLoad",
		handlerArgs: [],
	})
);
