const FS = require("fs");
const Path = require("path");

const { getWebpackConfig } = require("userscriptbase/webpackUtils");

const package = JSON.parse(FS.readFileSync(Path.resolve("package.json")));

const baseConfig = getWebpackConfig(
	{
		name: "YT Utils",
		namespace: "Violentmonkey Scripts",
		match: ["https://www.youtube.com/**"],
		"exclude-match": ["https://www.youtube.com/embed/**"],
		grant: [
			"GM_info",
			"GM_registerMenuCommand",
			"unsafeWindow"
		],
		version: package.version,
		author: "-",
		"inject-into": "page",
		"run-at": "document-start",
		description: "Useful YouTube utilities.",
		homepageURL: "https://github.com/IProgramWell/YTUtils",
		downloadURL: "https://raw.githubusercontent.com/IProgramWell/YTUtils/master/dist/YTUtils.user.js",
	},
	Path.resolve(__dirname, "dist"),
	process.env.NODE_ENV?.toLowerCase?.() ?? "production"
);

module.exports = baseConfig;