sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("deloitte.usi.fn.controller.myView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf view.view.myView
		 */
		 //In the init method 
			onInit: function() {
		//Create a view which will be instantiated one the main app view is create
		 //var oView1 = new sap.ui.view({
		 //	 id:"idView1",
		 //	 viewName:"deloitte.usi.fn.view.View1",
		 //	 type:"XML"
		 	
		 //});
		 //var oView2 = new sap.ui.view({
		 //	id:"idView2",
		 //	viewName:"deloitte.usi.fn.view.View2",
		 //	type:"XML"
		 
		 //});
		 
		 //var oAppContainer = this.getView().byId("myApp");
		 ////oAppContainer.addPage(oView1);
		 ////oAppContainer.addPage(oView2);
		 //oAppContainer.addMasterPage(oView1);
		 //oAppContainer.addDetailPage(oView2);
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf view.view.myView
		 */
			onBeforeRendering: function() {
		
			}

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf view.view.myView
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf view.view.myView
		 */
		//	onExit: function() {
		//
		//	}

	});

});