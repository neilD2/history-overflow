import React from "react";
import fetch from "cross-fetch";
import axios from 'axios';
import Suggestions from './MovieSearchSuggestions';

class MovieSearchContainer extends React.Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        axios.get(`${process.env.REACT_APP_TMDB_HOST}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=36&query=${this.state.query}`)
            .then(({ data }) => {
                this.setState({
                    results: data.results
                })
            })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            } else if (!this.state.query) {
            }
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <Suggestions results={this.state.results} />
            </form>
        )
    }


}

export default MovieSearchContainer