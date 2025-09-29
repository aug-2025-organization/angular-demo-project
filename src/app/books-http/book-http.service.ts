import { Injectable } from '@angular/core';
import { Book } from './models/book.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookHttpService {
  baseUrl: string = 'http://localhost:3232/api/books';

  constructor(private httpClient: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl, );
  }

  getABook(bookId: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseUrl}/${bookId}`);
  }

  addBook(newBook: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.baseUrl, newBook);
  }

  deleteBook(bookId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${bookId}`);
  }

  updateBook(editBook: Book): Observable<Book> {
    return this.httpClient.put<Book>(this.baseUrl, editBook);
  }
}
