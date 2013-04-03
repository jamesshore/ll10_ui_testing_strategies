// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.
/*global console, require, mocha, describe, it, expect, example, beforeEach, afterEach, before, after */

(function() {
	"use strict";

	var webdriver = require("selenium-webdriver");
	var child_process = require("child_process");
	var expect = require("expect.js");

	var PORT = 5000;
	var EXAMPLE_PAGE_TITLE = "UI Testing Example";

	describe("Test Strategy #1 (Use a robot to interact with the UI)", function() {
		var driver;
		var webServer;
		var textField;
		var submitLink;

		this.timeout(0);    // Disable Mocha's default timeout mechanism

		function launchWebServer(done) {
			webServer = child_process.spawn("node", ["node_modules/http-server/bin/http-server", "src", "-p", PORT], { stdio: "pipe" });

			var stdout = "";
			webServer.stdout.setEncoding("utf8");
			webServer.stdout.on("data", function(chunk) {
				if (stdout === null) return;

				stdout += chunk;
				if (stdout.indexOf("Hit CTRL-C to stop the server") !== -1) {
					stdout = null;
					done();
				}
			});
		}

		function launchSeleniumBrowser() {
			driver = new webdriver.Builder().
				withCapabilities({'browserName': 'firefox'}).
				build();
		}

		before(function(done) {
			launchSeleniumBrowser();
			launchWebServer(done);
		});

		after(function(done) {
			driver.quit().then(function() {
				webServer.on("exit", function() {
					done();
				});
				webServer.kill();
			});
		});

		beforeEach(function(done) {
			driver.get("http://localhost:" + PORT + "/example.html");
			textField = driver.findElement({id: "text_field"});
			submitLink = driver.findElement({id: "submit_link"});
			submitLink.then(function() {
				done();
			});
		});

		it("follows link when field is not empty", function(done) {
			textField.sendKeys("not empty").
			then(function() {
				return submitLink.click();
			}).
			then(function() {
				return driver.getTitle();
			}).
			then(function(title) {
				expect(title).to.not.equal(EXAMPLE_PAGE_TITLE);
				done();
			});
		});

		it("does not follow link when field is empty", function(done) {
			submitLink.click().
			then(function() {
				return driver.getTitle();
			}).
			then(function(title) {
				expect(title).to.equal(EXAMPLE_PAGE_TITLE);
				done();
			});
		});

//		it("sets CSS class when field is empty", function() {
//			clickSubmitLink();
//			expect(textField.getAttribute("class")).to.equal(example.REQUIRED_FIELD_CLASS);
//		});
//
//
//		function clickSubmitLink() {
//			var event = document.createEvent("MouseEvents");
//			event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
//			submitLink.dispatchEvent(event);
//		}

	});

}());