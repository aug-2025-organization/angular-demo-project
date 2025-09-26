import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'observable-demo',
  imports: [],
  templateUrl: './observable-demo.html',
  styleUrl: './observable-demo.css',
})
export class ObservableDemo implements OnInit {
  // Create an observable
  numberObservable = new Observable<number>((observer) => {
    observer.next(1);
    setTimeout(() => observer.next(2), 1000);
    setTimeout(() => observer.next(3), 2000);
    setTimeout(() => observer.complete(), 3000);
  });

  // Subscribe to the observable
  ngOnInit(): void {
    this.numberObservable
      .pipe(
        map((eachValue) => eachValue * eachValue),
        filter((eachValue) => eachValue > 5)
      )
      .subscribe({
        next: (value) => console.log('Received:', value),
        error: (err) => console.error('Error:', err),
        complete: () => console.log('Observable completed'),
      });
  }
}
