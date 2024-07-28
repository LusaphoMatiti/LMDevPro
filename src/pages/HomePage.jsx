import React from "react";
import Navbar from "../Components/Navbar";
import About from "./About";
import Contact from "./Contact";
import CV from "./CV";
import Projects from "./Projects";
import "../styling/Header.css";
import LandPage from "./LandPage";

const Home = () => {
  return (
    <div>
      <LandPage />
      <Navbar />
      <About />
      <Projects />
      <CV />
      <Contact />
    </div>
  );
};

export default Home;
