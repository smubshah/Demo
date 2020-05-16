sap.ui.define(["sap/ui/core/UIComponent", "deloitte/usi/fn/model/model"],function(UIComp, Model){
	return UIComp.extend("deloitte.usi.fn.Component",{
		metadata:{
			"manifest":"json"
		},
		// createContent:function(){
		// 	var oView = new sap.ui.view({
		// 	  id:"myView",
		// 	  viewName:"deloitte.usi.fn.view.myView",
		// 	  type:"XML"
		// 	});
		// var oModel = Model.createJSONModel();
		//     oView.setModel(oModel);
		// 	return oView;
		// },
		init:function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		var oRouter = this.getRouter();
		oRouter.initialize();
		}
		});
	});