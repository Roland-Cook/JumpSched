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
            <h2
              className="section-heading text-uppercase"
              style={{ color: "white" }}
            >
              Services
            </h2>
            <h3 className="section-subheading" style={{ color: "white" }}>
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
                <Link to="/FAQ" className="button">
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
                <Link to="/gallery" className="button">
                  Find out more
                  <icons.ArrowRight style={{ margin: "5px", height: "25px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Location:
              <hr style={{ width: "50%" }} />
            </h2>
            <p className="text-gray-900 dark:text-white">
              We're your Northern Colorado Skydiving Center located 45 minutes
              North of Denver and 45 minutes from Ft.Collins, Boulder and
              Cheyenne Wy, Right off the Weld county Parkway, County Road 49 in
              Weld County Colorado, USA
            </p>
            <p className="text-gray-900 mt-3 dark:text-white">
               Call us anytime if you have any questions: (303) 944-9708
            </p>
            <p className="text-gray-900 mt-3 dark:text-white">
              Address: 23482 Co Rd 48, La Salle, CO 80645
            </p>
            <p className="text-gray-900 mt-3 dark:text-white">
              Email: rockymountainskydive@gmail.com
            </p>
            <h2 className="mb-4 mt-3 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Hours Of Operations:
            </h2>
            <p className="text-gray-900 dark:text-white">9AM-4PM</p>
            <p className="text-gray-900 dark:text-white"> Closed Thursdays</p>
            <p className="text-gray-900 dark:text-white">
              Book online for reservations
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 location-image">
            <img
              className="w-full rounded-lg "
              src="https://rockymountainskydive.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-26197105/images/59040931954a0kgFPc5k/Rocky-Mountain-Skydive-IAD-course.jpg"
              alt="guy parachuting"
            />
            <img
              className="w-full lg:mt-20 rounded-lg"
              src="https://rockymountainskydive.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-26197105/images/58e711a9a50afuRaKUTp/G0069645.JPG"
              alt="Tandem jumping from plane"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
