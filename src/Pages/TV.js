import React, { Component } from 'react';
import MovieTvList from '../FilmTv/MovieTvList';
import MyMovieTvList from '../FilmTv/MyMovieTvList'
import MovieTvSearchContainer from '../FilmTv/MovieTvSearchContainer'

class Tv extends Component {

    render() {
        return (
            <div className="container">
              <h1> TV </h1>
              <div>
                <p>
                    Here we have a top ten of historical tv show list. Please use our search feature to search over 10,000 historical
                    tv shows by era, historical figures, etc.
                </p>
              </div>
              <div className="detailsContainer">
                <details className="movieList">
                    <summary>See top History show list here</summary>
                  <MovieTvList visualMediaType='tv' titleName='name'/>
                </details>
              </div>

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
              <div>

                <details className="myMovieList">
                  <summary>See our favourite history tv shows</summary>
                    <MyMovieTvList visualMediaType='tv' titleName='name' />
                </details>
              </div>

            </div>

        );
    }
}

export default Tv;
