"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./products/product-service");
var customers_service_1 = require("./customers/customers-service");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Acme Product Management';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        templateUrl: 'app.component.htm',
        // template: `<div>
        // <h1>{{pageTitle}}</h1>
        // my component
        // <pm-products>se ucitue</pm-products>
        // </div>`
        //templateUrl:"app/products/product-list.component.htm"
        providers: [product_service_1.ProductService, customers_service_1.CustomerService] //CustomerService was intended to be used from the ProductListComponent but if it needs to be accessible through the menu, the service injection will need to be moved from the ProductServiceComponent to the appComponent
        ,
        moduleId: module.id
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map