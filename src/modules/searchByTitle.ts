import type { modules } from "userscriptbase";

const IDS = { SEARCH_BTN: "ytutils-searchbytitle-searchbtn" };

export function addSearchBtn(this: modules.PageModule): boolean
{
	const {
		utils: {
			pageUtils,
			urlUtils,
			queryAwaiter
		},
		logger
	} = this;
	const TITLE_XPATH = "//div[@id=\"title\"]/h1/yt-formatted-string[text()]";
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
				urlUtils.navigate(
					`https://youtube.com/results?search_query=${encodeURIComponent(
						pageUtils.evaluate(
							TITLE_XPATH,
							document.body ?? document,
							null,
							XPathResult.ANY_UNORDERED_NODE_TYPE,
							null
						)
							.singleNodeValue
							.textContent
					)}`
				);
			}
		}
	);
	queryAwaiter.addXpath(
		{
			xpath: TITLE_XPATH,
			contextNode: document.body ?? document,
			isValidResult(result): boolean
			{
				try { return !!result.singleNodeValue; }
				catch (_) { return false; }
			},
			resultType: XPathResult.ANY_UNORDERED_NODE_TYPE
		},
		function (result): void
		{
			logger.print(result.singleNodeValue);
			result.singleNodeValue.parentElement.append(searchBtn);
		}
	);
	return true;
}

export function removeSearchBtn(this: modules.PageModule): boolean
{
	for (let id of Object.values(IDS))
		this.utils.pageUtils.removeElementById(id);

	return false;
}