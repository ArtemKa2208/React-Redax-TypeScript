import { useDispatch, useSelector } from 'react-redux';
import {fetchDescriptionFilm} from '../store/filmsReducer';
import {NavLink} from 'react-router-dom'
export default (props) => {
  const dispatch = useDispatch();
  const openCard = (elem) => {
    console.log(elem.imdbID)
    dispatch(fetchDescriptionFilm(elem.imdbID))
  }
  return(
    <div className='block-cards-movie'>
      {props.films.map((elem) => {
        return(
          <NavLink onClick = { () => {openCard(elem)} } to='description'>
            <div className='card-movie'>
              <img className='poster-image' src={elem.Poster}/>
              <p className='card-title'>{elem.Title}</p>
              <p className='card-description'>Year of issue: {elem.Year}</p>
              <p className='card-description'>Type: {elem.Type}</p>
          </div>
          </NavLink>  
        )
      })}  
    </div>
  )
  
}