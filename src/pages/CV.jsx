import React from "react";
import "../styling/CV.css";

const CV = () => {
  return (
    <div className="section cv" id="cv">
      <section className="top-section">
        <div className="profile-img">
          <img src="Ludz.jpg" alt="hb" />
        </div>
        <div className="desc">
          <h2>Lusapho Matiti</h2>
          <p>Front-End Developer</p>
        </div>
      </section>
    </div>
  );
};

export default CV;
