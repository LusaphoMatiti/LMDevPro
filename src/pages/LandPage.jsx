import React from "react";
import "../styling/LandPage.css";
import "../index.css";

const LandPage = () => {
  return (
    <div className="section landpage" id="landpage">
      <div className="land-content">
        <div className="land-img">
          <img
            className="shadow-lg rounded-full"
            src="Ludz.webp"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Portrait of Lusapho"
            loading="lazy"
          />
        </div>
        <div className=" lg:text-2xl">
          <h1>
            Hi, I'm <span className="text-blue-400">LUSAPHO</span>
          </h1>
          <h2 className="flex items-center mt-1 mb-1 space-x-2 text-sm sm:text-base md:text-lg lg:text-2xl animate-fadeInSlideUp">
            Full-Stack Developer
            <div className="w-2.5 h-2.5 sm:w-6 sm:h-6 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-blue-400 rounded-full m-2"></div>
            UI/UX Designer
          </h2>
          <h3 className="animate-fadeInSlideUp animation-delay-1000">
            Let's build something awesome together!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
