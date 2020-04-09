import React from "react";
import { connect } from "react-redux";
import AddToListAction from '../Components/AddToListAction'
import MovieTvVoteAction from '../FilmTv/MovieTvVoteAction'
import amazonLogo from '../Assets/img/amazon.jpg'
import MovieTvTrailer from '../FilmTv/MovieTvTrailer'
import MediaContainer from '../Components/MediaContainer'

const select = state => {
  return { favouriteItems: state.favouriteItems };
};

const ConnectedList = ({ favouriteItems }) => (
  <div className="container">
    <h1> My Lists </h1>
    <p>List of your Favourite items</p>
    <button
      type="button"
      className="btn btn-info"
    >save list</button>
    <button
      type="button"
      className="btn btn-info"
    >share list</button>
    <div>
      <ul>
      {favouriteItems.map((favourite, i) => (

        MediaContainer(favourite,'', i)

      ))}
      </ul>
    </div>
  </div>

);

const MyLists = connect(select)(ConnectedList);

export default MyLists;
