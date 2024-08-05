import React from "react";
import "../styling/About.css";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="section about" id="about">
      <div className="blurry-background"></div>
      <div className="about-content">
        <div className="about-title">
          <Title title="About" subTitle="Lusapho" />
        </div>
        <div className="paragraphs">
          <p>
            Hey there, I'm Lusapho Matiti, but you can just call me 'Ludz'. As a
            Front-end Developer, I'm passionate about crafting immersive digital
            experiences that captivate and inspire. My specialty? ReactJS –
            where I blend creativity with cutting-edge technology to bring ideas
            to life.
          </p>
          <p>
            With a knack for pixel-perfect design and a love for elegant code, I
            thrive on pushing the boundaries of what's possible in the digital
            realm. Whether it's building sleek user interfaces or optimizing
            performance for seamless interactions, I'm all about creating
            wow-worthy experiences that leave a lasting impression.
          </p>
          <p>
            But it's not all about the code – when I'm not immersed in the world
            of web development, you can find me exploring the great outdoors,
            working-out, playing football with friends, or jamming out to my
            favorite songs. Life's too short to stick to just one passion,
            right?
          </p>
          <p>
            So, welcome to my corner of the web. Whether you're here to
            collaborate on a project or simply connect with a fellow digital
            enthusiast, I'm thrilled to have you along for the ride. Let's
            innovate, create, and make something special together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
