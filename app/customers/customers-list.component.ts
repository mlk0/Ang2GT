
import { Component } from "@angular/core";
import { ICustomer, Customer } from "./customer";


@Component({
    selector: "pm-customers"
    , templateUrl: "app/customers/customers-list.component.htm"
})
export class CustomerListComponent {
    componentTitle: string = "List of Customers";
    customers: Customer[] = [
        new Customer("Stojko", 10, 1),
        new Customer("Kurto", 23),
        new Customer("Prdlo", 32, 2)
        // { 
        //     name: "Stojko", 
        //     age: 10 , 
        //     numberOfSubscriptions:1 
        // }
        // ,
        // { name: "Kurto", age: 23 , numberOfSubscriptions:0 },
        // { name: "Prdlo", age: 32 , numberOfSubscriptions:3}

    ];

    showCustomers : Boolean  = false;
    toggleCustomers() : void {
        this.showCustomers = !this.showCustomers;

    }
}