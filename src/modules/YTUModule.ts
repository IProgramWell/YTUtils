import { AutoBound } from "../utils/ObjUtils";
import IOManager from "../utils/IOManager";
import * as URLUtils from "../utils/URLUtils";
import * as PageUtils from "../utils/PageUtils";

import type {
	GeneralTypes,
	ModuleTypes,
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
		 * Technically useless because `onModuleStart`
		 * runs when the document is started, too.
		 */
		onDocumentStart?: ModuleTypes.ModuleEventHandler;
		onModuleStart?: ModuleTypes.ModuleEventHandler;
		onModuleStop?: ModuleTypes.ModuleEventHandler;
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
		eventHandlers?: YTUModule["eventHandlers"],
		methods?: YTUModule["methods"],
		utils?: YTUModule["utils"],
		shouldBeActive?: YTUModule["shouldBeActive"],
		moduleName?: string,
		logger?: IOManager,
	})
	{

		super();

		if (moduleDetails.shouldBeActive)
			this.shouldBeActive = moduleDetails.shouldBeActive.bind(this);
		else
			throw new Error("Path regex not specified");

		if (moduleDetails.eventHandlers)
		{
			/* Object.assign(
				this.eventHandlers,
				arrToObj(
					Object.entries(moduleDetails.eventHandlers),
					([eventHandlerName]) => eventHandlerName,
					([_, eventHandler]) => eventHandler.bind(this)
				)
			); */
			for (
				let [methodName, methodFunc]
				of (
					Object.entries(moduleDetails.eventHandlers) as
					GeneralTypes.EntryArray<YTUModule["eventHandlers"]>
				)
			)
			{
				if (typeof methodFunc === "function")
				{
					(
						this.eventHandlers[methodName] as
						YTUModule["eventHandlers"][typeof methodName]
					)
						= methodFunc.bind(this);
				}
			}
		}
		if (moduleDetails.methods)
		{
			/* Object.assign(
				this.methods,
				arrToObj(
					Object.entries(moduleDetails.methods),
					([methodName]) => methodName,
					([_, methodFunc]) => methodFunc.bind(this)
				)
			); */
			for (
				let [methodName, methodFunc]
				of (
					Object.entries(moduleDetails.methods) as
					GeneralTypes.EntryArray<YTUModule["methods"]>
				)
			)
			{
				if (typeof methodFunc === "function")
				{
					(
						this.methods[methodName] as
						YTUModule["methods"][typeof methodName]
					)
						= methodFunc.bind(this);
				}
			}
		}

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