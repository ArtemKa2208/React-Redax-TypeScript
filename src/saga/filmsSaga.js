import {put, takeEvery, call} from 'redux-saga/effects'
import { FETCH_FILM, setFilm, selectMovie } from '../store/filmsReducer';
console.log(FETCH_FILM)

const queryFilmsFromApi = (search) => {
     return fetch(`http://www.omdbapi.com/?s=${search}&apikey=dae73c3e`)
}
const queryDescriptionFilmsFromApi = (search) => {
      console.log('queryDescriptionFilmsFromApi');
      return fetch(`http://www.omdbapi.com/?i=${search}&apikey=dae73c3e`)
      .then((response) => {
            return response.json();
      })
}
function* filmWorker(action) {
      const data = yield call(() => queryFilmsFromApi(action.payload));
      const json = yield call( () => new Promise( res => res(data.json()))); 
      try {
            yield put(setFilm(json)) 
      } catch (error) {     
      }    
}
function* descriptionFilmWorker(action){
      console.log('okey im here')
      console.log(action.payload)
      try {
            const data = yield call(() => queryDescriptionFilmsFromApi(action.payload));
            // const json = yield call( () => new Promise( res => res(data.json()))); 
            console.log(data)
            yield put(selectMovie(data)) 
      } catch (error) {     
            console.log(error)
      }    
}
export function* filmWatcher() {
      yield takeEvery('FETCH_FILM',filmWorker)
      yield takeEvery('FETCH_DESCRIPTION_FILM',descriptionFilmWorker)
}