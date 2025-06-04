import React from "react";
import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";
import "./styles/bubbles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-[#0f0f10] text-white relative overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

// bg-gradient-to-br from-black via-[#1a1a2e] to-purple-900 text-white
