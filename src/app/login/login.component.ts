import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  err = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const user = { email: this.email, password: this.password };
    this.http.post('http://localhost:3000/login', JSON.stringify(user)).subscribe((res) => {
      const values = Object.entries(res);
      if(values.length > 0) {
      if(values[0][1] === 'error 1') {
        this.err = "User with provided email does not exists";
      } else if(values[0][1] === 'error 2') {
        this.err = 'Wrong password';
      } else {
        this.err = '';
      }
      } else {
        this.err = 'user created'
      }
  });
  }
}
