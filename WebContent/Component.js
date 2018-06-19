jQuery.sap.declare("singlepageapplication.Component");
jQuery.sap.require("sap.ui.core.UIComponent");

sap.ui.core.UIComponent.extend("singlepageapplication.Component", {

	metadata : {
		name : "",
		version : "1.0",
		includes : [ "css/style.css" ],
		library : "singlepageapplication.Component",
		dependencies : {
			libs : [ "sap.m", "sap.ui.commons" ],
			components : []
		},
		config : {
			"title" : "",
			"icon" : "sap-icon://bar-chart",

		}
	},
	createContent : function() {
		var master = sap.ui.view({
			id : "master",
			viewName : "singlepageapplication.view.master",
			type : sap.ui.core.mvc.ViewType.XML
		});
		
		var detail = sap.ui.view({
			id : "detail",
			viewName : "singlepageapplication.view.detail",
			type : sap.ui.core.mvc.ViewType.XML
		});

		var app = new sap.m.App('app', {
			initialPage : "master"
		});

		app.addPage(master);
		app.addPage(detail);

		
		return app;
		
	}

});
