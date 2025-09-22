import { Component } from '@angular/core';
import { Movie } from './movie.model';
import { CommonModule } from '@angular/common';
import { AppHover } from '../directives/app-hover';

@Component({
  selector: 'movie-list',
  imports: [CommonModule, AppHover],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  allMovies: Movie[] = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      releaseYear: 1994,
      rating: 9.3,
      genre: 'Drama',
      description:
        'Two imprisoned and bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterUrl: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
    },
    {
      id: 2,
      title: 'The Godfather',
      releaseYear: 1972,
      rating: 9.2,
      genre: 'Crime, Drama',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterUrl: 'https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_.jpg',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      releaseYear: 2008,
      rating: 9.0,
      genre: 'Action, Crime, Drama',
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept  one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterUrl:
        'https://plus.unsplash.com/premium_photo-1723731273376-6bce6f1eff33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGhlJTIwZGFyayUyMG5pZ2h0JTIwYmF0bWFufGVufDB8fDB8fHww',
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      releaseYear: 1994,
      rating: 8.9,
      genre: 'Crime, Drama',
      description:
        'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      posterUrl:
        'https://images.unsplash.com/photo-1585864501941-68fc17327275?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVscCUyMGZpY3Rpb24lMjBtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 5,
      title: 'Forrest Gump',
      releaseYear: 1994,
      rating: 8.8,
      genre: 'Drama, Romance',
      description:
        'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama',
      posterUrl:
        'https://images.unsplash.com/photo-1507928727946-a2fad844e087?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0JTIwZ3VtcCUyMG1vdmllfGVufDB8fDB8fHww',
    },
    {
      id: 6,
      title: 'Inception',
      releaseYear: 2010,
      rating: 8.8,
      genre: 'Action, Adventure, Sci-Fi',
      description:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterUrl:
        'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdmllfGVufDB8fDB8fHww',
    },
    {
      id: 7,
      title: 'The Matrix',
      releaseYear: 1999,
      rating: 8.7,
      genre: 'Action, Sci-Fi',
      description:
        'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      posterUrl: 'https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg',
    },
  ];
}
