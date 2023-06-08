import { QueryAwaiter } from "userscriptbase/utils";

export const GLOBAL_AWAITER: QueryAwaiter = new QueryAwaiter({
	autoStart: true,
	target: document.body ?? document
});

export const YT_EVENTS: string[] = [
	// "yt-page-data-fetched",
	// "yt-service-request-completed",
	// "yt-page-data-updated",
	// "data-changed",
	// "yt-navigate-finish",
	"yt-navigate-start",
	// "yt-app-context",
	// "yt-playlist-data-updated",
	// "yt-navigate-redirect",
	// "yt-get-context-provider",
	// "yt-playlist-reloading",
	// "yt-watch-comments-ready",
];

export const CLASSES = {
	"ytutils-no-pl-btn": `{
	float: left;
	top: 50%;
	white-space: nowrap;
}`,
} satisfies Record<string, string>;