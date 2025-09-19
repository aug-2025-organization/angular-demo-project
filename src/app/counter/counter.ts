import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'counter',
  imports: [FormsModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
