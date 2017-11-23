import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Student } from './../models/student';
import { PhoneNumber } from './../models/phone-number';
import { MailAddress } from './../models/mail-address';

import { PossibleExam } from './../models/exam';

@Injectable()
export class MockDataService {
    constructor(private _http: Http) {

    }

    getStudent(username: String) {
        return new Student(
            1,
            username,
            'Juergen',
            'Klopp',
            'Anfield Road',
            '1',
            'Liverpool',
            'L1 0AE',
            [new PhoneNumber(0, '123'), new PhoneNumber(1, '456')],
            [new MailAddress('klopp@pool.de'), new MailAddress('coach@pool.de')],
            new Date(1967, 6, 16),
            'Stuttgart',
            new Date(),
            1,
            180,
            ''
        );
    }

    getPossibleExams() {
        return [
            new PossibleExam(1, 'LA', false),
            new PossibleExam(2, 'GP1', false),
            new PossibleExam(3, 'KFS', false)
        ];
    }

    getRegisteredExams() {
        return [
            new PossibleExam(4, 'BWL1', true),
            new PossibleExam(5, 'EWI', true),
            new PossibleExam(6, 'ECS', true)
        ];
    }
}
