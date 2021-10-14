import React from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
export const MovieDescription: React.FC = () => {
  const movie: any = useTypedSelector((state)=> state.movie);
  if (!movie) {
    document.location.href = '/';
    return <></>;
  } else {
    return (
      <div>
        <div className='info-card-movie'>
          {(movie.Poster === 'N/A') ?
            <img alt='default' src='https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg' />:
            <img alt='default' src={movie.Poster} />
          }
          <p className='card-description-title'>{movie.Title}</p>
          <p className='card-description-all'>{movie.Plot}</p>
          <p className='card-description-all'><p className='card-title-text'>Actors:</p> {movie.Actors}</p>
          <p className='card-description-all'><p className='card-title-text'>Awords:</p> {movie.Awords}</p>
          <p className='card-description-all'><p className='card-title-text'>Country:</p> {movie.Country}</p>
          <p className='card-description-all'><p className='card-title-text'>Genre:</p> {movie.Genre}</p>
          <p className='card-description-all'><p className='card-title-text'>Language: </p>{movie.Language}</p>
          <p className='card-description-all'><p className='card-title-text'>Director:</p> {movie.Director}</p>
          <p className='card-description-all'><p className='card-title-text'>Box office:</p> {movie.BoxOffice}</p>
          <p className='card-description-all'><p className='card-title-text'>Production:</p> {movie.Production}</p>
          <p className='card-description-all'><p className='card-title-text'>Relesed:</p> {movie.Released}</p>
          <p className='card-description-all'><p className='card-title-text'>Writer:</p> {movie.Writer}</p>
          <p className='card-description-all'><p className='card-title-text'>DVD: </p>{movie.DVD}</p>
          <p className='card-description-all'><p className='card-title-text'>Metascore:</p> {movie.Metascore}</p>
          <p className='card-description-all'><p className='card-title-text'>Rated:</p> {movie.Rated}</p>
          <p className='card-description-all'><p className='card-title-text'>Runtime:</p> {movie.Runtime}</p>
          <p className='card-description-all'><p className='card-title-text'>Type:</p> {movie.Type}</p>
          <p className='card-description-all'><p className='card-title-text'>Website:</p> {movie.Website}</p>
          <p className='card-description-all'><p className='card-title-text'>imdbRating:</p> {movie.imdbRating}</p>
          <p className='card-description-all'><p className='card-title-text'>imdbVotes:</p> {movie.imdbVotes}</p>
        </div>
      </div>
    );
  }
};
