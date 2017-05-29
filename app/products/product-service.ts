import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

    private _productsUrl: string = 'http://a2services.azurewebsites.net/api/products'; // 'api/products/productsWithQuantities.json';



    constructor(private _http: Http) { }


    getProducts(): Observable<IProduct[]> {
        console.log("this._productsUrl : " + this._productsUrl);
 
        setTimeout(function() {
            
        }, 3000);

        return this._http.get(this._productsUrl)
            //I am putting this do first to capture the orignal json
            .do(data => console.log("products response : " + JSON.stringify(data)))
            //then call to map that is using a mapping method where I can examine if the 
            //cast succeeded or failed due to incorrect json
            //if map is excuted first and do second, the log of the oriinal json will be missing in console.log

            .catch(this.handleError)
            .map((response: Response) => {
                console.log('ProductService.getProducts() in map');
                return this.castProductList(response);
            });

    }

    castProductList(response: Response): IProduct[] {
        console.log("in castProductList");
        var products = null;
        try {
            products = <IProduct[]>response.json();
            console.log("in castProductList products.length : " + products.length);
        }
        catch (e) {
            console.log("ERROR in castProductList: " + e);
        }
        return products;
    }

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








    handleError(error: Response): any {
        console.log("product list ERROR : " + JSON.stringify(error))
    }

    getProductsX(): IProduct[] {

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
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                ,
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
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                , "quantity": 3
            },
            {
                "productId": 8,
                "productName": "Saw",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                , "quantity": 13
            },
            {
                "productId": 10,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                , "quantity": 8
            }
        ];

        return allProducts;
    }
}