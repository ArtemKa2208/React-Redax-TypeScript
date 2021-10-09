const defaultState = {
  films: []
}
export const ADD_FILM = 'ADD_FILM';
export const FETCH_FILM = 'FETCH_FILM';
export const filmReducer = (state = defaultState,action) => {
  switch(action.type){
    case ADD_FILM:
      console.log('sb s s')
      return {...state, films: action.payload}
    default:
      return state;
  }
}

export const setFilm = payload => ({type:ADD_FILM},payload);
export const fetchFilm = () => ({type:FETCH_FILM});