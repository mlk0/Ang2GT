import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { CustomerListComponent } from "./customers/customers-list.component";
import { VendorListComponent } from "./vendors/vendor-list.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    ProductListComponent
   ,CustomerListComponent,
   VendorListComponent
    ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
