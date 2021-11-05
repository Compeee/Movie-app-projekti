import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #000;
  height: 75px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((35vw - 100px) / 2);
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  background: black;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const DropdownContent = styled.ul`
  position: absolute;
  right: 0;
  display: none;
  min-width: 12rem;
  padding: 1rem;
  list-style-type: none;
  background-color: #256ce1;
  margin-top: 1rem;
  border-radius: 0.8rem;
  color: #010606;
`;
export const Dropdown = styled.div`
  display: inline-block;
  margin-left: 10px;
  position: relative;
  &:hover ${DropdownContent} {
    padding: 1rem;
    background: #256ce1;
    display: flex;
    flex-direction: column;
    z-index: 999;
  }
`;

export const NavInput = styled.input`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: 500px;
  box-shadow: 0 0 5px rgb(84, 84, 84);
  padding: 1rem;
  border: 0.1rem #c0c0c0 solid;
  border-radius: 0.5rem;
  z-index: 998;
`

<Nav>
<NavLink to="/">
  <h1>Home</h1>
</NavLink>
<NavMenu>
  <NavBtnLink to="/popular">Popular</NavBtnLink>
  <NavBtnLink to="/upcoming">Upcoming</NavBtnLink>
  <NavBtnLink to="/movies">All movies</NavBtnLink>
  <NavBtnLink to="/shows">All shows</NavBtnLink>
  <a href="/#" class="toggle-button">
    <i class="fa fa-bars" aria-hidden="true"></i>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </a>
</NavMenu>
</Nav>