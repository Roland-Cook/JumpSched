import React, { useState } from "react";
import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Form from "./Form";
import Testimonials from "./Testimonials"; // Import the Testimonials component

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // Default to "home"

  return (
    <div className="app-container">
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {currentPage === "home" && <Home />}
        {currentPage === "form" && <Form />}
        {currentPage === "testimonials" && <Testimonials />}{" "}
        {/* Render Testimonials component */}
      </main>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
