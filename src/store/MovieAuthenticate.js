import React from "react";
import fetch from "cross-fetch";
import axios from 'axios';

/*function mapDispatchToProps(dispatch) {
    return {
        updatePost() {
            return dispatch(updatePost(id, props))
                .then(result => {
                    if (result.payload.response && result.payload.response.status !== 200) {
                        return dispatch(updatePostFailure(result.payload.response.data));
                    }
                    return dispatch(updatePostSuccess(result.payload.data));
                });
        }
    }
}*/

/*export default class MovieAuthenticate extends React.Component {
    constructor() {
        super();
        this.state = { request_token: '' }
    }

    render() {
        return(
/!*        console.log("here")
        axios.get(`${process.env.REACT_APP_TMDB_HOST}/3/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(({data}) => {
                this.setState({
                    request_token: data.request_token
                })
            })
            .then(this.openAuthWindow)
    )*!/
    }

    openAuthWindow() {
        console.log("check")
        window.open(`https://www.themoviedb.org/authenticate/${this.state.request_token}?redirect_to=http://www.historyoverflow.com/approved', 'sharer', 'toolbar=0,status=0,width=548,height=325`);
    }

}*/

