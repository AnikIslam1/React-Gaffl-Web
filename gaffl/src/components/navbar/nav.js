import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
// import {useState} from 'react'

export const Nav = styled.nav`
  position: fixed;
  background: #000;
  height: 80px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
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
export const mobsidebar = styled.div`

    flex-flow: column nowrap;
    background-color:#000;
    position: fixed;
    top: 80px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
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