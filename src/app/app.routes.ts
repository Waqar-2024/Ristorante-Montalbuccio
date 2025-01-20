import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginFormComponent } from './shared/reuseablecomponent/login-form/login-form.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'contact',
        component: ContactComponent
    },
    {
        path:'login',
        component: LoginFormComponent
    }

];
