import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailsCanActivateGuardService } from "./product-guard-canactivate-service";
import { ProductDetailCanDeactivateService } from "./product-detail-guard-candeactivate-service";
import { ProductListCanResolveGuard } from "./product-list-guard-canresolve.service";

export const productRoutes: Routes = [

    { path: 'products', component: ProductListComponent , resolve : { productList : ProductListCanResolveGuard} },
    {
        path: 'product/:id', component: ProductDetailComponent,
        canActivate: [ProductDetailsCanActivateGuardService],
        canDeactivate: [ProductDetailCanDeactivateService]
    }
];