import React from "react";
import "../index.css";

const Trusted = () => {
  return (
    <div>
      {/* Trusted By Section */}
      <div className="trusted-by bg-gray-800 py-8 overflow-hidden">
        <h1 className="text-center text-gray-200 text-2xl font-bold mb-6">
          Trusted by
        </h1>
        <div className="flex whitespace-nowrap animate-slideLeftLoop">
          <div className="flex space-x-8">
            {/* Original Text Elements */}
            <h2 className="text-gray-400 font-extrabold text-lg tracking-wide">
              CNC Customs
            </h2>
            <h2 className="text-gray-400 font-extrabold text-lg tracking-wide">
              WA Auto Repairs
            </h2>
            <h2 className="text-gray-400 font-extrabold text-lg tracking-wide">
              CNC Customs
            </h2>
            <h2 className="text-gray-400 font-extrabold text-lg tracking-wide">
              WA Auto Repairs
            </h2>
            {/* Duplicate Elements for Endless Loop Effect */}
            <h2 className="text-gray-400 font-extrabold text-lg tracking-wide">
              CNC Customs
            </h2>
            <h2 className="text-gray-400 font-extrabold text-lg tracking-wide">
              WA Auto Repairs
            </h2>
            <h2 className="text-gray-400 font-extrabold text-lg tracking-wide">
              CNC Customs
            </h2>
            <h2 className="text-gray-400 font-extrabold text-lg tracking-wide">
              WA Auto Repairs
            </h2>
            {/* Duplicate Elements for Endless Loop Effect */}
            <h2 className="text-gray-400 font-extrabold text-lg tracking-wide">
              CNC Customs
            </h2>
            <h2 className="text-gray-400 font-extrabold text-lg tracking-wide">
              WA Auto Repairs
            </h2>
            <h2 className="text-gray-400 font-extrabold text-lg tracking-wide">
              CNC Customs
            </h2>
            <h2 className="text-gray-400 font-extrabold text-lg tracking-wide">
              WA Auto Repairs
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trusted;
