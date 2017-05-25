import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { IVendor } from "./vendor";

@Component({
    selector: 'pm-vendors',
    templateUrl: "vendor-list.component.htm",
    moduleId: module.id


})
export class VendorListComponent implements OnInit, OnChanges, OnDestroy {

    ngOnDestroy(): void {
        console.log("ngOnDestroy for VendorListComponent")
    }

    ngOnChanges(changes: SimpleChanges): void {

        console.log("ngOnChanges for VendorListComponent" + changes);
    }

    ngOnInit(): void {
        console.log("ngOnInit for VendorListComponent")
    }

    title: string = "Hello, made up by these 2 people: LARA & MIRKO";

    borderWidth: Number = 5;
    vendors: IVendor[] = [

        { name: "Acme Sales", city: "Skopje", isActive: true },
        { name: "Best Product", city: "Toronto", isActive: false },
        { name: "Turi Vadi", city: "Sviripicino", isActive: true }
    ];
}