import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let ratingMock;
  let book: Book;

  beforeEach(() => {
    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3
    };

    ratingMock = {
      rateUp: () => book
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        // Abhängigkeit ersetzen: statt echtem Service immer ratingMock verwenden
        { provide: BookRatingService, useValue: ratingMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service for doRateUp()', () => {
    const rs = TestBed.get(BookRatingService);
    // callThrough leitet originalen Methodenaufruf durch,
    // damit Service tatsächlich ein Buch liefert und
    // updateList() im Dashboard korrekt arbeiten kann
    spyOn(rs, 'rateUp').and.callThrough();

    component.doRateUp(book);

    expect(rs.rateUp).toHaveBeenCalled();
  });

});
