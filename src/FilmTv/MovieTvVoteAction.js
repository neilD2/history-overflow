import React from 'react';
import axios from 'axios';
import { Button } from '../StyledComponents/StyledComponents'

export default class MovieTvVoteAction extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { clicked: false }
    }

    handleClick(){
        this.setState({
            clicked: true
        })
        axios.get(`/${this.props.visualMediaType}s.json?orderBy="movieTitle"&equalTo="${this.props.movieTitle}"`)
            .catch(error => console.log(error))
            // if movie title is not found, add it
            .then(res => {if(Object.keys(res.data).length===0){
                axios.post(`/${this.props.visualMediaType}s.json`, {"movieTitle":this.props.movieTitle,"movieOverview":this.props.movieOverview,"moviePoster":this.props.moviePoster,"movieScore":this.props.movieScore,"vote_count":1})
                        .then(res => console.log(res))
                        .catch(error => console.log(error))
                }else //else increment the vote count
                    {
                        axios.patch(`/${this.props.visualMediaType}s/`+Object.keys(res.data)[0]+'.json', {"vote_count":res.data[Object.keys(res.data)[0]].vote_count+1})
                            .then(res => console.log(res))
                            .catch(error => console.log(error))
                    }
            })
    }

    render(){
        return(
            <Button
              className="voteButton"
              data={this.props}
              disabled={this.state.clicked}
              onClick={this.handleClick}>vote for this {this.props.visualMediaType}</Button>
        )
    }

}
