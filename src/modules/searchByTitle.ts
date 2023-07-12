import type { PageModule } from "userscriptbase/modules";

const IDS = { SEARCH_BTN: "ytutils-searchbytitle-searchbtn" };
const TITLE_QUERY = "div#title yt-formatted-string";

// BUG: navigating back to a video from a search causes search button to be added to cached one.
export function addSearchBtn(this: PageModule): boolean
{
	const {
		utils: {
			pageUtils,
			urlUtils,
			queryAwaiter
		},
		logger
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
			onclick(): void
			{
				let title = pageUtils.queryElement(TITLE_QUERY)?.textContent;
				if (title)
					urlUtils.navigate(
						`https://youtube.com/results?search_query=${encodeURIComponent(title)}`
					);
			}
		}
	);
	queryAwaiter.addQuery(
		TITLE_QUERY,
		function (titleList: NodeListOf<HTMLElement>)
		{
			let title = titleList[0];
			logger.print(title);
			title.parentElement.appendChild(searchBtn);
		}
	)
	return true;
}

export function removeSearchBtn(this: PageModule): boolean
{
	for (let id of Object.values(IDS))
		this.utils.pageUtils.removeElementById(id);

	return false;
}