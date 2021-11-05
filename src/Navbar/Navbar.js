import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div class="home">
        <Link to="/" className="link">
          Home
        </Link>
      </div>
      <Link className="toggle-button">
        <i class="fa fa-bars" aria-hidden="true"></i>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </Link>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/popular" className="link">
              Popular
            </Link>
          </li>
          <li>
            <Link to="/upcoming" className="link">
              Upcoming
            </Link>
          </li>
          <li>
            <Link to="/movies" className="link">
              All movies
            </Link>
          </li>
          <li>
            <Link to="/shows" className="link">
              All shows
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
