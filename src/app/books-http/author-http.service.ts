import { Injectable } from '@angular/core';
import { Author } from '../books/author.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorHttpService {
  baseUrl: string = 'http://localhost:3232/api/authors';

  constructor(private httpClient: HttpClient) {}

  getAllAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(this.baseUrl);
  }

  getAAuthor(authorId: number): Observable<Author> {
    return this.httpClient.get<Author>(this.baseUrl + '/' + authorId);
  }
}
