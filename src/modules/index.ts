import { modules, utils } from "userscriptbase";

import { GLOBAL_AWAITER, } from "../config";
// import * as playlistStats from "./playlistStats";
import * as noShorts from "./noShorts";
import * as noPlaylist from "./noPlaylist";
import * as searchByTitle from "./searchByTitle";

export default [
	new modules.PageModule({
		eventHandlers: { onModuleStart: noShorts.noShortsOnURLChange, },
		shouldBeActive: modules.ModuleUtils.activateForRegex(/^\/shorts\/.+$/i),
		moduleName: "No Shorts Redirector",
	}),
	/* new modules.PageModule({
		methods: {
			"yt-page-data-fetched": playlistStats.addPLStats,
			"yt-service-request-completed": playlistStats.updateStats,
		},
		shouldBeActive: modules.ModuleUtils.activateForRegex(/^\/playlist\/?$/i),
		moduleName: "Custom Playlist Statistics",
	}), */
	new modules.PageModule({
		eventHandlers: {
			onDocumentLoad: noPlaylist.addNoPLControls,
			onModuleStart: noPlaylist.addNoPLControls,
			onModuleStop: noPlaylist.removeNoPLControls,
		},
		shouldBeActive: noPlaylist.shouldBeActiveFor,
		moduleName: "No Playlist Controls"
	}),
	new modules.PageModule({
		eventHandlers: {
			onModuleStart: searchByTitle.addSearchBtn,
			onModuleStop: searchByTitle.removeSearchBtn,
		},
		shouldBeActive: modules.ModuleUtils.activateForRegex(/^\/watch\/?$/),
		moduleName: "Search by title",
		utils: {
			pageUtils: utils.PageUtils,
			urlUtils: utils.URLUtils,
			queryAwaiter: GLOBAL_AWAITER,
		},
	}),
];