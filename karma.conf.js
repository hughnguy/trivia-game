const path = require("path");
const webPackConfig = require("./webpack.config")();

const enableDebug = process.argv.indexOf("--debug") !== -1;
const enableCoverage = process.argv.indexOf("--coverage") !== -1;

const sourceFiles = [
    "./tests/unit/tests.webpack.js"
];

if(enableCoverage) {
    sourceFiles.push("./src/**/!(*.native|*.test.unit|*.test.functional|*.pageobject).js");
}

const supportedBrowsers = {
    chrome : true,
    edge : true,
    firefox : true,
    safari : true
};

const debugModeBrowser = ["Chrome"];

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

    let babelPluginRule = webPackConfig.module.rules.find((rule) => rule.loader === "babel-loader");
    babelPluginRule.query.plugins.push(
        [
            "istanbul", {
                "exclude": [
                    "**/*.test.unit.js",
                    "**/index.js",
                    "src/services/api/*",
                    "src/themes/*"
                ]
            }
        ]
    );
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

// Remove common chunks plugin
const commonsChunkPluginIndex = webPackConfig.plugins.findIndex(plugin => plugin.chunkNames);
webPackConfig.plugins.splice(commonsChunkPluginIndex, 1);

module.exports = function(config) {
    config.set({
        singleRun: !enableDebug, // just run once if not in debug mode
        frameworks: ["detectBrowsers", "mocha", "chai", "sinon"], // use the mocha test framework, chai assertion, sinon stubs/spies
        files: sourceFiles,
        exclude: [
            "./src/App.js",
            "./src/router/*.js",
            "./src/**/*.native.js"
        ],
        plugins: plugins,
        preprocessors: preProcessors,
        browsers: debugModeBrowser,
        detectBrowsers: {
            enabled: !enableDebug && !enableCoverage,
            usePhantomJS: false,
            postDetection: function(availableBrowsers) { // only include supported browsers
                const testBrowsers = availableBrowsers.filter((browser) => supportedBrowsers[browser.toLowerCase()]);
                console.log("Testing on the following supported browsers: ", testBrowsers);
                return testBrowsers;
            }
        },
        client: {
            mocha: {
                reporter: "html",
                timeout : 2000,
                ui: "bdd"
            }
        },
        webpack: webPackConfig,
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },
        logLevel: (enableDebug) ? config.LOG_DEBUG : config.LOG_WARN,
        reporters: reporters,
        coverageReporter: {
            dir : path.join(__dirname, "tests", "unit", "coverage"),
            includeAllSources: true,
            instrumenterOptions: {
                istanbul: {
                    noCompact: true
                }
            },
            reporters: [
                {
                    type: "html",
                    subdir: "html"
                },
                {
                    type: "cobertura",
                    subdir: ".",
                    file: "cobertura-coverage.xml"
                },
                {
                    type: "text"
                }
            ],
            // enforce coverage percentage thresholds
            // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
            check: {
                global: {
                    statements: 90,
                    branches: 90,
                    functions: 90,
                    lines: 90
                },
                each: {
                    statements: 80,
                    branches: 50,
                    functions: 80,
                    lines: 80
                }
            }
        }
    })
};