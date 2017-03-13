"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = (function () {
    function Customer(name, age, numberOfSubscriptions) {
        if (numberOfSubscriptions === void 0) { numberOfSubscriptions = 0; }
        this.name = name;
        this.age = age;
        this.numberOfSubscriptions = numberOfSubscriptions;
    }
    // name: string;
    // age: number;
    // numberOfSubscriptions: number;
    Customer.prototype.isRegular = function () {
        return this.numberOfSubscriptions > 0;
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map