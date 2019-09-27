sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/acc/Z_Fragment_UI/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.acc.Z_Fragment_UI.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			var jData=
			{
				"name":"Rama",
				"skill":"FIORI"
			
			};
			var model = new sap.ui.model.json.JSONModel(jData);
		this.setModel(model,"j1");
		}
	});
});