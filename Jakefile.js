// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/*global desc, task, jake, fail, complete, directory, require, console, process */
(function() {
	"use strict";

	var REQUIRED_BROWSERS = [
//		"IE 8.0 (Windows)",  // NOTE: IE 8 is not supported. See the readme for details.
		"IE 9.0 (Windows)",
		"Firefox 20.0 (Mac)",
		"Chrome 26.0 (Mac)",
		"Safari 6.0 (Mac)",
		"Safari 6.0 (iOS)"
	];

	var lint = require("./build/util/lint_runner.js");
	var testacular = require("./build/util/testacular_runner.js");
	var selenium = require("./build/util/selenium_runner.js");
	var Mocha = require("mocha");


	desc("Lint and test");
	task("default", ["lint", "test"], function() {
		console.log("\n\nOK");
	});

	desc("Start Testacular server -- run this first");
	task("testacular", function() {
		testacular.serve(complete, fail);
	}, {async: true});

	desc("Start Selenium server -- run this second");
	task("selenium", function() {
		selenium.serve();
	});

	desc("Lint everything");
	task("lint", [], function() {
		var passed = lint.validateFileList(browserFilesToLint(), browserLintOptions(), {});
		if (!passed) fail("Lint failed");
	});

	desc("Test everything");
	task("test", ["testWithTestacular", "testWithSelenium"]);

	task("testWithTestacular", function() {
		testacular.runTests(REQUIRED_BROWSERS, complete, fail);
	}, {async: true});

	task("testWithSelenium", function() {
		var mocha = new Mocha({ui: "bdd"});
		mocha.addFile("src/_robot_test.js");

		var failures = false;
		mocha.run()
			.on("fail",function() {
				failures = true;
			}).on("end", function() {
				if (failures) fail("Tests failed");
				complete();
			});
	}, {async: true});

	function browserFilesToLint() {
		var files = new jake.FileList();
		files.include("src/*.js");
		return files.toArray();
	}

	function globalLintOptions() {
		return {
			bitwise: true,
			curly: false,
			eqeqeq: true,
			forin: true,
			immed: true,
			latedef: false,
			newcap: true,
			noarg: true,
			noempty: true,
			nonew: true,
			regexp: true,
			undef: true,
			strict: true,
			trailing: true
		};
	}

	function browserLintOptions() {
		var options = globalLintOptions();
		options.browser = true;
		return options;
	}

}());