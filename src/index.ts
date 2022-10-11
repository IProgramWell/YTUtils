import { modules, utils } from "userscriptbase";

import moduleList from "./modules";
import { CUSTOM_YT_EVENTS } from "./config";

new utils.PathWatcher({ moduleList, watchWholeURL: true }).start();

modules.ModuleUtils.onModuleEvent({
	moduleList,
	eventHandlerName: "init",
	handlerArgs: [],
});
modules.ModuleUtils.onModuleEvent({
	moduleList,
	eventHandlerName: "onDocumentStart",
	handlerArgs: [],
});
for (let [eventName, moduleEventName] of Object.entries(CUSTOM_YT_EVENTS))
{
	globalThis.addEventListener(
		eventName,
		function (payload)
		{
			modules.ModuleUtils.callAllModulesMethod({
				moduleList,
				methodName: moduleEventName,
				methodArgs: [payload],
				onlyIfShouldBeActive: true,
			});
		}
	);
}
globalThis.addEventListener(
	"load",
	function ()
	{
		modules.ModuleUtils.onModuleEvent({
			moduleList,
			eventHandlerName: "onDocumentLoad",
			handlerArgs: [],
		});
	}
);