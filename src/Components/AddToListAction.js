import React, { Component } from 'react';
import MyLists from '../Pages/MyLists';
import { connect } from "react-redux";
import { addFavourites } from "../redux/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addFavourites: article => dispatch(addFavourites(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const favourites = this.props
    this.props.addFavourites({ favourites });
    this.setState({ favourites: favourites });
  }
  render() {
    const { favourites } = this.state;
    return (
      <button type="button" className="starIcon btn btn-info"
        onClick={this.handleSubmit}>
          Add To List
        <i className="fa fa-star-o"></i>
      </button>
    );
  }
}

const AddToListAction = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default AddToListAction;
