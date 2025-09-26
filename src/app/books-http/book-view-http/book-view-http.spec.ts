import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewHttp } from './book-view-http';

describe('BookViewHttp', () => {
  let component: BookViewHttp;
  let fixture: ComponentFixture<BookViewHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookViewHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookViewHttp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
