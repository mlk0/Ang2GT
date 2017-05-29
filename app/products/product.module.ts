
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailsCanActivateGuardService } from "./product-guard-canactivate-service";
import { ProductDetailCanDeactivateService } from "./product-detail-guard-candeactivate-service";
import { ProductItemsComponent } from "../item-count/item-count.component";
import { ProductListFilter } from "./product-list.pipe";
import { CustomerModule } from "../customers/customer.module";
import { SharedModule } from "../shared/shared.module";
import { VendorModule } from "../vendors/vendor.module";
import { productRoutes } from "./product.routes";
import { ProductListCanResolveGuard } from "./product-list-guard-canresolve.service";
import { ProductService } from "./product-service";
//import { StarComponent } from "../shared/star.component";

@NgModule({
    imports: [FormsModule, CommonModule
        , CustomerModule
        //  ,VendorModule
        //  ,SharedModule
        //,StarComponent
        , RouterModule.forChild(
            // [
            //     { path: 'products', component: ProductListComponent },
            //     {
            //         path: 'product/:id', component: ProductDetailComponent,
            //         canActivate: [ProductDetailsCanActivateGuardService],
            //         canDeactivate: [ProductDetailCanDeactivateService]
            //     }
            // ]

            productRoutes
        )


    ],
    //exports : [SharedModule,CustomerModule],
    providers: [
        ProductService,
        ProductDetailsCanActivateGuardService, 
        ProductDetailCanDeactivateService
        ,ProductListCanResolveGuard
        ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductItemsComponent,
        ProductListFilter

    ]
})
export class ProductModule {

}