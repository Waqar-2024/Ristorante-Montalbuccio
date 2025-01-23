import { Component, } from '@angular/core';
import { HeaderComponent } from '../../shared/reuseablecomponent/header/header.component';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DeveloperIntroComponent } from './developer-intro/developer-intro.component';
import { HiringOptionsComponent } from './hiring-options/hiring-options.component';
import { FooterComponent } from '../../shared/reuseablecomponent/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from '../../shared/reuseablecomponent/image-slider/image-slider.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,MatCardModule,MatButtonModule,MatIconModule,ImageSliderComponent,
  DeveloperIntroComponent,HiringOptionsComponent,FooterComponent
  ,RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  slides:any[]=[
    {
      url: 'assets/resturant/ilaria1.jpg', 
      title:'First Slide',
      description:'this is first slide'
    },

    {
      url: 'assets/resturant/rst2.jpg',
      title:'Second Slide',
      description:'this is Second slide'
    },
    
    {
      url: 'assets/resturant/rst3.jpg',
      title:'Third Slide',
      description:'this is 3rd slide'
    },
    {
      url: 'assets/resturant/rst4.jpg',
      title:'Fourth Slide',
      description:'this is 4th slide'
    },
    {
      url: 'assets/resturant/rst5.jpg',
      title:'Fivth Slide',
      description:'this is 5th slide'
    },
    
  ]
}