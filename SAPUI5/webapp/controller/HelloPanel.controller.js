//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller"} Controller 
     * @param {typeof sap.m.MessageToast"} MessageToast 
     * @param {typeof sap.ui.core.Fragment"} Fragment 
     */
    function (Controller, MessageToast, Fragment) {
        "use strict"

        return Controller.extend("jeperez.SAPUI5.controller.HelloPanel", {

            onInit: function () {

            },


            onShowHello: function () {
                // read text from i18m model
                var oBundle = this.getView().getModel("i18nId").getResourceBundle();
                // read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");

                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            },

            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
            }

        });
    });