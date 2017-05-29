
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WarehouseComponent } from "./warehouse.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [WarehouseComponent],
    imports: [CommonModule, FormsModule,
        RouterModule.forChild([
            { path: 'locations', component: WarehouseComponent }
        ])
    ]
    // ,
    // exports : [WarehouseComponent]
})
export class WarehouseModule {

}