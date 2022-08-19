import React, { useState } from 'react';
import { FaGlobeAmericas, FaBed, FaStar, FaHiking, FaPlaneDeparture  } from "react-icons/fa";
import Searchbar  from '../searchbar';

import {
 
  Side,
  Button,
  NavMenu,
  
} from './side';



const Sidebar = () => {
  const[openPage, setOpen] = useState(false);
  return (
    <>
    
    <Side>
        <NavMenu>
          <Button onClick={() => setOpen(true)}  activeStyle >
            <FaGlobeAmericas size={'3em'} color= {'#b3273d'}/>
             Discover
          </Button>{openPage && <Searchbar/>}
          <Button  activeStyle>
            <FaBed  size={'3em'} color= {'#b3273d'}/>
            Stays
          </Button>
          <Button to='/' activeStyle>
            <FaPlaneDeparture  size={'3em'} color= {'#b3273d'}/>
            Flights
          </Button>
          <Button to='/' activeStyle>
            <FaHiking  size={'3em'} color= {'#b3273d'}/>
            My Trips
          </Button>
          <Button to='/' activeStyle>
            <FaStar  size={'3em'} color= {'#b3273d'}/>
            Unlimited
          </Button>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
         
        </NavMenu>
        
      </Side>
    
      
    </>
  );
};

export default Sidebar;