import React from 'react';
import {Header} from './components/Header';
import {DefaultPage} from './components/DefaultPage';
import './App.css';
import {MovieCards} from './components/MovieCards';
import {MovieDescription} from './components/MovieDescription';
import {Route, Switch} from 'react-router-dom';
import {AboutAuthor} from './components/AboutAuthor';
import {AboutTeam} from './components/AboutTeam';
import {HeaderWithoutSearch} from './components/HeaderWithoutSearch';
import {Pages} from './components/Pages';
import {useTypedSelector} from './hooks/useTypedSelector';
const App: React.FC = () => {
  const films = useTypedSelector((state) => state.films);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          {films?.length ? <MovieCards /> : <DefaultPage />}
          <Pages />
        </Route>
        <Route path="/description">
          <HeaderWithoutSearch />
          <MovieDescription />
        </Route>
        <Route path="/author">
          <HeaderWithoutSearch />
          <AboutAuthor />
        </Route>
        <Route path="/team">
          <HeaderWithoutSearch />
          <AboutTeam />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
