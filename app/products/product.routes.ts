import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailsCanActivateGuardService } from "./product-guard-canactivate-service";
import { ProductDetailCanDeactivateService } from "./product-detail-guard-candeactivate-service";

export const productRoutes: Routes = [

    { path: 'products', component: ProductListComponent },
    {
        path: 'product/:id', component: ProductDetailComponent,
        canActivate: [ProductDetailsCanActivateGuardService],
        canDeactivate: [ProductDetailCanDeactivateService]
    }
];