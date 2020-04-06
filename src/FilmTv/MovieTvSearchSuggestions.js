import React from 'react';
import MovieTvVoteAction from './MovieTvVoteAction';
import amazonLogo from '../Assets/img/amazon.jpg';
import MovieTvTrailer from './MovieTvTrailer';
import MediaContainer from '../Components/MediaContainer'

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

    const options = films.map((obj, i) => (
      MediaContainer(obj, title, i)
    ))
    return <div>{options}</div>

}

export default Suggestions
