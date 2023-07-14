import type { PageModule } from "userscriptbase/modules";

export function addListeners(this: PageModule): void
{
	let { queryAwaiter, } = this.utils;

	if (!queryAwaiter)
		return;

	queryAwaiter.addQuery(
		"div#masthead-ad",
		function (ads: NodeList)
		{
			for (let ad of Array.from(ads))
				ad.parentElement.removeChild(ad);
		},
		false
	);

	queryAwaiter.addQuery(
		"ytd-in-feed-ad-layout-renderer",
		function (ads: NodeList)
		{
			for (let ad of Array.from(ads))
				ad.parentElement.parentElement.parentElement.remove();
		},
		false
	);

	queryAwaiter.addQuery(
		"ytd-ad-slot-renderer",
		function (ads: NodeList)
		{
			for (let ad of Array.from(ads))
				ad.parentElement.removeChild(ad);
		},
		false
	);
}