import { Customer, ICustomer } from "./customer";
import { Injectable } from "@angular/core";
@Injectable()
export class CustomerService {
    getCustomers() : Customer[]{
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
}