
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'


export const Side = styled.div`
position: fixed;
top: 60px;
left: 0;
overflow-x: hidden;
overflow-y: auto;
background: transparent;
z-index: 1;
padding: 0 10px;

background: #888888
  /* Third Nav */
justify-content: flex-start;
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    color: #b3273d;
    width: 85px;
    height: 85px;
    border-radius: 10px;
    border-color: #b3273d;
    text-decoration: none;
    margin: 10px auto;
    margin: 10px auto;
    
  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
    border-style: solid;
    border-color: #b3273d;
    box-shadow: 5px 7px #c5c5c5;
    color: #000;
  }
  &.active {
    
    border-radius: 10px;
    border-style: solid;
    border-color: #b3273d;
    box-shadow: 5px 7px #888888;
    color: #000;
    
  } 

`;


export const NavMenu = styled.div`
margin-top: 40px;
padding: 30px 15px;
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