
import { Component, Input, Output, EventEmitter } from "@angular/core";

import { IItemCount, ItemCount } from './itemCount'

@Component({
    selector:"pm-item-count",
    moduleId : module.id,
    templateUrl:"item-count.component.htm",
    styleUrls:["item-count.component.css"]
})
export class ProductItemsComponent{
    @Input() itemQuantity : number = 0;
    @Input() itemId : number = 0;
    incrementByOne() : number {
        this.itemQuantity++;//=this.itemQuantity;
        this.notifyIteQuantityChanged.emit(new ItemCount(this.itemQuantity, this.itemId));
        return this.itemQuantity;
    };
    decrementByOne() : number {
        this.itemQuantity--;
        this.notifyIteQuantityChanged.emit(new ItemCount(this.itemQuantity, this.itemId));
        return this.itemQuantity;
    };

    @Output() notifyIteQuantityChanged :  EventEmitter<IItemCount> = new EventEmitter<IItemCount>();
;

}