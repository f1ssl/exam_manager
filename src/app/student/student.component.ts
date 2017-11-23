import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Login } from './../models/login';
import { Student } from './../models/student';
import { PossibleExam, DoneExam } from './../models/exam';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { StudyCourse } from './../models/studycourse';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  private login: Login;
  private student: Student;
  private possibleExams: Array<PossibleExam> = new Array<PossibleExam>();
  private registeredExams: Array<PossibleExam> = new Array<PossibleExam>();
  private doneExams: Array<DoneExam> = new Array<DoneExam>();

  private saving: Boolean = false;

  constructor(
    private _service: AuthenticationService,
    private _data: DataService
  ) { }

  ngOnInit() {
    this.login = JSON.parse(this._service.checkCredentials());
    this.student = this._data.getStudent(this.login.username);
    this.possibleExams = this._data.getPossibleExams();
    this.registeredExams = this._data.getRegisteredExams();

    this.doneExams = [
      new DoneExam(1, 'LA', 'WS 2017/18', 2.3, 'Bestanden', 5, 1, new Date(2018, 1, 30))
    ]
  }

  onSubmit() {
    console.log('saving...');
    this.saving = true;

    setTimeout(()=>{
      this.saving = false;
    }, 2000);

  }

}
