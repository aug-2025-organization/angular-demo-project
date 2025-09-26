import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHeaderHttp } from './book-header-http';

describe('BookHeaderHttp', () => {
  let component: BookHeaderHttp;
  let fixture: ComponentFixture<BookHeaderHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookHeaderHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookHeaderHttp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
