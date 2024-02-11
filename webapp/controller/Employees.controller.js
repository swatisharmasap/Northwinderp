sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Employees", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Employees",{
                    success:function(oResponse){
                        this.getView().setBusy(false)
                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("idEmployeesTitle").setText(`Employees(${oResponse.results.length})`)  
                        this.getView().setModel(oJsonModel,"employeesModel")
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

                var EmployeeID = this.getView().byId("EmployeeID").getValue();
                var FirstName = this.getView().byId("FirstName").getValue();
                var allFilters = [];
                var oTableBinding = this.getView().byId("employeesTable").getBinding("items");
                if(EmployeeID){
                    var oMyFilterEmpID = new sap.ui.model.Filter("EmployeeID",sap.ui.model.FilterOperator.EQ,EmployeeID)
                    allFilters.push(oMyFilterEmpID);
                }
                
                if(FirstName){
                    var oMyFilterFirstName=new sap.ui.model.Filter("FirstName",sap.ui.model.FilterOperator.Contains,FirstName);
                    allFilters.push(oMyFilterFirstName);
                }
             
              
                var oFilter = new sap.ui.model.Filter({
                    filters: allFilters,
                    and: true
                  });

                  oTableBinding.filter(oFilter);

                     
      }
           
           
        
        });
    });

  