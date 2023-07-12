import type { PageModule } from "userscriptbase/modules";

interface NoAdModule extends PageModule<
	{ onModuleStart(this: NoAdModule): boolean; },
	{},
	{}
> { }

export function onModuleStart(this: NoAdModule): boolean
{
	let { queryAwaiter } = this.utils;

	if (!queryAwaiter)
		return false;

	queryAwaiter.addQuery(
		"div#masthead-ad",
		function (ads: NodeList)
		{
			for (let ad of Array.from(ads))
				ad.parentElement.removeChild(ad);
		}
	);

	queryAwaiter.addQuery(
		"ytd-in-feed-ad-layout-renderer",
		function (ads: NodeList)
		{
			for (let ad of Array.from(ads))
				ad.parentElement.parentElement.parentElement.remove();
		}
	);

	queryAwaiter.addQuery(
		"ytd-ad-slot-renderer",
		function (ads: NodeList)
		{
			for (let ad of Array.from(ads))
				ad.parentElement.removeChild(ad);
		}
	);

	return true;
}