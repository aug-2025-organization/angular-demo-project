import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditHttp } from './book-edit-http';

describe('BookEditHttp', () => {
  let component: BookEditHttp;
  let fixture: ComponentFixture<BookEditHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookEditHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookEditHttp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
