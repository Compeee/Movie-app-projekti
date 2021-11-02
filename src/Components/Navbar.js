import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <body>
      <header className="navHeader">
        <form id="form">
          <input type="text" placeholder="Search..." className="searchBar" id="search"></input>
        </form>
      </header>
    </body>
  );
}
