import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";

import { ProductListFilter } from "./products/product-list.pipe";

//import { CustomerListComponent } from "./customers/customers-list.component";
//import { TeenCustomersFilter } from "./customers/customer-list-teens.pipe";
//import { SeniorCustomersFilter } from "./customers/customer-list-seniors.pipe";
//import { RegularSubsribersFilter } from "./customers/customer-list-regulars.pipe";


//import { VendorListComponent } from "./vendors/vendor-list.component";  - removed from here in order to be defined and exported in the vendors module


import { ProductItemsComponent } from "./item-count/item-count.component";
import { StarComponent } from "./shared/star.component";

import { ProductDetailComponent } from "./products/product-detail.component";
import { WelcomeComponent } from "./home/welcome.component";
import { NotFoundComponent } from "./shared/NotFound/notfound.component";
import { ProductDetailsCanActivateGuardService } from "./products/product-guard-canactivate-service";
import { ProductDetailCanDeactivateService } from "./products/product-detail-guard-candeactivate-service";
import { VendorModule } from "./vendors/vendor.module";
import { CustomerModule } from "./customers/customer.module";

@NgModule({
  imports: [BrowserModule
    , FormsModule
    , HttpModule
    , RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent },
      {
        path: 'product/:id', component: ProductDetailComponent,
        canActivate: [ProductDetailsCanActivateGuardService],
        canDeactivate: [ProductDetailCanDeactivateService]
      },
     // { path: "customers", component: CustomerListComponent },
      // { path: 'vendors', component: VendorListComponent },  this route is commented here since it's moved in the vendor's module
      // { path: '', component: WelcomeComponent },

      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: "notfound/:parameters", component: NotFoundComponent }, //i need this in order to be able to explicltly redirect
      { path: '**', component: NotFoundComponent }])
      ,VendorModule
      ,CustomerModule
  ],
  providers: [ProductDetailsCanActivateGuardService, ProductDetailCanDeactivateService],
  declarations: [
    AppComponent
    , ProductListComponent
    //, VendorListComponent  - removed from declarations in the app.module and moved to vendor.module 
    , ProductListFilter

    //, CustomerListComponent
    // , TeenCustomersFilter
    // , SeniorCustomersFilter
    // , RegularSubsribersFilter
    , ProductItemsComponent
    , StarComponent
    , WelcomeComponent
    , ProductDetailComponent
    , NotFoundComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
