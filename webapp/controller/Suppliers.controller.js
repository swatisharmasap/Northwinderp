sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Suppliers", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Suppliers",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("idSuppliersTitle").setText(`Suppliers(${oResponse.results.length})`)
                        this.getView().setModel(oJsonModel,"suppliersModel")
                    }.bind(this),
                    error:function(oError){
                        this.getView().setBusy(false)
                    }
                })
            },
            onSearch:function(){

                var SupplierID = this.getView().byId("SupplierID").getValue();
                var CompanyName = this.getView().byId("CompanyName").getValue();
                var allFilters = [];
                var oTableBinding = this.getView().byId("suppliersTable").getBinding("items");
                if(SupplierID){
                    var oMyFilterSupplierID = new sap.ui.model.Filter("SupplierID",sap.ui.model.FilterOperator.EQ,SupplierID)
                    allFilters.push(oMyFilterSupplierID);
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

  