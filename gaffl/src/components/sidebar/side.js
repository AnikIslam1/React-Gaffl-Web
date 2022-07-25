import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Side = styled.div`
position: fixed;
    top: 70px;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background: transparent;
    z-index: 1;
    padding: 0 15px;

background: #fff
  /* Third Nav */
justify-content: flex-start;
`
export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    color: #b3273d;
    width: 85px;
    height: 85px;
    border-radius: 10px;
    border-style: solid;
    border-color: coral;
    outline: none;
    text-decoration: none;
    margin: 5px auto;
    margin: 5px auto;
  &:hover {
    transition: all 0.2s ease-in-out;
    
    color: #b3273d;
  }
  &.active {
    color: #b3273d;
  }
`;

export const Bars = styled(FaBars)`
display: none;
color: #fff;
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;

export const NavMenu = styled.div`
margin-top: 40px;
padding: 50px 30px;
justify-content: center;
align-items: center;
height: auto;
border-radius: 15px;
background: #fff;

  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 13px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border: 1px solid #e5b02efa;
  background: #000000;
  padding: 5px;
  color: #e5b02efa;
  margin-right: 13px;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000000;
    color: #b3273d;
  }
`;