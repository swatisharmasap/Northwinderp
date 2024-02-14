sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Category", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Categories", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)
                        for (let i = 0; i < oResponse.results.length; i++) {

                            if (oResponse.results[i].CategoryID == 1) {
                                oResponse.results[i].Description = oResponse.results[i].Description + " Wine"
                            }


                        }

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("idCategoryTitle").setText(`Category(${oResponse.results.length})`)
                        this.getView().setModel(oJsonModel, "categoryModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
            },
            formatImage: function (sValue) {


                if (sValue) {
                    var sTrimmedData = sValue.substr(104)
                    return "data:image/bmp;base64," + sTrimmedData
                    // return "data:image/png;base64,"+sValue;
                }
            },
            onSearch: function () {

                var CategoryID = this.getView().byId("CategoryID").getValue();
                var CategoryName = this.getView().byId("CategoryName").getValue();
                var allFilters = [];
                var oTableBinding = this.getView().byId("categoryTable").getBinding("items");
                if (CategoryID) {
                    var oMyFilterCatID = new sap.ui.model.Filter("CategoryID", sap.ui.model.FilterOperator.EQ, CategoryID)
                    allFilters.push(oMyFilterCatID);
                }

                if (CategoryName) {
                    var oMyFilterCatName = new sap.ui.model.Filter("CategoryName", sap.ui.model.FilterOperator.Contains, CategoryName);
                    allFilters.push(oMyFilterCatName);
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
                        name: "sap.com.northwinderp.fragments.Category",
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
                var CategoryID = this.getView().byId("field0").getValue();
                var CategoryName = this.getView().byId("field1").getValue();
                var Description = this.getView().byId("field2").getValue(); 
                var oCategoryJSONModel = this.getView().getModel("categoryModel");
                var modelData = oCategoryJSONModel.getData();
                var orecordArray = modelData;
                orecordArray.push({
                    CategoryID: CategoryID,
                    CategoryName: CategoryName,
                    Description: Description,
                  });
                  

                  oCategoryJSONModel.setData(orecordArray);
                  this.closeDialog();
            },
            onDelete:function(){
                var oCategoryJSONModel = this.getView().getModel("categoryModel");
                var modelData = oCategoryJSONModel.getData();    
                var orecordArray = modelData;
                orecordArray.pop();
                oCategoryJSONModel.setData(modelData)


            }



        });
    });

