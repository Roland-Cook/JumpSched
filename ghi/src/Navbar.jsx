
import "./styles.css"
import { NavLink} from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import useToken, { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function NavBar() {
  const { logout } = useToken();
  const { token } = useAuthContext();


  return (

    <Navbar
      className="navbar navbar-expand-lg navbar-dark"
      id="mainNav">

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
              <NavLink className="nav-link" to="/faq">
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Gallery">
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/prices">
                Prices
              </NavLink>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/manifest">
                    Manifest
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    profile
                  </NavLink>
                </li>
                  <button
                    className="nav-link"
                    style={{ color: "white" }}
                    onClick={logout}
                  >
                    Logout
                  </button>
              </>
            ) : (
              <div className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <div>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Signup
                    </NavLink>
                  </li>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </Navbar>

  );
}

export default NavBar;
