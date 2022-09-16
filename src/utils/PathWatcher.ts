import { AutoBound } from "./ObjUtils";
import IOManager from "./IOManager";
import { getCurrentLocation } from "./URLUtils";
import { onUrlChange } from "../modules/moduleUtils";

import type YTUModule from "../modules/YTUModule";

/*
 * Will probably not test because this relies on a MutationObserver instance.
 * Unless I find a way to mock/fake the observer.
 */
// TODO: Find away to mock the change detection.
const DEFAULT_CTOR_OPTIONS: {
	moduleList: YTUModule[],
	logger: IOManager,
	watchWholeURL: boolean,
	onUrlChange: typeof onUrlChange,
} = {
	moduleList: [],
	logger: IOManager.GLOBAL_MANAGER,
	watchWholeURL: false,
	onUrlChange
};
export default class PathWatcher extends AutoBound
{
	observerInstance: MutationObserver;
	lastURL: string;
	logger: IOManager;
	moduleList: YTUModule[];
	watchWholeURL: boolean = false;
	urlChangeHandler: typeof onUrlChange;

	constructor (
		options: typeof DEFAULT_CTOR_OPTIONS = DEFAULT_CTOR_OPTIONS
	)
	{
		options = {
			...DEFAULT_CTOR_OPTIONS,
			...options,
		};

		super();

		this.lastURL = "";
		this.observerInstance = new MutationObserver(this.onUrlChange);
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