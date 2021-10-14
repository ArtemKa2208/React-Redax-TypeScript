import {useDispatch} from 'react-redux';
import {fetchDescriptionFilm} from '../action/movieAction';
import {NavLink} from 'react-router-dom';
import {useTypedSelector} from '../hooks/useTypedSelector';
import React from 'react';
export const MovieCards: React.FC = () => {
  const films = useTypedSelector((state) => state.films);
  const dispatch = useDispatch();
  const openCard = (elem: any) => {
    dispatch(fetchDescriptionFilm(elem.imdbID));
  };
  return (
    <div className='block-cards-movie'>
      {films.map((elem, index) => {
        return (
          <NavLink key={'card'+index} onClick={() => {openCard(elem)}} to='description'>
            <div className='card-movie'>
              {(elem.Poster === 'N/A') ?
                <img alt='default' className='poster-image' src='https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg' />:
                <img alt='default' className='poster-image' src={elem.Poster} />
              }
              <p className='card-title'>{elem.Title}</p>
              <p className='card-description'>Year of issue: {elem.Year}</p>
              <p className='card-description'>Type: {elem.Type}</p>
            </div>
          </NavLink>
        );
      })};
    </div>
  );
};
