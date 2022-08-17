import React from 'react';
import { FaGlobeAmericas, FaBed, FaStar, FaHiking, FaPlaneDeparture  } from "react-icons/fa";


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
          <NavLink to='/Discover'  activeStyle >
            <FaGlobeAmericas size={'3em'} color= {'#b3273d'}/>
             Discover
          </NavLink>
          <NavLink to='/' activeStyle>
            <FaBed  size={'3em'} color= {'#b3273d'}/>
            Stays
          </NavLink>
          <NavLink to='/' activeStyle>
            <FaPlaneDeparture  size={'3em'} color= {'#b3273d'}/>
            Flights
          </NavLink>
          <NavLink to='/' activeStyle>
            <FaHiking  size={'3em'} color= {'#b3273d'}/>
            My Trips
          </NavLink>
          <NavLink to='/' activeStyle>
            <FaStar  size={'3em'} color= {'#b3273d'}/>
            Unlimited
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
         
        </NavMenu>
        
      </Side>
    </>
  );
};

export default Sidebar;