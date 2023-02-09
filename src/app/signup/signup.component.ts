import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordRepeat = '';
  err = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const user = { username: this.username, firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password, passwordRepeat: this.passwordRepeat };
    this.http.post('http://localhost:3000/auth', JSON.stringify(user)).subscribe((res) => {
      console.log(user, 'user from server side', typeof user);
      // console.log(values, 'response gained from server');
      // if(values.length > 0) {
      // if(values[0][1] === 'error 1') {
      //   this.err = "User with provided email does not exists";
      // } else if(values[0][1] === 'error 2') {
      //   this.err = 'Wrong password';
      // } else {
      //   this.err = '';
      // }
      // } else {
        
      // }
      console.log(res, 'response gained from server side');
  });
  }
  
}
