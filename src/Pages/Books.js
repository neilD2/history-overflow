import React, { Component } from 'react';
import BookSearchContainer from '../Books/BookSearchContainer'
import MyBookList from '../Books/MyBookList'

class Books extends Component {
    render() {
        return (
            <div className="container-fluid">
            <p>
                Here we have a top ten of historical Books list. Please use our search feature to search over 10,000 historical
                books by era, historical figures, etc.
            </p>

                <br/>
                <div className="movieSearch">
                    <p>
                        Search for your favourite History book, and vote for it for your favorite to add to our site's top list
                    </p>
                    <BookSearchContainer visualMediaType='book'/>
                </div>
                <br/>
                <br/>

                <details className="myMovieList">
                    <summary>See our site user's favourite history books</summary>
                    <MyBookList visualMediaType='book' titleName='title' />
                </details>
            </div>
        );
    }
}

export default Books;
