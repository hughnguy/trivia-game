const path = require("path");
const webPackConfig = require("./webpack.config")();

const enableDebug = process.argv.indexOf("--debug") !== -1;
const enableCoverage = process.argv.indexOf("--coverage") !== -1;

// All JavaScript source files and test files
const sourceFiles = [
    "./src/**/*.test.unit.js"
];

const plugins = [
    "karma-detect-browsers",
    "karma-chrome-launcher",
    "karma-edge-launcher",
    "karma-firefox-launcher",
    "karma-safari-launcher",
    "karma-mocha",
    "karma-chai",
    "karma-sinon",
    "karma-sourcemap-loader",
    "karma-webpack"
];
const reporters = [];

if (enableDebug) {
    plugins.push("karma-mocha-reporter");
    reporters.push("mocha");
} else {
    plugins.push("karma-nyan-reporter");
    reporters.push("nyan");
}

if (enableCoverage) {
    plugins.push("karma-coverage");
    reporters.push("coverage");
}

// Preprocessor information is added for each file.
const preProcessors = {};
for (const srcFile of sourceFiles) {
    preProcessors[srcFile] = ["webpack", "sourcemap"];
}

webPackConfig.externals = {
    cheerio: "window",
    'react/addons': "react",
    'react/lib/ExecutionEnvironment': "react",
    'react/lib/ReactContext': "react"
};

if (enableDebug) {
    webPackConfig.devtool = "eval-source-map";
}

module.exports = function(config) {
    config.set({
        singleRun: !enableDebug, // just run once if not in debug mode
        frameworks: ["detectBrowsers", "mocha", "chai", "sinon"], // use the mocha test framework, chai assertion, sinon stubs/spies
        files: sourceFiles,

        reporters: reporters,
        plugins: plugins,

        preprocessors: preProcessors,

        detectBrowsers: {
            usePhantomJS: false
        },

        webpack: { //kind of a copy of your webpack config
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
            externals: {
                cheerio: 'window',
                'react/addons': 'react',
                'react/lib/ExecutionEnvironment': 'react',
                'react/lib/ReactContext': 'react'
            }
        },

        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },

        babelPreprocessor: {
            options: {
                presets: ['airbnb']
            }
        },
        port: 9876,
        colors: true,
        logLevel: (enableDebug) ? config.LOG_DEBUG : config.LOG_WARN,
        autoWatch: true,
        browsers: ['Chrome']
    })
};