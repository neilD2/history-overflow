import React, { Component } from 'react';
import MovieTvList from '../FilmTv/MovieTvList';
import MyMovieTvList from '../FilmTv/MyMovieTvList'
import MovieTvSearchContainer from '../FilmTv/MovieTvSearchContainer'

class Films extends Component {

    render() {
        return (
            <div className="container">
              <h1> Films </h1>

              <div>
                <p>
                    Here we have a top ten of historical films list. Please use our search feature to search over 10,000 historical
                    films by era, historical figures, etc.
                </p>
              </div>
              <div>
                <details className="movieList">
                  <summary>See our favourite history movies here</summary>
                   <MovieTvList visualMediaType='movie' titleName='title'/>
                </details>
              </div>
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
              <div>
                <details className="myMovieList">
                    <summary>See our site users favourite history movies</summary>
                    <MyMovieTvList visualMediaType='movie' titleName='title' />
                </details>
              </div>
            </div>

        );
    }
}

export default Films;
