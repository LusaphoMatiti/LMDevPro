import React, { useEffect, useState } from "react";
import "../index.css";

const Trusted = () => {
  const [duplicatedContent, setDuplicatedContent] = useState([]);

  useEffect(() => {
    // Function to calculate and duplicate content
    const calculateDuplicates = () => {
      const trustedBy = ["CNC Customs", "WA Auto Repairs"];
      const viewportWidth = window.innerWidth;
      const itemWidth = 200; // Approximate width of each item (adjust as needed)
      const itemsPerViewport = Math.ceil(viewportWidth / itemWidth);
      const totalItems = itemsPerViewport * 2; // Double the content for seamless looping

      const duplicated = [];
      for (let i = 0; i < totalItems; i++) {
        duplicated.push(trustedBy[i % trustedBy.length]);
      }

      setDuplicatedContent(duplicated);
    };

    // Initial calculation
    calculateDuplicates();

    // Recalculate on window resize
    window.addEventListener("resize", calculateDuplicates);

    // Cleanup event listener
    return () => window.removeEventListener("resize", calculateDuplicates);
  }, []);

  return (
    <div>
      {/* Trusted By Section */}
      <div className="trusted-by bg-gray-800 py-8 overflow-hidden">
        <h1 className="text-center text-gray-200 text-2xl font-bold mb-6">
          Trusted by
        </h1>
        <div className="flex whitespace-nowrap animate-slideLeftLoop">
          <div className="flex space-x-8">
            {duplicatedContent.map((item, index) => (
              <h2
                key={index}
                className="text-gray-400 font-extrabold text-lg tracking-wide"
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
