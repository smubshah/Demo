sap.ui.define([
	"deloitte/usi/fn/controller/BaseController"

], function(Controller) {
	"use strict";

	return Controller.extend("deloitte.usi.fn.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf deloitte.usi.fn.view.View1
		 */
		 //var oRouter;
			onInit: function() {
		       var oList = this.getView().byId("idList");
		       oList.bindItems({
		       	path:"/fruits",
			    template: new sap.m.ObjectListItem({
			    	type:"Navigation",
			    	title:"{name}",
			    	intro:"{type}",
			    	number:"{price}"
			    })     	
		           });
		      this.oRouter = this.getOwnerComponent().getRouter(this);    
		      			},
			onItemPress:function(oEvent){
			var oSelectedItem = oEvent.getParameter("listItem");
			var sPath = oSelectedItem.getBindingContextPath();
		    var myIndex = sPath.split("/")[sPath.split("/").length - 1 ];
			// var oview2 = this.getView().getParent().getParent().getDetailPages()[0];
			// oview2.bindElement(sPath); 
			 this.onNext(myIndex);	
			},
			onDelete:function(oEvent){
			    var oitem = oEvent.getParameter("listItem");
			    oEvent.getSource().removeItem(oitem);
			}, 
			onSearch:function(){
			   var oValue = this.getView().byId("idSearch").getValue();					
				// alert(oValue);
				var aFilter=[];
				var oFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, oValue );
				aFilter.push(oFilter);
				var oList = this.getView().byId("idList").getBinding("items").filter(aFilter);
			}			,
           onNext:function(myIndex){
           	 //var oView = this.getView();
           	 //var oParent = oView.getParent();
           	 // oParent.to("idView2");
           	 this.oRouter.navTo("Detail",{
           	 	Syed:myIndex
           	 }); 
           }
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf deloitte.usi.fn.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf deloitte.usi.fn.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf deloitte.usi.fn.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});