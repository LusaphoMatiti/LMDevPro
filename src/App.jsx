import React from "react";
<<<<<<< HEAD
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import CV from "./Pages/CV";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
=======
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
>>>>>>> 82c3734a54fdf3bbb5ea755fb2e02c03a16d063d
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <Router basename="/MyProfile">
=======
      <Router basename="/">
>>>>>>> 82c3734a54fdf3bbb5ea755fb2e02c03a16d063d
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
