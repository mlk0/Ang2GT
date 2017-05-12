import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl : 'product-detail.component.html',
    moduleId : module.id
})
export class ProductDetailComponent implements OnInit{
    
    
    
    ngOnInit(): void {
        
        let selectedProductId = +this._activatedRoute.snapshot.params['id'];
        console.log(`selectedProductId : ${selectedProductId}`);
        this.PageTitle+=` : ${selectedProductId}`;

       //this.product = this._activatedRoute.snapshot.params['id'];
       this.productId = selectedProductId;

    }

    PageTitle: string = "This is ProductDetails Component";
    product : IProduct;
    productId : number;

    constructor(private _activatedRoute : ActivatedRoute,
                private _router : Router){

    }

    onBack():void{
        this._router.navigate(['/products']);

    }
}