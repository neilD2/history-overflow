import React from 'react'
import MovieTvList from '../FilmTv/MovieTvList'
import MyMovieTvList from '../FilmTv/MyMovieTvList'
import MovieTvSearchContainer from '../FilmTv/MovieTvSearchContainer'

const FilmsAndTv = (props) => {

  let pluralMovieText;
  let filmToMovieText;

  if(props.mediaType==='movie') {
    pluralMovieText = 'movies'
    filmToMovieText = 'Films'
  }

  return (
    <div className="container">
      <h1> {filmToMovieText ? filmToMovieText : props.mediaType} </h1>
      <div>
        <p>
          Here we have a top ten of historical {props.mediaType} list. Please use our search feature to search over 10,000
          historical {filmToMovieText ? filmToMovieText : props.mediaType}  by era, historical figures, etc.
        </p>
      </div>
      <div>
        <details className="movieList">
          <summary>See the top trending TMDB history {filmToMovieText ? filmToMovieText : props.mediaType}  here</summary>
          <MovieTvList visualMediaType={props.mediaType.toLowerCase()} titleName={props.titleName}/>
        </details>
      </div>
      <br/>
      <div>
        <details className="myMovieList">
          <summary>See our site users favourite history {filmToMovieText ? filmToMovieText : props.mediaType} </summary>
          <MyMovieTvList visualMediaType={props.mediaType.toLowerCase()} titleName={props.titleName}/>
        </details>
      </div>
      <br/>
      <div className="movieSearch">
        <p>
          Search for your favourite History {filmToMovieText ? filmToMovieText : props.mediaType} , and vote for it for your favorite to add to our site's top list
        </p>
        <MovieTvSearchContainer visualMediaType={props.mediaType.toLowerCase()} titleName={props.titleName}/>
      </div>
      <br/>
      <br/>
    </div>
  )
}

export default FilmsAndTv
