import { createReducer, on } from '@ngrx/store';
import { Book } from './book';
import { BooksApiActions } from './books.actions';

export const initialState: ReadonlyArray<Book> =[];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBooksList, (_state, {books}) => books)
)
