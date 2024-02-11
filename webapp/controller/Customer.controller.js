sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Customer", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Customers",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("idCustomersTitle").setText(`Customers(${oResponse.results.length})`)
                        this.getView().setModel(oJsonModel,"customerModel")
                    }.bind(this),
                    error:function(oError){
                        this.getView().setBusy(false)
                    }
                    
                })

            },
            onSearch:function(){

                var CustomerID = this.getView().byId("CustomerID").getValue();
                var CompanyName = this.getView().byId("CompanyName").getValue();
                var allFilters = [];
                var oTableBinding = this.getView().byId("customerTable").getBinding("items");
                if(CustomerID){
                    var oMyFilterCusID = new sap.ui.model.Filter("CustomerID",sap.ui.model.FilterOperator.EQ,CustomerID)
                    allFilters.push(oMyFilterCusID);
                }

                if(CompanyName){
                    var oMyFilterComName=new sap.ui.model.Filter("CompanyName",sap.ui.model.FilterOperator.Contains,CompanyName);
                    allFilters.push(oMyFilterComName);
                }
             
              
                var oFilter = new sap.ui.model.Filter({
                    filters: allFilters,
                    and: true
                  });

                  oTableBinding.filter(oFilter);

                     
      }
            
        });
    });
