import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  errorMessage: string = '';
  loginUser: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    allRoles: [],
  };

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {}

  handleFormSubmit() {
    console.log(this.loginUser);
    this.loginService.validateUser(this.loginUser).subscribe({
      next: (response) => {
        console.log(response);
        // if login is a success
        // store the token in localStorage
        this.authService.storeToken(response.token);

        // store user details in localstorage
        this.authService.storeUserInfo(response.user);

        // mark that the user has logged in
        this.authService.isLoggedIn = true;

        // route to counter component
        this.router.navigate(['counter']);
      },
      error: (err) => {
        console.log(err);
        // stay in the same login component
        // display the user friendly error message
        this.errorMessage = 'Username/Password is invalid';
      },
    });
  }
}
