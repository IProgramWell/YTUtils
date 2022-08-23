/**
 * @typedef {import("../types/ViolentMonkey").Metadata} Metadata
 */

/** @type {Metadata} */
const METADATA = {
	name: "YT Utils",
	namespace: "Violentmonkey Scripts",
	match: ["https://www.youtube.com/**"],
	grant: ["none"],
	version: "1.4.3",
	author: "-",
	"inject-into": "page",
	"run-at": "document-start",
	description: "Useful YouTube utilities.",
	downloadURL: "https://raw.githubusercontent.com/IProgramWell/YTUtils/master/dist/YTUtils.user.js",
};

/**
 * @type {{
 * 	[key in keyof Metadata]?: (value: Metadata[key]) => string;
 * }}
 */
const TAG_TO_STRING = {
	// name: name => `// @name ${name}`,
	// namespace: namespace => `// @namespace ${namespace}`,
	match: matchArray => matchArray
		.map(match => `// @match ${match.toString()}`)
		.join("\n"),
	"exclude-match": matchArray => matchArray
		.map(match => `// @match ${match.toString()}`)
		.join("\n"),
	// version: ver => `// @version ${ver}`,
	// description: desc => `// @description ${desc}`,
	// icon: icon => `// @icon ${icon.toString()}`,
	require: reqArray => reqArray
		.map(req => `// @require ${req.toString()}`)
		.join("\n"),
	resource: resourceArray => resourceArray
		.map(resource => `// @resource ${resource.name} ${resource.url.toString()}`)
		.join("\n"),
	// "run-at": runAt => `// @run-at ${runAt}`,
	noframes: noframes => noframes
		? `// @noframes`
		: "",
	grant: grantArray => grantArray
		.map(grant => `// @grant ${grant}`)
		.join("\n"),
	// "inject-into": inject => `// @inject-into ${inject}`,
	// downloadURL: dlUrl => `// @downloadURL ${dlUrl.toString()}`,
	// supportURL: supUrl => `// @supportURL ${supUrl.toString()}`,
	// homepageURL: hpUrl => `// @homepageURL ${hpUrl.toString()}`,
	unwrap: unwrap => unwrap
		? `// @unwrap`
		: "",
};

/**
 * 
 * @param {Metadata} metadata 
 * @returns {string}
 */
function generateMetadataBlock(metadata = METADATA)
{
	/** @type {string[]} */
	const MetadataSegments = [];
	/** @type {string} */
	let currentValue;
	for (let key in metadata)
	{
		if (metadata[key])
		{
			currentValue = TAG_TO_STRING[key]?.(metadata[key]) ?? `// @${key} ${metadata[key]}`;
			if (currentValue)
				MetadataSegments.push(currentValue);
		}
	}
	return `// ==UserScript==
${MetadataSegments.join("\n")}
// ==/UserScript==`
}

const BLOCK_REGEX = /^\/\/\W?(==\/?UserScript==|@\W?\w+\W*.*)/i;

module.exports = {
	METADATA,
	TAG_TO_STRING,
	generateMetadataBlock,
	BLOCK_REGEX,
};