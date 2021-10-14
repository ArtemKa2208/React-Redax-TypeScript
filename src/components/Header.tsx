import {fetchFilm,
  inputValue,
  sortByName,
  sortByDate,
} from '../action/movieAction';
import {useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {useTypedSelector} from '../hooks/useTypedSelector';
import React from 'react';
export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const search = useTypedSelector((state) => state.search);
  const films = useTypedSelector((state) => state.films);

  const inputHandler = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputValue(value));
  };

  const sortBy = ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) => {
    switch (value) {
      case 'Name':
        dispatch(sortByName(films));
        break;
      case 'Year':
        dispatch(sortByDate(films));
        break;
    }
  };

  return (
    <div className='header'>
      <NavLink to='/' className='logo-text'>Your movie</NavLink>
      <div className='toolbar'>
        <NavLink to='/author'>About the author</NavLink>
        <input onChange={inputHandler} placeholder='Who seeks will always find...' />
        <button onClick={() => dispatch(fetchFilm([search, 0, true]))}>Search</button>
        <select onChange={sortBy}>
          <option disabled selected>Sort by</option>
          {/* <option>Default</option> */}
          <option>Name</option>
          <option>Year</option>
          {/* <option>Abv(decay)</option> */}
        </select>
        <NavLink to='/team'>About the team</NavLink>
      </div>
    </div>
  );
};
