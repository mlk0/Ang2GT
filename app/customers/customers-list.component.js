"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customers_service_1 = require("./customers-service");
var CustomerListComponent = (function () {
    function CustomerListComponent(_customerService) {
        this._customerService = _customerService;
        this.componentTitle = "List of Customers";
        this.customers = null;
        this.showCustomers = false;
    }
    CustomerListComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy for CustomerListComponent");
    };
    CustomerListComponent.prototype.ngOnChanges = function (changes) {
        console.log("ngOnChanges for CustomerListComponent" + changes);
    };
    CustomerListComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit for CustomerListComponent");
        var allCustomers = this._customerService.getCustomers();
        console.log("customer-list.component constructor - retrieved number of customers from customer service : " + allCustomers.length);
        this.customers = allCustomers;
    };
    CustomerListComponent.prototype.toggleCustomers = function () {
        this.showCustomers = !this.showCustomers;
    };
    return CustomerListComponent;
}());
CustomerListComponent = __decorate([
    core_1.Component({
        selector: "pm-customers",
        templateUrl: "customers-list.component.htm",
        styles: ["thead{color:red}"],
        styleUrls: ["customers-list.component.css"],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [customers_service_1.CustomerService])
], CustomerListComponent);
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customers-list.component.js.map