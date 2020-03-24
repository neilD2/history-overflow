import React, { Component } from 'react';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';
import Menu from './Menu';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            menuOpen:false,
        }
    }

    handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
    }

    handleLinkClick() {
        this.setState({menuOpen: false});
    }

    render(){
        const styles=
          {
              container:{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '52px',
                  zIndex: '99',
                  opacity: 0.9,
                  display:'flex',
                  alignItems:'center',
                  background: 'black',
                  width: '100%',
                  color: 'white',
                  fontFamily:'Lobster',
              },
              logo: {
                  margin: '0 auto',
                  fontSize: '32px'
              },
              body: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100vw',
                  height: '100vh',
                  filter: this.state.menuOpen ? 'blur(2px)':null,
                  transition: 'filter 0.5s ease',
              },
          }
        const menu = ['Films','TV','Podcasts','Books', 'Dates', 'Contact Us']
        const menuItems = menu.map((val,index)=>{
            return (
              <MenuItem
                key={index}
                delay={`${index * 0.1}s`}
                onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
        });

        return(
          <div className="header">
              <div style={styles.container}>
                  <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
                  <div style={styles.logo}><a href="/">History Overflow</a></div>
              </div>
              <Menu open={this.state.menuOpen}>
                  {menuItems}
              </Menu>
          </div>
        )
    }
}

export default Header;
