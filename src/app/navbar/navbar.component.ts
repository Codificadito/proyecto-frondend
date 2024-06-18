import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LoginComponent,RegisterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}

  openLoginModal() {
    this.dialog.open(LoginComponent);
  }
  openRegisterModal() {
    this.dialog.open(RegisterComponent);
  }
}

