import React from 'react';
import MovieTvVoteAction from '../FilmTv/MovieTvVoteAction';
import amazonLogo from '../Assets/img/amazon.jpg';
import MovieTvTrailer from '../FilmTv/MovieTvTrailer';

const Suggestions = (props) => {

    const options = props.results.map(r => (
        <div key={r.id}>
            {console.log('r>>',r)}
    <h1>Title: {r.volumeInfo.title} </h1>
            <h2>Overview: {r.volumeInfo.description} </h2>
            {(r.volumeInfo.imageLinks) &&
            <img src={r.volumeInfo.imageLinks.thumbnail}/>
            }
        </div>
    ))

    return <div>{options}</div>

}

export default Suggestions;