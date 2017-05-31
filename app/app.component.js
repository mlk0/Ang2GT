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
var auth_service_1 = require("./authentication/auth.service");
//import { ProductListCanResolveGuard } from "./products/product-list-guard-canresolve.service";
var AppComponent = (function () {
    function AppComponent(_authenticationService) {
        this._authenticationService = _authenticationService;
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
        providers: [] //CustomerService was intended to be used from the ProductListComponent but if it needs to be accessible through the menu, the service injection will need to be moved from the ProductServiceComponent to the appComponent
        ,
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthenticationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map