import { createReducer, on } from '@ngrx/store';
import { BookActions } from './books.actions';

export const initialState: ReadonlyArray<String> = [];

export const collectionReducer =  createReducer(
  initialState,
  on(BookActions.addBook, (state, {bookId}) => {
    if(state.indexOf(bookId) > -1) return state;
    return [...state, bookId]
  }),
  on(BookActions.removeBook, (state, {bookId}) => state.filter((id) => bookId !== id))
)
