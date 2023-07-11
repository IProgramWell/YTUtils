import { ModuleUtils } from "userscriptbase/modules";
import { PageUtils, URLUtils, IOManager, RequestUtils } from "userscriptbase/utils";

import makeModuleList from "./modules";
import { GLOBAL_AWAITER, CLASSES, YT_EVENTS } from "./config";

(function main()
{
	const moduleList = makeModuleList({
		utils: {
			queryAwaiter: GLOBAL_AWAITER,
			pageUtils: PageUtils,
			urlUtils: URLUtils,
			requestUtils: RequestUtils,
			globals: globalThis,
		},
	});

	ModuleUtils.onModuleEvent({
		moduleList,
		eventHandlerName: "init",
		onlyIfShouldBeActive: false,
	});
	ModuleUtils.onModuleEvent({
		moduleList,
		eventHandlerName: "onDocumentStart",
		onlyIfShouldBeActive: true,
	});

	for (let eventName of YT_EVENTS)
		globalThis.document.addEventListener(
			eventName,
			function (payload): void
			{
				ModuleUtils.callAllModulesMethod({
					moduleList,
					methodName: eventName,
					methodArgs: [payload],
					onlyIfShouldBeActive: true,
				});
			}
		);

	globalThis.addEventListener(
		"load",
		function (): void
		{
			globalThis.document.head.appendChild(PageUtils.createElement(
				"style",
				{
					innerHTML: Object
						.entries(CLASSES)
						.map(([className, css]) => `.${className} ${css}`)
						.join("\n")
						.trim(),
					id: "ytutils-styles",
				}
			));
			ModuleUtils.onModuleEvent({
				moduleList,
				eventHandlerName: "onDocumentLoad",
			});
		}
	);
	globalThis.addEventListener(
		"yt-navigate-finish",
		function (/* event */): void
		{
			const currentLocation = URLUtils.getCurrentLocation();
			IOManager.GLOBAL_MANAGER.print(`Changed url! New url: "${currentLocation.href}"`);
			ModuleUtils.onUrlChange({
				moduleList,
				logger: IOManager.GLOBAL_MANAGER,
				currentLocation
			});
		}
	);
})();