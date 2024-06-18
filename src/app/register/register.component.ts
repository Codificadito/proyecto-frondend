import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private dialog: MatDialog) {}

  close() {
    this.dialogRef.close();
  }
}
