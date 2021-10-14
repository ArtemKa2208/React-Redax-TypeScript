export interface IState {
  films: any[],
  search: string,
  movie: Record<string, unknown>,
  pages: string
}
export interface IAction {
  type: string,
  payload?: any
}

export enum movieActionTypes {
  ADD_FILM = 'ADD_FILM',
  FETCH_FILM = 'FETCH_FILM',
  FETCH_DESCRIPTION_FILM = 'FETCH_DESCRIPTION_FILM',
  SEARCH_FILM = 'SEARCH_FILM',
  SORT_BY_NAME = 'SORT_BY_NAME',
  SORT_BY_DATE = 'SORT_BY_DATE',
  SELECT_MOVIE = 'SELECT_MOVIE',
  SET_AMOUNT_PAGES = 'SET_AMOUNT_PAGES',
}
interface I_ADD_FILM {
  type: movieActionTypes.ADD_FILM,
  payload: any[]
}
interface I_FETCH_FILM {
  type: movieActionTypes.FETCH_FILM,
  payload: any[]
}
interface I_FETCH_DESCRIPTION_FILM {
  type: movieActionTypes.FETCH_DESCRIPTION_FILM,
  payload: string
}
interface I_SEARCH_FILM {
  type: movieActionTypes.SEARCH_FILM,
  payload: string
}
interface I_SORT_BY_NAME {
  type: movieActionTypes.SORT_BY_NAME,
  payload: any[]
}
interface I_SORT_BY_DATE {
  type: movieActionTypes.SORT_BY_DATE,
  payload: any[]
}
interface I_SELECT_MOVIE {
  type: movieActionTypes.SELECT_MOVIE,
  payload: Record<string, unknown>
}
interface I_SET_AMOUNT_PAGES {
  type: movieActionTypes.SET_AMOUNT_PAGES,
  payload: string;
}

export type FilmAction = I_ADD_FILM | I_FETCH_FILM | I_FETCH_DESCRIPTION_FILM | I_SEARCH_FILM | I_SORT_BY_NAME | I_SORT_BY_DATE | I_SELECT_MOVIE | I_SET_AMOUNT_PAGES;
