import { utils } from "userscriptbase";

export const GLOBAL_AWAITER = new utils.QueryAwaiter({
	autoStart: true,
	target: document
});