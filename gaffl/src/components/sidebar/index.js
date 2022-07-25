import React from 'react';
import {
  Side,
  NavLink,
  NavMenu,
} from './side';

const Sidebar = () => {
  return (
    <>
      <Side>
        <NavMenu>
          <NavLink to='/Start-trip' activeStyle>
            Start Trip
          </NavLink>
          <NavLink to='/Discover' activeStyle>
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
        
      </Side>
    </>
  );
};

export default Sidebar;