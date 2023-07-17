import type { PageModule } from "userscriptbase/modules";

export function addListeners(this: PageModule): void
{
	let { utils: { queryAwaiter, }, logger, } = this;

	if (!queryAwaiter)
		return;

	queryAwaiter.addQuery(
		"div#masthead-ad",
		function (ads: NodeList)
		{
			logger.print(`Removing ${ads.length} ads for selector "div#masthead-ad"`);
			for (let ad of Array.from(ads))
				ad.parentElement.removeChild(ad);
		},
		false
	);

	/* queryAwaiter.addQuery(
		"ytd-in-feed-ad-layout-renderer",
		function (ads: NodeList)
		{
			logger.print(`Removing ${ads.length} ads for selector "ytd-in-feed-ad-layout-renderer"`);
			for (let ad of Array.from(ads))
				ad.parentElement.parentElement.remove();
		},
		false
	); */

	queryAwaiter.addQuery(
		"ytd-ad-slot-renderer",
		function (ads: NodeList)
		{
			logger.print(`Removing ${ads.length} ads for selector "ytd-ad-slot-renderer"`);
			for (let ad of Array.from(ads))
				ad.parentElement.removeChild(ad);
		},
		false
	);
}