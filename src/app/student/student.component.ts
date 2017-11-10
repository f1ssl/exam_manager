import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Student } from './../models/student';
import { PossibleExam } from './../models/exam';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  private possibleExams: Array<PossibleExam> = new Array<PossibleExam>();
  private saving: Boolean = false;
  // private student: Student = new Student(
  //   1,
  //   'klauskleber',
  //   'Klaus',
  //   'Kleber',
  //   '01.01.1991',
  //   'kleber@patafix.de',
  //   '0123456789',
  //   'Kleisterstraße',
  //   '12345',
  //   'Klebstadt',
  //   'Deutschland');

  constructor() { }

  ngOnInit() {
    this.possibleExams = [
      new PossibleExam(1, 'LA', false),
      new PossibleExam(2, 'GP1', true),
      new PossibleExam(3, 'KFS', false)
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
