import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/reuseablecomponent/header/header.component';
import { FooterComponent } from '../../shared/reuseablecomponent/footer/footer.component';
import { Food } from '../../core/Models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../core/Models/Services/food.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TagsComponent } from '../menu/tags/tags.component';
import { CartService } from '../../core/Models/Services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,MatIconModule,CommonModule,TagsComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!: Food;

  constructor(private activatedRoute:ActivatedRoute,private foodService:FoodService
    ,private cartService:CartService,private router:Router){
    activatedRoute.params.subscribe( (params)=>{
      if(params['id'])
        this.food=foodService.getFoodById(params['id'])
    } )
  }

addToCart(){
  this.cartService.addToCart(this.food)
  this.router.navigateByUrl('/cart-page')
}

  
}
