import React from "react";
import fetch from "cross-fetch";
import MovieVoteAction from './MovieVoteAction';
import amazonLogo from '../Assets/img/amazon.jpg';

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
                        <MovieVoteAction movieTitle={title} movieOverview={overview} moviePoster={poster_path}/>
                        <a href={`https://www.amazon.co.uk/gp/search?ie=UTF8&tag=ndickens-21&linkCode=ur2&linkId=9f95c4cc281e9f0c864e20dde00ea890&camp=1634&creative=6738&keywords=${title}`} target="_blank">
                            <img style={{ width:"150px", height:"50px", marginLeft:'-11px', marginTop:'11px', borderRadius: '5px'}}
                                 src={amazonLogo}>
                            </img>
                        </a>
                    </li>

                )}
            </ul>
        );
    }
}