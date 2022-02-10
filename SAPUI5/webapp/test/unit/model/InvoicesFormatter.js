/* eslint-disable no-undef*/
//@ts-nocheck
sap.ui.define([
    "jeperez/SAPUI5/model/InvoicesFormatter",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.model.resource.ResourceModel } ResourceModel
     */

    function (InvoicesFormatter, ResourceModel) {

        QUnit.module("Qinvoices Status Estib", {
            beforeEach: function () {
                this._oResourceModel = new ResourceModel({
                    bundleUrl: sap.ui.require.toUrl("jeperez/SAPUI5") + "/i18n/i18n.properties"
                });
            },
            afterEach: function () {
                this._oResourceModel.destroy();
            }
        });

        QUnit.test("Should return  the Invoice Status Estib", function (assert) {

            let oModel = this.stub();
            oModel.withArgs("i18n").returns(this._oResourceModel);

            // stub() nos permite simular un controlador y vista

            let oViewStub = {
                getModel: oModel
            };

            let oControllerStub = {
                getView: this.stub().returns(oViewStub)
            };

            let fnIsolatedFormatter = InvoicesFormatter.invoiceStatus.bind(oControllerStub);

            //assert
            assert.strictEqual(fnIsolatedFormatter("A"), "New", "The status invoice for A is correct");
            assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The status invoice for B is correct");
            assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The status invoice for C is correct");

        });
    });

