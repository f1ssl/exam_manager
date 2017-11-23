import { NgForm } from '@angular/forms';
import { Component, ElementRef } from '@angular/core';

import { AuthenticationService } from './../services/authentication.service';
import { Login } from './../models/login';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    public login = new Login('student', 'student', 0);
    public loginStudent = new Login('student', 'student', 1);
    public loginTeacher = new Login('teacher', 'teacher', 2);
    public loginManagement = new Login('management', 'management', 3);

    public errorMsg = null;

    constructor(
        private _service: AuthenticationService) {
    }

    onLogin() {
        if (this.login.username == 'student')
            this.login = this.loginStudent;
        else if (this.login.username == 'teacher')
            this.login = this.loginTeacher
        else if (this.login.username == 'management')
            this.login = this.loginManagement;

        if (!this._service.login(this.login)) {
            this.errorMsg = 'Wrong username and/or password.';
        }
    }
}
