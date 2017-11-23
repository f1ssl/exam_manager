import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { DataService } from '../services/data.service';
import { Exam } from '../models/exam';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  private students: Array<Student>;
  private exams: Array<Exam> = new Array<Exam>();


  
  constructor(private _data: DataService) { }

  ngOnInit() {
  }

}
