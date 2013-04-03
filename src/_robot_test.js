// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.
/*global console, require, mocha, describe, it, expect, example, beforeEach, afterEach, before, after */

(function() {
	"use strict";

	var webdriver = require("selenium-webdriver");
	var expect = require("expect.js");

	describe("Google Search", function() {
		var driver;

		this.timeout(0);    // Disable Mocha's default timeout mechanism

		before(function() {
			driver = new webdriver.Builder().
				withCapabilities({'browserName': 'firefox'}).
				build();
		});

		after(function(done) {
			driver.quit().then(done);
		});

		it("should work", function() {
			driver.get("http://www.google.com");
			driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
			driver.findElement(webdriver.By.name('btnG')).click();
			driver.wait(function() {
				return driver.getTitle().then(function(title) {
					return title === 'webdriver - Google Search';
				});
			}, 1000);
		});

	});

}());