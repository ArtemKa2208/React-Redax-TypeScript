import {movieActionTypes, FilmAction} from '../types/types';

export const setFilm = (payload: any[]): FilmAction => {
  return {
    type: movieActionTypes.ADD_FILM,
    payload,
  };
};

export const inputValue = (payload: string): FilmAction => {
  return {
    type: movieActionTypes.SEARCH_FILM,
    payload,
  };
};

export const fetchFilm = (payload: any[]): FilmAction => {
  return {
    type: movieActionTypes.FETCH_FILM,
    payload,
  };
};

export const fetchDescriptionFilm = (payload: string): FilmAction => {
  return {
    type: movieActionTypes.FETCH_DESCRIPTION_FILM,
    payload,
  };
};


export const sortByName = (payload: any[]): FilmAction => {
  return {
    type: movieActionTypes.SORT_BY_NAME,
    payload,
  };
};

export const sortByDate = (payload: any[]): FilmAction => {
  return {
    type: movieActionTypes.SORT_BY_DATE,
    payload,
  };
};

export const selectMovie = (payload: Record<string, unknown> ): FilmAction => {
  return {
    type: movieActionTypes.SELECT_MOVIE,
    payload,
  };
};

export const setAmountPage = (payload: string): FilmAction => {
  return {
    type: movieActionTypes.SET_AMOUNT_PAGES,
    payload,
  };
};


