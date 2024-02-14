sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment) {
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

                     
      },
      onAdd: function () {
        var oView = this.getView();

        // create dialog lazily
        if (!this.byId("openDialog")) {

            // load asynchronous XML fragment
            Fragment.load({
                id: oView.getId(),
                name: "sap.com.northwinderp.fragments.Region",
                controller: this
            }).then(function (oDialog) {
                // connect dialog to the root view 
                //of this component (models, lifecycle)
                oView.addDependent(oDialog);
               
                oDialog.open();
            });

        }



    },
    closeDialog: function () {
        this.byId("openDialog").destroy();
    },
    saveDialog:function(){
        debugger;
        var RegionID = this.getView().byId("field0").getValue();
        var RegionDescription = this.getView().byId("field1").getValue(); 
        var oregionJSONModel = this.getView().getModel("regionModel");
        var modelData = oregionJSONModel.getData();
        var orecordArray = modelData;
        orecordArray.push({
            RegionID: RegionID,
            RegionDescription: RegionDescription,
          });
          

          oregionJSONModel.setData(orecordArray);
          this.closeDialog();
    },
    onDelete:function(){
        var oregionJSONModel = this.getView().getModel("regionModel");
        var modelData = oregionJSONModel.getData();    
        var orecordArray = modelData;
        orecordArray.pop();
        oregionJSONModel.setData(modelData)


    }
           
        
        });
    });

  