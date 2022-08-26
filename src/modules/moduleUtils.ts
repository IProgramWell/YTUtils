import YTUModule from "./YTUModule";
import MODULES from "./moduleList";

export function onModuleEvent<
	HN extends keyof YTUModule["eventHandlers"] = keyof YTUModule["eventHandlers"],
	HF extends YTUModule["eventHandlers"][HN] = YTUModule["eventHandlers"][HN],
>(
	eventHandlerName: HN,
	handlerArgs: Parameters<HF>,
	defaultIsActive: boolean = true
)
{
	for (let module of MODULES)
		if (
			module.pathRegex.test(document.location.pathname) &&
			module.eventHandlers[eventHandlerName] &&
			typeof module.eventHandlers[eventHandlerName] === "function"
		)
			module.isActive = (
				module.eventHandlers[eventHandlerName] as
				//I hate that I have to use `as` EVERYWHERE in typecript
				(...args: Parameters<HF>) => ReturnType<HF>
			)
				?.(...handlerArgs) ??
				defaultIsActive;
};