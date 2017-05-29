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
var toastr_service_1 = require("../shared/toastr.service");
var ProductListComponent = (function () {
    function ProductListComponent(_productService, _toastrService) {
        this._productService = _productService;
        this._toastrService = _toastrService;
        this.pageTitle = "Product List Component";
        this.imageHeight = 50;
        this.imageWidth = 50;
        this.showProductImages = true;
        this.productFilter = "";
        this.totalQuantity = 0;
        this.showMyProducts = false; //i just want to hide this since it is exploring using the compoenent as a directive with nesting but it does not look good
        this.productsX = [
            {
                name: "stick",
                price: 10,
                isAvailable: true
            },
            {
                name: "ball",
                price: 3,
                isAvailable: false
            }
        ];
        this.productQuantityUpdate();
    }
    ProductListComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy for ProductListComponent");
    };
    ProductListComponent.prototype.ngOnChanges = function (changes) {
        console.log("ngOnChanges for ProductListComponent" + changes);
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit for ProductListComponent");
        var allProducts = this._productService.getProducts()
            .subscribe(function (s) { return _this.products = s; }, function (e) { return _this.errorMessage = e; });
        console.log("number of products retrieved from ProductService : {this.products}", this.products);
        // this.products = allProducts;
        this.productQuantityUpdate();
    };
    ProductListComponent.prototype.toggleProductImage = function () {
        this.showProductImages = !this.showProductImages;
    };
    ProductListComponent.prototype.doubleTheImageSizes = function () {
        this.imageWidth = this.imageWidth * 2;
        this.imageHeight = this.imageHeight * 2;
    };
    ProductListComponent.prototype.resetsizeTo50 = function () {
        this.imageWidth = 50;
        this.imageHeight = 50;
    };
    ProductListComponent.prototype.clearProductQuentity = function (productId) {
        var productToBeCleared = this.products.filter(function (p) { return p.productId == productId; })[0];
        productToBeCleared.quantity = 0;
        this.productQuantityUpdate();
    };
    ProductListComponent.prototype.productItemQuantityChanged = function (itemCount) {
        console.log('itemCount.ItemId ' + itemCount.ItemId + 'itemCount.ItemQuantity ' + itemCount.ItemQuantity);
        var updatedProductIndex = this.products.findIndex(function (p) { return p.productId == itemCount.ItemId; });
        if (updatedProductIndex != -1) {
            var updatedProduct = this.products[updatedProductIndex];
            var oldQuantity = updatedProduct.quantity;
            var newQuantity = itemCount.ItemQuantity;
            this._toastrService.success('oldQuantity : ' + oldQuantity + 'newQuantity : ' + newQuantity);
            if (updatedProduct) {
                updatedProduct.quantity = itemCount.ItemQuantity;
            }
        }
        this.productQuantityUpdate();
    };
    ProductListComponent.prototype.productQuantityUpdate = function () {
        if (this.products) {
            var productQuantities = this.products.map(function (p) { return p.quantity; });
            console.log('productQuantities : ' + productQuantities);
            //var total = productQuantities.reduce((acc : number, val:number)=>{return acc+val;},0);
            //if there is single expression in the function, the return is implicit
            var total = productQuantities.reduce(function (acc, val) { return acc + val; }, 0);
            console.log('productQuantities total : ' + total);
            this.totalQuantity = total;
        }
    };
    ProductListComponent.prototype.showMyProductsTogle = function () {
        this.showMyProducts = !this.showMyProducts;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'pm-products',
        moduleId: module.id,
        templateUrl: "product-list.component.htm",
        styleUrls: ["product-list.component.css",
            "product-list.component1.css"],
        styles: [".oliveDashed {border-color:cadetblue;border-style: dashed;border-width: 10px}"]
        //  ,providers : [CustomerService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, toastr_service_1.ToastrService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map