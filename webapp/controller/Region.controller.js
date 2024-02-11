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
                        this.getView().byId("idRegionTitle").setText(`Region(${oResponse.results.length})`)
                        this.getView().setModel(oJsonModel,"regionModel")
                    }.bind(this),
                    error:function(oError){
                        this.getView().setBusy(false)
                    }
                })
            },
            onSearch:function(){

                var RegionID = this.getView().byId("RegionID").getValue();
                var RegionDescription = this.getView().byId("RegionDescription").getValue();
                var allFilters = [];
                var oTableBinding = this.getView().byId("regionTable").getBinding("items");
                if(RegionID){
                    var oMyFilterRegionID = new sap.ui.model.Filter("RegionID",sap.ui.model.FilterOperator.EQ,RegionID)
                    allFilters.push(oMyFilterRegionID);
                }
                
                if(RegionDescription){
                    var oMyFilterRegionDescription=new sap.ui.model.Filter("RegionDescription",sap.ui.model.FilterOperator.Contains,RegionDescription);
                    allFilters.push(oMyFilterRegionDescription);
                }
             
              
                var oFilter = new sap.ui.model.Filter({
                    filters: allFilters,
                    and: true
                  });

                  oTableBinding.filter(oFilter);

                     
      }
           
           
        
        });
    });

  