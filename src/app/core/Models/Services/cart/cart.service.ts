import { Injectable } from '@angular/core';
import { Cart } from '../../cart';
import { Food } from '../../food';
import { CartItem } from '../../cartItem';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();//all item which are selected these are in cart
  private cartSubject = new BehaviorSubject<Cart>(this.cart);//card subject hold cart value

  constructor(private http: HttpClient) { }

  // Add item to cart
  addToCart(food: Food) {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food))
    this.cartSubject.next(this.cart);
  }

  // item removes from cart
  removeFromCart(foodId: Number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
    this.cartSubject.next(this.cart);
  }

  //  change card quantity
  changeQuantity(foodId: number, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if (!cartItem) return;
    console.log("carrrrt-item ",cartItem)
    cartItem.quantity = quantity;
    this.cartSubject.next(this.cart);
  }


  //    // Return the cart as an observable
  getCart(): Observable<Cart> {
    return this.cartSubject.asObservable(); // Return as an observable
  }

  // form data recieve and sent all data to backend
  clientData(form_data: any) {
    // const data_backend = { ...form_data, cart: this.cart };
    const sent_dta_admin = {
      name: form_data.name, mobile_number: form_data.mobile, time: form_data.time, email: form_data.email,
      data: form_data.date, total_price: this.cart.totalPrice, items: this.cart.items
    }

    return this.http.post('https://risturantemontalbuccioserver.onrender.com/api/book-order', sent_dta_admin);

  }

  // Reset cart to its initial state
  clearCart(): void {
    this.cart = new Cart(); 
    this.cartSubject.next(this.cart); 
  }
}
