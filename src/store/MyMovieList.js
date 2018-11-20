import React from "react";
import fetch from "cross-fetch";
import MovieVoteAction from './MovieVoteAction';
import axios from 'axios';
import amazonLogo from '../Assets/img/amazon.jpg';


const iframe = "//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=tf_til&ad_type=product_link&tracking_id=ndickens-21&marketplace=amazon&region=GB&placement=B0791W7G51&asins=B0791W7G51&linkId=a7e3633f6e0afb57dcc25fa875fef502&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"

export default class MyMovieList extends React.Component {

    constructor() {
        console.log(process.env.DB_HOST);
        super();
        this.state = { myMovies:[]
         }
    }

    componentDidMount() {

        axios.get('/movies.json?orderBy="vote_count"')
            .catch(error => console.log(error))
            .then( res => {

                let copy=[];
                Object.keys(res.data).forEach(key => {
                    copy.push(res.data[key])
                })
                this.setState({
                    myMovies:copy
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
            <ul>
                {this.state.myMovies.map(myMovie =>
                    <li  key={myMovie.movieTitle}>Title: {myMovie.movieTitle} <br/>
                        Overview: {myMovie.movieOverview}
                        <br/>
                        Vote Count: {myMovie.vote_count}
                        <br/>
                        <img src={"https://image.tmdb.org/t/p/w500"+myMovie.moviePoster} />
                        <MovieVoteAction movieTitle={myMovie.movieTitle} movieOverview={myMovie.movieOverview} moviePoster={myMovie.moviePoster}/>
                            <a href={`https://www.amazon.co.uk/gp/search?ie=UTF8&tag=ndickens-21&linkCode=ur2&linkId=9f95c4cc281e9f0c864e20dde00ea890&camp=1634&creative=6738&keywords=${myMovie.movieTitle}`} target="_blank">
                            <img style={{ width:"150px", height:"50px", marginLeft:'-11px', marginTop:'11px', borderRadius: '5px'}}
                                    src={amazonLogo}>
                            </img>
                                </a>
                    </li>
                )}
            </ul>
        );
    }
}