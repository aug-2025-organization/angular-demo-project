import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Display } from './display/display';
import { Counter } from './counter/counter';
import { CountriesList } from './countries-list/countries-list';
import { DishList } from './dish-list/dish-list';
import { MovieList } from './movie-list/movie-list';
import { StudentList } from './student-list/student-list';
import { BookList } from './books/book-list/book-list';
import { BookAdd } from './books/book-add/book-add';
import { BookEdit } from './books/book-edit/book-edit';
import { Header } from './header/header';
import { ObservableDemo } from "./observable-demo/observable-demo";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Display,
    Counter,
    CountriesList,
    DishList,
    MovieList,
    StudentList,
    BookList,
    BookAdd,
    BookEdit,
    Header,
    ObservableDemo
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-demo-project';
}
