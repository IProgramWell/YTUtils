import { modules, } from "userscriptbase";

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
		utils: { queryAwaiter: GLOBAL_AWAITER, },
	}),
	new modules.PageModule({
		eventHandlers: {
			onModuleStart(this: modules.PageModule)
			{
				if (!this.utils?.queryAwaiter)
					return false;
				this.utils.queryAwaiter.addQuery(
					"div#masthead-ad",
					function (ads: NodeList)
					{
						for (let i = 0; i < ads.length; i++)
							ads[i].parentNode.removeChild(ads[i]);
					}
				);
				return true;
			}
		},
		utils: { queryAwaiter: GLOBAL_AWAITER, },
		shouldBeActive: modules.ModuleUtils.activateForRegex(/^\/?$/),
		moduleName: "No banner ad",
	}),
];