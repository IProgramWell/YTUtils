import { GLOBAL_MANAGER } from "../config/index";
import { getTimeString } from "../utils/DateUtils";

import type {
	IYTCustomEvent
} from "../../types/CustomEvent";

//TODO: Find a way to make sure the time was added BEFORE being added to the sidebar.
//(will probably work because the script runs first thing buuuuut...)
/**
 * Adds the total and estimated remaining time of the current playlist.
 */
export default function initCustomPlaylistRuntimeDisplay(payload: IYTCustomEvent)
{
	let playlistSeconds: { total: number; remaining: number; } = payload
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
			(
				playlist: typeof playlistSeconds,
				video: any
			): typeof playlistSeconds =>
			{
				let total = Number.parseInt(video.playlistVideoRenderer.lengthSeconds),
					percentage = video
						.playlistVideoRenderer
						?.thumbnailOverlays[1]
						?.thumbnailOverlayResumePlaybackRenderer
						?.percentDurationWatched || 0,
					remaining = total - (total * percentage / 100);

				GLOBAL_MANAGER.print(
					`Video "${video.playlistVideoRenderer.videoId}"`,
					`has a remaining watch time of ${remaining} seconds`,
					`out of ${total}.`
				);

				playlist.total += total;
				playlist.remaining += remaining;
				return playlist;
			},
			{ total: 0, remaining: 0, }
		)

	let runtimeString = `Runtime: ${getTimeString(playlistSeconds.total)}`,
		remainingString = `Estimated remaining: ${getTimeString(playlistSeconds.remaining)}`;

	GLOBAL_MANAGER.print({
		playlistSeconds,
		runtimeString,
		remainingString
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
		.push(
			{ simpleText: runtimeString },
			{ simpleText: remainingString }
		);
	GLOBAL_MANAGER.print("Added time to playlist!");

	return true;
}

export function addTimeManually(timeString: string, checkFirst = true): boolean
{
	try
	{
		const STATS_BLOCK = document.getElementById("stats");

		if (!STATS_BLOCK)
			return false;

		if (checkFirst && STATS_BLOCK.innerText.includes(timeString))
			return true;

		STATS_BLOCK
			.appendChild(Object.assign(
				document.createElement("yt-formatted-string"),
				{
					className: "style-scope ytd-playlist-sidebar-primary-info-renderer",
				}
			))
			.innerText = timeString;

		return true;
	}
	catch (_)
	{
		return false;
	}
}