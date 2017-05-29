
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { IProduct } from "./product";
import { ProductService } from "./product-service";

@Injectable()
export class ProductListCanResolveGuard implements Resolve<any>
{
    constructor(private _productService : ProductService){

    }
   
 

    errorMessage: any;
     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
    {
            console.log('ProductListCanResolveGuard.resolve')
            
 
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


    }

}