import React from "react";
import fetch from "cross-fetch";
import MovieTvVoteAction from './MovieTvVoteAction';
import MovieTvTrailer from './MovieTvTrailer';
import amazonLogo from '../Assets/img/amazon.jpg';
import AddToListAction from "../Components/AddToListAction"

import MediaContainer2 from '../Components/MediaContainer2'

let titleName = '';

export default class MovieTvList extends React.Component {
    constructor() {
        super();
        this.state = { movies: [] }
    }

    componentDidMount() {

        fetch(`${process.env.REACT_APP_TMDB_HOST}/3/discover/${this.props.visualMediaType}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&with_genres=36&page=1`)
            .then( res => res.json())
            .then( result => result.results)
            .then( movies => this.setState({ movies}))
    }


    render() {
        titleName = this.props.titleName;

        return (
            <div className="content">
                <p>Top 20 History shows / movies trending on TMDB, and vote for your favorite to add to our site's top list</p>
                {this.state.movies.map(
                    (obj) =>
                      MediaContainer2(obj, titleName, this.props.visualMediaType)
                )}
            </div>
        );
    }
}
