/*global require __dirname module*/
const path = require("path");
const webpack = require("webpack");

const PATHS = {
	build: path.join(__dirname, "public")
};

module.exports = (env) => ({
	entry: {
		vendor: [
			"history",
			"prop-types",
			"react",
			"react-dom",
			"react-redux",
			"react-router",
			"react-router-dom",
			"redux",
			"redux-persist",
			"html-entities",
			"redux-thunk",
			"styled-components",
			"uniquid"
		],
		app: [
			"babel-polyfill",
			"./src/App.js"
		]
	},
	cache: true,
	output: {
		path: PATHS.build,
		filename: "js/[name].js",
		publicPath: "/"
	},
	resolve: {
		modules: [
			path.resolve(__dirname, ".."),
			path.resolve("./node_modules")
		],
		alias: {
			"styled-components": path.resolve(__dirname, "node_modules", "styled-components")
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					cacheDirectory: true,
					presets: ["es2015", "react"],
					plugins: [
						"babel-plugin-styled-components",
						"react-html-attrs",
						"transform-class-properties",
						"transform-object-rest-spread"
					]
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.SourceMapDevToolPlugin({
			filename: "js/[name].js.map",
			exclude: ["js/vendor.js"]
		}),
		new webpack.DefinePlugin({
			"process.env":{
				"NODE_ENV": env && env.production ? JSON.stringify("production") : JSON.stringify("development")
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity // this ensures that only the listed modules go into the vendor chunk
		}),
		env && env.production ? new UglifyJSPlugin({sourceMap: true}) : () => null
	]
});