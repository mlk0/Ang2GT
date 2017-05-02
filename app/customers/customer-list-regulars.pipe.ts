import { PipeTransform, Pipe } from "@angular/core";
import { Customer, ICustomer } from "./customer";

@Pipe({
    name:"regulars"
})
export class RegularSubsribersFilter implements PipeTransform {
    transform(value: ICustomer[]) {
        if(value){

            var filtered =  value.filter((c:ICustomer)=>c.isRegular());
            return filtered;

        }
        return value;
    }
}