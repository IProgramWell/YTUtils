import type { PageModule } from "userscriptbase/modules";

export function noShortsOnURLChange(this: PageModule): boolean
{
	const [_, section, shortsID] = this
		.utils
		.urlUtils
		.getCurrentLocation()
		.pathname
		.split("/");

	if (section === "shorts")
		this.utils.urlUtils.navigate(`https://youtube.com/watch?v=${shortsID}`);
	return true;
};