sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.City", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Customer_and_Suppliers_by_Cities",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("idCustomersandsupplierslistTitle").setText(`Customers and suppliers list(${oResponse.results.length})`)
                        this.getView().setModel(oJsonModel,"cityModel")
                    }.bind(this),
                    error:function(oError){
                        this.getView().setBusy(false)
                    }
                })
            },
            onSearch:function(){

                var City = this.getView().byId("City").getValue();
                var CompanyName = this.getView().byId("CompanyName").getValue();
                var allFilters = [];
                var oTableBinding = this.getView().byId("cityTable").getBinding("items");
                if(City){
                    var oMyFilterCity = new sap.ui.model.Filter("City",sap.ui.model.FilterOperator.EQ,City)
                    allFilters.push(oMyFilterCity);
                }

                if(CompanyName){
                    var oMyFilterCompanyName=new sap.ui.model.Filter("CompanyName",sap.ui.model.FilterOperator.Contains,CompanyName);
                    allFilters.push(oMyFilterCompanyName);
                }
             
              
                var oFilter = new sap.ui.model.Filter({
                    filters: allFilters,
                    and: true
                  });

                  oTableBinding.filter(oFilter);

                     
      }
            
           
           
        
        });
    });

  