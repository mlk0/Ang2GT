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
var product_service_1 = require("./product-service");
var ProductListCanResolveGuard = (function () {
    function ProductListCanResolveGuard(_productService) {
        this._productService = _productService;
    }
    ProductListCanResolveGuard.prototype.resolve = function (route, state) {
        console.log('ProductListCanResolveGuard.resolve');
        return this._productService.getProducts();
        //            return this._productService.getProducts();
        // this._productService.getProducts().map(products=>products);
        //    this._productService.getProducts()
        //     .subscribe(s => {
        //       //  this.products = s;
        //        console.log('got the response');
        //         return s;
        //     }, e => {
        //         console.log('error in ProductListCanResolveGuard.resolve : ' + e);
        //         this.errorMessage = <any>e;
        //     }
        //       //  this.errorMessage = <any>e})
        //     );
        //return this.products;
        //     this._productService.getProducts().map((p)=>{
        //     console.log('in map');
        //     return p;
        //   });
        //  console.log('ProductListCanResolveGuard.resolve after getProducts()');
    };
    return ProductListCanResolveGuard;
}());
ProductListCanResolveGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListCanResolveGuard);
exports.ProductListCanResolveGuard = ProductListCanResolveGuard;
//# sourceMappingURL=product-list-guard-canresolve.service.js.map