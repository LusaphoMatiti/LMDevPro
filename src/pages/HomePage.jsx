import React from "react";
import Navbar from "./components/Navbar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CV from "../pages/CV";
import Projects from "../pages/Projects";
import LandPage from "../pages/LandPage";
import "../index.css";
import Trusted from "../pages/Trusted";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <LandPage />
      <Trusted />
      <About />
      <Projects />
      <CV />
      <Contact />
    </div>
  );
};

export default HomePage;
