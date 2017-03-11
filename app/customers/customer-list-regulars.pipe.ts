import { PipeTransform, Pipe } from "@angular/core";
import { Customer } from "./customer";

@Pipe({
    name:"regulars"
})
export class RegularSubsribersFilter implements PipeTransform {
    transform(value: Customer[]) {
        if(value){
                return value.filter((c:Customer)=>c.isRegular());

        }
        return value;
    }
}