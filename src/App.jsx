import React from "react";
import LandPage from "./pages/LandPage";
import About from "./pages/About";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandPage />
              <About />
              <Projects />
              <CV />
              <Contact />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
