import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookHeaderHttp } from '../book-header-http/book-header-http';

@Component({
  selector: 'app-book-home-http',
  imports: [RouterOutlet, BookHeaderHttp],
  templateUrl: './book-home-http.html',
  styleUrl: './book-home-http.css',
})
export class BookHomeHttp {}
