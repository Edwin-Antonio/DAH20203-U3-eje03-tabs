import { Injectable } from '@angular/core';
import { Students } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private student: Students [] = new Array();

  constructor() {
    this.student.push({
      name: 'Miguel Leopoldo',
      controlnumber: '16400881',
      active: true
    });

    this.student.push({
      name: 'Sargento Pingu',
      controlnumber: '16400882',
      active: true
    });

    this.student.push({
      name: 'Prueba 3',
      controlnumber: '16400883',
      active: false
    });
  }

  getStudents(): Students[] {
    return this.student;
  }

  changeStatus(position: number): void{
    this.student[position].active = !this.student[position].active;
  }

}
