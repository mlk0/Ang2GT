
import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { ProductDetailComponent } from "./product-detail.component";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductDetailCanDeactivateService implements CanDeactivate<ProductDetailComponent> {
    constructor(private _router : Router){

    }
    canDeactivate(component: ProductDetailComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        console.log(`component.productId : ${component.productId}`);
        let isEven = component.productId % 2 == 0;
        console.log(`isEven : ${isEven}`);

        if (isEven) {
           
            let confirmResponse = confirm(`Are you sure you want to navigate out while productId is : ${component.productId} ?`);
            console.log(`confirmResponse : ${confirmResponse}`);
            return confirmResponse; 


        }
        return true;

    }

}