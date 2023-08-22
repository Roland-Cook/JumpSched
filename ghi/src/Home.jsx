import React from "react";
import one from "./images/1.jpg";
import two from "./images/2.png";
import three from "./images/3.png";
import * as icons from "react-bootstrap-icons";
import { NavLink, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./card.scss"
import AboutUs from "./AboutUs";

function Home() {
  return (
    <>
      <AboutUs />
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>

          <div className="row d-flex justify-content-center card-space ">
            <div className="card ">
              <img src={one} alt=""></img>
              <div className="card-content">
                <h2>Testimonials</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to="/testimonials" className="button">
                  Find out more
                  <icons.ArrowRight style={{ margin: "5px", height: "25px" }} />
                </Link>
              </div>
            </div>

            <div className="card">
              <img src={two} alt="" />
              <div className="card-content">
                <h2>FAQ</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to="/testimonials" className="button">
                  Find out more
                  <icons.ArrowRight style={{ margin: "5px", height: "25px" }} />
                </Link>
              </div>
            </div>

            <div className="card">
              <img src={three} alt="" />
              <div className="card-content">
                <h2>Gallery</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to="/testimonials" className="button">
                  Find out more
                  <icons.ArrowRight style={{ margin: "5px", height: "25px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
