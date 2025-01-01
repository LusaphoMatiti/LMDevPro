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
import Trusted from "./pages/Trusted";
import Blog from "./pages/Blogs";
import Post2 from "./pages/blogposts/Post2";
import Post3 from "./pages/blogposts/Post3";
import Post1 from "./pages/blogposts/Post1";

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
              <Trusted />
              <About />
              <Projects />
              <CV />
              <Contact />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blog />} />
        <Route
          path="/blogs/how-to-improve-your-websites-user-experience"
          element={<Post1 />}
        />
        <Route
          path="/blogs/top-web-design-trends-to-watch-in-2025"
          element={<Post2 />}
        />
        <Route
          path="/blogs/website-essentials-for-startups"
          element={<Post3 />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
