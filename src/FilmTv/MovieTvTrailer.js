import React from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB0ybtQtX4CcyL3DkXyo0brl-b5EfLLXKI';

export default class MovieTvTrailer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedVideo: null
        };
    }

    componentDidMount() {

        YTSearch({key: API_KEY, term: this.props.movieTitle + 'trailer'}, (videos) => {
            this.setState({
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        if (!this.state.selectedVideo) {
            return <div>Loading...</div>
        }

        const videoId = this.state.selectedVideo.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail">
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
