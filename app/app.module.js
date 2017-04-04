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
var app_component_1 = require("./app.component");
var product_list_component_1 = require("./products/product-list.component");
var customers_list_component_1 = require("./customers/customers-list.component");
var vendor_list_component_1 = require("./vendors/vendor-list.component");
var product_list_pipe_1 = require("./products/product-list.pipe");
var customer_list_teens_pipe_1 = require("./customers/customer-list-teens.pipe");
var customer_list_seniors_pipe_1 = require("./customers/customer-list-seniors.pipe");
var customer_list_regulars_pipe_1 = require("./customers/customer-list-regulars.pipe");
var item_count_component_1 = require("./item-count/item-count.component");
var star_component_1 = require("./shared/star.component");
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
        ],
        declarations: [
            app_component_1.AppComponent,
            product_list_component_1.ProductListComponent,
            customers_list_component_1.CustomerListComponent,
            vendor_list_component_1.VendorListComponent,
            product_list_pipe_1.ProductListFilter,
            customer_list_teens_pipe_1.TeenCustomersFilter,
            customer_list_seniors_pipe_1.SeniorCustomersFilter,
            customer_list_regulars_pipe_1.RegularSubsribersFilter,
            item_count_component_1.ProductItemsComponent,
            star_component_1.StarComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map