import { AutoBound } from "./ObjUtils";
import IOManager from "./IOManager";

import type YTUModule from "../modules/YTUModule";

export default class PathWatcher extends AutoBound
{
	observerInstance: MutationObserver;
	lastURL: string;
	logger: IOManager;
	moduleList: YTUModule[];
	watchWholeURL: boolean = false;

	constructor (moduleList: YTUModule[], logger = IOManager.GLOBAL_MANAGER, wholePath: boolean = false)
	{
		super();

		this.lastURL = "";
		this.observerInstance = new MutationObserver(this.onUrlChange);
		this.logger = logger;
		this.moduleList = moduleList;
		this.watchWholeURL = wholePath;
	}

	onUrlChange()
	{
		let url = this.watchWholeURL
			? document.location.href
			: document.location.pathname;

		if (this.lastURL === url)
			return;
		this.lastURL = url;
		this
			.logger
			.print(
				"Changed url!",
				`New ${this.watchWholeURL ? "url" : "pathname"}: "${url}"`
			);

		let shouldBeActive: boolean;
		for (let module of this.moduleList)
		{
			shouldBeActive = module.shouldBeActive(document.location);
			if (
				module.isActive &&
				!shouldBeActive &&
				module.eventHandlers.onModuleStop
			)
			{
				module.isActive = (module.eventHandlers.onModuleStop?.() as boolean) ?? false;
				if (!module.isActive)
					this.logger.print(`Stopped module: "${module.moduleName}"`);
			}
			else if (
				!module.isActive &&
				shouldBeActive &&
				module.eventHandlers.onModuleStart
			)
			{
				module.isActive = (module.eventHandlers.onModuleStart?.() as boolean) ?? true;
				if (module.isActive)
					this.logger.print(`Started module: "${module.moduleName}"`);
			}
		}
	}

	start()
	{
		this
			.observerInstance
			.observe(
				document,
				{
					subtree: true,
					childList: true,
					attributeFilter: ["location"]
				}
			);
	}
};