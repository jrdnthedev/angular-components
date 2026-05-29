import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../state/book';

@Component({
  selector: 'app-book-collection',
  imports: [],
  templateUrl: './book-collection.html',
  styleUrl: './book-collection.scss',
})
export class BookCollection {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>()
}
