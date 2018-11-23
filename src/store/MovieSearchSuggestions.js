import React from 'react';
import MovieVoteAction from './MovieVoteAction';
import amazonLogo from '../Assets/img/amazon.jpg';
import MovieTrailer from './MovieTrailer';
import MovieReviews from './MovieReviews';

const Suggestions = (props) => {
    const options = props.results.map(r => (
        <div key={r.id}>
    {(r.genre_ids.includes(36)) &&
    <div key={r.id}>
    <h1>Title: {r.title} </h1>
              <h2>Overview: {r.overview} </h2>
              <img src={"https://image.tmdb.org/t/p/w500" + r.poster_path}/>
              <MovieTrailer movieTitle={r.title}/>
              <MovieVoteAction movieTitle={r.title} movieOverview={r.overview} moviePoster={r.poster_path}/>
              <a href={`https://www.amazon.co.uk/gp/search?ie=UTF8&tag=ndickens-21&linkCode=ur2&linkId=9f95c4cc281e9f0c864e20dde00ea890&camp=1634&creative=6738&keywords=${r.title}`} target="_blank">
                  <img style={{ width:"150px", height:"50px", marginLeft:'-11px', marginTop:'11px', borderRadius: '5px'}}
                       src={amazonLogo}>
                  </img>
              </a>
        <MovieReviews/>
    </div>
    }
        </div>
    ))
    return <div>{options}</div>

}

export default Suggestions