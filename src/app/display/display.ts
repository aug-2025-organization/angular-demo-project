import { Component } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'display',
  imports: [],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
  movieName: string = 'Avengers: Endgame';
  studentDetails: Student = {
    firstName: 'John',
    lastName: 'Doe',
    marks: 0,
  };
}
