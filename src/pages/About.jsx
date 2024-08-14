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
            Hi, I'm Lusapho Matiti, but you can call me 'Ludz'. I'm a Front-End
            Developer who loves building websites and web applications. I work
            with ReactJS to make web pages and web apps look good and work well.
          </p>
          <p>
            I focus on making sure everything looks just right on the screen and
            works smoothly. I enjoy making web applications that are easy to use
            and leave a good impression.
          </p>
          <p>
            But it's not all about the code – when I'm not immersed in the world
            of web development, you can find me exploring the great outdoors,
            working-out, playing football with friends, or listening to my
            favorite songs. Life's too short to stick to just one passion,
            right?
          </p>
          <p>
            So, welcome to my corner of the web. Whether you want to work on a
            project together or just chat about web development, I'm happy
            you're here. Let's create something awesome together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
