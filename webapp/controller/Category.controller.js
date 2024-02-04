sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Category", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Categories",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
                        oJsonModel.setData(oResponse.results);
                        this.getView().setModel(oJsonModel,"categoryModel")
                    }.bind(this),
                    error:function(oError){
                        this.getView().setBusy(false)
                    }
                })
            },
            formatImage:function(sValue){
               
             
                if(sValue){
                    var sTrimmedData = sValue.substr(104);
                    return "data:image/bmp;base64," + sTrimmedData
                   // return "data:image/png;base64,"+sValue;
                }
            },
            onSearch:function(){

                var ProductID = this.getView().byId("CategoryID").getValue();
                var oTableBinding = this.getView().byId("categoryTable").getBinding("items");
                var oMyFilter = new sap.ui.model.Filter("CategoryID",sap.ui.model.FilterOperator.EQ,ProductID)
                if(ProductID){
                    oTableBinding.filter(oMyFilter);
                }else{
                    oTableBinding.filter([]);
                }
                     
      }
           
           
        
        });
    });

  