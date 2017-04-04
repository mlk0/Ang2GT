
import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { ICustomer, Customer } from "./customer";
import { CustomerService } from "./customers-service";


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
            console.log("ngOnInit for CustomerListComponent");

                var allCustomers = this._customerService.getCustomers();
                console.log("customer-list.component constructor - retrieved number of customers from customer service : " + allCustomers.length);
                this.customers = allCustomers;

        }

    componentTitle: string = "List of Customers";
    customers: Customer[] = null;

    showCustomers : Boolean  = false;
    toggleCustomers() : void {
        this.showCustomers = !this.showCustomers;

    }

    constructor(private _customerService : CustomerService){
       
    }
}