import React, { useState } from "react";
import "../styling/About.css";
import Title from "../components/Title";

const About = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => setReadMore(!readMore);

  return (
    <div className="section about" id="about">
      <div className="blurry-background"></div>
      <div className="about-content">
        <div className="about-title">
          <Title title="About" subTitle="Lusapho" />
          <div className="title-underline"></div>
        </div>

        <div className="paragraphs">
          <p>
            Hi, I'm Lusapho Matiti, but you can call me 'Ludz'. I'm a Full-Stack
            Developer who loves building websites and web applications. I work
            with ReactJS to make web pages and web apps look good and work well.
          </p>
          <p>
            I focus on making sure everything looks just right on the screen and
            works smoothly. I enjoy making web applications that are easy to use
            and leave a good impression.
          </p>
          {!readMore && (
            <button onClick={toggleReadMore} className="info-btn">
              ... Read More
            </button>
          )}

          {readMore && (
            <>
              <p>
                But it's not all about the code – when I'm not immersed in the
                world of web development, you can find me exploring the great
                outdoors, working-out, playing football with friends, or
                listening to my favorite songs. Life's too short to stick to
                just one passion, right?
              </p>
              <p>
                So, welcome to my corner of the web. Whether you want to work on
                a project together or just chat about web development, I'm happy
                you're here. Let's create something awesome together!
              </p>
              <button onClick={toggleReadMore} className="info-btn">
                Show Less
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
