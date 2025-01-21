import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/reuseablecomponent/header/header.component';
import { FooterComponent } from '../../shared/reuseablecomponent/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,MatCardModule,MatIconModule,FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  faWhatsapp = faWhatsapp;
}
