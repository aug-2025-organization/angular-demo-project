import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Display } from './display/display';
import { Counter } from "./counter/counter";
import { CountriesList } from "./countries-list/countries-list";
import { DishList } from "./dish-list/dish-list";
import { MovieList } from "./movie-list/movie-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Display, Counter, CountriesList, DishList, MovieList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-demo-project';
}
