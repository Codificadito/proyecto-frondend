import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  loginForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }



  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.userService.login(loginData).subscribe(
        response => {
          
          this.successMessage = 'Inicio de sesión exitoso';
          this.errorMessage = null;
          //implementar funcion de guardar nombre de usuario
          setTimeout(() => {
            this.successMessage = null;
          }, 5000);
        },
        error => {
          this.errorMessage = 'Correo electrónico o contraseña incorrectos';
          this.successMessage = null;
          setTimeout(() => {
            this.errorMessage = null;
          }, 5000);
        }
        
      );
    } else {
      this.errorMessage = 'Por favor, completa el formulario correctamente';
      this.successMessage = null;
      setTimeout(() => {
        this.errorMessage = null;
      }, 5000);
    }
  }
}
