import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegispageComponent } from './regispage/regispage.component';
import { UserComponent } from './user/user.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'login', component:LoginpageComponent},
    {path: 'register', component:RegispageComponent},
    {path: 'user', component:UserComponent},
    {path: 'update', component:UpdateComponent}
]
