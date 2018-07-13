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
                    <summary>See Top 20 History movies trending on IMDB</summary>
                    <MovieList/>
                </details>
            <br/>
                <details className="movieList">
                    <summary>See my personal favourite Top 20 History movies</summary>
                    <MyMovieList/>
                </details>
             <br/>
                <div className="movieSearch">
                <p>
                    Search for your favourite History movie, and vote for it
                </p>
                <MovieSearchContainer/>
                </div>
                <br/>
                <br/>

                <details className="myMovieList">
                    <summary>See site users favourite history movies</summary>
                    <MovieList/>
                </details>
            </div>

        );
    }
}

export default Films;
