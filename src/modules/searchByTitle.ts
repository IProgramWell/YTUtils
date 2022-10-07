import { modules } from "userscriptbase";

import { GLOBAL_AWAITER } from "../config";

const IDS = {
	SEARCH_BTN: "ytutils-searchbytitle-searchbtn",
};
export function addSearchBtn(this: modules.PageModule/* , event: IYTPlayerEvent */)
{
	const {
		pageUtils
	} = this.utils;
	for (let [idName, idValue] of Object.entries(IDS))
		this.setStateValue(idName, idValue);

	/**
	 * Matches `yt-formatted-string` elements that are direct decendants of a
	 * **visible** `h1` tag with the following classes:
	 *  - title
	 *  - style-scope
	 *  - ytd-video-primary-info-renderer
	 * 
	 * (Split for readability)
	 */
	let query = "h1" +
		".title" +
		".style-scope" +
		".ytd-video-primary-info-renderer" +
		":not([display='none'])" +
		":not([visibility='hidden'])" +
		" > yt-formatted-string",
		titleElem = pageUtils.queryElement(query);
	if (!titleElem)
		GLOBAL_AWAITER.addQuery(
			query,
			nodes => onTitleElemFound(nodes[0], this)
		);
	else
		onTitleElemFound(titleElem, this);
	return true;
}

function onTitleElemFound(
	title: Node,
	thisArg: modules.PageModule
)
{
	if (!(title instanceof HTMLElement))
		return;
	const titleText = title.innerText;
	title.appendChild(thisArg.utils.pageUtils.createElement(
		"a",
		{
			innerText: "🔍",
			title: "Search by this video's title",
			id: thisArg.getStateValue("SEARCH_BTN", IDS.SEARCH_BTN),
			href: `https://youtube.com/results?search_query=${encodeURIComponent(titleText)}`
		}
	));
}

export function removeSearchBtn(this: modules.PageModule)
{
	for (let [idName, idValue] of Object.entries(IDS))
		this.utils.pageUtils.removeElementById(
			this.getStateValue(
				idName,
				idValue
			)
		);

	return false;
}