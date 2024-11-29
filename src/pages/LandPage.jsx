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
          <h2>
            Hi, I'm <span className="text-blue-400">LUSAPHO</span>
          </h2>
          <h1 className="flex items-center mt-3 mb-3 space-x-2 text-lg md:text-2xl lg:text-4xl animate-fadeInSlideUp">
            Full-Stack Developer
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-blue-400 rounded-full m-2"></div>
            UI/UX Designer
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
