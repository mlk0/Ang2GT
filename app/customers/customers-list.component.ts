
import { Component } from "@angular/core";


@Component({
    selector: "pm-customers"
    , templateUrl: "app/customers/customers-list.component.htm"
})
export class CustomerListComponent {
    componentTitle: string = "List of Customers";
    customers: any[] = [
        { name: "Stojko", age: 10 },
        { name: "Kurto", age: 23 }

    ]
}