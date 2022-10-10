/**
 * @typedef {import("userscriptbase/types/ViolentMonkey").Metadata} Metadata
 */

/** @type {Metadata} */
const METADATA_COMMON = {
	name: "YT Utils",
	namespace: "Violentmonkey Scripts",
	match: ["https://www.youtube.com/**"],
	grant: [
		"GM_info",
		"GM_openInTab",
	],
	version: "1.6.1",
	author: "-",
	"inject-into": "page",
	"run-at": "document-start",
	description: "Useful YouTube utilities.",
	homepageURL: "https://github.com/IProgramWell/YTUtils",
};
/** @type {Metadata} */
const METADATA_PROD = {
	downloadURL: "https://raw.githubusercontent.com/IProgramWell/YTUtils/master/dist/YTUtils.user.js",
};
const METADATA_DEV = {};

/**
 * @type {{
 * 	[key in keyof Metadata]?: (value: Metadata[key], keySuffix?: string) => string;
 * }}
 */
const TAG_TO_STRING = {
	match: (matchArray, keySuffix) => matchArray
		.map(match => `// @match${keySuffix ?? ""} ${match.toString()}`)
		.join("\n"),
	"exclude-match": (matchArray, keySuffix) => matchArray
		.map(match => `// @exclude-match${keySuffix ?? ""} ${match.toString()}`)
		.join("\n"),
	require: (reqArray, keySuffix) => reqArray
		.map(req => `// @require${keySuffix ?? ""} ${req.toString()}`)
		.join("\n"),
	resource: (resourceArray, keySuffix) => resourceArray
		.map(resource => `// @resource${keySuffix ?? ""} ${resource.name} ${resource.url.toString()}`)
		.join("\n"),
	noframes: (noframes, keySuffix) => noframes
		? `// @noframes${keySuffix ?? ""}`
		: "",
	grant: (grant, keySuffix) => grant === "none"
		? "// @grant none"
		: (Array.isArray(grant)
			? grant
				.map(grant => `// @grant${keySuffix ?? ""} ${grant}`)
				.join("\n")
			: `// @grant ${grant}`
		),
	unwrap: (unwrap, keySuffix) => unwrap
		? `// @unwrap${keySuffix ?? ""}`
		: "",
	// Don't need a special function if all it does is echo the provided key/val pair.
	// name: name => `// @name ${name}`,
	// namespace: namespace => `// @namespace ${namespace}`,
	// version: ver => `// @version ${ver}`,
	// description: desc => `// @description ${desc}`,
	// icon: icon => `// @icon ${icon.toString()}`,
	// "run-at": runAt => `// @run-at ${runAt}`,
	// "inject-into": inject => `// @inject-into ${inject}`,
	// downloadURL: dlUrl => `// @downloadURL ${dlUrl.toString()}`,
	// supportURL: supUrl => `// @supportURL ${supUrl.toString()}`,
	// homepageURL: hpUrl => `// @homepageURL ${hpUrl.toString()}`,
};

/**
 * 
 * @param {import("webpack").Configuration["mode"]} [mode] 
 * @param {boolean} [spaceEvently] 
 * @returns {string}
 */
function generateMetadataBlock(mode = "production", spaceEvently = true)
{
	/** @type {string[]} */
	const MetadataSegments = [];
	/** @type {Metadata} */
	let metadata;
	/** @type {string} */
	let currentValue;

	switch (mode)
	{
		case "development":
			metadata = {
				...METADATA_COMMON,
				...METADATA_DEV,
			};
			break;
		case "none":
			metadata = METADATA_COMMON;
			break;
		case "production":
		default:
			metadata = {
				...METADATA_COMMON,
				...METADATA_PROD,
			};
			break;
	}

	let maxKeyLength = Object
		.keys(metadata)
		.reduce(
			(max, key) =>
				Math.max(max, key.length),
			0
		),
		keySuffix;

	for (let key in metadata)
	{
		keySuffix = spaceEvently
			? " ".repeat(maxKeyLength - key.length)
			: "";

		currentValue = (
			TAG_TO_STRING[key]?.(
				metadata[key],
				keySuffix
			) ??
			`// @${key}${keySuffix} ${metadata[key]}`
		)
			.trim();

		if (currentValue)
			MetadataSegments.push(currentValue);
	}

	return `// ==UserScript==
${MetadataSegments.join("\n")}
// ==/UserScript==`;
}

const BLOCK_REGEX = /^\/\/\W?(==\/?UserScript==|@\W?\w+\W*.*)/i;

module.exports = {
	METADATA_COMMON,
	METADATA_PROD,
	TAG_TO_STRING,
	generateMetadataBlock,
	BLOCK_REGEX,
};