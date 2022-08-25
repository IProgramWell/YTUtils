import
{
	AutoBound,
	arrToObj,
} from "../utils/ObjUtils";

import type {
	GeneralTypes,
	ModuleTypes,
	CustomEvent,
} from "../../types";

export default class YTUModule extends AutoBound
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
	pathRegex: RegExp = /\//i;
	isActive: boolean = false;
	moduleName: string | null | undefined = null;

	constructor (moduleDetails: {
		eventHandlers: typeof YTUModule["prototype"]["eventHandlers"],
		methods?: typeof YTUModule["prototype"]["methods"],
		pathRegex: string | RegExp,
		moduleName?: string,
	})
	{

		super();

		if (moduleDetails.pathRegex)
			this.pathRegex = typeof moduleDetails.pathRegex === "string"
				? new RegExp(moduleDetails.pathRegex)
				: moduleDetails.pathRegex;
		else
			throw new Error("Path regex not specified");

		/* for (
			let [methodName, methodFunc]
			of (Object.entries(eventHandlers) as EntryArray<typeof eventHandlers>)
		)
			if (typeof methodFunc === "function")
				this.eventHandlers[methodName] = methodFunc.bind(this); */

		//To late at night to deal with this.
		//TODO: figure out why code above throws TS error
		const BIND_TO = this;
		Object.assign(
			this.eventHandlers,
			arrToObj(
				Object.entries(moduleDetails.eventHandlers),
				([eventHandlerName]) => eventHandlerName,
				([_, eventHandler]) => eventHandler.bind(BIND_TO)
			)
		);
		if (moduleDetails.methods)
			Object.assign(
				this.methods,
				arrToObj(
					Object.entries(moduleDetails.methods),
					([methodName]) => methodName,
					([_, methodFunc]) => methodFunc.bind(BIND_TO)
				)
			);

		if (moduleDetails.moduleName)
			this.moduleName = moduleDetails.moduleName;
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