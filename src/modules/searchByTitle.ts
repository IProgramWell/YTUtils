import type { PageModule } from "userscriptbase/modules";

const IDS = { SEARCH_BTN: "ytutils-searchbytitle-searchbtn" };
const TITLE_QUERY = "h1.style-scope.ytd-watch-metadata yt-formatted-string.style-scope.ytd-watch-metadata";

// BUG: navigating back to a video from a search causes search button to be added to cached one.
// BROKEN!!
// FIXME: Doesn't work on refresh.
export function addSearchBtn(this: PageModule): boolean
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

	queryAwaiter.addQuery(
		TITLE_QUERY,
		function ([title]: HTMLElement[])
		{
			logger.print(title);
			title.parentElement.appendChild(pageUtils.createElement(
				"span",
				{
					innerText: "🔍",
					title: "Search by this video's title",
					style: "cursor: grab;",
					id: IDS.SEARCH_BTN,
					onclick(): void
					{
						let currentTitleText = pageUtils.queryElement(TITLE_QUERY)?.textContent;
						if (currentTitleText)
							urlUtils.navigate(
								"https://youtube.com/results?search_query=" +
								encodeURIComponent(currentTitleText)
							);
					}
				}
			));
		},
		true
	);

	return true;
}

export function removeSearchBtn(this: PageModule): boolean
{
	for (let id of Object.values(IDS))
		this.utils.pageUtils.removeElementById(id);

	return false;
}