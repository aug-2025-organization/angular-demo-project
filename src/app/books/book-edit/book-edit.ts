import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { Book } from '../book.model';
import { Author } from '../author.model';
import { AuthorService } from '../../authors/author.service';
import { CharacterService } from '../../characters/character.service';
import { BookService } from '../book.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'book-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './book-edit.html',
  styleUrl: './book-edit.css',
})
export class BookEdit implements OnInit {
  fetchBookId: number = 102;

  myReactiveForm: FormGroup = new FormGroup({
    bookId: new FormControl(),
    bookTitle: new FormControl(),
    author: new FormGroup({
      authorId: new FormControl(),
      authorFirstname: new FormControl(),
      authorLastname: new FormControl(),
    }),
    bookCategory: new FormControl(),
    bookPublished: new FormControl(),
    bookPrice: new FormControl(),
    bookImageUrl: new FormControl(),
  });

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
    let fetchedBook: any = this.bookService.getABook(this.fetchBookId);
    console.log(fetchedBook);
    this.myReactiveForm.patchValue(fetchedBook);
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

  handleFormSubmit() {
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm.value);
  }
}
