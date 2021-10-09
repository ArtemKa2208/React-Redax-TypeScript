import {put, takeEvery, call} from 'redux-saga/effects'
import { FETCH_FILM, setFilm } from '../store/filmsReducer';
console.log(FETCH_FILM)
const queryFilmsFromApi = () => fetch('http://www.omdbapi.com/?s=Harry&apikey=dae73c3e')

function* filmWorker() {
      const data = yield call(queryFilmsFromApi);
      console.log(data)
      const json = yield call( () => new Promise( res => res(data.json()))); 
      console.log(json)
      yield put(setFilm(json))
}

export function* filmWatcher() {
      yield takeEvery(FETCH_FILM,filmWorker)
}