// Copyright (c) 2012-2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.

var example = {};

(function() {
	"use strict";

	example.REQUIRED_FIELD_CLASS = "example-required";

	example.validateTextField = function(field) {
		if (field.value) {
			field.removeAttribute("class");
		}
		else {
			field.setAttribute("class", example.REQUIRED_FIELD_CLASS);
		}
	};

}());
