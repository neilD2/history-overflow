import MovieTvVoteAction from '../FilmTv/MovieTvVoteAction'
import amazonLogo from '../Assets/img/amazon.jpg'
import MovieTvTrailer from '../FilmTv/MovieTvTrailer'
import React from 'react'

const MediaContainer = (props) => {
 return (
  <div key={props.movieTitle} className="itemContainer">
    <h1>Title: {props.movieTitle} </h1>
    <h2>Overview: {props.movieOverview} </h2>
    <h2>Vote Count: {props.vote_count} </h2>
    <div className="displayFlexSpaceBetween">
      <img src={"https://image.tmdb.org/t/p/w500" + props.moviePoster}/>
      <div className="review">

        <span style={{ verticalAlign: "super" }}>rating: </span>
        <span className="score">{props.movieScore}<span style={{ fontSize: "14px" }}>/10</span></span></div>
    </div>
    <div className="displayFlexSpaceBetween">
      <MovieTvVoteAction movieTitle={props.movieTitle} movieOverview={props.movieOverview}
                         moviePoster={props.moviePoster} movieScore={props.vote_average}
                         visualMediaType='movie'/>
      <div>
        <a
          href={`https://www.amazon.co.uk/gp/search?ie=UTF8&tag=ndickens-21&linkCode=ur2&linkId=9f95c4cc281e9f0c864e20dde00ea890&camp=1634&creative=6738&keywords=${props.movieTitle}`}
          target="_blank">
          <img style={{ width: "150px", height: "50px", marginLeft: '-11px', marginTop: '11px', borderRadius: '5px' }}
               src={amazonLogo}>
          </img>
        </a>
      </div>
    </div>

    <MovieTvTrailer movieTitle={props.movieTitle}/>
  </div>
 )
}

export default MediaContainer
