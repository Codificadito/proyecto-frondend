import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  username: string = '';
  password: string = '';
  role: string = 'company'; // Por defecto, selecciona 'company'
  companyDetails: any = {
    name: '',
    address: '',
    website: ''
  };
  registerSuccess: boolean = false;
  registerError: boolean = false;

  constructor(private http: HttpClient) {}

  register(event: Event) {
    event.preventDefault();

    const registerData = {
      email: this.email,
      username: this.username,
      password: this.password,
      role: this.role,
      companyDetails: this.role === 'company' ? this.companyDetails : null
    };

    this.http.post('http://127.0.0.1:3000/api/register', registerData)
      .subscribe(
        (response: any) => {
          console.log('Registro exitoso:', response);
          this.registerSuccess = true;
          this.registerError = false;
        },
        (error) => {
          console.error('Error durante el registro:', error);
          this.registerSuccess = false;
          this.registerError = true;
        }
      );
  }
}
