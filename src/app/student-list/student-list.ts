import { Component } from '@angular/core';
import { Student } from './student.model';
import { StudentItem } from './student-item/student-item';

@Component({
  selector: 'student-list',
  imports: [StudentItem],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  allStudents: Student[] = [
    { id: 1, name: 'Alice', marks: 85 },
    { id: 2, name: 'Bob', marks: 92 },
    { id: 3, name: 'Charlie', marks: 78 },
    { id: 4, name: 'David', marks: 90 },
    { id: 5, name: 'Eve', marks: 88 },
  ];

  parentRemoveStud(studId: number) {
    this.allStudents = this.allStudents.filter((s) => s.id !== studId);
  }
}
