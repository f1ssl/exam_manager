import { Component } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { StudentComponent } from './../student/student.component';
import { DataService } from '../services/data.service';
import { Login } from '../models/login';

@Component({
    selector: 'homesite',
    providers: [AuthenticationService],
    templateUrl: './private.component.html'
})

export class PrivateComponent {
    private role: number = 0;
    constructor(
        private _service: AuthenticationService,
        private _data: DataService) {
        }

    ngOnInit() {
        let login: Login = JSON.parse(this._service.checkCredentials());
        if (login) this.role = login.role;
    }

    onLogout() {
        this._service.logout();
    }
}
