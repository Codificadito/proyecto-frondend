import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegispageComponent } from './regispage/regispage.component';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, HomeComponent, LoginComponent, RegisterComponent, LoginpageComponent, RegispageComponent, UserComponent, CommonModule, FormsModule, UpdateComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fronend';
  constructor(public dialog: MatDialog) { }

  openLoginModal() {
    this.dialog.open(LoginComponent);
  }

  openRegisterModal() {
    this.dialog.open(RegisterComponent);
  }

  private _router = inject(Router)
  navegateToLogin() {
    this._router.navigate(['/login'])
  }
  navegateToRegister() {
    this._router.navigate(['/register'])
  }
  navegateToUser() {
    this._router.navigate(['/user'])
  }
  navegateToUpdate() {
    this._router.navigate(['/update'])
  }
}

