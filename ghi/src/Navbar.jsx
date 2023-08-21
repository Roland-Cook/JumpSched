
import "./styles.css"
import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavBar() {
  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      id="mainNav"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          JumpSched
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/form" href="#about">
                Reservations
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/testimonials">
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/prices">
                Prices
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
}

export default NavBar;
