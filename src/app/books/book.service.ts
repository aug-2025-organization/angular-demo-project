import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
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
        {
          characterId: 202,
          characterFirstname: 'Ron',
          characterLastname: 'Weasley',
        },
        {
          characterId: 203,
          characterFirstname: 'Draco',
          characterLastname: 'Malfoy',
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
        {
          characterId: 202,
          characterFirstname: 'Ron',
          characterLastname: 'Weasley',
        },
        {
          characterId: 203,
          characterFirstname: 'Draco',
          characterLastname: 'Malfoy',
        },
      ],
      bookImageUrl:
        'https://images.unsplash.com/photo-1616864814886-60cbfcac88c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFycnklMjBwb3R0ZXIlMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  getAllBooks(): Book[] {
    return this.allBooks;
  }

  getABook(bookId: number): any {
    return this.allBooks.find((eachBook) => eachBook.bookId == bookId);
  }

  addBook(newBook: Book): Book {
    let newBookId = this.allBooks[this.allBooks.length - 1].bookId + 1;
    newBook.bookId = newBookId;
    this.allBooks.push(newBook);
    return newBook;
  }

  deleteBook(bookId: number): void {
    let index = this.allBooks.findIndex(
      (eachBook) => eachBook.bookId == bookId
    );
    this.allBooks.splice(index, 1);
  }

  updateBook(editBook: Book): Book {
    let index = this.allBooks.findIndex(
      (eachBook) => eachBook.bookId == editBook.bookId
    );
    this.allBooks[index] = editBook;
    return editBook;
  }
}
