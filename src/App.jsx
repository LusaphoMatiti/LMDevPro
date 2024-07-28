import React from "react";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import CV from "./Pages/CV";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <About />
              <Projects />
              <CV />
              <Contact />
            </>
          }
        />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Routes>
    </Router>
  );
};

export default App;
