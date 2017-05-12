import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductDetailsCanActivateGuardService implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        //alert("bummer");

        
        console.debug(`route.url : ${route.url}`);
        console.debug(`route.params : ${JSON.stringify(route.params)}`);
        let idParam = route.params["id"];
        console.debug(`isNaN(idParam) : ${ isNaN(idParam)}`);
        if(isNaN(idParam) || idParam < 0){
            this._router.navigate(["/notfound",JSON.stringify(route.params)]);
            return false;
        }
        return true;
    }
    constructor(private _router: Router) {
       
   }
   
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    //     return true
    // }

}