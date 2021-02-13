/*global QUnit*/

sap.ui.define([
	"ns/CICDModule/controller/CICDView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CICDView Controller");

	QUnit.test("I should test the CICDView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
