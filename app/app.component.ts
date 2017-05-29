import {Component} from "@angular/core"
//import { ProductListComponent } from "./products/product-list.component";
//import { ProductService } from "./products/product-service";
import { CustomerService } from "./customers/customers-service";
//import { ProductListCanResolveGuard } from "./products/product-list-guard-canresolve.service";

@Component({
    selector:'pm-app',
    templateUrl:'app.component.htm',
    // template: `<div>
    // <h1>{{pageTitle}}</h1>
    // my component
    // <pm-products>se ucitue</pm-products>
    // </div>`
    //templateUrl:"app/products/product-list.component.htm"
    providers:[
        //ProductService, 
        //CustomerService
    //,ProductListCanResolveGuard
    ] //CustomerService was intended to be used from the ProductListComponent but if it needs to be accessible through the menu, the service injection will need to be moved from the ProductServiceComponent to the appComponent
    ,moduleId : module.id
})
export class AppComponent {
    pageTitle : string = 'Acme Product Management';
}