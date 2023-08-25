import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Form from "./Form";
import HeroSection from "./HeroSection";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import "./styles.css"
import Prices from "./prices";
import FAQ from "./FAQ";
import Gallery from "./Gallery";
import Manifest from "./Manifest";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import Login from "./account/Login";
import Signup from "./account/Signup";
import Profile from './account/profile'
import WeatherForecast from "./Weather";

function App() {
  const baseUrl = process.env.REACT_APP_API_HOST;

  return (
    <>
      <BrowserRouter>
        <AuthProvider baseUrl={baseUrl}>
          <Navbar className="container" />
          <HeroSection />
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/manifest" element={<Manifest />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/weather" element={<WeatherForecast />} />
            </Routes>
          </div>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
