import React, { Component } from 'react';

class MenuButton extends Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      color: this.props.color? this.props.color:'black',
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }

  handleClick(){
    this.setState({open:!this.state.open});
  }

  render(){
    const styles = {
      container: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      },
      line: {
        background: this.state.color,
        transition: 'all 0.2s ease',
      },
      lineTop: {
        transform: this.state.open ? 'rotate(45deg)':'none',
        transformOrigin: 'top left',
        marginBottom: '5px',
      },
      lineMiddle: {
        opacity: this.state.open ? 0: 1,
        transform: this.state.open ? 'translateX(-16px)':'none',
      },
      lineBottom: {
        transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
        transformOrigin: 'top left',
        marginTop: '5px',
      },
    }
    return(
      <div className="hamburgerIcon" style={styles.container}
           onClick={this.props.onClick ? this.props.onClick:
             ()=> {this.handleClick();}}>
        <div className={this.state.open ? "hamburgerIconLineOpen" : "hamburgerIconLine"} style={{...styles.line,...styles.lineTop}}/>
        <div className={this.state.open ? "hamburgerIconLineOpen" : "hamburgerIconLine"} style={{...styles.line,...styles.lineMiddle}}/>
        <div className={this.state.open ? "hamburgerIconLineOpen" : "hamburgerIconLine"} style={{...styles.line,...styles.lineBottom}}/>
      </div>
    )
  }
}

export default MenuButton;
