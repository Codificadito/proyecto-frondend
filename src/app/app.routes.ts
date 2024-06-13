import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'products', component: ProductsComponent},
    {path:'products/:productId', component: ProductDetailComponent},
    {path:'contact', component: ContactComponent},
    {path:'**', redirectTo:'', pathMatch: 'full'}
]