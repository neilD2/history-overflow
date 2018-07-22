import React from "react";
import fetch from "cross-fetch";
import MovieVoteAction from './MovieVoteAction';
import axios from 'axios';

export default class MyMovieList extends React.Component {

    constructor() {
        console.log(process.env.DB_HOST);
        super();
        this.state = { myMovies:[]
         }
    }

    componentDidMount() {

        axios.get('/movies.json?orderBy="vote_count"')
            .catch(error => console.log(error))
            .then( res => {

                let copy=[];
                Object.keys(res.data).forEach(key => {
                    console.log( "ooo ",res.data[key] );
                    copy.push(res.data[key])
                })
                this.setState({
                    myMovies:copy
                })
        })
    }

    render() {
        return (
            <ul>
                {console.log(">>>",this.state)}
                {this.state.myMovies.map(myMovie =>
                    <li  key={myMovie.movieTitle}>Title: {myMovie.movieTitle} <br/>
                        Overview: {myMovie.movieOverview}
                        <br/>
                        <img src={"https://image.tmdb.org/t/p/w500"+myMovie.moviePoster} />
                        <MovieVoteAction movieTitle={myMovie.movieTitle} movieOverview={myMovie.movieOverview} moviePoster={myMovie.moviePoster}/>
                    </li>
                )}
            </ul>
        );
    }
}