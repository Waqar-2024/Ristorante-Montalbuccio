import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-developer-intro',
  standalone: true,
  imports: [MatCardModule,MatIconModule,RouterModule],
  templateUrl: './developer-intro.component.html',
  styleUrl: './developer-intro.component.css'
})
export class DeveloperIntroComponent {

}
 