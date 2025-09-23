import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { BookService } from '../book.service';

@Component({
  selector: 'book-list',
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, DiscountPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  allBooks: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.allBooks = this.bookService.getAllBooks();
  }

  viewBook(bookId: number) {}

  editBook(bookId: number) {}

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId);
    this.loadBooks();
  }
}
