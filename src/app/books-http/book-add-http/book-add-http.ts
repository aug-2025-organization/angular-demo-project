import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../authors/author.service';
import { CharacterService } from '../../characters/character.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Character } from '../models/character.model';
import { Book } from '../models/book.model';
import { BookHttpService } from '../book-http.service';
import { Author } from '../models/author.model';
import { AuthorHttpService } from '../author-http.service';
import { CharacterHttpService } from '../character-http.service';

@Component({
  selector: 'book-add-http',
  imports: [FormsModule],
  templateUrl: './book-add-http.html',
  styleUrl: './book-add-http.css',
})
export class BookAddHttp implements OnInit {
  selectedCharacterId: number = 0;
  selectedCharacters: Character[] = [];
  newBook: Book = {
    bookId: 0,
    bookTitle: '',
    author: {
      authorId: 0,
      authorFirstname: '',
      authorLastname: '',
    },
    bookCategory: '',
    bookPublished: new Date(),
    bookPrice: 0,
    bookImageUrl: '',
    allCharacters: [],
  };
  allAuthors: Author[] = [];
  allCharacters: Character[] = [];

  constructor(
    private authorHttpService: AuthorHttpService,
    private characterHttpService: CharacterHttpService,
    private bookHttpService: BookHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authorHttpService.getAllAuthors().subscribe({
      next: (response) => (this.allAuthors = response),
      error: (err) => console.log(err),
    });
    this.allCharacters = this.characterHttpService.getAllCharacters();
  }

  handleFormSubmit() {
    this.newBook.allCharacters = this.selectedCharacters;
    console.log(this.newBook);

    this.bookHttpService.addBook(this.newBook).subscribe({
      next: (response) =>
        this.router.navigate(['book-home-http/book-list-http']),
      error: (err) => console.log(err),
    });
  }

  addCharacter() {
    let fetchedCharacter: any = this.characterHttpService.getACharacter(
      this.selectedCharacterId
    );
    this.selectedCharacters.push(fetchedCharacter);
  }

  removeChar(characterId: number) {
    let index = this.selectedCharacters.findIndex(
      (chars) => chars.characterId == characterId
    );
    console.log(index);
    this.selectedCharacters.splice(index, 1);
  }

  displayTempTitle(tempTitle: any) {
    console.log(tempTitle);
  }
}
