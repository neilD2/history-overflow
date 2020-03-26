import React from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB0ybtQtX4CcyL3DkXyo0brl-b5EfLLXKI';

export default class MovieTvTrailer extends React.Component{

    constructor(props){
        super(props);
        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.handleHideClick = this.handleHideClick.bind(this);
        this.state = {
            selectedVideo: null
        };
    }

    handleExpandClick() {
        <div>{this.props.movieTitle}</div>
        YTSearch({key: API_KEY, term: this.props.movieTitle + ' trailer'}, (videos) => {
            this.setState({
                selectedVideo: videos[0]
            });
        });
    }

    handleHideClick() {
        this.setState({
            selectedVideo: null
        });
    }

    render() {
        if (!this.state.selectedVideo) {
            return (
              <div className="video-detail">
                  <details className="movieList">
                      <summary data={this.props} onClick={this.handleExpandClick}>Show trailer</summary>
                  </details>
              </div>
            )
        }

        const videoId = this.state.selectedVideo.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail">
                <details className="movieList">
                    <summary onClick={this.handleHideClick}>Hide trailer</summary>
                </details>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <div>{this.state.selectedVideo.snippet.title}</div>
                    <div>{this.state.selectedVideo.snippet.description}</div>
                </div>
            </div>
        )
    }
}
