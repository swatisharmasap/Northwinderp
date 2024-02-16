sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.northwinderp.controller.Home", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                let oDataModel = this.getOwnerComponent().getModel();
                this.getView().setBusy(true)
                oDataModel.read("/Categories", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("categoriesID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "categoryModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                oDataModel.read("/Customers", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)
                        

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("customerID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "customerModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                oDataModel.read("/Employees", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("employeeID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "employeesModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                oDataModel.read("/Order_Details", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)
                        
                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("OrderDetailsID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "orderDetailsModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                oDataModel.read("/Orders", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("OrdersID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "ordersModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                oDataModel.read("/Products", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("ProductsID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "productsModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                oDataModel.read("/Regions", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("RegionID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "regionModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                oDataModel.read("/Shippers", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("ShipperID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "shippersModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                oDataModel.read("/Suppliers", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("SupplierID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "suppliersModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                oDataModel.read("/Territories", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("TerritoriesID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "territoriesModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                oDataModel.read("/Alphabetical_list_of_products", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("ListOfProductsID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "productlistModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                
                oDataModel.read("/Current_Product_Lists", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("CurrentProductListID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "currentProductsModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                oDataModel.read("/Customer_and_Suppliers_by_Cities", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("CityID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "cityModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })
                oDataModel.read("/Invoices", {
                    success: function (oResponse) {
                        this.getView().setBusy(false)

                        oJsonModel.setData(oResponse.results);
                        this.getView().byId("InvoicesID1").setValue(`${oResponse.results.length}`)
                        this.getView().setModel(oJsonModel, "invoicesModel")
                    }.bind(this),
                    error: function (oError) {
                        this.getView().setBusy(false)
                    }
                })


            },
            onPressCategories:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteCategory")
            },
            onPressSummaryofSalesbyQuarters:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteSummarySales")
            },
            onPressCustomer:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteCustomer")
            },
            onPressEmployees:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteEmployees")
            },
            onPressOrderDetails:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteOrderDetails")
            },
            onPressOrders:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteOrders")
            },
            onPressProducts:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteProducts")
            },
            onPressRegions:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteRegion")
            },
            onPressShippers:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteShippers")
            },
            onPressSuppliers:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteSuppliers")
            },
            onPressTerritories:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteTerritories")
            },
            onPressAlphabeticallistofproducts:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteProductlist")
            },
            onPressCategorySalesfor1997:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteCategorySales")
            },
            onPressCurrentProductLists:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteCurrentProduct")
            },
            onPressCustomerandSuppliersbyCities:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteCity")
            },
            onPressInvoices:function(){
    

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteInvoices")
            },
            
            
            
            
        });
    });
