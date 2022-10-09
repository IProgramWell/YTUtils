import { modules } from "userscriptbase";

import { GLOBAL_AWAITER } from "../config";

const IDS = { SEARCH_BTN: "ytutils-searchbytitle-searchbtn" };

// TODO: fix soft redirects (playlist to video in it) causing the button to be added before text.
// (for now "fixed" by inserting search button before title)
export function addSearchBtn(this: modules.PageModule)
{
	const {
		utils: {
			pageUtils,
			urlUtils,
		},
		logger
	} = this;

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
		btnText = "🔍",
		searchBtn = pageUtils.createElement(
			"span",
			{
				innerText: btnText,
				title: "Search by this video's title",
				style: "cursor: grab;",
				id: IDS.SEARCH_BTN,
				onclick(event: Event)
				{
					event.preventDefault();
					urlUtils.navigate(
						`https://youtube.com/results?search_query=${encodeURIComponent(
							pageUtils
								.queryElement(titleQuery)
								.textContent
								.split(btnText)
								.join("")
						)}`
					);
				}
			}
		);
	GLOBAL_AWAITER.addQuery(
		titleQuery,
		function (result: NodeList)
		{
			if (!(result instanceof NodeList))
				return;
			logger.print(result[0]);
			if (result[0].firstChild)
				(result[0] as Element).insertBefore(
					searchBtn,
					result[0].firstChild
				);
			else
				result[0].appendChild(searchBtn);
		}
	);
	return true;
}

export function removeSearchBtn(this: modules.PageModule)
{
	this.logger.print(this, IDS);
	for (let id of Object.values(IDS))
		this.utils.pageUtils.removeElementById(id);

	return false;
}