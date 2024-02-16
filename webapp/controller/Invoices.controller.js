sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/NumberFormat"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,NumberFormat) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Invoices", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Invoices",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
                        oJsonModel.setData(oResponse.results);
                        this.getView().setModel(oJsonModel,"invoicesModel")
                    }.bind(this),
                    error:function(oError){
                        this.getView().setBusy(false)
                    }
                })
            },
            onSearch:function(){

                var ShipName = this.getView().byId("ShipName").getValue();
                var ShipAddress = this.getView().byId("ShipAddress").getValue();
                var allFilters = [];
                var oTableBinding = this.getView().byId("invoicestable").getBinding("rows");
                if(ShipName){
                    var oMyFilterShipName = new sap.ui.model.Filter("ShipName",sap.ui.model.FilterOperator.Contains,ShipName)
                    allFilters.push(oMyFilterShipName);
                }

                if(ShipAddress){
                    var oMyFilterShipAddress=new sap.ui.model.Filter("ShipAddress",sap.ui.model.FilterOperator.Contains,ShipAddress);
                    allFilters.push(oMyFilterShipAddress);
                }
             
              
                var oFilter = new sap.ui.model.Filter({
                    filters: allFilters,
                    and: true
                  });

                  oTableBinding.filter(oFilter);

                     
      },
      numberFormatting: function (value) {
        var oFormat = NumberFormat.getFloatInstance({
            "groupingEnabled": true,
            "groupingSeparator": ',',
            "groupingSize": 3,
            "decimalSeparator": "."
        });
        return oFormat.format(parseFloat(value).toFixed(2));

    }
            
           
           
        
        });
    });

  