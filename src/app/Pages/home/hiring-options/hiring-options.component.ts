import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../../shared/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hiring-options',
  standalone: true,
  imports: [MatCardModule,MatIconModule,ButtonComponent,RouterModule],
  templateUrl: './hiring-options.component.html',
  styleUrl: './hiring-options.component.css'
})
export class HiringOptionsComponent {
 
}
