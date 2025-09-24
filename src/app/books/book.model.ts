import { Author } from './author.model';
import { Character } from './character.model';

export interface Book {
  bookId: number;
  bookTitle: string;
  author: Author | undefined;
  bookCategory: string;
  bookPublished: Date;
  bookPrice: number;
  bookImageUrl: string;
  allCharacters: Character[];
}
