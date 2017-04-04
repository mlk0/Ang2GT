import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

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

@NgModule({
  imports: [ BrowserModule 
  , FormsModule 
   , HttpModule
  ],
  declarations: [ 
    AppComponent
    ,ProductListComponent
    ,CustomerListComponent
    ,VendorListComponent
    ,ProductListFilter
    ,TeenCustomersFilter
    ,SeniorCustomersFilter
    ,RegularSubsribersFilter
    ,ProductItemsComponent
    ,StarComponent
    ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
