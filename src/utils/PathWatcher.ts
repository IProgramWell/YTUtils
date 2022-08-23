import { AutoBound } from "./ObjUtils";
import IOManager from "./IOManager";
import YTUModule from "../modules/YTUModule";
import { GLOBAL_MANAGER } from "../config";

export default class PathWatcher extends AutoBound
{
	observerInstance: MutationObserver;
	lastPath: string;
	logger: IOManager;
	moduleList: YTUModule[];

	constructor (moduleList: YTUModule[], logger = GLOBAL_MANAGER)
	{
		super();

		this.lastPath = "";
		this.observerInstance = new MutationObserver(this.onUrlChange);
		this.logger = logger;
		this.moduleList = moduleList;
	}

	onUrlChange()
	{
		let path = document.location.pathname;
		if (this.lastPath === path)
			return;
		this.lastPath = path;
		this
			.logger
			.print(
				"Changed url!",
				`New pathname: "${path}"`
			);

		let shouldBeActive: boolean;
		for (let module of this.moduleList)
		{
			shouldBeActive = module.pathRegex.test(path);
			if (
				module.isActive &&
				!shouldBeActive &&
				module.methods.onModuleStop
			)
			{
				module.isActive = (module.methods.onModuleStop?.() as boolean) ?? false;
				this.logger.print(`Stopped module: "${module.moduleName}" for regex: ${module.pathRegex}`);
			}
			else if (
				!module.isActive &&
				shouldBeActive &&
				module.methods.onModuleStart
			)
			{
				module.isActive = (module.methods.onModuleStart?.() as boolean) ?? true;
				this.logger.print(`Started module: "${module.moduleName}" for regex: ${module.pathRegex}`);
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