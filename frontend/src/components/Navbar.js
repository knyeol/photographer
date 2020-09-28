import React from "react";

function Navbar() {
  return (
    <navbar-container>
      <navbar-content>
        <a href="/" className="navbar-item">
          Home
        </a>
        <a href="/portfolio" className="navbar-item">
          Works
        </a>
        <a href="/about" className="navbar-item">
          About
        </a>
      </navbar-content>
    </navbar-container>
  );
}

export default Navbar;
