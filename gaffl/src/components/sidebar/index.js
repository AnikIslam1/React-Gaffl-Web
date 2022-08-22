import React, { useState } from 'react';
import { FaGlobeAmericas, FaBed, FaStar, FaHiking, FaPlaneDeparture  } from "react-icons/fa";
import DisPage  from '../Com/Discopage';
import StayPage  from '../Com/Staypage';

import {
  Side,
  Button,
  NavMenu,
  
} from './side';



const Sidebar = () => {
  const[openDis, DisOpen] = useState(false);
  const[openPage, setOpen] = useState(false);
  return (
    <>
    
    <Side>
        <NavMenu>
          <Button  onClick={() => DisOpen(true) || setOpen(false)} activeStyle>
            <FaGlobeAmericas size={'3em'} color= {'#b3273d'}/>
             Discover
          </Button>{openDis && <DisPage/> }
          <Button onClick={() => setOpen(true) || DisOpen(false)}  activeStyle>
            <FaBed  size={'3em'} color= {'#b3273d'}/>
            Stays
          </Button>{openPage && <StayPage/>}
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