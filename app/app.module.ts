import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { CustomerListComponent } from "./customers/customers-list.component";
import { VendorListComponent } from "./vendors/vendor-list.component";
import { ProductListFilter } from "./products/product-list.pipe";
import { TeenCustomersFilter } from "./customers/customer-list-teens.pipe";
import { SeniorCustomersFilter } from "./customers/customer-list-seniors.pipe";
import { RegularSubsribersFilter } from "./customers/customer-list-regulars.pipe";
import { ProductItemsComponent } from "./item-count/item-count.component";
import { StarComponent } from "./shared/star.component";

import { ProductDetailComponent } from "./products/product-detail.component";
import { WelcomeComponent } from "./home/welcome.component";
import { NotFoundComponent } from "./shared/NotFound/notfound.component";
import { ProductDetailsCanActivateGuardService } from "./products/product-guard-canactivate-service";
import { ProductDetailCanDeactivateService } from "./products/product-detail-guard-candeactivate-service";

@NgModule({
  imports: [BrowserModule
    , FormsModule
    , HttpModule
    , RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent, 
        canActivate : [ProductDetailsCanActivateGuardService],
        canDeactivate : [ProductDetailCanDeactivateService] },
      { path: "customers", component: CustomerListComponent },
      { path: 'vendors', component: VendorListComponent },
      // { path: '', component: WelcomeComponent },

    { path: '', redirectTo : 'welcome', pathMatch:'full' },
    {path:"notfound/:parameters",component:NotFoundComponent}, //i need this in order to be able to explicltly redirect
      { path: '**', component: NotFoundComponent }])
  ],
  providers : [ProductDetailsCanActivateGuardService, ProductDetailCanDeactivateService],
  declarations: [
    AppComponent
    , ProductListComponent
    , CustomerListComponent
    , VendorListComponent
    , ProductListFilter
    , TeenCustomersFilter
    , SeniorCustomersFilter
    , RegularSubsribersFilter
    , ProductItemsComponent
    , StarComponent
    , WelcomeComponent
    , ProductDetailComponent
    , NotFoundComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
