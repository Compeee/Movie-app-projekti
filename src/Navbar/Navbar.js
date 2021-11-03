import React from "react";
import {
  NavMenu,
  NavLink,
  NavBtnLink,
  Nav,
} from "./NavbarElements";
export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/">
        <h1>Home</h1>
      </NavLink>
      <NavMenu>
        <NavBtnLink to="/movies">
          Movies
        </NavBtnLink>
        <NavBtnLink to="/shows">
          Shows
        </NavBtnLink>
        <NavBtnLink to="/upcoming">
          Upcoming
        </NavBtnLink>
      </NavMenu>
    </Nav>
  );
}
