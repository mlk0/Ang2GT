import { Customer, ICustomer } from "./customer";
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class CustomerService {
    // getCustomersX() : Customer[]{
    //     var allCustomers = [
    //     new Customer("Kiddo", 10, 1),
    //     new Customer("Kurto", 23),
    //     new Customer("Prdlo", 32, 2),
    //     new Customer("Oldy", 68, 8),
    //     new Customer("Teeny", 16, 0),
    //     new Customer("Granny", 67, 4),
    //     new Customer("Fancy", 18, 3)]
    //     return allCustomers;
    // }

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


    addCustomer(customer : ICustomer) : Observable<number> {

           console.log("addCustomer : " + JSON.stringify(customer) ); 

        let bodyString = JSON.stringify(customer); // Stringify payload
        let requestHeaders      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({headers:requestHeaders}) ; //// Create a request option


         // var httpResponseStatus =   this._http.post(this._customersUrl, JSON.stringify(customer), config )
          var httpResponseStatus =   
          this._http.post(this._customersUrl, JSON.stringify(customer), new RequestOptions({headers:new Headers({ 'Content-Type': 'application/json' }) }))
          
          //this._http.post(this._customersUrl, bodyString, options )
             .do(d=>console.log("customers response : " + JSON.stringify(d) ))
            .catch(this.handleError)
            .map((r:Response) => r.status);

            return httpResponseStatus;
    }


    removeCustomer(customer : ICustomer) :  Observable<number>
    {
        console.log("removeCustomer : " + JSON.stringify(customer) ); 

        let body = JSON.stringify(customer);
        let options = new RequestOptions({body : body,  headers : new Headers({'Content-Type' : 'application/json'})});
        var result = this._http.delete(this._customersUrl, options )
        .do(d=>console.log("removeCustomer response : " + JSON.stringify(d)))
        .catch(this.handleError)
        .map((r:Response)=>r.status);
        return result;
    }

}