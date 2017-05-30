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
//import { VendorModule } from "./vendors/vendor.module";
// import { CustomerModule } from "./customers/customer.module";
//import { SharedModule } from "./shared/shared.module";
//import { ProductModule } from "./products/product.module";
// import { WarehouseModule } from "./warehouse/warehouse.module";
//import { WarehouseComponent } from "./warehouse/warehouse.component";
var notfound_component_1 = require("./shared/NotFound/notfound.component");
var shared_module_1 = require("./shared/shared.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
            //    , WarehouseModule 
            // , WarehouseComponent
            ,
            router_1.RouterModule.forRoot([
                //  { path: 'welcome', component: WelcomeComponent },
                // { path: 'products', component: ProductListComponent },
                // {
                //   path: 'product/:id', component: ProductDetailComponent,
                //   canActivate: [ProductDetailsCanActivateGuardService],
                //   canDeactivate: [ProductDetailCanDeactivateService]
                // },
                // { path: "customers", component: CustomerListComponent },
                // { path: 'vendors', component: VendorListComponent },  this route is commented here since it's moved in the vendor's module
                // { path: '', component: WelcomeComponent },
                //{ path: '', redirectTo: 'welcome', pathMatch: 'full' }
                // { path: "notfound/:parameters", component: NotFoundComponent }, //i need this in order to be able to explicltly redirect
                //{ path: '**', component: NotFoundComponent }
                { path: 'prd', loadChildren: 'app/products/product.module#ProductModule' },
                { path: 'warehouse', loadChildren: 'app/warehouse/warehouse.module#WarehouseModule' },
                { path: 'vnd', loadChildren: 'app/vendors/vendor.module#VendorModule' },
                { path: 'crm', loadChildren: 'app/customers/customer.module#CustomerModule' },
                { path: 'users', loadChildren: 'app/users/users.module#UsersModule' },
                //{ path: 'shared', loadChildren : 'app/shared/shared.module#SharedModule'}
                { path: '**', component: notfound_component_1.NotFoundComponent }
            ])
            //  , ProductModule
            //  , VendorModule
            //, CustomerModule
            ,
            shared_module_1.SharedModule
        ],
        //providers: [ProductDetailsCanActivateGuardService, ProductDetailCanDeactivateService],
        declarations: [
            app_component_1.AppComponent
            // , WarehouseComponent
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