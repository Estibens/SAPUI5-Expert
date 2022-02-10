//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller"} Controller 
     * @param {typeof sap.ui.core.routing.History"} History
     * @param {typeof sap.ui.core.UIComponent"} UIComponent 
     */
    function (Controller, History, UIComponent) {
        "use strict"

        return Controller.extend("jeperez.SAPUI5.controller.Details", {

            onInit: function () {
                // obtenemos todas las rutas
                const oRouter = UIComponent.getRouterFor(this);
                // Seleccionamos la Ruta Details y llamamos una funcion en ese momento
                oRouter.getRoute("Details").attachPatternMatched(this._onObjectMatch, this);


            },

            // funcion que recibe el parametro
            _onObjectMatch: function (oEvent) {
                // se obtiene la instancia de la vista y se vincula el elemento de la ruta en el modelo nortwind
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoiceNav),
                    model: "northwind"
                })

            },

            onNavBack: function () {
                // obtenemos el historial de navegacion
                const oHistory = History.getInstance();
                // obtenemos por donde el usuario a navegado, deseamos obtener el hash anterior
                const sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    const oRouter = UIComponent.getRouterFor(this);
                    //Navegamos a la ruta principal
                    oRouter.navTo("RouteApp", {}, true);
                }


            }

        });
    });