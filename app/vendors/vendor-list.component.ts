import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";

@Component({
    selector : 'pm-vendors',
    templateUrl : "app/vendors/vendor-list.component.htm"


})
export class VendorListComponent implements OnInit, OnChanges, OnDestroy{

    ngOnDestroy(): void {
             console.log("ngOnDestroy for VendorListComponent")
        }

        ngOnChanges(changes: SimpleChanges): void {
            
            console.log("ngOnChanges for VendorListComponent" + changes);
        }

        ngOnInit(): void {
            console.log("ngOnInit for VendorListComponent")
        }
        
    title : string = "Hello, made up by these 2 people: LARA & MIRKO";
    borderWidth: Number =5;
    vendors : any[] =[

        {name:"Acme Sales", city:"Skopje"},
        {name: "Best Product", city:"Toronto"}
    ];
}