import { Component } from '@angular/core';
import { Book } from '../book.model';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { DiscountPipe } from "../../pipes/discount-pipe";

@Component({
  selector: 'book-list',
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, DiscountPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  

  viewBook(bookId: number) {}

  editBook(bookId: number) {}

  deleteBook(bookId: number) {
    this.allBooks = this.allBooks.filter((book) => book.bookId != bookId);
  }
}
