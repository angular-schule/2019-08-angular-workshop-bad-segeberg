import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Router } from '@angular/router';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'br-create-book-container',
  templateUrl: './create-book-container.component.html',
  styleUrls: ['./create-book-container.component.scss']
})
export class CreateBookContainerComponent implements OnInit {

  constructor(private bs: BookStoreService, private router: Router) { }

  ngOnInit() {
  }

  createBook(book: Book) {
    this.bs.create(book).subscribe(() => {
      this.router.navigate(['/books', book.isbn]);
    });
  }

}
