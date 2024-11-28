import React, { useState, useEffect } from "react";
import "../styling/LandPage.css";
import "../index.css";

const LandPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section landpage" id="landpage">
      <div className="land-content">
        <div className="land-img">
          <img
            className="shadow-lg rounded-full"
            src="Ludz.webp"
            alt="hb"
            loading="lazy"
          />
        </div>
        <div className=" lg:text-2xl">
          <h1 className=" animate-fadeInSlideUp">
            Hi, I'm <span className="text-blue-400">LUSAPHO</span>
          </h1>
          <h2 className="animate-fadeInSlideUp animation-delay-1000">
            Let's build something awesome together!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
