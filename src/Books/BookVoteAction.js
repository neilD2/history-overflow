import React from 'react';
import axios from 'axios';

export default class BookVoteAction extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        axios.get(`/${this.props.visualMediaType}s.json?orderBy="bookTitle"&equalTo="${this.props.bookTitle}"`)
            .catch(error => console.log(error))
            // if movie title is not found, add it
            .then(res => {if(Object.keys(res.data).length===0){
                axios.post(`/${this.props.visualMediaType}s.json`, {"bookTitle":this.props.bookTitle,"bookOverview":this.props.bookOverview,"bookPoster":this.props.bookPoster,"bookScore":this.props.bookScore,"vote_count":1})
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
            <div className="vote">
            <button type="button" className="btn btn-info" data={this.props} onClick={this.handleClick}>vote for this {this.props.visualMediaType}</button>
            </div>
        )
    }

}
