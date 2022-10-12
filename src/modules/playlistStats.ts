import { utils } from "userscriptbase";

import type { modules } from "userscriptbase";
import type { IYTCustomEvent } from "../../types/CustomEvent";

interface IPlaylistData
{
	total: number;
	remaining: number;
}
const STATE_KEYS = {
	TOTAL_RUNTIME: "totalRuntime",
	REMAINING_RUNTIME: "remainingRuntime",
};

function playlistDataReduceFunc(
	playlist: IPlaylistData,
	video: any
)
{
	if (!video.playlistVideoRenderer)
		return playlist;
	let total = Number.parseInt(video.playlistVideoRenderer.lengthSeconds),
		percentage = video
			.playlistVideoRenderer
			?.thumbnailOverlays[1]
			?.thumbnailOverlayResumePlaybackRenderer
			?.percentDurationWatched || 0,
		remaining = total - (total * percentage / 100);

	playlist.total += total;
	playlist.remaining += remaining;
	return playlist;
}

function getPlaylistStats(playlistData: IPlaylistData)
{
	return [
		{
			runs: [
				{ text: "Runtime: " },
				{ text: utils.DateUtils.getTimeString(playlistData.total) },
			],
		},
		{
			runs: [
				{ text: "Estimated remaining: " },
				{ text: utils.DateUtils.getTimeString(playlistData.remaining) },
			],
		},
	];
}

/**
 * Adds the total and estimated remaining time of the current playlist.
 */
export function addPLStats(this: modules.PageModule, payload: IYTCustomEvent)
{
	const playlistData: IPlaylistData = payload
		.detail
		.pageData
		.response
		.contents
		.twoColumnBrowseResultsRenderer
		.tabs[0]
		.tabRenderer
		.content
		.sectionListRenderer
		.contents[0]
		.itemSectionRenderer
		.contents[0]
		.playlistVideoListRenderer
		.contents
		.reduce(
			playlistDataReduceFunc,
			{
				total: this.getStateValue(STATE_KEYS.TOTAL_RUNTIME, 0),
				remaining: this.getStateValue(STATE_KEYS.REMAINING_RUNTIME, 0),
			}
		),
		customStats = getPlaylistStats(playlistData);

	this.setStateValue(STATE_KEYS.TOTAL_RUNTIME, playlistData.total);
	this.setStateValue(STATE_KEYS.REMAINING_RUNTIME, playlistData.remaining);

	this.logger.print({
		playlistData,
		customStats,
		stats: payload
			.detail
			.pageData
			.response
			.sidebar
			.playlistSidebarRenderer
			.items[0]
			.playlistSidebarPrimaryInfoRenderer
			.stats
	});

	payload
		.detail
		.pageData
		.response
		.sidebar
		.playlistSidebarRenderer
		.items[0]
		.playlistSidebarPrimaryInfoRenderer
		.stats
		.push(...customStats);
	this.logger.print("Added time to playlist!");

	this.isActive = true;
}

// FIXME: Stats not updating if there are less than 100 videos in response.
export function updateStats(this: modules.PageModule, payload: Event & { detail: any })
{
	if (!(payload
		?.detail
		?.data
		?.onResponseReceivedActions
		?.[0]
		?.appendContinuationItemsAction
		?.continuationItems
	))
		return;

	const playlistData: IPlaylistData = payload
		.detail
		.data
		.onResponseReceivedActions[0]
		.appendContinuationItemsAction
		.continuationItems
		.reduce(
			playlistDataReduceFunc,
			{
				total: this.getStateValue(STATE_KEYS.TOTAL_RUNTIME, 0),
				remaining: this.getStateValue(STATE_KEYS.REMAINING_RUNTIME, 0),
			}
		),
		customStats = getPlaylistStats(playlistData);
	let statName: { text: string; }, statValue: { text: string; }, statValueNode: Node;
	this.setStateValue(STATE_KEYS.TOTAL_RUNTIME, playlistData.total);
	this.setStateValue(STATE_KEYS.REMAINING_RUNTIME, playlistData.remaining);
	this.logger.print({ playlistData, customStats });
	for (let stat of customStats)
	{
		[statName, statValue] = stat.runs;
		statValueNode = this
			.utils
			.pageUtils
			.evaluate(
				`//*[@id="stats"]/yt-formatted-string/span[text() = "${statName.text}"]`,
				document.body ?? document,
				null,
				XPathResult.ANY_UNORDERED_NODE_TYPE,
				null
			)
			.singleNodeValue
			.parentElement
			.lastChild;
		statValueNode.textContent = statValue.text;
	}

}