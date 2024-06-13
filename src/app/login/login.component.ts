import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginSuccess: boolean = false;
  loginError: boolean = false;

  constructor(private http: HttpClient) {}

  login(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const password = (form.querySelector('#password') as HTMLInputElement).value;

    const loginData = { email, password };
    this.http.post('http://127.0.0.1:3000/api/login', loginData)
      .subscribe(
        (response: any) => {
          console.log('Login ok:', response);
          this.loginSuccess = true;
          this.loginError = false;
        },
        (error) => {
          console.error('Error Contraseña o email incorrecto:', error);
          this.loginSuccess = false;
          this.loginError = true;
        }
      );
  }
}
