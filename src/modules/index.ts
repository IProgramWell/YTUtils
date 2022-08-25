import
{
	noShortsOnURLChange,
	initCustomPlaylistRuntimeDisplay,
	noPlaylist
} from "../pages";
import YTUModule from "./YTUModule";

export { default as YTUModule } from "./YTUModule";
export const MODULES = [
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
export default MODULES;

export function onModuleEvent<
	HN extends keyof YTUModule["eventHandlers"] = keyof YTUModule["eventHandlers"],
	HF extends YTUModule["eventHandlers"][HN] = YTUModule["eventHandlers"][HN],
>(
	eventHandlerName: HN,
	handlerArgs: Parameters<HF>,
	defaultIsActive: boolean = true
)
{
	for (let module of MODULES)
		if (
			module.pathRegex.test(document.location.pathname) &&
			module.eventHandlers[eventHandlerName] &&
			typeof module.eventHandlers[eventHandlerName] === "function"
		)
			module.isActive = (
				module.eventHandlers[eventHandlerName] as
				//I hate that I have to use `as` EVERYWHERE in typecript
				(...args: Parameters<HF>) => ReturnType<HF>
			)
				?.(...handlerArgs) ??
				defaultIsActive;
};