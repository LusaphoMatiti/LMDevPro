import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const LandPage = () => {
  return (
    <section className="relative font-bebas h-screen overflow-hidden" id="home">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('./landpage.webp')" }}
      ></div>

      {/* Overlay */}
      <div className="relative h-full inset-0 bg-black/70 z-10">
        <div className="flex flex-col justify-center items-center h-full text-center px-4">
          {/* Title Animation */}
          <motion.h1
            className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <span className="text-[#929090]">
              <a href="#projects">Full Stack </a>
            </span>{" "}
            DEVELOPER
          </motion.h1>

          {/* Description Animation */}
          <motion.p
            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-6 max-w-md sm:max-w-lg md:max-w-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
          >
            Hi, I'm{" "}
            <span className="text-[#929090]">
              <a href="#about">Lusapho Matiti</a>
            </span>
            , a skilled <a href="#projects">Full Stack Developer</a>{" "}
            specializing in{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            , UX/UI design, and building user-friendly web applications. Let's
            create something awesome together!
          </motion.p>
        </div>
        <div className="flex justify-center -mt-20">
          <a href="#about" className="cursor-pointer animate-bounce">
            <img
              src="./arrowhead.svg"
              alt="down arrow"
              className="w-12 z-20  bg-white"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandPage;
