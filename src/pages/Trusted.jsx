import React, { useEffect, useState } from "react";
import "../index.css";

const Trusted = () => {
  const [duplicatedContentLeft, setDuplicatedContentLeft] = useState([]);
  const [duplicatedContentRight, setDuplicatedContentRight] = useState([]);

  useEffect(() => {
    // Function to calculate and duplicate content for left-to-right animation
    const calculateDuplicatesLeft = () => {
      const trustedByLeft = ["CNC Customs", "WA Auto Repairs"];
      const viewportWidth = window.innerWidth;
      const itemWidth = 100; // Approximate width of each item (adjust as needed)
      const itemsPerViewport = Math.ceil(viewportWidth / itemWidth);
      const totalItems = itemsPerViewport * 2; // Double the content for seamless looping

      const duplicated = [];
      for (let i = 0; i < totalItems; i++) {
        duplicated.push(trustedByLeft[i % trustedByLeft.length]);
      }

      setDuplicatedContentLeft(duplicated);
    };

    // Function to calculate and duplicate content for right-to-left animation
    const calculateDuplicatesRight = () => {
      const trustedByRight = ["Luman", "FlowNest"];
      const viewportWidth = window.innerWidth;
      const itemWidth = 100; // Approximate width of each item (adjust as needed)
      const itemsPerViewport = Math.ceil(viewportWidth / itemWidth);
      const totalItems = itemsPerViewport * 2; // Double the content for seamless looping

      const duplicated = [];
      for (let i = 0; i < totalItems; i++) {
        duplicated.push(trustedByRight[i % trustedByRight.length]);
      }

      setDuplicatedContentRight(duplicated);
    };

    // Initial calculations
    calculateDuplicatesLeft();
    calculateDuplicatesRight();

    // Recalculate on window resize
    window.addEventListener("resize", calculateDuplicatesLeft);
    window.addEventListener("resize", calculateDuplicatesRight);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", calculateDuplicatesLeft);
      window.removeEventListener("resize", calculateDuplicatesRight);
    };
  }, []);

  return (
    <div>
      {/* Trusted By Section - Left to Right */}
      <div className="trusted-by bg-white py-3 overflow-hidden">
        <h1 className="text-center text-[#111111] text-2xl font-bold mb-6">
          Trusted by
        </h1>
        <div className="flex whitespace-nowrap animate-slideLeftLoop">
          <div className="flex space-x-8">
            {duplicatedContentLeft.map((item, index) => (
              <h2
                key={index}
                className="text-[#111111] font-extrabold text-lg tracking-wide"
              >
                {item}
              </h2>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted By Section - Right to Left */}

      <div className="trusted-by bg-[#111111]  py-3 overflow-hidden">
        <div className="flex whitespace-nowrap py-4 animate-slideRightLoop">
          <div className="flex space-x-8">
            {duplicatedContentRight.map((item, index) => (
              <h2
                key={index}
                className="text-white font-extrabold text-lg tracking-wide"
              >
                {item}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
