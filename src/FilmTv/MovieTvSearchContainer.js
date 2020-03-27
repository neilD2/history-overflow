import React from "react";
import fetch from "cross-fetch";
import axios from 'axios';
import Suggestions from './MovieTvSearchSuggestions';

class MovieTvSearchContainer extends React.Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        axios.get(`${process.env.REACT_APP_TMDB_HOST}/3/search/${this.props.visualMediaType}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${this.state.query}`)
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
                <div className="box">
                    <div className="container-1">
                        <span className="icon"><i className="fa fa-search"></i></span>
                        <input
                          type="search"
                          id="search"
                          placeholder="Search..."
                          ref={input => this.search = input}
                          onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <Suggestions results={this.state.results} titleName={this.props.titleName} visualMediaType={this.props.visualMediaType} />
            </form>
        )
    }


}

export default MovieTvSearchContainer
