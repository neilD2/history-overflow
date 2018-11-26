import React, { Component } from 'react';
import MovieTvList from '../FilmTv/MovieTvList';
import MyMovieTvList from '../FilmTv/MyMovieTvList'
import MovieTvSearchContainer from '../FilmTv/MovieTvSearchContainer'

class Tv extends Component {

    render() {
        return (
            <div className="container-fluid">
                <p>
                    Here we have a top ten of historical tv show list. Please use our search feature to search over 10,000 historical
                    tv shows by era, historical figures, etc.
                </p>
                <details className="movieList">
                    <summary>See Top 20 History tv shows trending on TMDB, and vote for your favorite to add to our site's top list</summary>
                    <MovieTvList visualMediaType='tv' titleName='name'/>
                </details>
                <br/>
                <br/>
                <div className="movieSearch">
                    <p>
                        Search for your favourite History tv show, and vote for it for your favorite to add to our site's top list
                    </p>
                    <MovieTvSearchContainer visualMediaType='tv' titleName='name'/>
                </div>
                <br/>
                <br/>

                <details className="myMovieList">
                    <summary>See our site user's favourite history tv shows</summary>
                    <MyMovieTvList visualMediaType='tv' titleName='name' />
                </details>
            </div>

        );
    }
}

export default Tv;
