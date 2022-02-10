/*global QUnit*/
//@ts-nocheck

sap.ui.define([
    "jeperez/SAPUI5/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"
],

    /**
     * @param {typeof sap.ui.test.opaQunit} opaQunit 
     */
    function (mockserver, opaQunit) {
        "use strict";

        QUnit.module("Navigation Journey Estib");

        opaQunit("Should see the initial page of the app", function (Given, When, Then) {
            // initialize the mock server
            mockserver.init();

            // Arrangements
            Given.iStartMyUIComponent({
                componentConfig: {
                    name: "jeperez.SAPUI5"
                }
            });

            //Actions
            When.onTheAppPage.iSayHelloDialogButton();

            // Assertions
            Then.onTheAppPage.iSeeTheHelloDialog();

            //Cleanup
            Then.iTeardownMyApp();
        });
    });