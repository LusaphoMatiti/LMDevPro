import React, { useState, useEffect } from "react";
import LandPage from "./pages/LandPage";
import About from "./pages/About";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./pages/Loading";
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const maxLoadingTime = 40000; // Max time (10 seconds)

  useEffect(() => {
    const handlePageLoad = () => {
      const images = document.querySelectorAll("img");
      let imagesLoaded = 0;

      const imageLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          setLoading(false); // All images are loaded
        }
      };

      images.forEach((image) => {
        if (image.complete) {
          imageLoaded(); // Already cached images
        } else {
          image.addEventListener("load", imageLoaded);
          image.addEventListener("error", imageLoaded);
        }
      });

      if (images.length === 0) {
        setLoading(false); // No images, stop loading spinner
      }

      // Fallback: Set timeout to stop spinner after a max time
      const timeoutId = setTimeout(() => {
        setLoading(false); // Stop spinner even if images aren't done
      }, maxLoadingTime);

      return () => clearTimeout(timeoutId); // Clear timeout on unmount
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  if (loading) {
    return <Loading />; // Show spinner while loading
  }
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
