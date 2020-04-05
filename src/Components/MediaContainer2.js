import MovieTvVoteAction from '../FilmTv/MovieTvVoteAction'
import amazonLogo from '../Assets/img/amazon.jpg'
import MovieTvTrailer from '../FilmTv/MovieTvTrailer'
import React from 'react'
import AddToListAction from './AddToListAction'

const MediaContainer2 = (props, titleName, visualMediaType) => {

  return (
   <div className="itemContainer" key={props.id}>
     <div className="displayFlexSpaceBetween">
       <h1>Title: {props[titleName]} </h1>
       <AddToListAction object={props}/>
     </div>
     <h2>Overview: {props.overview} </h2>
     <div className="displayFlexSpaceBetween">
       <img src={"https://image.tmdb.org/t/p/w500" + props.poster_path} />
       <div className="review">
         <span style={{ verticalAlign: "super"}}>rating: </span>
         <span className="score">{props.vote_average}<span style={{ fontSize:"14px"}}>/10</span></span></div>
     </div>
     <div className="displayFlexSpaceBetween">
       <MovieTvVoteAction movieTitle={props[titleName]} movieOverview={props.overview} moviePoster={props.poster_path} movieScore={props.vote_average} visualMediaType={visualMediaType}/>
       <div>
         <a href={`https://www.amazon.co.uk/gp/search?ie=UTF8&tag=ndickens-21&linkCode=ur2&linkId=9f95c4cc281e9f0c864e20dde00ea890&camp=1634&creative=6738&keywords=${props[titleName]}`} target="_blank">
           <img style={{ width:"150px", height:"50px", marginLeft:'-11px', marginTop:'11px', borderRadius: '5px'}}
                src={amazonLogo}>
           </img>
         </a>
       </div>
     </div>
     <MovieTvTrailer movieTitle={props[titleName]}/>
   </div>
 )
}

export default MediaContainer2
