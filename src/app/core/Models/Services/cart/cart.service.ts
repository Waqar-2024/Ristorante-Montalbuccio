import { Injectable } from '@angular/core';
import { Cart } from '../../cart';
import { Food } from '../../food';
import { CartItem } from '../../cartItem';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart= new Cart();//all item which are selected these are in cart
private cartSubject = new BehaviorSubject<Cart>(this.cart);//card subject hold cart value

// item add in cart
addToCart(food:Food){
 let cartItem = this.cart.items.find(item=>item.food.id === food.id )
 if(cartItem){
  this.changeQuantity(food.id,cartItem.quantity + 1 );
  return;
 }
 this.cart.items.push(new CartItem(food))
 this.cartSubject.next(this.cart);
}

// item removes from cart
removeFromCart(foodId:Number):void{
  this.cart.items=this.cart.items.filter(item=> item.food.id != foodId)
  this.cartSubject.next(this.cart);
 }
 
//  change card quantity
 changeQuantity(foodId:Number,quantity:number):void{
 let cartItem = this.cart.items.find(item => item.food.id === foodId)
 if(!cartItem) return;
 cartItem.quantity=quantity;
 this.cartSubject.next(this.cart);
 }


//  its return a readonly observable and which subscribe update in exact time
getCart(): Observable<Cart> {
  return this.cartSubject.asObservable(); // Return as an observable
}
}
 