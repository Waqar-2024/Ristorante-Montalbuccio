import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../../shared/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resturant-timing',
  standalone: true,
  imports: [MatCardModule,MatIconModule,ButtonComponent,RouterModule],
  templateUrl: './resturant-timing.component.html',
  styleUrl: './resturant-timing.component.css'
})
export class ResturantTimingComponent {
 
}
