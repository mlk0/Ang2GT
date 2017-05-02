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
var customer_1 = require("./customer");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var CustomerService = (function () {
    function CustomerService(_http) {
        this._http = _http;
        this._customersUrl = "http://a2services.azurewebsites.net/api/customers";
    }
    CustomerService.prototype.getCustomersX = function () {
        var allCustomers = [
            new customer_1.Customer("Kiddo", 10, 1),
            new customer_1.Customer("Kurto", 23),
            new customer_1.Customer("Prdlo", 32, 2),
            new customer_1.Customer("Oldy", 68, 8),
            new customer_1.Customer("Teeny", 16, 0),
            new customer_1.Customer("Granny", 67, 4),
            new customer_1.Customer("Fancy", 18, 3)
        ];
        return allCustomers;
    };
    CustomerService.prototype.handleError = function (error) {
        console.log("customers list ERROR : " + JSON.stringify(error));
    };
    CustomerService.prototype.castCustomersList = function (response) {
        var customers = null;
        try {
            var retrievedCustomers = (response.json());
            customers = retrievedCustomers.map(function (c) { return new customer_1.Customer(c.name, c.age, c.numberOfSubscriptions); });
            console.log("in castCustomersList products.length : " + customers.length);
        }
        catch (e) {
            console.log("ERROR in castCustomersList : " + e);
        }
        return customers;
    };
    CustomerService.prototype.getCustomers = function () {
        var _this = this;
        console.log("this._customersUrl : " + this._customersUrl);
        var result = this._http.get(this._customersUrl)
            .do(function (d) { return console.log("customers response : " + JSON.stringify(d)); })
            .catch(this.handleError)
            .map(function (r) { return _this.castCustomersList(r); });
        return result;
    };
    return CustomerService;
}());
CustomerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customers-service.js.map