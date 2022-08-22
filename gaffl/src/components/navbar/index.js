import React from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './nav';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require('../../images/logo.png')} alt='logo' />
        </NavLink> 
        <Bars />
        <NavMenu>
          <NavLink to='/Start-trip' activeStyle>
            Start Trip
          </NavLink>
          <NavLink to='/Discover'  activeStyle>
            Discover
            
          </NavLink>
          <NavLink to='/Message' activeStyle>
            Message
          </NavLink>
          <NavLink to='/Like' activeStyle>
            Likes
          </NavLink>
          <NavLink to='/View' activeStyle>
            Views
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/get-unlimited'>Get Unlimited</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;