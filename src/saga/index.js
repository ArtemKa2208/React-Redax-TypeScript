import {all} from 'redux-saga/effects'
import { filmWatcher } from './filmsSaga'


export function* rootWatcher() {
      yield all([filmWatcher()])
}