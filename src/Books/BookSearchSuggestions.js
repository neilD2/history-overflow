import React from 'react';
import BookVoteAction from './BookVoteAction';
import amazonLogo from '../Assets/img/amazon.jpg';

const Suggestions = (props) => {
    let test;
    const options = props.results.map(r => (
        <div key={r.id}>
    <h1>Title: {r.volumeInfo.title} </h1>
            <h2>Overview: {r.volumeInfo.description} </h2>
            {(r.volumeInfo.imageLinks) &&
            <img src={r.volumeInfo.imageLinks.thumbnail}/>
            }
            <div className="review">rating: <span className="score">{r.volumeInfo.averageRating}</span></div>
            {(r.volumeInfo.imageLinks) &&
            <BookVoteAction bookTitle={r.volumeInfo.title} bookOverview={r.volumeInfo.description} bookPoster={r.volumeInfo.imageLinks.thumbnail} bookScore={r.volumeInfo.averageRating} visualMediaType={props.visualMediaType}/>
            }
            {(r.volumeInfo.industryIdentifiers) &&
            <a href={`https://www.amazon.co.uk/s/ref=as_li_ss_tl?url=search-alias=stripbooks&field-keywords=${r.volumeInfo.industryIdentifiers[0].identifier}&rh=n:266239,k:${r.volumeInfo.industryIdentifiers[0].identifier}&linkCode=ll2&tag=ndickens-21&linkId=d97ece0e54bcfbf840754fbc71f96453&language=en_GB${r.volumeInfo.industryIdentifiers[0].identifier}`} target="_blank">
                <img style={{ width:"150px", height:"50px", marginLeft:'-11px', marginTop:'11px', borderRadius: '5px'}}
                     src={amazonLogo}>
                </img>
            </a>
            }
        </div>
    ))

    return <div className="bookResult">{options}</div>

}

export default Suggestions;