const defaultState = {
  films: [],
  search: '',
  movie: {},
}
export const ADD_FILM = 'ADD_FILM';
export const FETCH_FILM = 'FETCH_FILM';
export const FETCH_DESCRIPTION_FILM = 'FETCH_DESCRIPTION_FILM';
export const SEARCH_FILM = 'SEARCH_FILM';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const filmReducer = (state = defaultState,action) => {
  switch(action.type){
    case ADD_FILM:
      return {...state, films: action.payload.Search}
    case SEARCH_FILM:
      return {...state, search: action.payload}
    case SORT_BY_NAME:
      return {...state, films:  [...action.payload].sort((a, b) => a.Title > b.Title ? 1 : -1)}
    case SORT_BY_DATE:
      return {...state, films:  [...action.payload].sort((a, b) => a.Year > b.Year ? 1 : -1)}
    case SELECT_MOVIE:
      console.log('....')
      console.log(action.payload.Search)
      return {...state, movie: action.payload}
    default:
      return state;
  }
}

export const setFilm = payload => ({type:ADD_FILM,payload});
export const inputValue = payload => ({type:SEARCH_FILM,payload});
export const fetchFilm = payload => ({type:FETCH_FILM,payload});
export const fetchDescriptionFilm = payload => ({type:FETCH_DESCRIPTION_FILM,payload});
export const sortByName = payload => ({type:SORT_BY_NAME,payload});
export const sortByDate = payload => ({type:SORT_BY_DATE,payload});
export const selectMovie = payload => ({type:SELECT_MOVIE,payload})
