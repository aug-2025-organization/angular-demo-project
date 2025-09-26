import { Injectable } from '@angular/core';
import { Character } from '../books/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterHttpService {
  allCharacters: Character[] = [
    {
      characterId: 1,
      characterFirstname: 'Harry',
      characterLastname: 'Potter',
    },
    {
      characterId: 2,
      characterFirstname: 'Ron',
      characterLastname: 'Weasley',
    },
    {
      characterId: 3,
      characterFirstname: 'Severus',
      characterLastname: 'Snape',
    },
    {
      characterId: 4,
      characterFirstname: 'Ginny',
      characterLastname: 'Weasley',
    },
    {
      characterId: 5,
      characterFirstname: 'James',
      characterLastname: 'Potter',
    },
  ];

  getAllCharacters(): Character[] {
    return this.allCharacters;
  }

  getACharacter(characterId: number): Character | undefined {
    return this.allCharacters.find(
      (character) => character.characterId == characterId
    );
  }
}
