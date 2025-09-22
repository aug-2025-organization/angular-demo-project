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
  allBooks: Book[] = [
    {
      bookId: 101,
      bookTitle: 'Harry Potter and the Order of Phoenix',
      bookCategory: 'Fantasy',
      bookPrice: 400,
      bookPublished: new Date(2010, 10, 10),
      author: {
        authorId: 301,
        authorFirstname: 'Rowling',
        authorLastname: 'JK',
      },
      allCharacters: [
        {
          characterId: 201,
          characterFirstname: 'Harry',
          characterLastname: 'Potter',
        },
      ],
      bookImageUrl:
        'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFycnklMjBwb3R0ZXIlMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      bookId: 102,
      bookTitle: 'Harry Potter and the Chamber of Secrets',
      bookCategory: 'Fantasy',
      bookPrice: 400,
      bookPublished: new Date(2011, 11, 11),
      author: {
        authorId: 301,
        authorFirstname: 'Rowling',
        authorLastname: 'JK',
      },
      allCharacters: [
        {
          characterId: 201,
          characterFirstname: 'Harry',
          characterLastname: 'Potter',
        },
      ],
      bookImageUrl:
        'https://images.unsplash.com/photo-1616864814886-60cbfcac88c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFycnklMjBwb3R0ZXIlMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  viewBook(bookId: number) {}

  editBook(bookId: number) {}

  deleteBook(bookId: number) {
    this.allBooks = this.allBooks.filter((book) => book.bookId != bookId);
  }
}
