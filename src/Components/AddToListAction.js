import React, { Component } from 'react';
import MyLists from '../Pages/MyLists';
import { connect } from "react-redux";
import { addFavourites,removeFavourites,addFavouriteItems,removeFavouriteItems } from "../redux/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addFavourites: favourite => dispatch(addFavourites(favourite)),
    removeFavourites: favourite => dispatch(removeFavourites(favourite)),
    addFavouriteItems: favourite => dispatch(addFavouriteItems(favourite)),
    removeFavouriteItems: favourite => dispatch(removeFavouriteItems(favourite))
  };
}

const select = state => {
  return {
    favourites: state.favourites,
    favouriteItems: state.favouriteItems
  };
};

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: props.favourites,
      favouriteItems: props
    };
    this.onAddFavourite = this.onAddFavourite.bind(this)
    this.onRemoveFavourite = this.onRemoveFavourite.bind(this);
  }

  onAddFavourite(movieTitle) {
    this.props.addFavourites( movieTitle );
    this.props.addFavouriteItems( this.props );
  }

  onRemoveFavourite(movieTitle) {
    this.props.removeFavouriteItems( this.props );
    this.props.removeFavourites( movieTitle );
  }

  render() {

    return (
      <button
        type="button"
        className={this.props.favourites.includes(this.props.movieTitle) ? "starIcon btn btn-info selected" : "starIcon btn btn-info"}
        onClick={() => this.props.favourites.includes(this.props.movieTitle) ? this.onRemoveFavourite(this.props.movieTitle) : this.onAddFavourite(this.props.movieTitle) }
      >
        {this.props.favourites.includes(this.props.movieTitle) ? "Remove Favourite" : "Add Favourite"}
        <i
          className="fa fa-star-o"
          style={this.props.favourites.includes(this.props.movieTitle) ? { color: 'yellow', fontWeight: 'bold' } : { } }
        />
        </button>
    )

    }
}

const AddToListAction = connect(
  select,
  mapDispatchToProps
)(ConnectedForm);

export default AddToListAction;
