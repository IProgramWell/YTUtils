import { modules } from "userscriptbase";

import { GLOBAL_AWAITER } from "../config";

const IDS = { SEARCH_BTN: "ytutils-searchbytitle-searchbtn" };

// TODO: fix soft redirects (playlist to video in it) causing the button to be added before text.
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
	/* let query = "h1" +
	".title" +
	".style-scope" +
	".ytd-video-primary-info-renderer" +
	":not([display='none'])" +
	":not([visibility='hidden'])" +
	" > yt-formatted-string"; */
	const /* containerQuery = "div#menu-container",  */
		titleXpath = "//*[@id=\"container\"]/h1/yt-formatted-string[text()]",
		btnText = "🔍";
	GLOBAL_AWAITER.addXpath(
		{
			xpath: titleXpath,
			contextNode: document.body ?? document,
			isValidResult(result)
			{
				try { return !!result.singleNodeValue; }
				catch (_) { return false; }
			},
			resultType: XPathResult.ANY_UNORDERED_NODE_TYPE,
		},
		function (result: XPathResult)
		{
			if (!(result instanceof XPathResult))
				return;
			logger.print(result.singleNodeValue);
			result
				.singleNodeValue
				.appendChild(pageUtils.createElement(
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
										.evaluate(
											titleXpath,
											document.body ?? document,
											null,
											XPathResult.ANY_UNORDERED_NODE_TYPE,
											null
										)
										.singleNodeValue
										.textContent
										.split(btnText)
										.join("")
								)}`
							);
						}
					}
				));
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