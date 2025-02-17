export interface IBooksContext {
  books: IBook[],
  page: number,
  itemsPerPage: number,
  filters: {
    category: string,
    value: string
  },
  error: string,
  loading: boolean
}

export interface IBook {
  id: number,
  title: string,
  author: string,
  publication_year: number,
  genre: string[],
  description: string,
  cover_image: string,
}