import
{
	noShortsOnURLChange,
	initCustomPlaylistRuntimeDisplay,
	noPlaylist
} from "../pages";
import YTUModule from "./YTUModule";

export default [
	new YTUModule({
		eventHandlers: {
			// onDocumentStart: noShortsOnURLChange,
			onModuleStart: noShortsOnURLChange,
		},
		pathRegex: /^\/shorts\/.*\/?$/i,
		moduleName: "No Shorts Redirector"
	}),
	new YTUModule({
		eventHandlers: {
			onPageDataFetch: initCustomPlaylistRuntimeDisplay,
		},
		pathRegex: /^\/playlist\/?$/i,
		moduleName: "Custom Playlist Statistics"
	}),
	new YTUModule({
		eventHandlers: {
			onDocumentLoad: noPlaylist.addNoPLControls,
			onModuleStart: noPlaylist.addNoPLControls,
			onModuleStop: noPlaylist.removeNoPLControls,
		},
		pathRegex: /^\/watch\/?$/i,
		moduleName: "No Playlist Controls"
	}),
];