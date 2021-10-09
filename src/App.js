import React from 'react';
import Header from './components/Header';
import DefaultPage from './components/DefaultPage';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchFilm } from './store/filmsReducer';

function App() {
  const dispatch = useDispatch();
  const films = useSelector( state => state.films)

  return (
    <div className="App">
      <Header />
      <DefaultPage />
      <button onClick= {() => dispatch(fetchFilm())}>Count</button>
      <h1>Counter films: {films[0]}</h1>
    </div>
  );
}

export default App;
