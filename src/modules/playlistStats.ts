import { DateUtils } from "userscriptbase/utils";

import type { PageModule } from "userscriptbase/modules";
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

function getPlaylistStats(playlistData: IPlaylistData): { runs: { text: string; }[]; }[]
{
	return [
		{
			"runs": [
				{ "text": "Runtime: " },
				{ "text": DateUtils.getTimeString(playlistData.total) },
			],
		},
		{
			"runs": [
				{ "text": "Estimated remaining: " },
				{ "text": DateUtils.getTimeString(playlistData.remaining) },
			],
		},
	];
}

// TODO: figure out what broke when yt changed their shit.
/**
 * Adds the total and estimated remaining time of the current playlist.
 */
export function addPLStats(this: PageModule, payload: IYTCustomEvent): void
{
	this.logger.print(payload.currentTarget);
	const playlistData: IPlaylistData = payload
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
		),
		customStats = getPlaylistStats(playlistData);

	this.setStateValue(STATE_KEYS.TOTAL_RUNTIME, playlistData["total"]);
	this.setStateValue(STATE_KEYS.REMAINING_RUNTIME, playlistData["remaining"]);

	this.logger.print({
		"playlistData": playlistData,
		"customStats": customStats,
		"stats": payload
		["detail"]
		["pageData"]
		["response"]
		["sidebar"]
		["playlistSidebarRenderer"]
		["items"]
		[0]
		["playlistSidebarPrimaryInfoRenderer"]
		["stats"]
	});

	payload
	["detail"]
	["pageData"]
	["response"]
	["sidebar"]
	["playlistSidebarRenderer"]
	["items"][0]
	["playlistSidebarPrimaryInfoRenderer"]
	["stats"]
	["push"](...customStats);
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
		),
		customStats = getPlaylistStats(playlistData);
	let statName: { text: string; }, statValue: { text: string; };
	this.setStateValue(STATE_KEYS.TOTAL_RUNTIME, playlistData["total"]);
	this.setStateValue(STATE_KEYS.REMAINING_RUNTIME, playlistData["remaining"]);
	this.logger.print({ playlistData, customStats });
	for (let stat of customStats)
	{
		[statName, statValue] = stat["runs"];
		this
			.utils
			.pageUtils
			.evaluate(
				`//ytd-playlist-byline-renderer/div/yt-formatted-string/span[text() = "${statName.text}"]`,
				document.body ?? document,
				null,
				XPathResult.ANY_UNORDERED_NODE_TYPE,
				null
			)
			.singleNodeValue
			.parentElement
			.lastChild
			.textContent = statValue["text"];
	}
}