import React from "react";
import "../styling/LandPage.css";
import "../index.css";

const LandPage = () => {
  return (
    <div className="section landpage z-1" id="landpage">
      {/* Hero Content */}
      <div className="land-content lg:flex-row lg:items-center lg:justify-between">
        {/* Image Section */}
        <div className="land-img lg:w-1/2 lg:flex lg:justify-end lg:pr-8">
          <img
            src="/Ludz.webp"
            alt="Portrait of Lusapho Matiti, a Full-Stack Developer"
            className="shadow-lg rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 lg:text-left lg:pl-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 lg:mb-6 text-center lg:text-left">
            Hi, I'm <span className="text-blue-400">LUSAPHO MATITI</span>
          </h1>
          <h2 className="flex items-center text-xl sm:text-2xl md:text-3xl text-white mb-4 lg:mb-6 justify-center lg:justify-start">
            Full-Stack Developer
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-400 rounded-full mx-2"></div>
            UI/UX Designer
          </h2>

          {/* Brief Paragraph About Yourself */}

          {/* Paragraph Content */}
          <p className="text-sm sm:text-base md:text-lg text-white sm:p-5 mb-6 lg:mb-8 text-center lg:text-left relative z-50">
            I’m a Full-Stack Developer passionate about building modern,
            user-friendly web applications. I enjoy working with React.js for
            the frontend and Node.js for the backend, making seamless and
            efficient digital experiences. My focus is on writing clean code,
            improving performance, and delivering functional designs. I'm always
            eager to learn, grow, and take on new challenges.
          </p>

          {/* Call-to-Action Button */}
          <a
            href="/about"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out mx-auto lg:mx-0"
          >
            Learn More About Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
