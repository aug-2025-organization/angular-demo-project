import { Routes } from '@angular/router';
import { Display } from './display/display';
import { Counter } from './counter/counter';
import { DishList } from './dish-list/dish-list';
import { CountriesList } from './countries-list/countries-list';
import { MovieList } from './movie-list/movie-list';
import { StudentList } from './student-list/student-list';
import { BookList } from './books/book-list/book-list';
import { BookAdd } from './books/book-add/book-add';
import { BookEdit } from './books/book-edit/book-edit';
import { NotFound } from './not-found/not-found';
import { BookHome } from './books/book-home/book-home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'display',
    pathMatch: 'full',
  },
  {
    path: 'display',
    component: Display,
  },
  {
    path: 'counter',
    component: Counter,
  },
  {
    path: 'dish-list',
    component: DishList,
  },
  {
    path: 'countries',
    component: CountriesList,
  },
  {
    path: 'movie-list',
    component: MovieList,
  },
  {
    path: 'student-list',
    component: StudentList,
  },
  {
    path: 'book-home',
    component: BookHome,
    children: [
      {
        path: 'book-list',
        component: BookList,
      },
      {
        path: 'book-add',
        component: BookAdd,
      },
      {
        path: 'book-edit',
        component: BookEdit,
      },
    ],
  },

  {
    path: '**',
    component: NotFound,
  },
];
