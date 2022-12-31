const Path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const Metadata = require("./metadata");

/** @type {import("webpack").Configuration["mode"]} */
const MODE = [
	"development",
	"none",
	"production"
]
	.includes(process.env.NODE_ENV?.toLowerCase?.())
	? process.env.NODE_ENV?.toLowerCase?.()
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
					mangle: {
						properties: {
							keep_quoted: true,
						},
					},
				},
			})
		]
	},
};
