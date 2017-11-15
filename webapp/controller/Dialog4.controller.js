sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "./utilities",
    "sap/ui/core/routing/History"
    ], function(BaseController, MessageBox, Utilities, History) {
    "use strict";

    return BaseController.extend("com.sap.build.standard.newGestionDInventairePoleEmploi.controller.Dialog4", {
    setRouter: function (oRouter) {
            		                this.oRouter = oRouter;
		
        },
getBindingParameters: function () {
            		return {};
		
        },
_onButtonPress14: function () {
            		var oDialog = this.getView().getContent()[0];
		
		return new Promise(function (fnResolve) {
		    oDialog.attachEventOnce("afterClose", null, fnResolve);
		    oDialog.close();
		});
		
        },
_onButtonPress15: function () {
            		var oDialog = this.getView().getContent()[0];
		
		return new Promise(function (fnResolve) {
		    oDialog.attachEventOnce("afterClose", null, fnResolve);
		    oDialog.close();
		});
		
        },
onInit: function () {
            		        this.mBindingOptions = {};
        this._oDialog = this.getView().getContent()[0];

        },
onExit: function () {
            		                this._oDialog.destroy();

        }
});
}, /* bExport= */true);
