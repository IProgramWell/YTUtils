import { ModuleUtils, PageModule } from "userscriptbase/modules";
import { PageUtils, URLUtils, IOManager } from "userscriptbase/utils";

import makeModuleList from "./modules";
import { GLOBAL_AWAITER } from "./config";

(function main()
{
	const moduleList = makeModuleList({
		utils: {
			queryAwaiter: GLOBAL_AWAITER,
			pageUtils: PageUtils,
			urlUtils: URLUtils,
		},
	});

	for (
		let eventHandlerName
		of ["init", "onDocumentStart"] as (keyof PageModule["eventHandlers"])[]
	)
	{
		ModuleUtils.onModuleEvent({
			moduleList,
			eventHandlerName,
			onlyIfShouldBeActive: false,
		});
	}

	/* for (let eventName of [
		"yt-page-data-fetched",
		"yt-service-request-completed",
		"yt-navigate-finish",
		// "yt-navigate-start",
		// "yt-app-context",
		// "yt-playlist-data-updated",
		// "yt-navigate-redirect",
		// "yt-get-context-provider",
		// "yt-playlist-reloading",
	])
		globalThis.addEventListener(
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
		); */

	globalThis.addEventListener(
		"load",
		function (): void
		{
			globalThis.document.head.appendChild(PageUtils.createElement(
				"style",
				{
					innerHTML: `
	.ytutils-no-pl-btn {
		float: left;
		top: 50%;
		white-space: nowrap;
	}
	`
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