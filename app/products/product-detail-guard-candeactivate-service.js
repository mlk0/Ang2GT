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
var router_1 = require("@angular/router");
var ProductDetailCanDeactivateService = (function () {
    function ProductDetailCanDeactivateService(_router) {
        this._router = _router;
    }
    ProductDetailCanDeactivateService.prototype.canDeactivate = function (component, route, state) {
        console.log("component.productId : " + component.productId);
        var isEven = component.productId % 2 == 0;
        console.log("isEven : " + isEven);
        if (isEven) {
            var confirmResponse = confirm("Are you sure you want to navigate out while productId is : " + component.productId + " ?");
            console.log("confirmResponse : " + confirmResponse);
            return confirmResponse;
        }
        return true;
    };
    return ProductDetailCanDeactivateService;
}());
ProductDetailCanDeactivateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], ProductDetailCanDeactivateService);
exports.ProductDetailCanDeactivateService = ProductDetailCanDeactivateService;
//# sourceMappingURL=product-detail-guard-candeactivate-service.js.map