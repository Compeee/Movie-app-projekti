import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/popular" className="nav-link">
              Popular
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/upcoming" className="nav-link">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav-link">
              All Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shows" className="nav-link">
              All Shows
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
