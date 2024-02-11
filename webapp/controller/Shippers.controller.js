sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Shippers", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Shippers",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("idShippersTitle").setText(`Shippers(${oResponse.results.length})`)
                        this.getView().setModel(oJsonModel,"shippersModel")
                    }.bind(this),
                    error:function(oError){
                        this.getView().setBusy(false)
                    }
                })
            },
            onSearch:function(){

                var ShipperID = this.getView().byId("ShipperID").getValue();
                var CompanyName = this.getView().byId("CompanyName").getValue();
                var allFilters = [];
                var oTableBinding = this.getView().byId("shippersTable").getBinding("items");
                if(ShipperID){
                    var oMyFilterShipperID = new sap.ui.model.Filter("ShipperID",sap.ui.model.FilterOperator.EQ,ShipperID)
                    allFilters.push(oMyFilterShipperID);
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

  