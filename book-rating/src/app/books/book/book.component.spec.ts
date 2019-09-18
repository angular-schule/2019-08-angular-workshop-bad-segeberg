import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // book in der Komponente belegen
    // muss VOR detectChanges() erledigt werden, damit Daten bei der Change Detection da sind
    component.book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call method for btn click', () => {
    // Methode patchen und überwachen
    spyOn(component, 'doRateUp');

    // Button holen
    const btn = fixture.debugElement
      .nativeElement.querySelector('[data-testid="rateUpBtn"]');

    // Button klicken
    btn.click();

    // Spy abfragen: Wurde Methode aufgerufen?
    expect(component.doRateUp).toHaveBeenCalled();
  });

  it('should emit event with book for doRateUp()', () => {
    // Arrange
    let emittedBook;

    component.rateUp.subscribe(book => {
      emittedBook = book;
    });

    // Act
    component.doRateUp();

    // Assert
    expect(emittedBook).toBe(component.book);
  });
});
