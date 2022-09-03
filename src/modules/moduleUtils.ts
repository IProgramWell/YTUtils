import YTUModule from "./YTUModule";

export function onModuleEvent<
	HN extends keyof YTUModule["eventHandlers"] = keyof YTUModule["eventHandlers"],
	HF extends YTUModule["eventHandlers"][HN] = YTUModule["eventHandlers"][HN],
>(
	moduleList: YTUModule[],
	eventHandlerName: HN,
	handlerArgs: Parameters<HF>,
	defaultIsActive: boolean = true
)
{
	for (let module of moduleList)
		if (
			module.shouldBeActive(document.location) &&
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

export function activateForRegex(
	regex: RegExp | string, wholeUrl: boolean = false
)
{
	const ACTIVATE_REGEXP = typeof regex === "string"
		? new RegExp(regex)
		: regex;
	return function (
		this: YTUModule,
		url: URL | string | Location = document.location
	): boolean
	{
		const TEST_URL = typeof url === "string"
			? new URL(url)
			: url;
		return ACTIVATE_REGEXP.test(wholeUrl
			? TEST_URL.href
			: TEST_URL.pathname
		);
	}
}