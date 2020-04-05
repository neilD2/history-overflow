import React from 'react';
import MovieTvVoteAction from './MovieTvVoteAction';
import amazonLogo from '../Assets/img/amazon.jpg';
import MovieTvTrailer from './MovieTvTrailer';

const Suggestions = (props) => {

    // needed as TV has different title / name to movies
    const title = props.titleName;

    const films = []

    props.results.forEach(r => {

        if(r.genre_ids.includes(36) || r.genre_ids.includes(99) || r.genre_ids.includes(10768) || r.genre_ids.includes(10752)) {
            films.push(r)
            films.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
        }
    });

    const options = films.map(r => (
      <div key={r.id} className="itemContainer">
          <h1>Title: {r[title]} </h1>
          <h2>Overview: {r.overview} </h2>
          <img src={"https://image.tmdb.org/t/p/w500" + r.poster_path}/>
          <MovieTvTrailer movieTitle={r[title]}/>
          <div className="review">rating: <span className="score">{r.vote_average}</span></div>
          <MovieTvVoteAction movieTitle={r[title]} movieOverview={r.overview} moviePoster={r.poster_path} movieScore={r.vote_average} visualMediaType={props.visualMediaType}/>
          <a href={`https://www.amazon.co.uk/s/ref=as_li_ss_tl?url=search-alias=aps&field-keywords=braveheart&rh=i:aps,k:${r.title}&linkCode=ll2&tag=ndickens-21&linkId=164959695330c7d152d27a1247988585&language=en_GB`} target="_blank">
              <img style={{ width:"150px", height:"50px", marginLeft:'-11px', marginTop:'11px', borderRadius: '5px'}}
                   src={amazonLogo}>
              </img>
          </a>
      </div>
    ))
    return <div>{options}</div>

}

export default Suggestions
