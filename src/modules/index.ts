import {
	noShortsOnURLChange,
	initCustomPlaylistRuntimeDisplay,
	noPlaylist
} from "../pages";
import YTUModule from "./YTUModule";

export { default as YTUModule } from "./YTUModule";
export const MODULES = [
	new YTUModule(
		{
			onDocumentStart: noShortsOnURLChange,
			onModuleStart: noShortsOnURLChange,
		},
		/^\/shorts\/.*\/?$/i,
		"No Shorts Redirector"
	),
	new YTUModule(
		{
			onDocumentLoad: initCustomPlaylistRuntimeDisplay,
			onModuleStart: initCustomPlaylistRuntimeDisplay,
		},
		/^\/playlist\/?$/i,
		"Custom Playlist Statistics"
	),
	new YTUModule(
		{
			onDocumentLoad: noPlaylist.addNoPLControls,
			onModuleStart: noPlaylist.addNoPLControls,
			onModuleStop: noPlaylist.removeNoPLControls,
		},
		/^\/watch\/?$/i,
		"No Playlist Controls"
	),
];
export default MODULES;