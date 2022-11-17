import { modules, utils } from "userscriptbase";

import moduleList from "./modules";
import { CUSTOM_YT_EVENTS } from "./config";

for (
	let eventHandlerName
	of ["init", "onDocumentStart"] as (keyof modules.PageModule["eventHandlers"])[]
)
{
	modules.ModuleUtils.onModuleEvent({
		moduleList,
		eventHandlerName,
		handlerArgs: [],
	});
}
for (let [eventName, moduleEventName] of Object.entries(CUSTOM_YT_EVENTS))
{
	globalThis.addEventListener(
		eventName,
		function (payload): void
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
	function (): void
	{
		modules.ModuleUtils.onModuleEvent({
			moduleList,
			eventHandlerName: "onDocumentLoad",
			handlerArgs: [],
		});
	}
);
globalThis.addEventListener(
	"yt-navigate-finish",
	function (/* event */): void
	{
		const currentLocation = utils.URLUtils.getCurrentLocation();
		utils.IOManager.GLOBAL_MANAGER.print(`Changed url! New url: "${currentLocation.href}"`);
		modules.ModuleUtils.onUrlChange({
			moduleList,
			logger: utils.IOManager.GLOBAL_MANAGER,
			currentLocation
		});
	}
);