import { AutoBound } from "./ObjUtils";
import IOManager from "./IOManager";
import { getCurrentLocation } from "./URLUtils";
import { onUrlChange } from "../modules/moduleUtils";

import type YTUModule from "../modules/YTUModule";

const DEFAULT_CTOR_OPTIONS: {
	moduleList: YTUModule[],
	logger: IOManager,
	watchWholeURL: boolean,
	onUrlChange: typeof onUrlChange,
	ObserverClass: typeof MutationObserver
} = {
	moduleList: [],
	logger: IOManager.GLOBAL_MANAGER,
	watchWholeURL: false,
	onUrlChange,
	ObserverClass: MutationObserver
};
export default class PathWatcher extends AutoBound
{
	observerInstance: MutationObserver;
	lastURL: string;
	logger: IOManager;
	moduleList: YTUModule[];
	watchWholeURL: boolean = false;
	urlChangeHandler: typeof onUrlChange;

	constructor (options: Partial<typeof DEFAULT_CTOR_OPTIONS> = DEFAULT_CTOR_OPTIONS)
	{
		super();

		options = {
			...DEFAULT_CTOR_OPTIONS,
			...options,
		};

		this.lastURL = "";
		this.observerInstance = new options.ObserverClass(this.onUrlChange);
		this.logger = options.logger;
		this.moduleList = options.moduleList;
		this.watchWholeURL = options.watchWholeURL;
		this.urlChangeHandler = options.onUrlChange.bind(this);
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
		this.urlChangeHandler({
			moduleList: this.moduleList,
			currentLocation: getCurrentLocation(),
			logger: this.logger,
		});
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