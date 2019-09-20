import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookStoreService } from '../shared/book-store.service';
import { filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  results$: Observable<Book[]>;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });

    // Suchbegriff minimal 3 Zeichen
    // nicht zu viele Requests, Datenstrom bremsen (Zeit 1 Sek.)
    // niemals zwei gleiche Suchen hintereinander
    // HTTP-Request this.bs.search() ✅
    // Ergebnisse darstellen (ganz einfach!)
    // AsyncPipe


    this.results$ = this.searchForm.get('search').valueChanges.pipe(
      filter(term => term.length >= 3),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(term => this.bs.search(term))
    );
  }

}
