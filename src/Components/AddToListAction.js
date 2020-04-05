import React, { Component } from 'react';
import MyLists from '../Pages/MyLists';
const favourites = []

class AddToListAction extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Build the expiration date string:
    var expiration_date = new Date();
    var cookie_string = '';
    expiration_date.setFullYear(expiration_date.getFullYear() + 1);
// Build the set-cookie string:
    cookie_string = `favourites_cookies=${this.props}; path=/; expires=${expiration_date.toUTCString()};`
// Create or update the cookie:
    document.cookie = cookie_string;



      var e = 'Thu Nov 26 3017 15:44:38'; document.cookie = 'myObj='+ JSON.stringify(this.props) +';expires=' + e;

  }

  render() {
    return (
        <div className="starIcon" data={this.props} onClick={this.handleClick}>
          <span>Add to List </span>
          <i className="fa fa-star-o"></i>
        </div>
  );
  }
}

export default AddToListAction;
