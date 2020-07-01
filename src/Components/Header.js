import React, { Component } from 'react';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';
import Menu from './Menu';
import myImage from '../Assets/img/logo.png';

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
        const menu = ['News','Podcasts','Films','TV','Books', 'Maps', 'MyLists', 'ContactUs']
        const menuItems = menu.map((val,index)=>{
            return (
              <MenuItem
                key={index}
                delay={`${index * 0.1}s`}
                onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
        });

        return(
          <div className="header">
              <div className="headerContainer">
                  <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
                  <div className="titleLogo"><a href="/">History Overflow</a></div>
                  <div className="logo">
                    <img src={myImage} alt="logo"/>
                  </div>
              </div>
              <Menu open={this.state.menuOpen}>
                  {menuItems}
              </Menu>
          </div>
        )
    }
}

export default Header;
