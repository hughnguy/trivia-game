var base = require("./wdio.conf.js").config;

base.debug = true;

base.maxInstances = 1;

base.capabilities = [{
	maxInstances: 1,
	browserName: "chrome",
	loggingPrefs: { browser: "ALL", client: "ALL" }
}];

exports.config = base;
