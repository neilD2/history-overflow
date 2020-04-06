import React from "react";
import fetch from "cross-fetch";
import MovieTvVoteAction from './MovieTvVoteAction';
import axios from 'axios';
import amazonLogo from '../Assets/img/amazon.jpg';
import MovieTvTrailer from './MovieTvTrailer';

import MediaContainer from '../Components/MediaContainer'

const iframe = "//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=tf_til&ad_type=product_link&tracking_id=ndickens-21&marketplace=amazon&region=GB&placement=B0791W7G51&asins=B0791W7G51&linkId=a7e3633f6e0afb57dcc25fa875fef502&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"

export default class MyMovieList extends React.Component {

    constructor() {
        super();
        this.state = { myMovies:[]
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
            <div>
                {this.state.myMovies.map((obj, i) =>
                  MediaContainer(obj,'', i)
                )}
            </div>
        )}
    }

