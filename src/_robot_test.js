// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.
/*global require, mocha, describe, it, expect, example, beforeEach, afterEach */

(function() {
	"use strict";

	var webdriver = require("selenium-webdriver");

	var driver = new webdriver.Builder().
		withCapabilities({'browserName': 'firefox'}).
		build();

	driver.get("http://www.google.com");
	driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
	driver.findElement(webdriver.By.name('btnG')).click();
	driver.wait(function() {
		return driver.getTitle().then(function(title) {
			return title === 'webdriver - Google Search';
		});
	}, 1000);

	driver.quit();
}());