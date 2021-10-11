import React from 'react';
import Header from './components/Header';
import DefaultPage from './components/DefaultPage';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchFilm } from './store/filmsReducer';
import MovieCards from './components/MovieCards';
import MovieDescription from './components/MovieDescription'
import {Route, BrowserRouter as Router, Switch,} from 'react-router-dom'
function App() {
  const dispatch = useDispatch();
  const films = useSelector( state => state.films)
  const movie = useSelector( state => state.movie)
  console.log(films)
  return (
    <div className="App">
      <Header dispatch = {dispatch} />
      <Router>
        <Switch>
          <Route exact path="/">
            {films.length ? <MovieCards films = {films} /> : <DefaultPage />}
          </Route>
          <Route exact path="/description">
            <MovieDescription movie = {movie}/>
          </Route>
        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
