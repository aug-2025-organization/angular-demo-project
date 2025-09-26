import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'book-header-http',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './book-header-http.html',
  styleUrl: './book-header-http.css',
})
export class BookHeaderHttp {}
