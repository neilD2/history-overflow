import React, { Component } from 'react';
import MovieTvList from '../FilmTv/MovieTvList';
import MyMovieTvList from '../FilmTv/MyMovieTvList'
import MovieTvSearchContainer from '../FilmTv/MovieTvSearchContainer'

class Films extends Component {

    render() {
        return (
            <div className="container-fluid">
            <p>
                Here we have a top ten of historical films list. Please use our search feature to search over 10,000 historical
                films by era, historical figures, etc.
            </p>
                <details className="movieList">
                    <summary>See Top 20 History movies trending on TMDB, and vote for your favorite to add to our site's top list</summary>
                    <MovieTvList visualMediaType='movie' titleName='title'/>
                </details>
            <br/>
             <br/>
                <div className="movieSearch">
                <p>
                    Search for your favourite History movie, and vote for it for your favorite to add to our site's top list
                </p>
                <MovieTvSearchContainer visualMediaType='movie' titleName='title'/>
                </div>
                <br/>
                <br/>

                <details className="myMovieList">
                    <summary>See our site user's favourite history movies</summary>
                    <MyMovieTvList visualMediaType='movie' titleName='title' />
                </details>
            </div>

        );
    }
}

export default Films;
