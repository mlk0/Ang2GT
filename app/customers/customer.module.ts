
import { NgModule } from "@angular/core";
import { CustomerListComponent } from "./customers-list.component";
import { RegularSubsribersFilter } from "./customer-list-regulars.pipe";
import { SeniorCustomersFilter } from "./customer-list-seniors.pipe";
import { TeenCustomersFilter } from "./customer-list-teens.pipe";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { VendorModule } from "../vendors/vendor.module";
import { customerRoutes } from "./customre.routes";
import { CustomerService } from "./customers-service";

@NgModule({
    declarations: [
        CustomerListComponent,
        RegularSubsribersFilter,
        SeniorCustomersFilter,
        TeenCustomersFilter
    ],
    exports: [CustomerListComponent]
    , imports : [
        FormsModule,
        CommonModule,
        RouterModule.forChild(
            // [
            //  { path: "customers", component: CustomerListComponent }
            // ]
            customerRoutes
            ),
        VendorModule
    ]
    , providers : [CustomerService]
    
})
export class CustomerModule {

}