import { Component } from "@angular/core";
import { IProduct } from "./product";

@Component({
    templateUrl : 'product-detail.component.html',
    moduleId : module.id
})
export class ProductDetailComponent{
    PageTitle : string;
    product : IProduct
}