import React, { Component } from 'react';
import MyLists from '../Pages/MyLists';
import { connect } from "react-redux";
import { addFavourites,removeFavourites,addFavouriteItems,removeFavouriteItems } from "../redux/actions/index";
import { Button } from '../StyledComponents/StyledComponents'

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

  onAddFavourite(title) {
    this.props.addFavourites( title );
    this.props.addFavouriteItems( this.props );
  }

  onRemoveFavourite(title) {
    this.props.removeFavouriteItems( this.props );
    this.props.removeFavourites( title );
  }

  render() {

    return (
      <Button
        className={this.props.favourites.includes(this.props.title) ? "starIcon btn btn-info selected" : "starIcon btn btn-info"}
        onClick={() => this.props.favourites.includes(this.props.title) ? this.onRemoveFavourite(this.props.title) : this.onAddFavourite(this.props.title) }
      >
        <span className="add-to-fav-text">
        {this.props.favourites.includes(this.props.title) ? "Remove Favourite" : "Add Favourite"}
        </span>
        <i
          className="fa fa-star-o"
          style={this.props.favourites.includes(this.props.title) ? { color: 'yellow', fontWeight: 'bold' } : { } }
        />
        </Button>
    )

    }
}

const AddToListAction = connect(
  select,
  mapDispatchToProps
)(ConnectedForm);

export default AddToListAction;
