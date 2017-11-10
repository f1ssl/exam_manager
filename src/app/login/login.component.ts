import {NgForm} from '@angular/forms';
import {Component, ElementRef} from '@angular/core';
import {AuthenticationService, User} from './../services/authentication.service';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    public user = new User('', '');
    public errorMsg = null;

    constructor(
        private _service: AuthenticationService) {
            this.user.email = 'student';
            this.user.password = 'student';
        }

    onLogin() {
        console.log('test');
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Wrong username and/or password.';
        }
    }
}
