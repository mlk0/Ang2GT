"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customer_1 = require("./customer");
var CustomerListComponent = (function () {
    function CustomerListComponent() {
        this.componentTitle = "List of Customers";
        this.customers = [
            new customer_1.Customer("Kiddo", 10, 1),
            new customer_1.Customer("Kurto", 23),
            new customer_1.Customer("Prdlo", 32, 2),
            new customer_1.Customer("Oldy", 68, 8),
            new customer_1.Customer("Teeny", 16, 0),
            new customer_1.Customer("Granny", 67, 4),
            new customer_1.Customer("Fancy", 18, 3)
            // { 
            //     name: "Stojko", 
            //     age: 10 , 
            //     numberOfSubscriptions:1 
            // }
            // ,
            // { name: "Kurto", age: 23 , numberOfSubscriptions:0 },
            // { name: "Prdlo", age: 32 , numberOfSubscriptions:3}
        ];
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
    })
], CustomerListComponent);
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customers-list.component.js.map