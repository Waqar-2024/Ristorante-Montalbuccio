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
  mobile:'',
  date:this.getCurrentDate(),
  time:'20:30',
  foodSpecification:''
 }

 constructor(private router: Router, private cart:CartService){}

//  for get today date to show in form
 getCurrentDate(): string {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

// Submit form
submit_Form(form: NgForm) {
  this.cart.clientData(this.form_data)
    .subscribe(
      res => {
       alert('Il tuo ordine è stato ricevuto con successo.')
        console.log("component- ", res);
        this.cart.clearCart();
        this.router.navigate(['/']);
      },
      error => {
        alert("Si è verificato un errore. Riprova più tardi.")
        console.error("Error occurred:", error);
      }
    );
}



}
 