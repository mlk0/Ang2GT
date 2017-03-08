import { Component } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: "app/products/product-list.component.htm"
})
export class ProductListComponent {
    pageTitle: string = "Product List Component";
    imageHeight: number = 50;
    imageWidth: number = 50;
    showProductImages: boolean = true;
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "productId": 55,
            "productName": "Pliers",
            "productCode": "TBX-1012",
            "releaseDate": "2016-01-05",
            "description": "Some Pliers",
            "price": 8.9876,
            "starRating": 2.8,
            "imageUrl": "https://openclipart.org/download/236989/Pliers-fixed.svg"
        }
    ];

    productFilter: string = "test1";

    toggleProductImage(): void {
        this.showProductImages = !this.showProductImages;
    }


    doubleTheImageSizes(): void {
        this.imageWidth = this.imageWidth * 2;
        this.imageHeight = this.imageHeight * 2;
    }

    resetsizeTo50(): void {
        this.imageWidth = 50;
        this.imageHeight = 50;

    }
















    showMyProducts: boolean = false; //i just want to hide this since it is exploring using the compoenent as a directive with nesting but it does not look good

    productsX: any[]
    = [
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
    ]
    ;

    showMyProductsTogle(): void {
        this.showMyProducts = !this.showMyProducts;
    }













}