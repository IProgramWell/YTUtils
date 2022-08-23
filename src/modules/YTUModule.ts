import { AutoBound } from "../utils/ObjUtils";

import { ModuleEventHandler } from "../../types/ModuleTypes";
import { TypedObject } from "../../types/GeneralTypes";

export default class YTUModule extends AutoBound
{
	/**
	 * A collection of customly defined, per module utility methods and
	 * event handlers for, and bound to, the current module instance.
	 * 
	 * All event handlers should return a boolean value indicating whether the current module is active or not.
	 */
	methods: {
		[methodName: string | number | symbol]: (...args: any[]) => any;
		init?: ModuleEventHandler;
		onDocumentLoad?: ModuleEventHandler;
		onDocumentStart?: ModuleEventHandler;
		onModuleStart?: ModuleEventHandler;
		onModuleStop?: ModuleEventHandler;
	} = {};
	state: TypedObject = {};
	pathRegex: RegExp = /\//i;
	isActive: boolean = false;
	moduleName: string | null | undefined = null;

	constructor (
		methods: typeof YTUModule["prototype"]["methods"],
		pathRegex: string | RegExp,
		moduleName: string,
	)
	{

		super();

		if (pathRegex)
			this.pathRegex = typeof pathRegex === "string"
				? new RegExp(pathRegex)
				: pathRegex;
		else
			throw new Error("Path regex not specified");

		for (let methodName in (methods || {}))
			if (methods[methodName] && typeof methods[methodName] === "function")
				this.methods[methodName] = methods[methodName].bind(this);

		if (moduleName)
			this.moduleName = moduleName;
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