import React, { Component } from 'react';
import MovieList from '../store/MovieList';
import MyMovieList from '../store/MyMovieList'
import MovieSearchContainer from '../store/MovieSearchContainer'

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
                    <MovieList/>
                </details>
            <br/>
             <br/>
                <div className="movieSearch">
                <p>
                    Search for your favourite History movie, and vote for it for your favorite to add to our site's top list
                </p>
                <MovieSearchContainer/>
                </div>
                <br/>
                <br/>

                <details className="myMovieList">
                    <summary>See our site user's favourite history movies</summary>
                    <MyMovieList/>
                </details>
            </div>

        );
    }
}

export default Films;
