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

//		beforeEach(function() {
//			driver.get("file://src/example.html");
//		});

		it("should work", function() {
			driver.get("file://src/example.html");
			driver.wait(function() { return false; }, 5000);
//			driver.get("http://www.google.com");
//			driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
//			driver.findElement(webdriver.By.name('btnG')).click();
//			driver.wait(function() {
//				return driver.getTitle().then(function(title) {
//					return title === 'webdriver - Google Search';
//				});
//			}, 1000);
		});


//		afterEach(function() {
//			document.body.removeChild(textField);
//			document.body.removeChild(submitLink);
//		});
//
//		it("follows link when field is not empty", function() {
//			var eventCancelled;
//			submitLink.addEventListener("click", function(event) {
//				eventCancelled = event.defaultPrevented;
//			});
//
//			textField.value = "not empty";
//			clickSubmitLink();
//			expect(eventCancelled).to.be(false);
//		});

//		it("does not follow link when field is empty", function() {
//			var eventCancelled;
//			submitLink.addEventListener("click", function(event) {
//				eventCancelled = event.defaultPrevented;
//			});
//
//			clickSubmitLink();
//			expect(eventCancelled).to.be(true);
//		});
//
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