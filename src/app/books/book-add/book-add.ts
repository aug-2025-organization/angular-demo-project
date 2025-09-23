import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../authors/author.service';
import { Author } from '../author.model';
import { CharacterService } from '../../characters/character.service';
import { Character } from '../character.model';

@Component({
  selector: 'book-add',
  imports: [],
  templateUrl: './book-add.html',
  styleUrl: './book-add.css',
})
export class BookAdd implements OnInit {
  allAuthors: Author[] = [];
  allCharacters: Character[] = [];

  constructor(
    private authorService: AuthorService,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.allAuthors = this.authorService.getAllAuthors();
    this.allCharacters = this.characterService.getAllCharacters();
  }
}
