import React from "react";
import fetch from "cross-fetch";
import amazonLogo from '../Assets/img/amazon.jpg';

export default class MovieList extends React.Component {
    constructor() {
        super();
        this.state = { movies: [] }
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_TMDB_HOST}/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&with_genres=36&page=1`)
            .then( res => res.json())
            .then( result => result.results)
            .then( movies => this.setState({ movies}))
    }

    render() {
        return (
            <ul>
                {this.state.movies.map(({ name, overview, poster_path, id }) =>
                    <li key={id}>Title: {name} <br/>
                    Overview: {overview}
                    <br/>
                    <img src={"https://image.tmdb.org/t/p/w500" + poster_path} />
                    </li>
                )}
            </ul>
        );
    }
}