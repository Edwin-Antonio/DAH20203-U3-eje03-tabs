import { Component } from '@angular/core';
import { Students } from '../models/students';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  students: Students[] = new Array();

  constructor(private studentService: StudentsService) {
    this.students = this.studentService.getStudents();
  }

}
