sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment) {
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

                     
      },
      onAdd: function () {
        var oView = this.getView();

        // create dialog lazily
        if (!this.byId("openDialog")) {

            // load asynchronous XML fragment
            Fragment.load({
                id: oView.getId(),
                name: "sap.com.northwinderp.fragments.Customer",
                controller: this
            }).then(function (oDialog) {
                // connect dialog to the root view 
                //of this component (models, lifecycle)
                oView.addDependent(oDialog);
               
                oDialog.open();
            });

        }



    }
    ,
    closeDialog: function () {
        this.byId("openDialog").destroy();
    },
    saveDialog:function(){
        debugger;
        var CustomerID = this.getView().byId("field0").getValue();
        var CompanyName = this.getView().byId("field1").getValue(); 
        var ContactName = this.getView().byId("field2").getValue();
        var ocustomeJSONModel = this.getView().getModel("customerModel");
        var modelData = ocustomeJSONModel.getData();
        var orecordArray = modelData;
        orecordArray.push({
            CustomerID: CustomerID,
            CompanyName: CompanyName,
            ContactName:ContactName,

          });
          

          ocustomeJSONModel.setData(orecordArray);
          this.closeDialog();
    },


      
            
        });
    });
