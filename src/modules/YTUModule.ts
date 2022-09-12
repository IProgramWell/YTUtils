import { arrToObj, AutoBound } from "../utils/ObjUtils";
import IOManager from "../utils/IOManager";
import * as URLUtils from "../utils/URLUtils";
import * as PageUtils from "../utils/PageUtils";

import type {
	GeneralTypes,
	ModuleTypes,
	CustomEvent,
} from "../../types";

export class YTUModule extends AutoBound
{
	/**
	 * A collection of per module event handlers,
	 * bound to the current module instance.
	 * 
	 * All event handlers should return a boolean value
	 * indicating whether the current module is active or not.
	 * 
	 */
	eventHandlers: {
		init?: ModuleTypes.ModuleEventHandler;
		onDocumentLoad?: ModuleTypes.ModuleEventHandler;
		/**
		 * Technically useless because onModuleStart
		 * runs when the document is started, too.
		 */
		onDocumentStart?: ModuleTypes.ModuleEventHandler;
		onModuleStart?: ModuleTypes.ModuleEventHandler;
		onModuleStop?: ModuleTypes.ModuleEventHandler;
		/**
		 * Called when the "yt-page-data-fetched" is fired.
		 */
		onPageDataFetch?: ModuleTypes.ModuleEventHandler<[CustomEvent.IYTCustomEvent]>;
	} = {};
	methods: {
		[methodName: PropertyKey]: (...args: any) => any
	} = {};
	state: GeneralTypes.TypedObject = {};
	shouldBeActive: (url?: string | URL | Location) => boolean = () => true;
	isActive: boolean = false;
	moduleName: string | null | undefined = null;
	logger: IOManager = IOManager.GLOBAL_MANAGER;
	utils: {
		urlUtils: typeof URLUtils,
		pageUtils: typeof PageUtils,
	} = {
			urlUtils: URLUtils,
			pageUtils: PageUtils,
		};

	constructor (moduleDetails: {
		eventHandlers: typeof YTUModule["prototype"]["eventHandlers"],
		methods?: typeof YTUModule["prototype"]["methods"],
		utils?: typeof YTUModule["prototype"]["utils"],
		shouldBeActive: typeof YTUModule["prototype"]["shouldBeActive"],
		moduleName?: string,
		logger?: IOManager,
	})
	{

		super();

		if (moduleDetails.shouldBeActive)
			this.shouldBeActive = moduleDetails.shouldBeActive.bind(this);
		else
			throw new Error("Path regex not specified");

		/* for (
			let [methodName, methodFunc]
			of (
				Object.entries(moduleDetails.eventHandlers) as
				GeneralTypes.EntryArray<typeof moduleDetails.eventHandlers>
			)
		)
			if (typeof methodFunc === "function")
				this.eventHandlers[methodName] = methodFunc.bind(this); */

		//To late at night to deal with this.
		//TODO: figure out why code above throws TS error.
		//TODO also: find out why `Object.assign` bypasses type-checking.
		Object.assign(
			this.eventHandlers,
			arrToObj(
				Object.entries(moduleDetails.eventHandlers),
				([eventHandlerName]) => eventHandlerName,
				([_, eventHandler]) => eventHandler.bind(this)
			)
		);
		if (moduleDetails.methods)
			Object.assign(
				this.methods,
				arrToObj(
					Object.entries(moduleDetails.methods),
					([methodName]) => methodName,
					([_, methodFunc]) => methodFunc.bind(this)
				)
			);

		if (moduleDetails.logger)
			this.logger = moduleDetails.logger;

		if (moduleDetails.moduleName)
			this.moduleName = moduleDetails.moduleName;

		if (moduleDetails.utils)
			this.utils = moduleDetails.utils;
	}

	getStateValue<T>(name: keyof YTUModule["prototype"]["state"], defaultValue: T = null): T | null | undefined
	{
		return this.state[name] ?? defaultValue;
	}

	setStateValue<T>(name: keyof YTUModule["prototype"]["state"], value: T)
	{
		this.state[name] = value;
	}
}
export default YTUModule;