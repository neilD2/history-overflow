import React from 'react';
import MovieTvVoteAction from './MovieTvVoteAction';
import amazonLogo from '../Assets/img/amazon.jpg';
import MovieTvTrailer from './MovieTvTrailer';

const Suggestions = (props) => {

    const title = props.titleName;
    const options = props.results.map(r => (
        <div key={r.id}>
            {console.log('r>>',r)}
            {console.log('r name>>',r[title])}
            {console.log('r id>>',r.id)}

            {(r.genre_ids.includes(36) || r.genre_ids.includes(99) || r.genre_ids.includes(10768) ) &&
    <div key={r.id}>
    <h1>Title: {r[title]} </h1>
              <h2>Overview: {r.overview} </h2>
              <img src={"https://image.tmdb.org/t/p/w500" + r.poster_path}/>
              <MovieTvTrailer movieTitle={r[title]}/>
        <div className="review">rating: <span className="score">{r.vote_average}</span></div>
        <MovieTvVoteAction movieTitle={r[title]} movieOverview={r.overview} moviePoster={r.poster_path} movieScore={r.vote_average} visualMediaType={props.visualMediaType}/>
              <a href={`https://www.amazon.co.uk/s/ref=as_li_ss_tl?url=search-alias=aps&field-keywords=braveheart&rh=i:aps,k:${r[title]}&linkCode=ll2&tag=ndickens-21&linkId=164959695330c7d152d27a1247988585&language=en_GB`} target="_blank">
                  <img style={{ width:"150px", height:"50px", marginLeft:'-11px', marginTop:'11px', borderRadius: '5px'}}
                       src={amazonLogo}>
                  </img>
              </a>
    </div>
    }
        </div>
    ))
    return <div>{options}</div>

}

export default Suggestions