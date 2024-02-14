sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.OrderDetails", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Order_Details",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
                        var Grandtotal=0;
                    for(let i=0; i<oResponse.results.length; i++){

                        oResponse.results[i].totalPrice = oResponse.results[i].UnitPrice*oResponse.results[i].Quantity-oResponse.results[i].Discount

                        Grandtotal=Grandtotal+oResponse.results[i].totalPrice
                    }
                    this.getView().byId("Grandtotalid").setText(Grandtotal)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("idOrderDetailsTitle").setText(`OrderDetails(${oResponse.results.length})`)
                        this.getView().setModel(oJsonModel,"orderDetailsModel")
                    }.bind(this),
                    error:function(oError){ this.getView().setBusy(false)}
                })
            },
            onSearch:function(){

                var OrderID = this.getView().byId("OrderID").getValue();
                var ProductID = this.getView().byId("ProductID").getValue();
                var allFilters = [];
                var oTableBinding = this.getView().byId("orderDetailsTable").getBinding("items");
                if(OrderID){
                    var oMyFilterOrderID = new sap.ui.model.Filter("OrderID",sap.ui.model.FilterOperator.EQ,OrderID)
                    allFilters.push(oMyFilterOrderID);
                }
                
                if(ProductID){
                    var oMyFilterProductID=new sap.ui.model.Filter("ProductID",sap.ui.model.FilterOperator.EQ,ProductID);
                    allFilters.push(oMyFilterProductID);
                }
             
              
                var oFilter = new sap.ui.model.Filter({
                    filters: allFilters,
                    and: true
                  });

                  oTableBinding.filter(oFilter);

                     
      }
           
           
        
        });
    });

  