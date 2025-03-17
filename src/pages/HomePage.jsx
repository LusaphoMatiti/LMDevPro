import React from "react";
import Navbar from "./components/Navbar";
import About from "./About";
import Contact from "./Contact";
import CV from "./CV";
import Projects from "./Projects";
import LandPage from "./LandPage";
import "../index.css";
import Trusted from "./Trusted";
import Footer from "../components/Footer";

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
      <Footer />
    </div>
  );
};

export default HomePage;
