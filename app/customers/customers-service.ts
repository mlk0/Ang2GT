import { Customer, ICustomer } from "./customer";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class CustomerService {
    getCustomersX() : Customer[]{
        var allCustomers = [
        new Customer("Kiddo", 10, 1),
        new Customer("Kurto", 23),
        new Customer("Prdlo", 32, 2),
        new Customer("Oldy", 68, 8),
        new Customer("Teeny", 16, 0),
        new Customer("Granny", 67, 4),
        new Customer("Fancy", 18, 3)]
        return allCustomers;
    }

    private _customersUrl = "http://a2services.azurewebsites.net/api/customers";
    
    constructor(private _http : Http){}

handleError(error: Response) : any {
    console.log("customers list ERROR : " + JSON.stringify(error))
}

castCustomersList(response:Response) : ICustomer[] {
    var customers = null;
    try
    {
        var retrievedCustomers = <ICustomer[]>(response.json());

        customers = retrievedCustomers.map(
            c=>new Customer(c.name,c.age,c.numberOfSubscriptions));

        console.log("in castCustomersList products.length : " + customers.length);    
    }
    catch(e){
        console.log("ERROR in castCustomersList : " + e);
    }
    return customers;
}
    getCustomers(): Observable<ICustomer[]>{

        console.log("this._customersUrl : " + this._customersUrl); 

        var result = 
        this._http.get(this._customersUrl)
        .do(d=>console.log("customers response : " + JSON.stringify(d) ))
        .catch(this.handleError)
        .map((r:Response) => this.castCustomersList(r));

        return result;

    }

}