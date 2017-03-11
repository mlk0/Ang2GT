import { PipeTransform, Pipe } from "@angular/core";
import { IProduct } from "./product";

@Pipe({
    name : "productFilterPipe"
})
export class ProductListFilter implements PipeTransform {
    transform(value: IProduct[], filter: string) {
        
        if(filter)
        {
            return value.filter((p:IProduct)=>p.productName.toLowerCase().indexOf(filter.toLowerCase())!=-1);
        }
        else
        {
            return value;
        }

    }


}