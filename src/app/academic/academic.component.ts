import { Component, OnInit } from '@angular/core';
import { Pruefung } from './../models/pruefung';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  private exams: Array<Pruefung> = new Array<Pruefung>();
  constructor() { }

  ngOnInit() {
  }

}
