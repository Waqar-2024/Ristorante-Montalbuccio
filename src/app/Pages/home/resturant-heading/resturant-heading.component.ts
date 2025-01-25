import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resturant-heading',
  standalone: true,
  imports: [MatCardModule,MatIconModule,RouterModule],
  templateUrl: './resturant-heading.component.html',
  styleUrl: './resturant-heading.component.css'
})
export class ResturantHeadingComponent {

}
 