import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHomeHttp } from './book-home-http';

describe('BookHomeHttp', () => {
  let component: BookHomeHttp;
  let fixture: ComponentFixture<BookHomeHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookHomeHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookHomeHttp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
