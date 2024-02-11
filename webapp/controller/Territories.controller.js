sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Territories", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Territories",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("idTerritoriesTitle").setText(`Territories(${oResponse.results.length})`)
                        this.getView().setModel(oJsonModel,"territoriesModel")
                    }.bind(this),
                    error:function(oError){
                        this.getView().setBusy(false)
                    }
                })
            },
            onSearch:function(){

                var TerritoryID = this.getView().byId("TerritoryID").getValue();
                var TerritoryDescription = this.getView().byId("TerritoryDescription").getValue();
                var allFilters = [];
                var oTableBinding = this.getView().byId("territoriesTable").getBinding("items");
                if(TerritoryID){
                    var oMyFilterTerritoryID = new sap.ui.model.Filter("TerritoryID",sap.ui.model.FilterOperator.EQ,TerritoryID)
                    allFilters.push(oMyFilterTerritoryID);
                }
                
                if(TerritoryDescription){
                    var oMyFilterTerritoryDescription=new sap.ui.model.Filter("TerritoryDescription",sap.ui.model.FilterOperator.Contains,TerritoryDescription);
                    allFilters.push(oMyFilterTerritoryDescription);
                }
             
              
                var oFilter = new sap.ui.model.Filter({
                    filters: allFilters,
                    and: true
                  });

                  oTableBinding.filter(oFilter);

                     
      }
            
           
           
        
        });
    });

  