import React from "react";
import LandPage from "./pages/LandPage";
import About from "./pages/About";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
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
      <Footer />
    </Router>
  );
};

export default App;
