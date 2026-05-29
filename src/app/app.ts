import { Component, inject, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ReactiveForm } from './reactive-form/reactive-form';
import { Bookservice } from './book-list/bookservice';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BookActions, BooksApiActions } from './state/books.actions';
import { BookList } from './book-list/book-list';
import { BookCollection } from './book-collection/book-collection';

@Component({
  selector: 'app-root',
  imports: [ ReactiveForm, BookList, BookCollection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-components');
  private readonly bookService = inject(Bookservice);
  private readonly store = inject(Store);

  protected books = this.store.selectSignal(selectBooks);
  protected bookCollection = this.store.selectSignal(selectBookCollection);

  protected onAdd(bookId: string) {
    this.store.dispatch(BookActions.addBook({bookId}))
  }

  protected onRemove(bookId: string) {
    this.store.dispatch(BookActions.removeBook({bookId}))
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => this.store.dispatch(BooksApiActions.retrievedBooksList({books})))
  }
}
