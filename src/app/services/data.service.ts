import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Student } from './../models/student';

@Injectable()
export class DataService {
    constructor(private _http: Http) {

    }

    getStudent(username: String): Student {
        return null;
    }

    getPossibleExams() {
        return null;
    }

    getRegisteredExams() {
        return null;
    }
}
