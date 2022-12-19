import { utils } from "userscriptbase";

export const GLOBAL_AWAITER = new utils.QueryAwaiter({
	autoStart: true,
	target: document
});

export const CUSTOM_YT_EVENTS = [
	"yt-page-data-fetched",
	"yt-navigate-finish",
	"yt-service-request-completed",
	"yt-navigate-redirect",
	"yt-app-context",
	"yt-get-context-provider",
	"yt-playlist-reloading",
	"yt-playlist-data-updated",
];