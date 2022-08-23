const Path = require("path"); // required for path resolution for dist folder
// const Webpack = require("webpack"); // used to access the BannerPlugin
const TerserPlugin = require("terser-webpack-plugin");

const Metadata = require("./config/meta");

/** @type {import("webpack").Configuration} */
module.exports = {
	entry: "./src/index.ts",
	mode: "production",
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
		filename: `${Metadata.METADATA.name.replace(/\W/g, "")}.user.js`
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						preamble: Metadata.generateMetadataBlock(),
					}
				}
			})
		]
	},
};
