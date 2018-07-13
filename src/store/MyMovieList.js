import React from "react";
import fetch from "cross-fetch";

export default class MyMovieList extends React.Component {
    constructor() {
        super();
        this.state = { myMovies: [] }
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_TMDB_HOST}/3/list/78741?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then( res => res.json())
            .then( result => result.items)
            .then( myMovies => this.setState({ myMovies}))
    }

    render() {
        return (
            <ul>
                {this.state.myMovies.map(({ title, overview, poster_path, id }) =>
                    <li  key={id}>Title: {title} <br/>
                        Overview: {overview}
                        <br/>
                        <img src={"https://image.tmdb.org/t/p/w500"+poster_path} />
                    </li>
                )}
            </ul>
        );
    }
}