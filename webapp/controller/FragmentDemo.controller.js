sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.acc.Z_Fragment_UI.controller.FragmentDemo", {
		pressDialog:function()
		{
			// var oView = this.getView();
			// var oDialog = oView.byId("helloDialog");
			// // create dialog lazily
			// if (!oDialog) {
			// 	// create dialog via fragment factory
			// 	oDialog = sap.ui.xmlfragment(oView.getId(), "com.acc.Z_Fragment_UI.fragments.dialog");
			// 	// connect dialog to view (models, lifecycle)
			// 	oView.addDependent(oDialog);
			// }

			// oDialog.open();
			
			this.dialog = sap.ui.xmlfragment("com.acc.Z_Fragment_UI.fragments.dialog", this);
	//this.dialog.setModel(sap.ui.getCore().getModel());
this.dialog.open();
		},
		closeButton:function()
		{
			sap.m.MessageToast.show("Skill set Approved");
	this.dialog.close();
		},
		rejectButton:function()
		{
		sap.m.MessageToast.show("Skill set Rejected");
	this.dialog.close();		
		}

	});
});