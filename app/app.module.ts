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

@NgModule({
  imports: [BrowserModule
    , FormsModule
    , HttpModule
    , RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: "customers", component: CustomerListComponent },
      { path: 'vendors', component: VendorListComponent },
      // { path: '', component: WelcomeComponent },

    { path: '', redirectTo : 'welcome', pathMatch:'full' },

      { path: '**', component: NotFoundComponent }])
  ],
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
