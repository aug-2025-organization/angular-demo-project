import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'book-edit',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './book-edit.html',
  styleUrl: './book-edit.css',
})
export class BookEdit implements OnInit {
  fetchedBook: Book = {
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

  selectedCharacter: Character = {
    characterId: 0,
    characterFirstname: '',
    characterLastname: '',
  };
  myReactiveForm: FormGroup = new FormGroup({});
  eachSelChar: FormGroup = new FormGroup({});

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
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
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
      eachSelChar: new FormGroup({
        characterId: new FormControl(),
        characterFirstname: new FormControl(),
        characterLastname: new FormControl(),
      }),
      allCharacters: new FormArray([]),
    });

    let bookId = this.activatedRoute.snapshot.paramMap.get('bid');
    if (bookId != null) {
      this.fetchedBook = this.bookService.getABook(+bookId);
    }

    this.allAuthors = this.authorService.getAllAuthors();
    this.allCharacters = this.characterService.getAllCharacters();
    console.log(this.allCharacters);

    this.selectedCharacters = this.fetchedBook.allCharacters;
    console.log(this.fetchedBook);
    this.myReactiveForm.patchValue({
      bookId: this.fetchedBook.bookId,
      bookTitle: this.fetchedBook.bookTitle,
      author: this.fetchedBook.author,
      bookCategory: this.fetchedBook.bookCategory,
      bookPublished: formatDate(
        this.fetchedBook.bookPublished,
        'yyyy-MM-dd',
        'en'
      ),
      bookPrice: this.fetchedBook.bookPrice,
      bookImageUrl: this.fetchedBook.bookImageUrl,
    });

    // Clear and re-add allCharacters FormArray
    const allCharsArray = this.myReactiveForm.get('allCharacters') as FormArray;
    allCharsArray.clear();
    this.fetchedBook.allCharacters.forEach((char) => {
      allCharsArray.push(
        new FormGroup({
          characterId: new FormControl(char.characterId),
          characterFirstname: new FormControl(char.characterFirstname),
          characterLastname: new FormControl(char.characterLastname),
        })
      );
    });
  }

  addCharacter() {
    console.log(this.eachSelChar.value);

    const charFormGroup = new FormGroup({
      characterId: new FormControl(this.eachSelChar.value.characterId),
      characterFirstname: new FormControl(
        this.eachSelChar.value.characterFirstname
      ),
      characterLastname: new FormControl(
        this.eachSelChar.value.characterLastname
      ),
    });

    // Add to FormArray
    (this.myReactiveForm.get('allCharacters') as FormArray).push(charFormGroup);
    this.selectedCharacters.push(this.eachSelChar.value);
  }

  removeChar(characterId: number) {
    const allCharsArray = this.myReactiveForm.get('allCharacters') as FormArray;
    const index = allCharsArray.controls.findIndex(
      (ctrl) => ctrl.value.characterId === characterId
    );

    if (index !== -1) {
      allCharsArray.removeAt(index);
      this.selectedCharacters.splice(index, 1); // Only if you're using this elsewhere
    }
  }

  handleFormSubmit() {
    console.log(this.myReactiveForm.value);
  }
}
