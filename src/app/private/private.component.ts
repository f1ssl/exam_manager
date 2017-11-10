import {Component} from '@angular/core';
import {AuthenticationService} from './../services/authentication.service';
import { StudentComponent } from './../student/student.component';

@Component({
    selector: 'homesite',
    providers: [AuthenticationService],
    templateUrl: './private.component.html'
})

export class PrivateComponent {

    private role: number = 1;
    constructor(
        private _service: AuthenticationService) {
        }

    ngOnInit() {
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}
