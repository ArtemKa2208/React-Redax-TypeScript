import { fetchFilm, inputValue, sortByName, sortByDate} from '../store/filmsReducer';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
export default (props) => {
  const SORT_BY_NAME = 'SORT_BY_NAME';
  const dispatch = useDispatch();
  const search = useSelector( state => state.search)
  const films = useSelector( state => state.films)
  const inputHandler = ({ target: { value } }) => {
    console.log(value)
    dispatch( inputValue(value))
  } 
  const sortBy = ({ target: { value } }) => {
   switch(value){
     case 'Name':
      dispatch( sortByName(films))
      break;
    case 'Year':
      dispatch( sortByDate(films))
      break;      
   }
  }
  return(
    <div className='header'>
      <NavLink to='/' className='logo-text'>Your movie</NavLink>
      <div className='toolbar'>
        <NavLink to='/author'>About the author</NavLink>
        <input onChange={inputHandler} placeholder='Who seeks will always find...'/>
        <button onClick={ () => props.dispatch( fetchFilm(search)) }>Search</button>
        <select onChange = {sortBy}>
          <option disabled selected>Sort by</option>
          {/* <option>Default</option> */}
          <option>Name</option>
          <option>Year</option>
          {/* <option>Abv(decay)</option> */}
        </select>
        <NavLink to='/team'>About the team</NavLink>
      </div>
    </div>
  )
}