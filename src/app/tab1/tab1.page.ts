import { Component } from '@angular/core';
import { Students } from '../models/students';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  students: Students[] = new Array();

  constructor(private studentService: StudentsService) {
    this.students = this.studentService.getStudents();
  }

  changeStatus(position: number): void {
    this.studentService.changeStatus(position);
  }

}
