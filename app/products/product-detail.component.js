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
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_activatedRoute, _router) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.PageTitle = "This is ProductDetails Component";
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var selectedProductId = +this._activatedRoute.snapshot.params['id'];
        console.log("selectedProductId : " + selectedProductId);
        this.PageTitle += " : " + selectedProductId;
        //this.product = this._activatedRoute.snapshot.params['id'];
        this.productId = selectedProductId;
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/prd/products']);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'product-detail.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map