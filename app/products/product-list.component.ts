import { Component } from "@angular/core";

 

@Component({
    selector:'pm-products',
    templateUrl : "app/products/product-list.component.htm"
})
export class ProductListComponent{
    pageTitle : string = "Product List Component"; 
    products : any[] 
    = [
        {
            name:"stick",
            price:10,
            isAvailable:true
        },
        {
            name:"ball",
            price:3,
            isAvailable:false
        }
    ]
    ;
}