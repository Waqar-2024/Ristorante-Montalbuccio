import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../../core/Models/Services/cart/cart.service';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,HeaderComponent,FooterComponent,MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  // all form values
 form_data={
  name:'',
  email:'',
  date:this.getCurrentDate(),
  time:'20:30'
 }

 constructor(private router: Router, private cart:CartService){}

 getCurrentDate(): string {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

// Submit form
submit_Form(form:NgForm){
 this.cart.clientData(this.form_data)
}


}
 