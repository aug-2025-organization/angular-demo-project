import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';
import { BookHttpService } from '../book-http.service';

@Component({
  selector: 'book-list-http',
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, DiscountPipe],
  templateUrl: './book-list-http.html',
  styleUrl: './book-list-http.css',
})
export class BookListHttp implements OnInit {
  allBooks: Book[] = [];

  constructor(
    private bookHttpService: BookHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookHttpService.getAllBooks().subscribe({
      next: (response) => {
        console.log(response);
        this.allBooks = response;
      },
      error: (err) => console.log(err),
    });
  }

  viewBook(bookId: number) {
    // here we need to route to book-view
    this.router.navigate(['book-home-http/book-view-http', bookId]);
  }

  editBook(bookId: number) {
    this.router.navigate(['book-home-http/book-edit-http', bookId]);
  }

  deleteBook(bookId: number) {
    this.bookHttpService.deleteBook(bookId).subscribe({
      next: () => this.loadBooks(),
      error: (err) => console.log(err),
    });
  }
}
