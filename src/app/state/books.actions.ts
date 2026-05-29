import { createActionGroup, props } from '@ngrx/store';
import { Book } from './book';

export const BookActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{bookId: string}>(),
    'Remove Book': props<{bookId: string}>(),
  }
})

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Books List': props<{books: ReadonlyArray<Book>}>(),
  }
})
