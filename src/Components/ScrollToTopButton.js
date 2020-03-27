import React, { Component } from 'react';

class ScrollToTopButton extends Component {

  scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  render() {
    return (
      <button onClick={this.scrollToTop} id="myBtn" title="Go to top">&#8679;</button>
    );
  }
}

export default ScrollToTopButton;
