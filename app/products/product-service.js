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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this._productsUrl = 'http://a2services.azurewebsites.net/api/products'; // 'api/products/productsWithQuantities.json';
    }
    ProductService.prototype.getProducts = function () {
        var _this = this;
        console.log("this._productsUrl : " + this._productsUrl);
        return this._http.get(this._productsUrl)
            .do(function (data) { return console.log("products response : " + JSON.stringify(data)); })
            .catch(this.handleError)
            .map(function (r) { return _this.castProductList(r); });
    };
    ProductService.prototype.castProductList = function (response) {
        console.log("in castProductList");
        var products = null;
        try {
            products = response.json();
            console.log("in castProductList products.length : " + products.length);
        }
        catch (e) {
            console.log("ERROR in castProductList: " + e);
        }
        return products;
    };
    // getProducts() : Observable<IProduct[]> {
    //     console.log("this._productsUrl : " + this._productsUrl);
    //     return this._http.get(this._productsUrl).map((r:Response)=><IProduct[]>r.json())
    //      .do(data=>console.log("products response : " + JSON.stringify(data))) 
    //    // .do(data=>console.log("products response : " +  data)
    //     .catch(this.handleError)
    //     ;
    //     //var productListResponse = productListObservableResponse.map((r:Response)=><IProduct[]>r.json());
    //    // return productListResponse;
    // }
    ProductService.prototype.handleError = function (error) {
        console.log("product list ERROR : " + JSON.stringify(error));
    };
    ProductService.prototype.getProductsX = function () {
        var allProducts = [
            {
                "productId": 55,
                "productName": "Pliers",
                "productCode": "TBX-1012",
                "releaseDate": "2016-01-05",
                "description": "Some Pliers",
                "price": 8.9876,
                "starRating": 2.8,
                "imageUrl": "https://openclipart.org/download/236989/Pliers-fixed.svg",
                "quantity": 2
            },
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
                "quantity": 10
            },
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
                "quantity": 1
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
                "quantity": 3
            },
            {
                "productId": 8,
                "productName": "Saw",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
                "quantity": 13
            },
            {
                "productId": 10,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",
                "quantity": 8
            }
        ];
        return allProducts;
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map