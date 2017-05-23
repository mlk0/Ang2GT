"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
//moved to the product module
//import { ProductListComponent } from "./products/product-list.component";
//import { ProductListFilter } from "./products/product-list.pipe";
//import { ProductItemsComponent } from "./item-count/item-count.component";
//import { ProductDetailComponent } from "./products/product-detail.component";
// import { ProductDetailsCanActivateGuardService } from "./products/product-guard-canactivate-service";
// import { ProductDetailCanDeactivateService } from "./products/product-detail-guard-candeactivate-service";
//moved to the customer module
//import { CustomerListComponent } from "./customers/customers-list.component";
//import { TeenCustomersFilter } from "./customers/customer-list-teens.pipe";
//import { SeniorCustomersFilter } from "./customers/customer-list-seniors.pipe";
//import { RegularSubsribersFilter } from "./customers/customer-list-regulars.pipe";
//moved to the vendor module
//import { VendorListComponent } from "./vendors/vendor-list.component";  - removed from here in order to be defined and exported in the vendors module
//import { StarComponent } from "./shared/star.component";
//import { NotFoundComponent } from "./shared/NotFound/notfound.component";
//import { WelcomeComponent } from "./home/welcome.component";
var vendor_module_1 = require("./vendors/vendor.module");
var customer_module_1 = require("./customers/customer.module");
var shared_module_1 = require("./shared/shared.module");
var product_module_1 = require("./products/product.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            product_module_1.ProductModule,
            vendor_module_1.VendorModule,
            customer_module_1.CustomerModule,
            shared_module_1.SharedModule,
            router_1.RouterModule.forRoot([])
        ],
        //providers: [ProductDetailsCanActivateGuardService, ProductDetailCanDeactivateService],
        declarations: [
            app_component_1.AppComponent
            //, VendorListComponent  - removed from declarations in the app.module and moved to vendor.module 
            //, CustomerListComponent
            // , TeenCustomersFilter
            // , SeniorCustomersFilter
            // , RegularSubsribersFilter
            //moved to the product module
            // , ProductListComponent , ProductListFilter, ProductItemsComponent, , ProductDetailComponent
            // , WelcomeComponent
            //  , StarComponent
            // , NotFoundComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map