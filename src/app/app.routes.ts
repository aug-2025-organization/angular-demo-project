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
import { BookView } from './books/book-view/book-view';
import { BookHomeHttp } from './books-http/book-home-http/book-home-http';
import { BookListHttp } from './books-http/book-list-http/book-list-http';
import { BookAddHttp } from './books-http/book-add-http/book-add-http';
import { BookEditHttp } from './books-http/book-edit-http/book-edit-http';
import { BookViewHttp } from './books-http/book-view-http/book-view-http';

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
        path: 'book-edit/:bid',
        component: BookEdit,
      },
      {
        path: 'book-view/:bid',
        component: BookView,
      },
    ],
  },
  {
    path: 'book-home-http',
    component: BookHomeHttp,
    children: [
      {
        path: 'book-list-http',
        component: BookListHttp,
      },
      {
        path: 'book-add-http',
        component: BookAddHttp,
      },
      {
        path: 'book-edit-http/:bid',
        component: BookEditHttp,
      },
      {
        path: 'book-view-http/:bid',
        component: BookViewHttp,
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
