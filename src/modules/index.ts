import { PageModule, /* ModuleUtils */ } from "userscriptbase/modules";

// import * as playlistStats from "./playlistStats";
import * as noShorts from "./noShorts";
import * as noPlaylist from "./noPlaylist";
import * as searchByTitle from "./searchByTitle";
import * as noAds from "./noAds";

export default function createModuleList(options: Pick<PageModule, "utils">): PageModule[]
{
	return [
		new PageModule({
			eventHandlers: {
				onModuleStart: noShorts.noShortsOnURLChange,
				onDocumentStart: noShorts.noShortsOnURLChange,
			},
			methods: { "yt-navigate-start": noShorts.noShortsOnNavigate, },
			shouldBeActive: /^\/shorts\/.+$/i,
			utils: options.utils,
			moduleName: "No Shorts Redirector",
		}),
		/* new PageModule({
			methods: {
				"yt-page-data-fetched": playlistStats.plDataFetched,
				"yt-service-request-completed": playlistStats.updateStats,
				"yt-watch-comments-ready": playlistStats.addPLStats,
			},
			eventHandlers: {
				onModuleStart: playlistStats.initState,
				onDocumentStart: playlistStats.initState,
			},
			shouldBeActive: ModuleUtils.activateForRegex(/^\/playlist\/?$/i),
			moduleName: "Custom Playlist Statistics",
		}), */
		new PageModule({
			eventHandlers: {
				onDocumentLoad: noPlaylist.addNoPLControls,
				onModuleStart: noPlaylist.addNoPLControls,
				onModuleStop: noPlaylist.removeNoPLControls,
			},
			shouldBeActive: noPlaylist.shouldBeActiveFor,
			utils: options.utils,
			moduleName: "No Playlist Controls",
		}),
		new PageModule({
			eventHandlers: {
				onModuleStart: searchByTitle.addSearchBtn,
				onModuleStop: searchByTitle.removeSearchBtn,
			},
			shouldBeActive: /^\/watch\/?$/,
			moduleName: "Search by title",
			utils: options.utils,
		}),
		new PageModule({
			eventHandlers: { init: noAds.addListeners, },
			moduleName: "No (more) banner ads",
			utils: options.utils,
		}),
	]
};