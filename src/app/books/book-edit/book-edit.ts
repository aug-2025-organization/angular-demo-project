import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { Book } from '../book.model';
import { Author } from '../author.model';
import { AuthorService } from '../../authors/author.service';
import { CharacterService } from '../../characters/character.service';
import { BookService } from '../book.service';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'book-edit',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './book-edit.html',
  styleUrl: './book-edit.css',
})
export class BookEdit implements OnInit {
  fetchBookId: number = 102;
  eachSelChar: FormGroup = new FormGroup({
    characterId: new FormControl(),
    characterFirstname: new FormControl(),
    characterLastname: new FormControl(),
  });

  eachSelectedChar: Character = {
    characterId: 0,
    characterFirstname: '',
    characterLastname: '',
  };
  character: FormGroup = new FormGroup({
    characterId: new FormControl(),
    characterFirstname: new FormControl(),
    characterLastname: new FormControl(),
  });

  myReactiveForm: FormGroup = new FormGroup({
    bookId: new FormControl(),
    bookTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    author: new FormGroup({
      authorId: new FormControl(),
      authorFirstname: new FormControl(),
      authorLastname: new FormControl(),
    }),
    bookCategory: new FormControl(),
    bookPublished: new FormControl(),
    bookPrice: new FormControl(0, Validators.required),
    bookImageUrl: new FormControl(),
    allCharacters: new FormArray([this.character]),
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
    console.log(this.allCharacters);
    let fetchedBook: any = this.bookService.getABook(this.fetchBookId);
    this.selectedCharacters = fetchedBook.allCharacters;
    console.log(fetchedBook);
    this.myReactiveForm.patchValue(fetchedBook);
  }

  addCharacter() {
    console.log(this.eachSelChar.value);
    console.log(this.myReactiveForm.get('author')?.value);
    this.selectedCharacters.push(this.eachSelChar.value);
    this.myReactiveForm.get('allCharacters')?.setValue(this.selectedCharacters);
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
    console.log(this.myReactiveForm.get('bookTitle'));
  }
}
