import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule,AbstractControl,ValidationErrors, EmailValidator } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-regispage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './regispage.component.html',
  styleUrls: ['./regispage.component.css']
})
export class RegispageComponent {
  registerForm: FormGroup;
  successMessage: string | null = null; 
  errorMessage: string | null = null; 

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, emailValidator]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      companyName: [''],
      companyAddress: [''],
      companyWebsite: ['']
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const data = {
        email: this.registerForm.value.email,
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
        role: this.registerForm.value.role,
        companyDetails: {
          name: this.registerForm.value.companyName,
          address: this.registerForm.value.companyAddress,
          website: this.registerForm.value.companyWebsite
        }
      };

      this.userService.register(data).subscribe(
        (response: any) => { 
          this.successMessage = 'Usuario registrado correctamente.';
          this.errorMessage = null;
          this.registerForm.reset(); 

          
          setTimeout(() => {
            this.successMessage = null;
          }, 5000);
        },
        (error: any) => { 
          this.errorMessage = 'Error al registrar usuario. Inténtalo de nuevo.';
          this.successMessage = null;

          
          setTimeout(() => {
            this.errorMessage = null;
          }, 5000);
        }
      );
    } else {
      this.errorMessage = 'Por favor, complete el formulario.';
      this.successMessage = null;
    }
  }
  
}
function emailValidator (control: AbstractControl):ValidationErrors | null {
  const emailpermit = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const valid = emailpermit.test(control.value);
  return valid ? null : {email:true};
}
