import { DateUtils } from "userscriptbase/utils";

import type { PageModule } from "userscriptbase/modules";

interface IPlaylistData
{
	total: number;
	remaining: number;
}
const STATE_KEYS = {
	TOTAL_RUNTIME: "totalRuntime",
	REMAINING_RUNTIME: "remainingRuntime",
	PLAYLIST_DATA: "plData",
};
const REMAINING_TEXT = "Estimated remaining: ";
const RUNTIME_TEXT = "Runtime: ";

function playlistDataReduceFunc(
	playlist: IPlaylistData,
	video: any
): IPlaylistData
{
	if (!video["playlistVideoRenderer"])
		return playlist;
	let total = Number.parseInt(video["playlistVideoRenderer"]["lengthSeconds"]),
		percentage = video["playlistVideoRenderer"]
			?.["thumbnailOverlays"][1]
			?.["thumbnailOverlayResumePlaybackRenderer"]
			?.["percentDurationWatched"] || 0,
		remaining = total - (total * percentage / 100);

	playlist["total"] += total;
	playlist["remaining"] += remaining;
	return playlist;
}

export function initState(this: PageModule): void
{
	this.setStateValue(STATE_KEYS.TOTAL_RUNTIME, 0);
	this.setStateValue(STATE_KEYS.REMAINING_RUNTIME, 0);
}

export function plDataFetched(this: PageModule, payload: CustomEvent): void
{
	let plData: IPlaylistData = payload
	["detail"]
	["pageData"]
	["response"]
	["contents"]
	["twoColumnBrowseResultsRenderer"]
	["tabs"][0]
	["tabRenderer"]
	["content"]
	["sectionListRenderer"]
	["contents"][0]
	["itemSectionRenderer"]
	["contents"][0]
	["playlistVideoListRenderer"]
	["contents"]
		.reduce(
			playlistDataReduceFunc,
			{
				"total": this.getStateValue(STATE_KEYS.TOTAL_RUNTIME, 0),
				"remaining": this.getStateValue(STATE_KEYS.REMAINING_RUNTIME, 0),
			}
		);
	this.setStateValue(STATE_KEYS.TOTAL_RUNTIME, plData["total"]);
	this.setStateValue(STATE_KEYS.REMAINING_RUNTIME, plData["remaining"]);
}

/* 
yt-page-data-fetched
data-changed
yt-page-data-updated
yt-service-request-completed
 */
// TODO: figure out what broke when yt changed their shit.
/**
 * Adds the total and estimated remaining time of the current playlist.
 */
export function addPLStats(this: PageModule): void
{
	const container: Element = this.utils.pageUtils.queryElement("div.metadata-stats");

	const seperator: Element = this.utils.pageUtils.createElement(
		"yt-icon",
		{
			id: "byline-icon",
			className: "style-scope ytd-playlist-byline-renderer",
		}
	);
	const runtimeDisplay: Element = this.utils.pageUtils.createElement(
		"yt-formatted-string",
		{ className: "byline-item style-scope ytd-playlist-byline-renderer ytutils-test", },
		[
			this.utils.pageUtils.createElement(
				"span",
				{
					dir: "auto",
					className: "style-scope yt-formatted-string",
				},
				[RUNTIME_TEXT]
			),
			this.utils.pageUtils.createElement(
				"span",
				{
					dir: "auto",
					className: "style-scope yt-formatted-string",
				},
				[DateUtils.getTimeString(this.getStateValue(STATE_KEYS.TOTAL_RUNTIME, 0))]
			),
		]
	);
	const remainingTimeDisplay: Element = this.utils.pageUtils.createElement(
		"yt-formatted-string",
		{ className: "byline-item style-scope ytd-playlist-byline-renderer ytutils-test", },
		[
			this.utils.pageUtils.createElement(
				"span",
				{
					dir: "auto",
					className: "style-scope yt-formatted-string",
				},
				[REMAINING_TEXT]
			),
			this.utils.pageUtils.createElement(
				"span",
				{
					dir: "auto",
					className: "style-scope yt-formatted-string",
				},
				[DateUtils.getTimeString(this.getStateValue(STATE_KEYS.REMAINING_RUNTIME, 0))]
			),
		]
	);
	const lastNode: Element = this.utils.pageUtils.queryElement("dom-repeat.style-scope ytd-playlist-byline-renderer");
	for (let node of [
		seperator,
		runtimeDisplay,
		remainingTimeDisplay,
	])
		container.insertBefore(node, lastNode);

	this.logger.print("Added time to playlist!");

	this.isActive = true;
}

// BUG: Stats not updating if there are less than 100 videos in response.
export function updateStats(this: PageModule, payload: Event & { detail: any }): void
{
	if (!(payload
		?.["detail"]
		?.["data"]
		?.["onResponseReceivedActions"]
		?.[0]
		?.["appendContinuationItemsAction"]
		?.["continuationItems"]
	))
		return;

	const playlistData: IPlaylistData = payload
	["detail"]
	["data"]
	["onResponseReceivedActions"]
	[0]
	["appendContinuationItemsAction"]
	["continuationItems"]
		.reduce(
			playlistDataReduceFunc,
			{
				"total": this.getStateValue(STATE_KEYS.TOTAL_RUNTIME, 0),
				"remaining": this.getStateValue(STATE_KEYS.REMAINING_RUNTIME, 0),
			}
		);
	this.setStateValue(STATE_KEYS.TOTAL_RUNTIME, playlistData["total"]);
	this.setStateValue(STATE_KEYS.REMAINING_RUNTIME, playlistData["remaining"]);
	for (let [stat, value] of [
		[RUNTIME_TEXT, playlistData.total],
		[REMAINING_TEXT, playlistData.remaining]
	])
	{
		this
			.utils
			.pageUtils
			.evaluate(
				`//ytd-playlist-byline-renderer/div/yt-formatted-string/span[text() = "${stat}"]`,
				document.body ?? document,
				null,
				XPathResult.ANY_UNORDERED_NODE_TYPE,
				null
			)
			.singleNodeValue
			.parentElement
			.lastChild
			.textContent = value;
	}
}