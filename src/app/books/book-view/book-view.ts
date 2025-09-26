import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-view',
  imports: [],
  templateUrl: './book-view.html',
  styleUrl: './book-view.css',
})
export class BookView implements OnInit {
  fetchedBook: Book | undefined = {
    bookId: 0,
    bookTitle: '',
    author: undefined,
    bookCategory: '',
    bookPublished: new Date(),
    bookPrice: 0,
    bookImageUrl: '',
    allCharacters: [],
  };

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let bookId = this.activatedRoute.snapshot.paramMap.get('bid');
    if (bookId != null) {
      this.fetchedBook = this.bookService.getABook(+bookId);
    }
  }

  goBack() {
    this.router.navigate(['book-home/book-list']);
  }
}
