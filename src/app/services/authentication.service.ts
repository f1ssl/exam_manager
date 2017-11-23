import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import { Login } from './../models/login';


const logins = [
  new Login('student', 'student', 1),
  new Login('teacher', 'teacher', 2),
  new Login('management', 'management', 3)
];

@Injectable()
export class AuthenticationService {

  constructor (private _router: Router) {
  }

  logout() {
    localStorage.removeItem('login');
    this._router.navigate(['login']);
  }

  login(login) {
    const authenticatedUser = logins.find(u => u.username === login.username);
    if (authenticatedUser && authenticatedUser.password === login.password) {
      localStorage.setItem('login', JSON.stringify(login));
      this._router.navigate(['home']);
      return true;
    }
    return false;

  }

   checkCredentials() {
    if (localStorage.getItem('login') === null) {
        this._router.navigate(['login']);
    }
    return localStorage.getItem('login');
  }
}
