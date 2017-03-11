import { PipeTransform, Pipe } from "@angular/core";
import { ICustomer } from "./customer";


@Pipe({
    name : "teens"
})
export class TeenCustomersFilter implements PipeTransform {
    transform(value: ICustomer[]) {
        if(value){
            return  value.filter((c:ICustomer)=>c.age<20);
        }
        return value;
    }

}