const Path = require("path"); // required for path resolution for dist folder
const Webpack = require("webpack"); // used to access the BannerPlugin
const TerserPlugin = require("terser-webpack-plugin");

const Metadata = require("./metadata");

/** @type {Webpack.Configuration["mode"]} */
const MODE = [
	"development",
	"none",
	"production"
]
	.includes(process.env.NODE_ENV)
	? process.env.NODE_ENV
	: "production";

/** @type {import("webpack").Configuration} */
module.exports = {
	entry: "./src/index.ts",
	mode: MODE,
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js"]
	},
	output: {
		path: Path.resolve(__dirname, "dist"),
		filename: `${Metadata.METADATA_COMMON.name.replace(/\W/g, "")}.user.js`
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						preamble: Metadata.generateMetadataBlock(MODE, true),
					},
					mangle: { properties: MODE === "production", }
				},
			})
		]
	},
};
