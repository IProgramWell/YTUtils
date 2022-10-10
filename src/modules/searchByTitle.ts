import type { modules } from "userscriptbase";
import type { IYTPlayerEvent } from "../../types/CustomEvent";

const IDS = { SEARCH_BTN: "ytutils-searchbytitle-searchbtn" };
const STATE_KEYS = { VIDEO_TITLE: "videoTitle" };

export function updateTitleState(this: modules.PageModule, event: IYTPlayerEvent)
{
	this?.setStateValue?.(
		STATE_KEYS.VIDEO_TITLE,
		event.detail.pageData.playerResponse.videoDetails.title
	);
}

export function addSearchBtn(this: modules.PageModule)
{
	const {
		utils: {
			pageUtils,
			urlUtils,
			queryAwaiter
		},
		logger,
		getStateValue
	} = this;
	if (!queryAwaiter)
		return false;

	const searchBtn = pageUtils.createElement(
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
						getStateValue?.(STATE_KEYS.VIDEO_TITLE, null)
					)}`
				);
			}
		}
	);
	queryAwaiter.addXpath(
		{
			xpath: "//*[@id=\"container\"]/h1/yt-formatted-string[text()]",
			contextNode: document.body ?? document,
			isValidResult(result)
			{
				try { return !!result.singleNodeValue; }
				catch (_) { return false; }
			},
			resultType: XPathResult.ANY_UNORDERED_NODE_TYPE
		},
		function (result)
		{
			logger.print(result.singleNodeValue);
			result.singleNodeValue.parentElement.append(searchBtn);
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