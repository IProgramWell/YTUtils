import { utils } from "userscriptbase";

export const GLOBAL_AWAITER = new utils.QueryAwaiter({
	autoStart: true,
	target: document.body ?? document
});

export const CUSTOM_YT_EVENTS = [
	"yt-page-data-fetched",
	"yt-service-request-completed",
	"yt-navigate-finish",
	// "yt-app-context",
	// "yt-playlist-data-updated",
	// "yt-navigate-redirect",
	// "yt-get-context-provider",
	// "yt-playlist-reloading",
];