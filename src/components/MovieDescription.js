export default (props) => {
      console.log(props)
      return(
      <div>
            <div className='info-card-movie'>
                  <img src={props.movie.Poster}/>
                  <p className='card-description-title'>{props.movie.Title}</p>
                  <p className='card-description-all'>{props.movie.Plot}</p>
                  <p className='card-description-all'><p className='card-title-text'>Actors:</p> {props.movie.Actors}</p>
                  <p className='card-description-all'><p className='card-title-text'>Awords:</p> {props.movie.Awords}</p>
                  <p className='card-description-all'><p className='card-title-text'>Country:</p> {props.movie.Country}</p>
                  <p className='card-description-all'><p className='card-title-text'>Genre:</p> {props.movie.Genre}</p>
                  <p className='card-description-all'><p className='card-title-text'>Language: </p>{props.movie.Language}</p>
                  <p className='card-description-all'><p className='card-title-text'>Director:</p> {props.movie.Director}</p>   
                  <p className='card-description-all'><p className='card-title-text'>Box office:</p> {props.movie.BoxOffice}</p>
                  <p className='card-description-all'><p className='card-title-text'>Production:</p> {props.movie.Production}</p>
                  <p className='card-description-all'><p className='card-title-text'>Relesed:</p> {props.movie.Released}</p>
                  <p className='card-description-all'><p className='card-title-text'>Writer:</p> {props.movie.Writer}</p>
                  <p className='card-description-all'><p className='card-title-text'>DVD: </p>{props.movie.DVD}</p>
                  <p className='card-description-all'><p className='card-title-text'>Metascore:</p> {props.movie.Metascore}</p>
                  <p className='card-description-all'><p className='card-title-text'>Rated:</p> {props.movie.Rated}</p>
                  <p className='card-description-all'><p className='card-title-text'>Runtime:</p> {props.movie.Runtime}</p>
                  <p className='card-description-all'><p className='card-title-text'>Type:</p> {props.movie.Type}</p>
                  <p className='card-description-all'><p className='card-title-text'>Website:</p> {props.movie.Website}</p>
                  <p className='card-description-all'><p className='card-title-text'>imdbRating:</p> {props.movie.imdbRating}</p>
                  <p className='card-description-all'><p className='card-title-text'>imdbVotes:</p> {props.movie.imdbVotes}</p>
            </div>
      </div>
     
      )
}