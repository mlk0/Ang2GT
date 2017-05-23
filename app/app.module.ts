import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

//moved to the product module
//import { ProductListComponent } from "./products/product-list.component";
//import { ProductListFilter } from "./products/product-list.pipe";
//import { ProductItemsComponent } from "./item-count/item-count.component";
//import { ProductDetailComponent } from "./products/product-detail.component";
// import { ProductDetailsCanActivateGuardService } from "./products/product-guard-canactivate-service";
// import { ProductDetailCanDeactivateService } from "./products/product-detail-guard-candeactivate-service";

//moved to the customer module
//import { CustomerListComponent } from "./customers/customers-list.component";
//import { TeenCustomersFilter } from "./customers/customer-list-teens.pipe";
//import { SeniorCustomersFilter } from "./customers/customer-list-seniors.pipe";
//import { RegularSubsribersFilter } from "./customers/customer-list-regulars.pipe";

//moved to the vendor module
//import { VendorListComponent } from "./vendors/vendor-list.component";  - removed from here in order to be defined and exported in the vendors module


//import { StarComponent } from "./shared/star.component";
//import { NotFoundComponent } from "./shared/NotFound/notfound.component";

//import { WelcomeComponent } from "./home/welcome.component";

import { VendorModule } from "./vendors/vendor.module";
import { CustomerModule } from "./customers/customer.module";
import { SharedModule } from "./shared/shared.module";
import { ProductModule } from "./products/product.module";






@NgModule({
  imports: [BrowserModule
    , FormsModule
    , HttpModule
   ,ProductModule

      ,VendorModule
      ,CustomerModule
      ,SharedModule
       
      
    , RouterModule.forRoot([
    //  { path: 'welcome', component: WelcomeComponent },
      // { path: 'products', component: ProductListComponent },
      // {
      //   path: 'product/:id', component: ProductDetailComponent,
      //   canActivate: [ProductDetailsCanActivateGuardService],
      //   canDeactivate: [ProductDetailCanDeactivateService]
      // },
     // { path: "customers", component: CustomerListComponent },
      // { path: 'vendors', component: VendorListComponent },  this route is commented here since it's moved in the vendor's module
      // { path: '', component: WelcomeComponent },

      //{ path: '', redirectTo: 'welcome', pathMatch: 'full' }
      // { path: "notfound/:parameters", component: NotFoundComponent }, //i need this in order to be able to explicltly redirect
      //{ path: '**', component: NotFoundComponent }
      ])
      
      
  ],
  //providers: [ProductDetailsCanActivateGuardService, ProductDetailCanDeactivateService],
  declarations: [
    AppComponent
   
    //, VendorListComponent  - removed from declarations in the app.module and moved to vendor.module 
   
    
    //, CustomerListComponent
    // , TeenCustomersFilter
    // , SeniorCustomersFilter
    // , RegularSubsribersFilter
   
   //moved to the product module
   // , ProductListComponent , ProductListFilter, ProductItemsComponent, , ProductDetailComponent
    
   
   // , WelcomeComponent

  //  , StarComponent
    // , NotFoundComponent
  ],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
