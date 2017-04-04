import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { IProduct } from "./product";
import { IItemCount } from "../item-count/itemCount";
import { ProductService } from "./product-service";
import { CustomerService } from "../customers/customers-service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'pm-products',
    moduleId : module.id,
    templateUrl: "product-list.component.htm",
    styleUrls:
    ["product-list.component.css",
        "product-list.component1.css"],
    styles: [".oliveDashed {border-color:cadetblue;border-style: dashed;border-width: 10px}"]
    ,providers : [CustomerService]
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
        errorMessage: any;
    ngOnDestroy(): void {
        console.log("ngOnDestroy for ProductListComponent")
    }

    ngOnChanges(changes: SimpleChanges): void {

        console.log("ngOnChanges for ProductListComponent" + changes);
    }

    ngOnInit(): void {
        console.log("ngOnInit for ProductListComponent");

        var allProducts = this._productService.getProducts()
        .subscribe(s=>this.products = s, e=> this.errorMessage = <any>e)
        
        ;
        
        console.log("number of products retrieved from ProductService : {this.products}", this.products);
        
       // this.products = allProducts;
        this.productQuantityUpdate();
         
    }

    pageTitle: string = "Product List Component";
    imageHeight: number = 50;
    imageWidth: number = 50;
    showProductImages: boolean = true;
    products: IProduct[];
    
    productFilter: string = "";

    constructor(private _productService : ProductService){
        this.productQuantityUpdate();
    }
   
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

    clearProductQuentity(productId : number): void{
        var productToBeCleared = this.products.filter((p:IProduct)=>p.productId == productId)[0];
        productToBeCleared.quantity = 0;
        this.productQuantityUpdate();

    }

    totalQuantity : number=0;


productItemQuantityChanged(itemCount:IItemCount)
{

    console.log('itemCount.ItemId ' + itemCount.ItemId + 'itemCount.ItemQuantity ' + itemCount.ItemQuantity )

    var updatedProductIndex = this.products.findIndex((p:IProduct)=>p.productId == itemCount.ItemId);
    if(updatedProductIndex != -1){
        var updatedProduct = this.products[updatedProductIndex];
        if(updatedProduct){
            updatedProduct.quantity = itemCount.ItemQuantity;
        }
    }

    this.productQuantityUpdate();
}

productQuantityUpdate():void{

if(this.products){

var productQuantities = this.products.map((p:IProduct)=>p.quantity);
    console.log('productQuantities : ' + productQuantities);
   
    //var total = productQuantities.reduce((acc : number, val:number)=>{return acc+val;},0);
    //if there is single expression in the function, the return is implicit
    var total = productQuantities.reduce((acc : number, val:number)=>acc+val,0);
   
   
    console.log('productQuantities total : ' + total);
    this.totalQuantity = total;

}


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