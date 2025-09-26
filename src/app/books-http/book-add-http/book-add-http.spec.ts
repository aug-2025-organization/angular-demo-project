import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddHttp } from './book-add-http';

describe('BookAddHttp', () => {
  let component: BookAddHttp;
  let fixture: ComponentFixture<BookAddHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookAddHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAddHttp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
