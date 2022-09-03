import
{
	noShortsOnURLChange,
	initCustomPlaylistRuntimeDisplay,
	noPlaylist
} from "../pages";
import YTUModule from "./YTUModule";
import { activateForRegex } from "./moduleUtils";

export default [
	new YTUModule({
		eventHandlers: {
			// onDocumentStart: noShortsOnURLChange,
			onModuleStart: noShortsOnURLChange,
		},
		shouldBeActive: activateForRegex(/^\/shorts\/.*\/?$/i),
		moduleName: "No Shorts Redirector"
	}),
	new YTUModule({
		eventHandlers: {
			onPageDataFetch: initCustomPlaylistRuntimeDisplay,
		},
		shouldBeActive: activateForRegex(/^\/playlist\/?$/i),
		moduleName: "Custom Playlist Statistics"
	}),
	new YTUModule({
		eventHandlers: {
			onDocumentLoad: noPlaylist.addNoPLControls,
			onModuleStart: noPlaylist.addNoPLControls,
			onModuleStop: noPlaylist.removeNoPLControls,
		},
		shouldBeActive: noPlaylist.shouldBeActiveFor,
		moduleName: "No Playlist Controls"
	}),
];