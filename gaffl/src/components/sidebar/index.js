import React from 'react';

import {
  Bars,
  Side,
  NavLink,
  NavMenu,
  
} from './side';

const Sidebar = () => {
  return (
    <>
      <Side>
        <NavMenu>
          <NavLink to='/Discover'  activeStyle >
          <Bars/>
             Discover
          </NavLink>
          <NavLink to='/' activeStyle>
            Stays
          </NavLink>
          <NavLink to='/' activeStyle>
            Flights
          </NavLink>
          <NavLink to='/' activeStyle>
            My Trips
          </NavLink>
          <NavLink to='/' activeStyle>
            Get Unlimited
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
         
        </NavMenu>
        
      </Side>
    </>
  );
};

export default Sidebar;