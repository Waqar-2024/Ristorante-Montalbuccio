import { Component } from '@angular/core';
import { SignupFormComponent } from '../../shared/reuseablecomponent/signup-form/signup-form.component';
import { HeaderComponent } from '../../shared/reuseablecomponent/header/header.component';
import { FooterComponent } from '../../shared/reuseablecomponent/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SignupFormComponent,HeaderComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
