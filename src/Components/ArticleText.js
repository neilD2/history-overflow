import React, { Component } from 'react'

class ArticleText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.showHide = this.showHide.bind(this)
  }

  showHide() {
    this.setState({ expanded: !expanded })
  }

  render() {
    let expanded = this.state.expanded;
    const toggledClass = expanded ? 'expanded' : 'collapsed';

    return (
      <div className="articleText">
        <div style={{marginTop: "10px"}} className={`articleContent ${toggledClass}`}>
          {this.props.bodyText}
        </div>
        <span style={{color: "white"}} onClick={() => this.setState({ expanded: !expanded })}>
  {expanded ? '- View Less' : '+ View More'}
    </span>
      </div>
    )

  }
}

export default ArticleText


