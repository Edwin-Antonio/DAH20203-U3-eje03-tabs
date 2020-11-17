import { Component } from '@angular/core';
import { Students } from '../models/students';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  students: Students[] = new Array();

  constructor(private studentService: StudentsService) {
    this.students = this.studentService.getStudents();
  }

}
