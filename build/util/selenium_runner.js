// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
(function() {
	"use strict";

	var SeleniumServer = require("selenium-webdriver/remote").SeleniumServer;

	exports.serve = function(success, fail) {
		var server = new SeleniumServer({
			jar: "build/selenium/selenium-server-standalone-2.31.0.jar",
			port: 4444
		});
		server.start();
	};

}());