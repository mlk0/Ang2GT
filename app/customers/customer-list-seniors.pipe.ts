import { PipeTransform, Pipe } from "@angular/core";
import { ICustomer } from "./customer";

@Pipe({
    name:"seniors"
})
export class SeniorCustomersFilter implements PipeTransform {
    transform(value: ICustomer[]) {
        if (value) {
            return value.filter((c: ICustomer) => c.age >= 65);

        }
        return value;
    }


}