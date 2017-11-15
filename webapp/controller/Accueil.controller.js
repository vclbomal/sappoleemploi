sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "./utilities",
    "sap/ui/core/routing/History"
    ], function(BaseController, MessageBox, Utilities, History) {
    "use strict";

    return BaseController.extend("com.sap.build.standard.newGestionDInventairePoleEmploi.controller.Accueil", {
    handleRouteMatched: function (oEvent) {
            		
		var oParams = {}; 
		
		if (oEvent.mParameters.data.context) { 
		    this.sContext = oEvent.mParameters.data.context;
		    var oPath; 
		    if (this.sContext) { 
		        oPath = {path: "/" + this.sContext, parameters: oParams}; 
		        this.getView().bindObject(oPath);
		    } 
		}
		
		
		
        },
_onLinkPress: function (oEvent) {
            		
		var sPopoverName = "Popover2";
		this.mPopovers = this.mPopovers || {};
		var oPopover = this.mPopovers[sPopoverName];
		var oSource = oEvent.getSource();
		var oBindingContext = oSource.getBindingContext();
		var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
		var oView;
		if (!oPopover) {
		    this.getOwnerComponent().runAsOwner(function () {
		oView = sap.ui.xmlview({viewName: "com.sap.build.standard.newGestionDInventairePoleEmploi.view." + sPopoverName});
		        this.getView().addDependent(oView);
		        oView.getController().setRouter(this.oRouter);
		        oPopover = oView.getContent()[0];
		        oPopover.setPlacement("Auto");
		        this.mPopovers[sPopoverName] = oPopover;
		    }.bind(this));
		}
		
		return new Promise(function (fnResolve) {
		    oPopover.attachEventOnce("afterOpen", null, fnResolve);
		    oPopover.openBy(oSource);
		    if (oView) {
		        oPopover.attachAfterOpen(function () {
		            oPopover.rerender();
		        });
		    } else {
		        oView = oPopover.getParent();
		    }
		    
		    var oModel = this.getView().getModel();
		    if (oModel) {
		        oView.setModel(oModel);
		    }
		    if (sPath) {
		        var oParams = oView.getController().getBindingParameters();
		        oView.bindObject({path: sPath, parameters: oParams});
		    }
		}.bind(this)).catch(function (err) { if (err !== undefined) { MessageBox.error(err.message); }});
		
        },
_onObjectListItemPress: function (oEvent) {
            		
		var oBindingContext = oEvent.getSource().getBindingContext(); 
		
		return new Promise(function(fnResolve) {
		
		    this.doNavigate("InventaireBureau5005", oBindingContext, fnResolve, ""
		    );
		}.bind(this)).catch(function (err) { if (err !== undefined) { MessageBox.error(err.message); }});
		
        },
doNavigate: function (sRouteName, oBindingContext, fnPromiseResolve, sViaRelation) {
            		
		var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
		var oModel = (oBindingContext) ? oBindingContext.getModel() : null;
		
		var sEntityNameSet;
		if (sPath !== null && sPath !== "") {
		    if (sPath.substring(0, 1) === "/") {
		        sPath = sPath.substring(1);
		    }
		    sEntityNameSet = sPath.split("(")[0];
		}
		var sNavigationPropertyName;
		var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;
		
		if (sEntityNameSet !== null) {
		    sNavigationPropertyName = sViaRelation || this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(sEntityNameSet, sRouteName);
		}
		if (sNavigationPropertyName !== null && sNavigationPropertyName !== undefined) {
		    if (sNavigationPropertyName === "") {
		        this.oRouter.navTo(sRouteName, {
		            context: sPath,
		            masterContext: sMasterContext
		        }, false);
		    } else {
		        oModel.createBindingContext(sNavigationPropertyName, oBindingContext, null, function (bindingContext) {
		            if (bindingContext) {
		                sPath = bindingContext.getPath();
		                if (sPath.substring(0, 1) === "/") {
		                    sPath = sPath.substring(1);
		                }
		            }
		            else {
		                sPath = "undefined";
		            }
		
		            // If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
		            if (sPath === "undefined") {
		                this.oRouter.navTo(sRouteName);
		            } else {
		                this.oRouter.navTo(sRouteName, {
		                    context: sPath,
		                    masterContext: sMasterContext
		                }, false);
		            }
		        }.bind(this));
		    }
		} else {
		    this.oRouter.navTo(sRouteName);
		}
		
		if (typeof fnPromiseResolve === "function") {
		    fnPromiseResolve();
		}
        },
_onButtonPress5: function (oEvent) {
            		
		var sPopoverName = "Popover1";
		this.mPopovers = this.mPopovers || {};
		var oPopover = this.mPopovers[sPopoverName];
		var oSource = oEvent.getSource();
		var oBindingContext = oSource.getBindingContext();
		var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
		var oView;
		if (!oPopover) {
		    this.getOwnerComponent().runAsOwner(function () {
		oView = sap.ui.xmlview({viewName: "com.sap.build.standard.newGestionDInventairePoleEmploi.view." + sPopoverName});
		        this.getView().addDependent(oView);
		        oView.getController().setRouter(this.oRouter);
		        oPopover = oView.getContent()[0];
		        oPopover.setPlacement("Auto");
		        this.mPopovers[sPopoverName] = oPopover;
		    }.bind(this));
		}
		
		return new Promise(function (fnResolve) {
		    oPopover.attachEventOnce("afterOpen", null, fnResolve);
		    oPopover.openBy(oSource);
		    if (oView) {
		        oPopover.attachAfterOpen(function () {
		            oPopover.rerender();
		        });
		    } else {
		        oView = oPopover.getParent();
		    }
		    
		    var oModel = this.getView().getModel();
		    if (oModel) {
		        oView.setModel(oModel);
		    }
		    if (sPath) {
		        var oParams = oView.getController().getBindingParameters();
		        oView.bindObject({path: sPath, parameters: oParams});
		    }
		}.bind(this)).catch(function (err) { if (err !== undefined) { MessageBox.error(err.message); }});
		
        },
_onButtonPress6: function (oEvent) {
            		
		var oBindingContext = oEvent.getSource().getBindingContext(); 
		
		return new Promise(function(fnResolve) {
		
		    this.doNavigate("Bilan", oBindingContext, fnResolve, ""
		    );
		}.bind(this)).catch(function (err) { if (err !== undefined) { MessageBox.error(err.message); }});
		
        },
onInit: function () {
            		
        this.mBindingOptions = {};
        this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        this.oRouter.getTarget("Accueil").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

        }
});
}, /* bExport= */true);
