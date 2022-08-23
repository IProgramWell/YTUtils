import { GLOBAL_MANAGER } from "../config/index";
import { getTimeString } from "../utils/DateUtils";

/**
 * Adds the total and estimated remaining time of the current playlist.
 */
export default function initCustomPlaylistRuntimeDisplay()
{
	/** @type {{ total: number, remaining: number }} */
	let playlistSeconds: { total: number; remaining: number; } = (globalThis as any)
		.ytInitialData
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
			(playlist: typeof playlistSeconds, video: any): typeof playlistSeconds =>
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
		);

	let runtimeString = `Runtime: ${getTimeString(playlistSeconds.total)}`,
		remainingString = `Estimated remaining: ${getTimeString(playlistSeconds.remaining)}`;

	GLOBAL_MANAGER.print({
		playlistSeconds,
		runtimeString,
		remainingString
	});

	(globalThis as any)
		.ytInitialData
		.sidebar
		.playlistSidebarRenderer
		.items[0]
		.playlistSidebarPrimaryInfoRenderer
		.stats
		.push(
			{ simpleText: runtimeString },
			{ simpleText: remainingString }
		);

	const STATS_BLOCK = document.getElementById("stats");
	if (STATS_BLOCK)
	{
		/*
		 * If messing w/ YouTube's data didn't work,
		 * manually add the desired text.
		 */
		let wasRuntimeAdded = STATS_BLOCK.innerText.includes(runtimeString),
			wasRemainingAdded = STATS_BLOCK.innerText.includes(remainingString);

		if (!wasRuntimeAdded)
			STATS_BLOCK
				.appendChild(Object.assign(
					document.createElement("yt-formatted-string"),
					{ className: "style-scope ytd-playlist-sidebar-primary-info-renderer" }
				))
				.innerHTML = runtimeString;
		if (!wasRemainingAdded)
			STATS_BLOCK
				.appendChild(Object.assign(
					document.createElement("yt-formatted-string"),
					{ className: "style-scope ytd-playlist-sidebar-primary-info-renderer" }
				))
				.innerHTML = remainingString;

		GLOBAL_MANAGER.print("Added time to playlist!");
	}
	else
		GLOBAL_MANAGER.print("Unable to verify time was added :(");
	return true;
}