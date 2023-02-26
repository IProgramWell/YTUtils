const ENV_MODE = process.env.NODE_ENV?.toLowerCase?.();

module.exports = require("userscriptbase/webpackUtils").getWebpackConfig(
	{
		name: "YT Utils",
		namespace: "Violentmonkey Scripts",
		match: ["https://www.youtube.com/**"],
		grant: ["GM_info", "GM_openInTab"],
		version: "1.6.5",
		author: "-",
		"inject-into": "page",
		"run-at": "document-start",
		description: "Useful YouTube utilities.",
		homepageURL: "https://github.com/IProgramWell/YTUtils",
		downloadURL: "https://raw.githubusercontent.com/IProgramWell/YTUtils/master/dist/YTUtils.user.js",
	},
	require("path").resolve(__dirname, "dist"),
	[
		"development",
		"none",
		"production"
	]
		.includes(ENV_MODE)
		? ENV_MODE
		: "production"
)