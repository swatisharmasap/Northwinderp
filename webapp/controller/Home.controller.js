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
