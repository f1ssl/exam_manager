import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Student } from './../models/student';

@Injectable()
export class DataService {
    constructor(private _http: Http) {

    }

    getStudent(username: String): Student {
        // informationen für stammdatenmaske
        return null;
    }

    saveStudent(student: Student) {
        // änderungen aus stammdaten maske vom studenten speichern
    }

    getPossibleExams() {
        // mögliche prüfungen die (noch) nicht angemeldet sind
        return null;
    }

    getRegisteredExams() {
        // angemeldete prüfungen
        return null;
    }

    getGrades() {
        // informationen für die notenübersicht
        return null;
    }

    getExamOverview() {
        // informationen für prüfungsübersichtsmaske vom dozenten
        return null;
    }

    getStudents(): Array<Student> {
        // informationen für die prüfungsverwaltungsseite studentenübersicht
        return null;
    }

    getMissingGrades() {
        // informationen zu fehlenden Notenmeldungen für prüfungsverwaltung maske
        return null;
    }

    saveChecker() {
        // methode zum zuweisen der prüfer einer prüfung in der maske prüfungsverwaltung
        return null;
    }

    saveMustModules() {
        // speichert die änderungen in den pflichtmodulen der prüfungsverwaltung
        return null;
    }

    saveMustChooseModules() {
        // speichert die änderungen in den pflichtmodulen der prüfungsverwaltung
        return null;        
    }

}
