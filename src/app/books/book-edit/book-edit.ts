import { Component } from '@angular/core';
import { Character } from '../character.model';
import { Book } from '../book.model';
import { Author } from '../author.model';
import { AuthorService } from '../../authors/author.service';
import { CharacterService } from '../../characters/character.service';
import { BookService } from '../book.service';

@Component({
  selector: 'book-edit',
  imports: [],
  templateUrl: './book-edit.html',
  styleUrl: './book-edit.css',
})
export class BookEdit {
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
    private authorService: AuthorService,
    private characterService: CharacterService,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.allAuthors = this.authorService.getAllAuthors();
    this.allCharacters = this.characterService.getAllCharacters();
  }

  addCharacter() {
    let fetchedCharacter: any = this.characterService.getACharacter(
      this.selectedCharacterId
    );
    this.selectedCharacters.push(fetchedCharacter);
  }

  removeChar(characterId: number) {
    let index = this.selectedCharacters.findIndex(
      (chars) => chars.characterId == characterId
    );
    this.selectedCharacters.splice(index, 1);
  }
}
