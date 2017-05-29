"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customers_list_component_1 = require("./customers-list.component");
var customer_list_regulars_pipe_1 = require("./customer-list-regulars.pipe");
var customer_list_seniors_pipe_1 = require("./customer-list-seniors.pipe");
var customer_list_teens_pipe_1 = require("./customer-list-teens.pipe");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var vendor_module_1 = require("../vendors/vendor.module");
var customre_routes_1 = require("./customre.routes");
var CustomerModule = (function () {
    function CustomerModule() {
    }
    return CustomerModule;
}());
CustomerModule = __decorate([
    core_1.NgModule({
        declarations: [
            customers_list_component_1.CustomerListComponent,
            customer_list_regulars_pipe_1.RegularSubsribersFilter,
            customer_list_seniors_pipe_1.SeniorCustomersFilter,
            customer_list_teens_pipe_1.TeenCustomersFilter
        ],
        exports: [customers_list_component_1.CustomerListComponent],
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild(
            // [
            //  { path: "customers", component: CustomerListComponent }
            // ]
            customre_routes_1.customerRoutes),
            vendor_module_1.VendorModule
        ]
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=customer.module.js.map