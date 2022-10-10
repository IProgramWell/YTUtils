import { modules, utils } from "userscriptbase";

import { GLOBAL_AWAITER } from "../config";
import addPLStats from "./playlistStats";
import noShortsOnURLChange from "./noShorts";
import * as noPlaylist from "./noPlaylist";
import * as searchByTitle from "./searchByTitle";

export default [
	new modules.PageModule({
		eventHandlers: { onModuleStart: noShortsOnURLChange, },
		shouldBeActive: modules.ModuleUtils.activateForRegex(/^\/shorts\/.*\/?$/i),
		moduleName: "No Shorts Redirector",
	}),
	new modules.PageModule({
		methods: { onPageDataFetch: addPLStats, },
		shouldBeActive: modules.ModuleUtils.activateForRegex(/^\/playlist\/?$/i),
		moduleName: "Custom Playlist Statistics",
	}),
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
		methods: { onPageDataFetch: searchByTitle.updateTitleState },
		shouldBeActive: modules.ModuleUtils.activateForRegex(/^\/watch\/?$/),
		moduleName: "Search by title",
		utils: {
			pageUtils: utils.PageUtils,
			urlUtils: utils.URLUtils,
			queryAwaiter: GLOBAL_AWAITER,
		},
	}),
];