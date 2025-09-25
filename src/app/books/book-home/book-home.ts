import { Component } from '@angular/core';
import { BookHeader } from '../book-header/book-header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'book-home',
  imports: [BookHeader, RouterOutlet],
  templateUrl: './book-home.html',
  styleUrl: './book-home.css',
})
export class BookHome {}
