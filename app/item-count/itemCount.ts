export interface IItemCount {
    ItemQuantity: number;
    ItemId: number;
}

export class ItemCount implements IItemCount {

    constructor(public ItemQuantity: number, 
    public ItemId: number) { }

}