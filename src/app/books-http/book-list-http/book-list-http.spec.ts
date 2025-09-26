import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListHttp } from './book-list-http';

describe('BookListHttp', () => {
  let component: BookListHttp;
  let fixture: ComponentFixture<BookListHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListHttp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
