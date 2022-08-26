import IOManager from "../utils/IOManager";
import PathWatcher from "../utils/PathWatcher";
import { MODULES } from "../modules";

export const GLOBAL_MANAGER = new IOManager(
	globalThis
		.GM_info?.()
		?.script
		?.name ??
	"YT Utils"
);

export const GLOBAL_WATCHER = new PathWatcher(
	MODULES,
	GLOBAL_MANAGER
);