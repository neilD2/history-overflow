import React from 'react';
import MovieVoteAction from './MovieVoteAction';

const Suggestions = (props) => {
    const options = props.results.map(r => (
        <div>
    {(r.genre_ids.includes(36)) &&
          <li key={r.id}>Title: {r.title} <br/>
              Overview: {r.overview}
              <br/>
              <img src={"https://image.tmdb.org/t/p/w500" + r.poster_path}/>
              <MovieVoteAction movieId={r.id}/>
          </li>
    }
        </div>
    ))
    return <ul>{options}</ul>

}

export default Suggestions