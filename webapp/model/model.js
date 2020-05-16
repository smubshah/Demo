sap.ui.define(["sap/ui/model/json/JSONModel"],function(JSONModel){
	
	return {
		 createJSONModel:function(){
			var oModel = new JSONModel();
			// oModel.loadData("model/mockData/sampleData.json");
			oModel.loadData("model/mockData/fruits.json");
			return oModel; 
		}
	};
});