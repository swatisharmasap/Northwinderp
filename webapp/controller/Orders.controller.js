sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/NumberFormat"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,NumberFormat) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Orders", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Orders",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
                        for(let i=0; i<oResponse.results.length; i++){

                            if(oResponse.results[i].OrderID==10248) {
                                oResponse.results[i].ShipCity="Delhi"
                                oResponse.results[i].ShipPostalCode="10053"
                                oResponse.results[i].ShipCountry="India"
                            }
                        }
                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("idOrdersTitle").setText(`Orders(${oResponse.results.length})`)
                        this.getView().setModel(oJsonModel,"ordersModel")
                    }.bind(this),
                    error:function(oError){
                        this.getView().setBusy(false)
                    }
                })
            },
            onSearch:function(){

                var OrderID = this.getView().byId("OrderID").getValue();
                var CustomerID = this.getView().byId("CustomerID").getValue();
                var allFilters = [];
                var oTableBinding = this.getView().byId("ordersTable").getBinding("items");
                if(OrderID){
                    var oMyFilterOrderID = new sap.ui.model.Filter("OrderID",sap.ui.model.FilterOperator.EQ,OrderID)
                    allFilters.push(oMyFilterOrderID);
                }
                
                if(CustomerID){
                    var oMyFilterCusID=new sap.ui.model.Filter("CustomerID",sap.ui.model.FilterOperator.Contains,CustomerID);
                    allFilters.push(oMyFilterCusID);
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

  