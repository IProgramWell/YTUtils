import { modules } from "userscriptbase";

import initCustomPlaylistRuntimeDisplay from "./playlistStats";
import noShortsOnURLChange from "./noShorts";
import * as noPlaylist from "./noPlaylist";

export default [
	new modules.PageModule({
		eventHandlers: { onModuleStart: noShortsOnURLChange, },
		shouldBeActive: modules.ModuleUtils.activateForRegex(
			/^\/shorts\/.*\/?$/i,
			false
		),
		moduleName: "No Shorts Redirector"
	}),
	new modules.PageModule({
		methods: { onPageDataFetch: initCustomPlaylistRuntimeDisplay, },
		shouldBeActive: modules.ModuleUtils.activateForRegex(
			/^\/playlist\/?$/i,
			false
		),
		moduleName: "Custom Playlist Statistics"
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
];