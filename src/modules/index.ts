import { PageModule, ModuleUtils } from "userscriptbase/modules";

// import * as playlistStats from "./playlistStats";
import * as noShorts from "./noShorts";
import * as noPlaylist from "./noPlaylist";
import * as searchByTitle from "./searchByTitle";

export default function createModuleList(options: {
	utils: PageModule["utils"],
}): PageModule[]
{
	return [
		new PageModule({
			eventHandlers: {
				onModuleStart: noShorts.noShortsOnURLChange,
				onDocumentStart: noShorts.noShortsOnURLChange,
			},
			shouldBeActive: ModuleUtils.activateForRegex(/^\/shorts\/.+$/i),
			utils: options.utils,
			moduleName: "No Shorts Redirector",
		}),
		/* new PageModule({
			methods: {
				"yt-page-data-fetched": playlistStats.addPLStats,
				"yt-service-request-completed": playlistStats.updateStats,
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
			moduleName: "No Playlist Controls"
		}),
		new PageModule({
			eventHandlers: {
				onModuleStart: searchByTitle.addSearchBtn,
				onModuleStop: searchByTitle.removeSearchBtn,
			},
			shouldBeActive: ModuleUtils.activateForRegex(/^\/watch\/?$/),
			moduleName: "Search by title",
			utils: options.utils,
		}),
		new PageModule({
			eventHandlers: {
				onModuleStart(this: PageModule)
				{
					if (!this?.utils?.queryAwaiter)
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
			utils: options.utils,
			shouldBeActive: ModuleUtils.activateForRegex(/^\/?$/),
			moduleName: "No banner ad",
		}),
	]
};