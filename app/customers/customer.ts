export interface ICustomer{
    name:string;
    age:number;
    numberOfSubscriptions:number;
    isRegular() :boolean;
}

export class Customer implements ICustomer {
    constructor(
        public name:string, 
        public age:number, 
        public numberOfSubscriptions:number= 0){}
   // name: string;
    // age: number;
    // numberOfSubscriptions: number;
    public isRegular(): boolean {
        return this.numberOfSubscriptions > 0;
    }
}