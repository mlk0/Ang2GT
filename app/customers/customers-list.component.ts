
import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { ICustomer, Customer } from "./customer";


@Component({
    selector: "pm-customers"
    , templateUrl: "customers-list.component.htm",
    styles:["thead{color:red}"],
    styleUrls:["customers-list.component.css"],
    moduleId : module.id
})
export class CustomerListComponent implements OnInit, OnChanges, OnDestroy{

    ngOnDestroy(): void {
             console.log("ngOnDestroy for CustomerListComponent")
        }

        ngOnChanges(changes: SimpleChanges): void {
            
            console.log("ngOnChanges for CustomerListComponent" + changes);
        }

        ngOnInit(): void {
            console.log("ngOnInit for CustomerListComponent")
        }

    componentTitle: string = "List of Customers";
    customers: Customer[] = [
        new Customer("Kiddo", 10, 1),
        new Customer("Kurto", 23),
        new Customer("Prdlo", 32, 2),
        new Customer("Oldy", 68, 8),
        new Customer("Teeny", 16, 0),
        new Customer("Granny", 67, 4),
        new Customer("Fancy", 18, 3)

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