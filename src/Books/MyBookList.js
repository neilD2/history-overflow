import React from "react";
import fetch from "cross-fetch";
import BookVoteAction from './BookVoteAction';
import axios from 'axios';
import amazonLogo from '../Assets/img/amazon.jpg';
import AddToListAction from '../Components/AddToListAction'
import ArticleText from '../Components/ArticleText'

const iframe = "//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=tf_til&ad_type=product_link&tracking_id=ndickens-21&marketplace=amazon&region=GB&placement=B0791W7G51&asins=B0791W7G51&linkId=a7e3633f6e0afb57dcc25fa875fef502&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"

export default class MyBookList extends React.Component {

    constructor() {
        super();
        this.state = { myBooks:[]
         }
    }

    componentDidMount() {

        axios.get(`/${this.props.visualMediaType}s.json?orderBy="vote_count"`)
            .catch(error => console.log(error))
            .then( res => {

                let copy=[];
                Object.keys(res.data).forEach(key => {
                    copy.push(res.data[key])
                });

                copy.sort(function(a, b) {
                    return b.vote_count - a.vote_count;
                });

                this.setState({
                    myBooks:copy
                })
        })
    }

    iframe() {
        return {
            __html: this.props.iframe
        }
    }

    render() {

        return (
            <div className="content">
                {this.state.myBooks.map(({ bookTitle, bookPoster, bookOverview, bookScore, vote_average, vote_count }) =>
                    <div key={bookTitle} className="itemContainer">
                      <div className="displayFlexSpaceBetween">
                      <h1>Title: {bookTitle} </h1>
                      <AddToListAction title={bookTitle} overview={bookOverview}
                                       poster={bookPoster} score={bookScore}
                                       visualMediaType='movie'/>
                      </div>
                      <ArticleText bodyText={bookOverview}/>
                      <h2>Vote Count: {vote_count} </h2>
                      <div className="displayFlexSpaceBetween">
                      <img src={bookPoster} />
                      {
                        bookScore && <div className="review">rating: <span className="score" style={{ padding: 18 }}>{bookScore}</span></div>
                      }
                      </div>
                      <div className="vote-and-amazon-container displayFlexSpaceBetween">
                      <BookVoteAction bookTitle={bookTitle} bookOverview={bookOverview} bookPoster={bookPoster} bookScore={vote_average} visualMediaType={this.props.visualMediaType}/>
                      <div className="amazon-link">
                        <a href={`https://www.amazon.co.uk/gp/search?ie=UTF8&tag=ndickens-21&linkCode=ur2&linkId=9f95c4cc281e9f0c864e20dde00ea890&camp=1634&creative=6738&keywords=${bookTitle}`} target="_blank">
                            <img
                                    src={amazonLogo}>
                            </img>
                        </a>
                      </div>
                      </div>
                    </div>
                )}
            </div>
        );
    }
}
