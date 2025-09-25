import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHeader } from './book-header';

describe('BookHeader', () => {
  let component: BookHeader;
  let fixture: ComponentFixture<BookHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
