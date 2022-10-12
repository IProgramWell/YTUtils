import { modules, utils } from "userscriptbase";

import moduleList from "./modules";
import { CUSTOM_YT_EVENTS } from "./config";

const { ModuleUtils } = modules;
const { URLUtils, IOManager: { GLOBAL_MANAGER } } = utils;

for (
	let eventHandlerName
	of ["init", "onDocumentStart"] as (keyof modules.PageModule["eventHandlers"])[]
)
{
	ModuleUtils.onModuleEvent({
		moduleList,
		eventHandlerName,
		handlerArgs: [],
	});
}
for (let [eventName, moduleEventName] of Object.entries(CUSTOM_YT_EVENTS))
{
	globalThis.addEventListener(
		eventName,
		function (payload)
		{
			ModuleUtils.callAllModulesMethod({
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
		ModuleUtils.onModuleEvent({
			moduleList,
			eventHandlerName: "onDocumentLoad",
			handlerArgs: [],
		});
	}
);
globalThis.addEventListener(
	// "yt-page-type-changed",
	"yt-navigate-finish",
	function (/* event */)
	{
		const currentLocation = URLUtils.getCurrentLocation();
		GLOBAL_MANAGER.print(`Changed url! New url: "${currentLocation.href}"`);
		ModuleUtils.onUrlChange({
			moduleList,
			logger: GLOBAL_MANAGER,
			currentLocation
		});
	}
);