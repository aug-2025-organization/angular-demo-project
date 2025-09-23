import { Injectable } from '@angular/core';
import { Character } from '../books/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  allCharacters: Character[] = [
    {
      characterId: 201,
      characterFirstname: 'Harry',
      characterLastname: 'Potter',
    },
    {
      characterId: 202,
      characterFirstname: 'Ron',
      characterLastname: 'Weasley',
    },
    {
      characterId: 203,
      characterFirstname: 'Draco',
      characterLastname: 'Malfoy',
    },
    {
      characterId: 204,
      characterFirstname: 'Little',
      characterLastname: 'Shank',
    },
  ];

  getAllCharacters(): Character[] {
    return this.allCharacters;
  }

  getACharacter(characterId: number): Character | undefined{
    return this.allCharacters.find(
      (character) => character.characterId == characterId
    );
  }
}
