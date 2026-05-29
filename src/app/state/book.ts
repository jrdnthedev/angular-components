export interface Book {
  id: string;
  volume: {
    title: string;
    authors: Array<string>;
  }
}
