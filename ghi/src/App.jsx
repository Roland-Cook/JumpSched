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
import Login from "./Login";
import Signup from "./Signup";
import FAQ from "./FAQ";
import Gallery from "./Gallery";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";


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
              <Route path="/FAQ" element={<FAQ />}/>
              <Route path="/Gallery" element={<Gallery/>} />
            </Routes>
          </div>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
