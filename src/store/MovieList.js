import React from "react";
import fetch from "cross-fetch";


export default class MovieList extends React.Component {
    constructor() {
        super();
        this.state = { movies: [] }
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_TMDB_HOST}/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&with_genres=36&page=1`)
            .then( res => res.json())
            .then( result => result.results)
            .then( movies => this.setState({ movies}))
    }

    render() {
        return (
            <ul>
                {this.state.movies.map(({ title, overview, poster_path, id }) =>
                    <li key={id}>Title: {title} <br/>
                    Overview: {overview}
                    <br/>
                    <img src={"https://image.tmdb.org/t/p/w500" + poster_path} />
                    </li>

                )}
            </ul>
        );
    }
}