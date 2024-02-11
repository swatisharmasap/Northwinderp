sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Orders", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Orders",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
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

                     
      }
           
           
        
        });
    });

  