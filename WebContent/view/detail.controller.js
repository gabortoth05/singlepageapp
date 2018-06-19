jQuery.sap.require("sap.m.MessageToast");
sap.ui.controller("singlepageapplication.view.detail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf singlepageapplication.view.detail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf singlepageapplication.view.detail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf singlepageapplication.view.detail
*/
	onAfterRendering: function() {
		var canvas = document.getElementById('myFrame');
		var context = canvas.getContext('2d');
	  
	   function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
		}
	  
	  
	  
	  canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
		var xBoolean = mousePos.x/window.innerWidth;
		var yBoolean = mousePos.y/window.innerHeight;
		
		if((xBoolean > 0.66 && xBoolean < 0.73) && (yBoolean >= 0.45 && yBoolean <= 0.57)){
			
			sap.m.MessageToast.show("Nyertél!!",{duration:1000});
			
			
		}
		else{

		}

      }, false);
 
	  
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf singlepageapplication.view.detail
*/
//	onExit: function() {
//
//	}

});