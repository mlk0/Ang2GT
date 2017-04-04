import {Component} from "@angular/core"
import { ProductListComponent } from "./products/product-list.component";
import { ProductService } from "./products/product-service";

@Component({
    selector:'pm-app',
    template: `<div>
    <h1>{{pageTitle}}</h1>
    my component
    <pm-products>se ucitue</pm-products>
    </div>`
    //templateUrl:"app/products/product-list.component.htm"
    ,providers:[ProductService]
})
export class AppComponent {
    pageTitle : string = 'Acme Product Management';
}