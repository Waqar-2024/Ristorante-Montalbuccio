import { Food } from "./food";

export class CartItem{
    food:Food;
    quantity:number=1

    constructor(food:Food){
        console.log('CartItem constructor called');
    this.food=food;
    this.price
    }

    get price():number{
    return this.food.price * this.quantity;
}


}