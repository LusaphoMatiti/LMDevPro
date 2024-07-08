import React from "react";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
