import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const [query, setQuery] = useState("");
  const onChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };
  const history = useHistory();
  const handleHistory = () => {
    history.push(`/search/${query}`)
  }
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
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={onChange}
        ></input>
        <button onClick={handleHistory}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
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
