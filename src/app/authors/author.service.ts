import { Injectable } from '@angular/core';
import { Author } from '../books/author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  allAuthors: Author[] = [
    {
      authorId: 301,
      authorFirstname: 'Rowling',
      authorLastname: 'JK',
    },
    {
      authorId: 302,
      authorFirstname: 'Geronimo',
      authorLastname: 'Stilton',
    },
  ];

  getAllAuthors(): Author[] {
    return this.allAuthors;
  }

  getAAuthor(authorId: number): Author | undefined {
    return this.allAuthors.find(
      (eachAuthor) => eachAuthor.authorId == authorId
    );
  }
}
