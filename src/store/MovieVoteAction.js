import React from 'react'
//import MovieAuthenticate from './MovieAuthenticate'

export default class MovieVoteAction extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("trying to add picture url");
        console.log("value of input field : "+this.props.movieId);
     //   <MovieAuthenticate/>;
    }

    render(){
        return(
            <div className="vote">
            <input type="button" value="vote for this film" data={this.props.movieId} onClick={this.handleClick}/>
            </div>
        )
    }

}
