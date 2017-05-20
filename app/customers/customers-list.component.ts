
import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { ICustomer, Customer } from "./customer";
import { CustomerService } from "./customers-service";
//import { VendorListComponent } from "../vendors/vendor-list.component";

@Component({
    selector: "pm-customers"
    , templateUrl: "customers-list.component.htm",
    styles:["thead{color:red}"],
    styleUrls:["customers-list.component.css"],
    moduleId : module.id
})
export class CustomerListComponent implements OnInit, OnChanges, OnDestroy {
     
       
        errorMessage: any;

    ngOnDestroy(): void {
             console.log("ngOnDestroy for CustomerListComponent")
        }

        ngOnChanges(changes: SimpleChanges): void {
            
            console.log("ngOnChanges for CustomerListComponent" + changes);
        }

        ngOnInit(): void {
            console.log("ngOnInit for CustomerListComponent");

                this.getCustomers();
                


                // console.log("customer-list.component constructor - retrieved number of customers from customer service : " + allCustomers.length);
                // this.customers = allCustomers;

        }

    componentTitle: string = "List of Customers";
    customers: Customer[] = null;
    newCustomer : Customer;

    showCustomers : Boolean  = false;
    toggleCustomers() : void {
        this.showCustomers = !this.showCustomers;

    }

    constructor(private _customerService : CustomerService){
       this.newCustomer = new Customer("",0);
    }
    getCustomers(){
var allCustomers = this._customerService.getCustomers()
                .subscribe(s=>this.customers = s, e=>this.errorMessage = <any>e);
    }
    addNewCustomer(){
        
        var httpStatusCode = this._customerService.addCustomer(this.newCustomer)
        .subscribe(s=>this.refreshCustomers(s),e=>this.errorMessage = <any>e);
 

    }

     refreshCustomers(httpStatus : number){
         if(httpStatus == 200){
             this.errorMessage = "Success";
             this.getCustomers();
             this.newCustomer = new Customer("",0);
         }
         else{
             this.errorMessage = "Failed adding or removing customer - httpStatusCode : " + httpStatus;
         }
     }

     removeCustomer(customer : Customer)
     {
         this._customerService.removeCustomer(customer).subscribe(s=>this.refreshCustomers(s),e=>this.errorMessage = <any>e);
     }

      
}