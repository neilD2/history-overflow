import React from 'react';
import axios from 'axios';

//import MovieAuthenticate from './MovieAuthenticate'

export default class MovieVoteAction extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("trying to add picture url");
        console.log("value of input field : "+ JSON.stringify(this.props));

        axios.get('/movies.json?orderBy="movieTitle"&equalTo="'+this.props.movieTitle+'"')
            .catch(error => console.log(error))
            // if movie title is not found, add it
            .then(res => {if(Object.keys(res.data).length===0){
                axios.post('/movies.json', {"movieTitle":this.props.movieTitle,"movieOverview":this.props.movieOverview,"moviePoster":this.props.moviePoster,"vote_count":1})
                        .then(res => console.log(res))
                        .catch(error => console.log(error))
                }else //else increment the vote count
                    {
                        axios.patch('/movies/'+Object.keys(res.data)[0]+'.json', {"vote_count":res.data[Object.keys(res.data)[0]].vote_count+1})
                            .then(res => console.log(res))
                            .catch(error => console.log(error))
                    }
            })



     //   <MovieAuthenticate/>;
    }

    render(){

        return(
            <div className="vote">
            <button type="button" className="btn btn-info" data={this.props} onClick={this.handleClick}>vote for this film</button>
            </div>
        )
    }

}
