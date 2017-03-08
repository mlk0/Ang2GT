import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { CustomerListComponent } from "./customers/customers-list.component";
import { VendorListComponent } from "./vendors/vendor-list.component";

@NgModule({
  imports: [ BrowserModule 
  , FormsModule 
  ],
  declarations: [ 
    AppComponent
    ,ProductListComponent
    ,CustomerListComponent
    ,VendorListComponent
    ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
