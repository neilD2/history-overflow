import React from "react";
import axios from 'axios';
import Suggestions from './BookSearchSuggestions';

class BookSearchContainer extends React.Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}+subject:history&key=AIzaSyB0ybtQtX4CcyL3DkXyo0brl-b5EfLLXKI`)
            .then(({ data }) => {
                this.setState({
                    results: data.items
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
                <Suggestions results={this.state.results} visualMediaType={this.props.visualMediaType} />
            </form>
        )
    }


}

export default BookSearchContainer
