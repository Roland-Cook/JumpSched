import React from "react";

function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <button onClick={() => setCurrentPage("home")}>Home</button>
        </li>
        <li className="nav-item">
          <button onClick={() => setCurrentPage("form")}>Form</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
