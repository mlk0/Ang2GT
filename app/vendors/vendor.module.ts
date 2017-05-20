import { NgModule } from "@angular/core";
import { VendorListComponent } from "./vendor-list.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations : [ VendorListComponent ],
    imports : [ 
        FormsModule,  // required for ngModel 
        CommonModule, // required for ngIf and ngFor
        RouterModule.forChild([
            { path: 'vendors', component: VendorListComponent },
        ])
     ],
     exports : [
         
         VendorListComponent
         /*before adding this into th exports pm-vendors was not being able to be resolved
         when used from within the customers-list.component.htm*/
         ]
})
export class VendorModule{

}