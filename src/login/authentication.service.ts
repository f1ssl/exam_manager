import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

const users = [
  new User('admin@admin.com', '123'),
  new User('user1@gmail.com', '123')
];

@Injectable()
export class AuthenticationService {

  constructor (private _router: Router) {
  }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['Login']);
  }

  login(user) {
    const authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem('user', authenticatedUser.toString());
      this._router.navigate(['Home']);
      return true;
    }
    return false;

  }

   checkCredentials() {
    if (localStorage.getItem('user') === null) {
        this._router.navigate(['Login']);
    }
  }
}
