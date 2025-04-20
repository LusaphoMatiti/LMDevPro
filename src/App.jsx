// routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandPage from "./pages/LandPage";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Blog from "./pages/Blogs";
import Post1 from "./pages/blogposts/Post1";
import Post2 from "./pages/blogposts/Post2";
import Post3 from "./pages/blogposts/Post3";
import Trusted from "./pages/Trusted";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./pages/Loading";
import { useState, useEffect } from "react";

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);
  const maxLoadingTime = 5000; // Reduced to 5 seconds

  useEffect(() => {
    const handlePageLoad = () => {
      const criticalImages = document.querySelectorAll("img[data-critical]");
      let imagesLoaded = 0;

      const imageLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded === criticalImages.length) {
          setLoading(false); // Stop spinner when critical images are loaded
        }
      };

      criticalImages.forEach((image) => {
        if (image.complete) {
          imageLoaded(); // Already cached images
        } else {
          image.addEventListener("load", imageLoaded);
          image.addEventListener("error", imageLoaded);
        }
      });

      if (criticalImages.length === 0) {
        setLoading(false); // No critical images, stop spinner
      }

      // Fallback: Stop spinner after max time
      const timeoutId = setTimeout(() => {
        setLoading(false);
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
    <>
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
              <Skills />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
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
    </>
  );
};

export default AppRoutes;
