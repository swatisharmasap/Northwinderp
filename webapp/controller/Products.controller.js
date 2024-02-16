sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Products", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Products",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
                        var TotalUnit=0;
                        for(let i=0; i<oResponse.results.length; i++){
                    TotalUnit=TotalUnit+oResponse.results[i].UnitsInStock
                        }
                        this.getView().byId("TotalUnitid").setText(TotalUnit)
                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("idProductsTitle").setText(`Products(${oResponse.results.length})`)
                        this.getView().setModel(oJsonModel,"productsModel")
                    }.bind(this),
                    error:function(oError){
                        this.getView().setBusy(false)
                    }
                })
            },
            onSearch:function(){

                var ProductID = this.getView().byId("ProductID").getValue();
                var ProductName = this.getView().byId("ProductName").getValue();
                var allFilters = [];
                var oTableBinding = this.getView().byId("productsTable").getBinding("items");
                if(ProductID){
                    var oMyFilterProductID = new sap.ui.model.Filter("ProductID",sap.ui.model.FilterOperator.EQ,ProductID)
                    allFilters.push(oMyFilterProductID);
                }
                
                if(ProductName){
                    var oMyFilterProductName=new sap.ui.model.Filter("ProductName",sap.ui.model.FilterOperator.Contains,ProductName);
                    allFilters.push(oMyFilterProductName);
                }
             
              
                var oFilter = new sap.ui.model.Filter({
                    filters: allFilters,
                    and: true
                  });

                  oTableBinding.filter(oFilter);

                     
      },
     
           
        

        });
    });

  