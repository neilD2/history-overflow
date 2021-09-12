import React from 'react'
import BookVoteAction from './BookVoteAction'
import amazonLogo from '../Assets/img/amazon.jpg'
import ArticleText from '../Components/ArticleText'
import AddToListAction from '../Components/AddToListAction'

const Suggestions = (props) => {
  let test
  const options = props.results.map(r => (
    <div className="itemContainer">
      <div key={r.id}>
        <div className="displayFlexSpaceBetween">
        <h1>Title: {r.volumeInfo.title} </h1>
        <AddToListAction title={r.volumeInfo.title} overview={r.volumeInfo.description}
                         poster={r.volumeInfo.imageLinks.thumbnail} score={r.volumeInfo.averageRating}
                         visualMediaType='movie'/>
        </div>
        <ArticleText bodyText={r.volumeInfo.description}/>
        <div className="displayFlexSpaceBetween">
        {(r.volumeInfo.imageLinks) &&
        <img className="searchBookImg" src={r.volumeInfo.imageLinks.thumbnail}/>
        }
          {
            r.volumeInfo.averageRating &&
            <div className="review">rating: <span className="score">{r.volumeInfo.averageRating}<span className="scoreMax">/5</span></span></div>
          }
        </div>
        <div className="vote-and-amazon-container displayFlexSpaceBetween">
        {(r.volumeInfo.imageLinks) &&
        <BookVoteAction bookTitle={r.volumeInfo.title} bookOverview={r.volumeInfo.description}
                        bookPoster={r.volumeInfo.imageLinks.thumbnail} bookScore={r.volumeInfo.averageRating}
                        visualMediaType={props.visualMediaType}/>
        }
        {(r.volumeInfo.industryIdentifiers) &&
        <div className="amazon-link">
        <a
          href={`https://www.amazon.co.uk/s/ref=as_li_ss_tl?url=search-alias=stripbooks&field-keywords=${r.volumeInfo.industryIdentifiers[0].identifier}&rh=n:266239,k:${r.volumeInfo.industryIdentifiers[0].identifier}&linkCode=ll2&tag=ndickens-21&linkId=d97ece0e54bcfbf840754fbc71f96453&language=en_GB${r.volumeInfo.industryIdentifiers[0].identifier}`}
          target="_blank">
          <img
               src={amazonLogo}>
          </img>
        </a>
        </div>
        }
        </div>
      </div>

    </div>
  ))

  return <div className="content bookResult">{options}</div>

}

export default Suggestions
