import React, { Component } from 'react';
import TvList from '../store/TvList';

class TV extends Component {

    render() {
        return (
            <div className="container-fluid">
            <p>
                Here you can see the most popular TV programs trending
            </p>
                <details className="movieList">
                    <summary>See Top 20 TV shows trending on TMDB</summary>
                    <TvList/>
                </details>
            </div>

        );
    }
}

export default TV;
