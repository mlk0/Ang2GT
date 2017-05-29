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
var customer_1 = require("./customer");
var customers_service_1 = require("./customers-service");
var toastr_service_1 = require("../shared/toastr.service");
//import { VendorListComponent } from "../vendors/vendor-list.component";
var CustomerListComponent = (function () {
    function CustomerListComponent(_customerService, _toastrService) {
        this._customerService = _customerService;
        this._toastrService = _toastrService;
        this.componentTitle = "List of Customers";
        this.customers = null;
        this.showCustomers = false;
        this.newCustomer = new customer_1.Customer("", 0);
    }
    CustomerListComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy for CustomerListComponent");
    };
    CustomerListComponent.prototype.ngOnChanges = function (changes) {
        console.log("ngOnChanges for CustomerListComponent" + changes);
    };
    CustomerListComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit for CustomerListComponent");
        this.getCustomers();
        // console.log("customer-list.component constructor - retrieved number of customers from customer service : " + allCustomers.length);
        // this.customers = allCustomers;
    };
    CustomerListComponent.prototype.toggleCustomers = function () {
        this.showCustomers = !this.showCustomers;
    };
    CustomerListComponent.prototype.getCustomers = function () {
        var _this = this;
        var allCustomers = this._customerService.getCustomers()
            .subscribe(function (s) { return _this.customers = s; }, function (e) { return _this.errorMessage = e; });
    };
    CustomerListComponent.prototype.addNewCustomer = function () {
        var _this = this;
        this._toastrService.info('Adding new customer : ' + this.newCustomer.name);
        var httpStatusCode = this._customerService.addCustomer(this.newCustomer)
            .subscribe(function (s) { return _this.refreshCustomers(s, _this.newCustomer); }, function (e) { return _this.errorMessage = e; });
    };
    CustomerListComponent.prototype.refreshCustomers = function (httpStatus, customer) {
        if (httpStatus == 200) {
            this.errorMessage = "Success";
            this._toastrService.success('Success [' + customer.name + ']');
            this.getCustomers();
            this.newCustomer = new customer_1.Customer("", 0);
        }
        else {
            this.errorMessage = "Failed adding or removing customer - httpStatusCode : " + httpStatus;
            this._toastrService.error('Failed adding or removing customer');
        }
    };
    CustomerListComponent.prototype.removeCustomer = function (customer) {
        var _this = this;
        this._toastrService.info('Removing existing customer : ' + customer.name);
        this._customerService.removeCustomer(customer).subscribe(function (s) { return _this.refreshCustomers(s, customer); }, function (e) { return _this.errorMessage = e; });
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
    __metadata("design:paramtypes", [customers_service_1.CustomerService, toastr_service_1.ToastrService])
], CustomerListComponent);
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customers-list.component.js.map