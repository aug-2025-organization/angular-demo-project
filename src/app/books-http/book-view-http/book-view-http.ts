import { Component } from '@angular/core';
import { BookHttpService } from '../book-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-view-http',
  imports: [],
  templateUrl: './book-view-http.html',
  styleUrl: './book-view-http.css',
})
export class BookViewHttp {
  fetchedBook: Book = {
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
    private bookHttpService: BookHttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let bookId = this.activatedRoute.snapshot.paramMap.get('bid');
    if (bookId != null) {
      this.bookHttpService.getABook(+bookId).subscribe({
        next: (response) => (this.fetchedBook = response),
        error: (err) => console.log(err),
      });
    }
  }

  goBack() {
    this.router.navigate(['book-home-http/book-list-http']);
  }
}
