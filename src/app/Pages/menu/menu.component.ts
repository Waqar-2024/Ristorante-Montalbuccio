import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/reuseablecomponent/header/header.component';
import { FooterComponent } from '../../shared/reuseablecomponent/footer/footer.component';
import { FoodService } from '../../core/Models/Services/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../../core/Models/food';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { MatIconModule } from '@angular/material/icon';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,SearchComponent,TagsComponent,
    RouterModule,MatIconModule,NotFoundComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  foods:Food[]=[]

  constructor(private foodService: FoodService,private route:ActivatedRoute){}
 
  ngOnInit(){
    this.route.params.subscribe(params=>{
   if(params?.['searchTerm']){
    this.foods=this.foodService.getAllFoodsBySearchTerm(params?.['searchTerm'])
   }
   else if(params?.['tag'])
    this.foods=this.foodService.getAllFoodsByTag(params?.['tag'])
   else
   this.foods=this.foodService.getAll()
    })
  
  }
}
