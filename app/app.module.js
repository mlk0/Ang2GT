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
var product_list_component_1 = require("./products/product-list.component");
var product_list_pipe_1 = require("./products/product-list.pipe");
//import { CustomerListComponent } from "./customers/customers-list.component";
//import { TeenCustomersFilter } from "./customers/customer-list-teens.pipe";
//import { SeniorCustomersFilter } from "./customers/customer-list-seniors.pipe";
//import { RegularSubsribersFilter } from "./customers/customer-list-regulars.pipe";
//import { VendorListComponent } from "./vendors/vendor-list.component";  - removed from here in order to be defined and exported in the vendors module
var item_count_component_1 = require("./item-count/item-count.component");
var star_component_1 = require("./shared/star.component");
var product_detail_component_1 = require("./products/product-detail.component");
var welcome_component_1 = require("./home/welcome.component");
var notfound_component_1 = require("./shared/NotFound/notfound.component");
var product_guard_canactivate_service_1 = require("./products/product-guard-canactivate-service");
var product_detail_guard_candeactivate_service_1 = require("./products/product-detail-guard-candeactivate-service");
var vendor_module_1 = require("./vendors/vendor.module");
var customer_module_1 = require("./customers/customer.module");
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
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'products', component: product_list_component_1.ProductListComponent },
                {
                    path: 'product/:id', component: product_detail_component_1.ProductDetailComponent,
                    canActivate: [product_guard_canactivate_service_1.ProductDetailsCanActivateGuardService],
                    canDeactivate: [product_detail_guard_candeactivate_service_1.ProductDetailCanDeactivateService]
                },
                // { path: "customers", component: CustomerListComponent },
                // { path: 'vendors', component: VendorListComponent },  this route is commented here since it's moved in the vendor's module
                // { path: '', component: WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: "notfound/:parameters", component: notfound_component_1.NotFoundComponent },
                { path: '**', component: notfound_component_1.NotFoundComponent }
            ]),
            vendor_module_1.VendorModule,
            customer_module_1.CustomerModule
        ],
        providers: [product_guard_canactivate_service_1.ProductDetailsCanActivateGuardService, product_detail_guard_candeactivate_service_1.ProductDetailCanDeactivateService],
        declarations: [
            app_component_1.AppComponent,
            product_list_component_1.ProductListComponent
            //, VendorListComponent  - removed from declarations in the app.module and moved to vendor.module 
            ,
            product_list_pipe_1.ProductListFilter
            //, CustomerListComponent
            // , TeenCustomersFilter
            // , SeniorCustomersFilter
            // , RegularSubsribersFilter
            ,
            item_count_component_1.ProductItemsComponent,
            star_component_1.StarComponent,
            welcome_component_1.WelcomeComponent,
            product_detail_component_1.ProductDetailComponent,
            notfound_component_1.NotFoundComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map