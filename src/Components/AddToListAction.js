import React, { Component } from 'react';
import MyLists from '../Pages/MyLists';
import { connect } from "react-redux";
import { addFavourites } from "../redux/actions/index";
import { removeFavourites } from "../redux/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addFavourites: favourite => dispatch(addFavourites(favourite)),
    removeFavourites: favourite => dispatch(removeFavourites(favourite))
  };
}

const select = state => {
  return { favourites: state.favourites };
};

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: props.favourites
    };
    this.onAddFavourite = this.onAddFavourite.bind(this)
    this.onRemoveFavourite = this.onRemoveFavourite.bind(this);
  }

  onAddFavourite(movieTitle) {
    this.props.addFavourites( movieTitle );
  }

  onRemoveFavourite(movieTitle) {
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
