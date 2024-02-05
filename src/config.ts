import { QueryAwaiter } from "userscriptbase/utils";

export const GLOBAL_AWAITER: QueryAwaiter = new QueryAwaiter({
	autoStart: true,
	target: document.body ?? document
});

export const YT_EVENTS: string[] = [
	// "yt-page-data-fetched",
	// "yt-service-request-completed",
	// "yt-page-data-updated",
	// "data-changed",
	// "yt-navigate-finish",
	"yt-navigate-start",
	// "yt-app-context",
	// "yt-playlist-data-updated",
	// "yt-navigate-redirect",
	// "yt-get-context-provider",
	// "yt-playlist-reloading",
	// "yt-watch-comments-ready",
];

// IK it sucks to do styling like this but I suck (dk how to do it better without 10 dependencies) so it fits.
// TODO: Fix toggle switch CSS
export const CLASSES = {
	".ytutils-no-pl-btn": `{
	float: left;
	top: 50%;
	white-space: nowrap;
}`,
	".ytutils-toggle-switch": `{
	width: 20%;
	height: 20%;
	max-width: 80px;
	height: 40px;
	border-radius: 15%;
	background-color: red;
	display: flex;
	justify-content: flex-end;
	border: solid grey;
}`,
	".ytutils-toggle-switch.ytutils-toggle-active": `{
	background-color: greenyellow;
	justify-content: flex-start;
}`,
	".ytutils-toggle-switch input": `{
	appearance: none;
	transition: 0.25s all;
}`,
	".ytutils-toggle-switch input::after": `{
	content: "✗";
	display: inline-block;
	background-color: grey;
	border: solid lightgray;
	padding: 20%;
	margin-top: 10%;
	margin-bottom: 10%;
	border-radius: 20%;
}`,
	".ytutils-toggle-switch input:checked::after": `{
	content: "✓";
}`
} satisfies Record<string, string>;
export type CustomClass = keyof typeof CLASSES;