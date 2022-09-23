import { utils, modules } from "userscriptbase";

import type { IYTCustomEvent } from "../../types/CustomEvent";

//TODO: Fix custom playlist stats module shitting itself if playlist is too long.
/**
 * Adds the total and estimated remaining time of the current playlist.
 */
export default function initCustomPlaylistRuntimeDisplay(this: modules.PageModule, payload: IYTCustomEvent)
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
				/* if (!video.playlistVideoRenderer)
					return playlist; */
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
			},
			{ total: 0, remaining: 0, }
		)

	let runtimeString = `Runtime: ${utils.DateUtils.getTimeString(playlistSeconds.total)}`,
		remainingString = `Estimated remaining: ${utils.DateUtils.getTimeString(playlistSeconds.remaining)}`;

	this.logger.print({
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
	this.logger.print("Added time to playlist!");

	this.isActive = true;
}