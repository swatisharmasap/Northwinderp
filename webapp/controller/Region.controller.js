sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Region", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Regions",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
                        oJsonModel.setData(oResponse.results);
                        this.getView().setModel(oJsonModel,"regionModel")
                    }.bind(this),
                    error:function(oError){
                        this.getView().setBusy(false)
                    }
                })
            },
            
           
           
        
        });
    });

  