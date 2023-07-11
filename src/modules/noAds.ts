import type { PageModule } from "userscriptbase/modules";

interface NoAdModule extends PageModule<
	{ onModuleStart(this: PageModule): boolean; },
	{},
	{}
> { }

export function onModuleStart(this: NoAdModule)
{
	this.utils.queryAwaiter?.addQuery(
		"div#masthead-ad",
		function (ads: NodeList)
		{
			for (let ad of Array.from(ads))
				ad.parentElement.removeChild(ad);
		}
	);

	return false;
}