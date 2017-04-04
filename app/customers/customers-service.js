"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var core_1 = require("@angular/core");
var CustomerService = (function () {
    function CustomerService() {
    }
    CustomerService.prototype.getCustomers = function () {
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
    return CustomerService;
}());
CustomerService = __decorate([
    core_1.Injectable()
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customers-service.js.map