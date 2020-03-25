import React from "react";
import fetch from "cross-fetch";
import MovieTvVoteAction from './MovieTvVoteAction';
import MovieTvTrailer from './MovieTvTrailer';
import amazonLogo from '../Assets/img/amazon.jpg';

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
            <ul className="content">
                <p>Top 20 History shows / movies trending on TMDB, and vote for your favorite to add to our site's top list</p>
                {this.state.movies.map(
                    (obj) =>
                    <li key={obj.id}>
                        <h1>Title: {obj[titleName]} </h1>
                        <h2>Overview: {obj.overview} </h2>
                    <img src={"https://image.tmdb.org/t/p/w500" + obj.poster_path} />
                            <MovieTvTrailer movieTitle={obj[titleName]}/>
                        <div className="review">rating: <span className="score">{obj.vote_average}</span></div>
                        <MovieTvVoteAction movieTitle={obj[titleName]} movieOverview={obj.overview} moviePoster={obj.poster_path} movieScore={obj.vote_average} visualMediaType={this.props.visualMediaType}/>
                    <a href={`https://www.amazon.co.uk/gp/search?ie=UTF8&tag=ndickens-21&linkCode=ur2&linkId=9f95c4cc281e9f0c864e20dde00ea890&camp=1634&creative=6738&keywords=${obj[titleName]}`} target="_blank">
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
