import { Component } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'display',
  imports: [],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
  movieName2: string = '';
  toggle: boolean = true;
  movieName: string = 'Avengers: Endgame';
  studentDetails: Student = {
    firstName: 'John',
    lastName: 'Doe',
    marks: 0,
  };

  displayMovie() {
    if (this.toggle) {
      this.movieName2 = 'Harry Potter and the Order of Phoenix';
    } else {
      this.movieName2 = '';
    }
    this.toggle = !this.toggle;
  }
}
