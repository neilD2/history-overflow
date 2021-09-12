import MovieTvVoteAction from '../FilmTv/MovieTvVoteAction'
import amazonLogo from '../Assets/img/amazon.jpg'
import MovieTvTrailer from '../FilmTv/MovieTvTrailer'
import AddToListAction from '../Components/AddToListAction'
import React from 'react'

const MediaContainer = (props, titleName, i) => {

  const movieTitle = props.movieTitle || props[titleName]
  const movieOverview = props.movieOverview || props.overview
  const moviePoster = props.moviePoster || props.poster_path
  const movieScore = props.movieScore || props.vote_average

 return (
  <div key={i} className="itemContainer">
    <div className="displayFlexSpaceBetween">
    <h1>Title: {movieTitle} </h1>
    <AddToListAction movieTitle={movieTitle} movieOverview={movieOverview}
                       moviePoster={moviePoster} movieScore={movieScore}
                       visualMediaType='movie'/>
    </div>
    <h2>Overview: {movieOverview} </h2>
    {props.vote_count && <h2>Vote Count: {props.vote_count} </h2>}
    <div className="displayFlexSpaceBetween">
      <img className="movieTvImage" src={"https://image.tmdb.org/t/p/w500" + moviePoster}/>
      <div className="review">
        <span style={{ verticalAlign: "super" }}>rating: </span>
        <span className="score">{movieScore}<span className="scoreMax">/10</span></span></div>
    </div>
    <div className="vote-and-amazon-container displayFlexSpaceBetween">
      <MovieTvVoteAction movieTitle={movieTitle} movieOverview={movieOverview}
                         moviePoster={moviePoster} movieScore={movieScore}
                         visualMediaType='movie'/>
      <div className="amazon-link">
        <a
          href={`https://www.amazon.co.uk/gp/search?ie=UTF8&tag=ndickens-21&linkCode=ur2&linkId=9f95c4cc281e9f0c864e20dde00ea890&camp=1634&creative=6738&keywords=${movieTitle}`}
          target="_blank">
          <img
               src={amazonLogo}>
          </img>
        </a>
      </div>
    </div>

    <MovieTvTrailer movieTitle={movieTitle}/>
  </div>
 )
}

export default MediaContainer
