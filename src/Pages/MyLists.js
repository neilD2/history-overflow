import React from "react";
import { connect } from "react-redux";
import AddToListAction from '../Components/AddToListAction'
import MovieTvVoteAction from '../FilmTv/MovieTvVoteAction'
import amazonLogo from '../Assets/img/amazon.jpg'
import MovieTvTrailer from '../FilmTv/MovieTvTrailer'
import MediaContainer from '../Components/MediaContainer'

const select = state => {
  console.log('state>', state)
  return { favourites: state.favourites };
};

const ConnectedList = ({ favourites }) => (
  <div className="container">
    <h1> My Lists </h1>
    <ul>
    {favourites.map((favourite, i) => (

      MediaContainer(favourite.favourites,'', i)

    ))}
    </ul>
  </div>

);

const MyLists = connect(select)(ConnectedList);

export default MyLists;
