import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginFormComponent } from './shared/reuseablecomponent/login-form/login-form.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { FoodPageComponent } from './Pages/food-page/food-page.component';
import { CartPageComponent } from './Pages/cart-page/cart-page.component';

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
        path:'menu',
        component: MenuComponent,
       
    },
    {
        path:'cart-page',
        component: CartPageComponent,
       
    },
    {
        path: 'menu/search/:searchTerm',
        component: MenuComponent
    },
    {
        path: 'menu/tag/:tag',
        component: MenuComponent
    },
    {
        path: 'menu/food/:id',
        component: FoodPageComponent
    },
    

];
