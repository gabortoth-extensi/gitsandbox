sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.olit.sandbox.controller.master", {
			onInit: function () {
				//new comment
				this.onLogData();
			},

			onLogData : function(){
				console.log("This is a test log");
			}
		});
	});
