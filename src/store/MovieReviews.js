import React from 'react';
import axios from 'axios';

//import MovieAuthenticate from './MovieAuthenticate'

export default class MovieReviews extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            rating: ''
        }

        this.getRtReview();
    }

    getRtReview = () => {
        axios.get('https://www.rottentomatoes.com/m/first_man/')
            .then(({ data }) => {

            console.log('review>>>', data)
                this.setState({
                    rating: data
                })
            })
    }

    render(){
        
        return(
            <div className="reviews">
                { this.state.rating }
            </div>
        )
    }

}
