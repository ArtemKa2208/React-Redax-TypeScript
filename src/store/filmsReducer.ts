import {movieActionTypes, FilmAction, IState} from '../types/types';
const defaultState: IState = {
  films: [],
  search: '',
  movie: {},
  pages: '',
};

export const filmReducer = (state = defaultState, action: FilmAction): IState => {
  switch (action.type) {
    case movieActionTypes.ADD_FILM:
      return {...state, films: action.payload};
    case movieActionTypes.SEARCH_FILM:
      return {...state, search: action.payload};
    case movieActionTypes.SORT_BY_NAME:
      return {...state, films: [...action.payload].sort((a, b) => a.Title > b.Title ? 1 : -1)};
    case movieActionTypes.SORT_BY_DATE:
      return {...state, films: [...action.payload].sort((a, b) => a.Year > b.Year ? 1 : -1)};
    case movieActionTypes.SELECT_MOVIE:
      return {...state, movie: action.payload};
    case movieActionTypes.SET_AMOUNT_PAGES:
      return {...state, pages: action.payload};
    default:
      return state;
  }
};

