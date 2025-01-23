import { Component, Input } from '@angular/core';
import { Tag } from '../../../core/Models/tag';
import { FoodService } from '../../../core/Models/Services/food.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  @Input()
  foodPageTags?:string[]
  @Input()
  justifyContent:string='center'

  tags?:Tag[];
  constructor(private foodService : FoodService){
  }

  ngOnInit(){
    if(!this.foodPageTags)
    this.tags=this.foodService.getAllTags()
  
  }
}
  