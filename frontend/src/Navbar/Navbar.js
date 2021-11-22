import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const [query, setQuery] = useState("");
  // Whenever user changes the search string in the input it updates the query value.
  const onChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };
  const history = useHistory();
  // Clicking the search button redirects you to the results page
  const handleHistory = () => {
    history.push(`/search/query=${query}`);
  };
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
      <div className="input-group">
        <div className="form-outline">
          <input
            className="form-control"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={onChange}
          ></input>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleHistory}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/movies" className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shows" className="nav-link">
              Shows
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/upcoming" className="nav-link">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/watchlist" className="nav-link">
              Watchlist
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
