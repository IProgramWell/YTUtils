import { QueryAwaiter } from "userscriptbase/utils";

export const GLOBAL_AWAITER = new QueryAwaiter({
	autoStart: true,
	target: document.body ?? document
});