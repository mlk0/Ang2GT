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
        // getCustomersX() : Customer[]{
        //     var allCustomers = [
        //     new Customer("Kiddo", 10, 1),
        //     new Customer("Kurto", 23),
        //     new Customer("Prdlo", 32, 2),
        //     new Customer("Oldy", 68, 8),
        //     new Customer("Teeny", 16, 0),
        //     new Customer("Granny", 67, 4),
        //     new Customer("Fancy", 18, 3)]
        //     return allCustomers;
        // }
        this._customersUrl = "http://a2services.azurewebsites.net/api/customers";
    }
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
    CustomerService.prototype.addCustomer = function (customer) {
        console.log("addCustomer : " + JSON.stringify(customer));
        var bodyString = JSON.stringify(customer); // Stringify payload
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: requestHeaders }); //// Create a request option
        // var httpResponseStatus =   this._http.post(this._customersUrl, JSON.stringify(customer), config )
        var httpResponseStatus = this._http.post(this._customersUrl, JSON.stringify(customer), new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': 'application/json' }) }))
            .do(function (d) { return console.log("customers response : " + JSON.stringify(d)); })
            .catch(this.handleError)
            .map(function (r) { return r.status; });
        return httpResponseStatus;
    };
    CustomerService.prototype.removeCustomer = function (customer) {
        console.log("removeCustomer : " + JSON.stringify(customer));
        var body = JSON.stringify(customer);
        var options = new http_1.RequestOptions({ body: body, headers: new http_1.Headers({ 'Content-Type': 'application/json' }) });
        var result = this._http.delete(this._customersUrl, options)
            .do(function (d) { return console.log("removeCustomer response : " + JSON.stringify(d)); })
            .catch(this.handleError)
            .map(function (r) { return r.status; });
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