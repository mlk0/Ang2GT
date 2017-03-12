
import { Component } from "@angular/core";

@Component({
    selector:"pm-item-count",
    moduleId : module.id,
    templateUrl:"item-count.component.htm",
    styleUrls:["item-count.component.css"]
})
export class ProductItemsComponent{
    itemQuantity : number = 0;
    incrementByOne() : number {
        return ++this.itemQuantity;
    };
    decrementByOne() : number {
        return --this.itemQuantity;
    }

}