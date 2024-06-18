import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'jobs', component:HomeComponent},
    {path: '/home', component:HomeComponent},
    {path: '', component:HomeComponent}
];
