import {  Component } from '@angular/core';
import { CartService } from '../../core/Models/Services/cart/cart.service';
import { Cart } from '../../core/Models/cart';
import { CartItem } from '../../core/Models/cartItem';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/reuseablecomponent/header/header.component';
import { FooterComponent } from '../../shared/reuseablecomponent/footer/footer.component';
import { NotFoundComponent } from '../not-found/not-found.component';
 
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderComponent,FooterComponent,NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
cart!:Cart
constructor(private cartService: CartService){
  this.setCart()
}

removeFromCart(cartItem:CartItem){
this.cartService.removeFromCart(cartItem.food.id)
this.setCart()

}

changeQuantity(cartItem:CartItem,quantityInString:string){
const quantity=parseInt(quantityInString)
this.cartService.changeQuantity(cartItem.food.id,quantity);
this.setCart();

}

setCart(){
  this.cartService.getCart().subscribe(carts=>{
    this.cart=carts
  });
}
}
