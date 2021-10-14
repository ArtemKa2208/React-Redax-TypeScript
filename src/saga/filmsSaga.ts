import {put, takeEvery, call} from 'redux-saga/effects';
import {setFilm, selectMovie, setAmountPage} from '../action/movieAction';
import {API, NUMBER_OF_PAGES} from '../constants';
import {movieActionTypes, IAction} from '../types/types';

const queryFilmsFromApi = (search: string, page = 1) => {
  return fetch(API + `&s=${search}&page=${page}`)
  .then((response) => {
    return response.json();
  });
};

const queryDescriptionFilmsFromApi = (search: string) => {
  return fetch(API + `&i=${search}`)
  .then((response) => {
    return response.json();
  });
};
function* filmWorker(action: IAction): any {
  try {
    let res: any[] = [];
    const endPoint = action.payload[1] + NUMBER_OF_PAGES;

    if (action.payload[2]) {
      const data = yield call(() => queryFilmsFromApi(action.payload[0]));
      if (data.Response === 'False') alert('Введите название фильма поточнее');
      const amount: number = Math.ceil(data.totalResults / 10);
      yield put(setAmountPage(amount.toString()));
    }

    for (let i = action.payload[1] + 1; i <= endPoint; i++) {
      const data = yield call(() => queryFilmsFromApi(action.payload[0], i));
      if (data.Response === 'True') res = res.concat(data.Search);
    }
    yield put(setFilm(res));
  } catch (error) {
  }
}
function* descriptionFilmWorker(action: IAction): any {
  try {
    const data = yield call(() => queryDescriptionFilmsFromApi(action.payload));
    yield put(selectMovie(data));
  } catch (error) {
      console.log(error);
  }
}
export function* filmWatcher() {
  yield takeEvery(movieActionTypes.FETCH_FILM, filmWorker);
  yield takeEvery(movieActionTypes.FETCH_DESCRIPTION_FILM, descriptionFilmWorker);
}
