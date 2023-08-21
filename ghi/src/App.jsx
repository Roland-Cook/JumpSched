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
import FAQ from "./FAQ"


function App() {
  // const [currentPage, setCurrentPage] = useState("home"); // Default to "home"

  return (
    <>
      <BrowserRouter>
        <Navbar className="container" />
        <HeroSection />

        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/FAQ" element={<FAQ />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
