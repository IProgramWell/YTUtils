const package = JSON.parse(require("fs").readFileSync(require("path").resolve("package.json")));

module.exports = require("userscriptbase/webpackUtils").getWebpackConfig(
	{
		name: "YT Utils",
		namespace: "Violentmonkey Scripts",
		match: ["https://www.youtube.com/**"],
		grant: [
			"GM_info",
			"GM_registerMenuCommand",
		],
		version: package.version,
		author: "-",
		"inject-into": "page",
		"run-at": "document-start",
		description: "Useful YouTube utilities.",
		homepageURL: "https://github.com/IProgramWell/YTUtils",
		downloadURL: "https://raw.githubusercontent.com/IProgramWell/YTUtils/master/dist/YTUtils.user.js",
	},
	require("path").resolve(__dirname, "dist"),
	process.env.NODE_ENV?.toLowerCase?.() ?? "production"
);