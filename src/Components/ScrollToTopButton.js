import React, { Component } from 'react';

class ScrollToTopButton extends Component {

  scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  render() {
    return (
      <button onClick={this.scrollToTop} id="myBtn" title="Go to top">
        <span className="icon">
          <i className="fa fa-arrow-up"></i>
        </span>
      </button>
    );
  }
}

export default ScrollToTopButton;
