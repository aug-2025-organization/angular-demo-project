import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'book-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './book-header.html',
  styleUrl: './book-header.css',
})
export class BookHeader {}
