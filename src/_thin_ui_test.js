// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/*global mocha, describe, it, expect, example, beforeEach, afterEach, dump */
(function() {
	"use strict";

	mocha.setup({ignoreLeaks: true});

	describe("Test Strategy #3 (Keep UI thin and don't test it)", function() {

		var fakeTextField;
		var fakeEvent;

		beforeEach(function() {
			fakeTextField = {
				value: "",
				setAttribute: function() {
					fakeTextField.setAttributeParameters = convertArgumentsToArray(arguments);
				}
			};

			fakeEvent = {
				preventDefaultCalled: false,
				preventDefault: function() {
					fakeEvent.preventDefaultCalled = true;
				}
			};
		});

		it("follows link when field is not empty", function() {
			fakeTextField.value = "not empty";
			example.handleSubmit(fakeTextField, fakeEvent);
			expect(fakeEvent.preventDefaultCalled).to.be(false);
		});

		it("does not follow link when field is empty", function() {
			example.handleSubmit(fakeTextField, fakeEvent);
			expect(fakeEvent.preventDefaultCalled).to.be(true);
		});

		it("sets CSS class when field is empty", function() {
			example.handleSubmit(fakeTextField, fakeEvent);
			expect(fakeTextField.setAttributeParameters).to.eql([ "class", example.REQUIRED_FIELD_CLASS ]);
		});

		function convertArgumentsToArray(args) {
			return Array.prototype.slice.call(args, 0);
		}

	});
}());