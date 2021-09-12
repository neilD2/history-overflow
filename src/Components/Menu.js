import React, { Component } from 'react';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }

  render(){
    const styles={
      container: {
        position: 'fixed',
        top: 30,
        left: 0,
        height: this.state.open? '100%': 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: 'black',
        opacity: 0.95,
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 2,
      }
    }
    return(
      <div style={styles.container}>
        {
          this.state.open?
            <div className="menuList">
              {this.props.children}
            </div>:null
        }
      </div>
    )
  }
}

export default Menu;
