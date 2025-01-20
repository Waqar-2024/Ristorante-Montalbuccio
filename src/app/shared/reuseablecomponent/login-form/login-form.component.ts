import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule,FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
    // login form check 
   form_data={
    email:'',
    password:'',
   }

   constructor(private router: Router){}
  
  // Submit form
  submit_Form(form:NgForm){
   form.reset(); 
   this.router.navigate(['/home']);
  }
  

} 
