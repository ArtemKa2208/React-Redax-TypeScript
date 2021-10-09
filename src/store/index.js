import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {filmReducer} from './filmsReducer'
import createSagaMiddleware from '@redux-saga/core'
import { rootWatcher } from '../saga'

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(filmReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootWatcher)