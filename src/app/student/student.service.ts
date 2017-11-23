import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from './../services/data.service';
import { Student } from './../models/student';
import { PhoneNumber } from './../models/phone-number';
import { MailAddress } from './../models/mail-address';

@Injectable()
export class StudentService {
    constructor(private _http: Http, private _dataService: DataService) {

    }

    public getStudent(username: String) : Student {
        return this._dataService.getStudent(username);
    }
}