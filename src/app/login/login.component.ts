import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RegisterComponent } from '../register/register.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private dialog: MatDialog) {}


  
  close() {
    this.dialogRef.close();
  }

  openRegisterModal() {
    this.dialog.open(RegisterComponent);
    this.dialogRef.close();
  }
}

