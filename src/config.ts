import { utils } from "userscriptbase";

export const GLOBAL_AWAITER = new utils.QueryAwaiter({
	autoStart: true,
	target: document
});
/**
 * Maps youtube event names to handler names
 */
export const CUSTOM_YT_EVENTS = {
	"yt-page-data-fetched": "onPageDataFetch",
	"yt-navigate-finish": "onNavigateFinish",
	"yt-service-request-completed": "onServiceReqCompleted",
	"yt-navigate-redirect": "onNavigateRedirect",
	"yt-app-context": "onAppContext",
	"yt-get-context-provider": "onContextProviderGet",
	"yt-playlist-reloading": "playlistReloading",
	"yt-playlist-data-updated": "onPlaylistUpdated",
};