import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'student-item',
  imports: [],
  templateUrl: './student-item.html',
  styleUrl: './student-item.css',
})
export class StudentItem {
  @Input() studData: any;
  @Output() studRemoveEvent = new EventEmitter<number>();

  childRemoveStud(studId: number) {
    this.studRemoveEvent.emit(studId);
  }
}
