import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <Link to="/" class="navbar-brand">
        Home
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/popular" class="nav-link">
              Popular
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/upcoming" class="nav-link">
              Upcoming
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/movies" class="nav-link">
              All movies
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/shows" class="nav-link">
              All shows
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
