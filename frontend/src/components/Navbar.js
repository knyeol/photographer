import React from "react";
import { FaCameraRetro } from "react-icons/fa";

function Navbar() {
  return (
    <navbar-container>
      <navbar-content>
        <a href="/" className="navbar-home">
          <FaCameraRetro className="navbar-icon" />
        </a>
        <navbar-items>
          <a href="/" className="navbar-item">
            Home
          </a>
          <a href="/portfolio" className="navbar-item">
            Works
          </a>
          <a href="/about" className="navbar-item">
            About
          </a>
        </navbar-items>
      </navbar-content>
    </navbar-container>
  );
}

export default Navbar;
