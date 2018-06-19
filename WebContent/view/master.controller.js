sap.ui.controller("singlepageapplication.view.master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf singlepageapplication.master
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf singlepageapplication.master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf singlepageapplication.master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf singlepageapplication.master
*/
//	onExit: function() {
//
//	}

	onNavToDetail: function(evt){
		var core = sap.ui.getCore();
		var app = core.byId("app");
		
		app.to("detail");
		
		console.log(evt);
		
		
		
		
	}

});