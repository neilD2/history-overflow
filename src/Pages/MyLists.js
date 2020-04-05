import React, { Component } from 'react';
import AddToListAction from '../Components/AddToListAction'
import MovieTvVoteAction from '../FilmTv/MovieTvVoteAction'
import amazonLogo from '../Assets/img/amazon.jpg'
import MovieTvTrailer from '../FilmTv/MovieTvTrailer'

let titleName = '';

class MyLists extends Component {
  constructor(props){
    super(props);
  }

    render() {
      titleName = this.props.titleName;

      var cookie = ("; "+document.cookie).split("; favourites_cookies=").pop().split(";").shift();

      var myObj = ("; "+document.cookie).split("; myObj=").pop().split(";").shift();

      console.log(cookie)
      console.log(JSON.parse(myObj))

      var objTwo = JSON.parse(myObj)

      console.log(objTwo.object)

      return (
            <div className="container">
                <h1> My Lists </h1>
            <p>
                    Your lists here stored in session cookies: download list, share list
            </p>
              <div className="content">
                {[objTwo.object].map(
                  (obj) =>
                    <div className="itemContainer" key={obj.id}>
                      <div className="displayFlexSpaceBetween">
                        <h1>Title: {obj[titleName]} </h1>
                        <AddToListAction object={obj}/>
                      </div>
                      <h2>Overview: {obj.overview} </h2>
                      <div className="displayFlexSpaceBetween">
                        <img src={"https://image.tmdb.org/t/p/w500" + obj.poster_path} />
                        <div className="review">
                          <span style={{ verticalAlign: "super"}}>rating: </span>
                          <span className="score">{obj.vote_average}<span style={{ fontSize:"14px"}}>/10</span></span></div>
                      </div>
                      <div className="displayFlexSpaceBetween">
                        <MovieTvVoteAction movieTitle={obj[titleName]} movieOverview={obj.overview} moviePoster={obj.poster_path} movieScore={obj.vote_average} visualMediaType={this.props.visualMediaType}/>
                        <div>
                          <a href={`https://www.amazon.co.uk/gp/search?ie=UTF8&tag=ndickens-21&linkCode=ur2&linkId=9f95c4cc281e9f0c864e20dde00ea890&camp=1634&creative=6738&keywords=${obj[titleName]}`} target="_blank">
                            <img style={{ width:"150px", height:"50px", marginLeft:'-11px', marginTop:'11px', borderRadius: '5px'}}
                                 src={amazonLogo}>
                            </img>
                          </a>
                        </div>
                      </div>
                      <MovieTvTrailer movieTitle={obj[titleName]}/>
                    </div>
                )}
              </div>
              );
            </div>
        );
    }
}

export default MyLists;
