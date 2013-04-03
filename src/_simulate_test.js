// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/*global mocha, describe, it, expect, example, beforeEach, dump */
(function() {
	"use strict";

	mocha.setup({ignoreLeaks: true});

	describe("Test Strategy #2 (Simulate the user's actions)", function() {

		var textField;
		var submitLink;

		beforeEach(function() {
			document.body.insertAdjacentHTML("beforeend",
				"<input id='textField' type='text' />" +
				"<a id='submitLink' href='#foo'>Link</a>"
			);
			textField = document.getElementById("textField");
			submitLink = document.getElementById("submitLink");

//			var div = document.createElement("div");
//			document.body.insertBefore(div, null);
//			paper = example.initializeDrawingArea(div);
		});

		it("sets up test", function() {
			expect(textField).to.not.be(undefined);
			expect(submitLink).to.not.be(undefined);
		});

	});
}());