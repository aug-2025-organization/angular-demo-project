import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'book-list',
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, DiscountPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  allBooks: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.allBooks = this.bookService.getAllBooks();
  }

  viewBook(bookId: number) {
    // here we need to route to book-view
    this.router.navigate(['book-home/book-view', bookId]);
  }

  editBook(bookId: number) {
    this.router.navigate(['book-home/book-edit', bookId]);
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId);
    this.loadBooks();
  }
}
