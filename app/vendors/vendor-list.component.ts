import { Component } from "@angular/core";

@Component({
    selector : 'pm-vendors',
    templateUrl : "app/vendors/vendor-list.component.htm"


})
export class VendorListComponent{
    title : string = "Hello, made up by these 2 people: LARA & MIRKO";
    borderWidth: Number =5;
}