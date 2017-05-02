import { PipeTransform, Pipe } from "@angular/core";
import { ICustomer } from "./customer";


@Pipe({
    name : "teens"
})
export class TeenCustomersFilter implements PipeTransform {
    transform(value: ICustomer[]) {
        if(value){

            var filtered =  value.filter((c:ICustomer)=>c.age<20);
            return filtered;
        
    }
        return value;
    }

}