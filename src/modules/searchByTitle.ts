import { modules } from "userscriptbase";

const IDS = { SEARCH_BTN: "ytutils-searchbytitle-searchbtn" };

// TODO: fix soft redirects (playlist to video in it) causing the button to be added before text.
// (for now "fixed" by inserting search button before title)
export function addSearchBtn(this: modules.PageModule)
{
	const {
		utils: {
			pageUtils,
			urlUtils,
			queryAwaiter
		},
		logger,
	} = this;
	if (!queryAwaiter)
		return false;

	/**
	 * Matches `yt-formatted-string` elements that are direct decendants of a
	 * **visible** `h1` tag with the following classes:
	 *  - title
	 *  - style-scope
	 *  - ytd-video-primary-info-renderer
	 * 
	 * (Split for readability)
	 */
	const titleQuery = "h1" +
		".title" +
		".style-scope" +
		".ytd-video-primary-info-renderer" +
		":not([display='none'])" +
		":not([visibility='hidden'])" +
		" > yt-formatted-string",
		// containerQuery = "div#menu-container",
		// titleXpath = "//*[@id=\"container\"]/h1/yt-formatted-string[text()]",
		searchBtn = pageUtils.createElement(
			"span",
			{
				innerText: "🔍",
				title: "Search by this video's title",
				style: "cursor: grab;",
				id: IDS.SEARCH_BTN,
				onclick()
				{
					urlUtils.navigate(
						`https://youtube.com/results?search_query=${encodeURIComponent(
							pageUtils.queryElement(titleQuery).textContent
						)}`
					);
				}
			}
		);
	queryAwaiter.addQuery(
		titleQuery,
		function (result: NodeList)
		{
			if (!(result instanceof NodeList))
				return;
			logger.print(result[0]);
			result[0].parentElement.prepend(searchBtn);
		}
	);
	return true;
}

export function removeSearchBtn(this: modules.PageModule)
{
	for (let id of Object.values(IDS))
		this.utils.pageUtils.removeElementById(id);

	return false;
}