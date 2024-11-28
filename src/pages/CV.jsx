import React, { useEffect } from "react";
import "../styling/CV.css";
import Title from "../components/Title";
import "../index.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const CV = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of animation
      easing: "ease-out-back", // Easing function
      once: true, // Run animation only once when it comes into view
    });
  }, []);

  return (
    <div className="section cv" id="skills">
      <Title title="my" subTitle="skills" />
      <div className="title-underline"></div>
      <section className="top-section">
        <div className="profile-img" data-aos="fade-up">
          <img src="Ludz.webp" alt="hb" loading="lazy" />
        </div>
        <div className="spacer"></div>
        <div className="desc" data-aos="fade-up">
          <h2>Lusapho Matiti</h2>
          <p>Full-Stack Developer</p>
        </div>
      </section>
      <section className="bottom-section">
        <div className="left">
          <h3 data-aos="fade-up">
            <b>Summary</b>
          </h3>
          <div className="line"></div>
          <p data-aos="fade-up">
            Passionate and motivated junior developer with extensive knowledge
            of Javascript, MySQL, and Reactjs. I am skilled in Database
            development, Website design, programming, and software systems.
          </p>

          <h3 data-aos="fade-up">
            <b>Education</b>
          </h3>
          <div className="line"></div>
          <div className="education">
            <ul>
              <li data-aos="fade-up">
                <h4 className="before:content-['>'] before:mr-2">
                  <b>
                    NC: Systems Development - Full Stack Web and Software
                    Developer
                  </b>
                </h4>
                <div className="vertical-line"></div>
                <div className="education-info">
                  <p>Academic Institute Of Excellence</p>
                  <p>Feb 2022 - Feb 2024</p>
                </div>
              </li>
              <li data-aos="fade-up">
                <h4 className="before:content-['>'] before:mr-2">
                  <b>Data Analysis</b>
                </h4>
                <div className="vertical-line"></div>
                <div className="education-info">
                  <p>University Of Cape Town</p>
                  <p>Sep 2020 - Jan 2021</p>
                </div>
              </li>
              <li data-aos="fade-up">
                <h4 className="before:content-['>'] before:mr-2">
                  <b>Search Engine Optimization</b>
                </h4>
                <div className="vertical-line"></div>
                <div className="education-info">
                  <p>University Of Cape Town</p>
                  <p>Sep 2020 - Jan 2021</p>
                </div>
              </li>
            </ul>
          </div>

          <h3 data-aos="fade-up">
            <b>Skills</b>
          </h3>
          <div className="line"></div>

          <h4 data-aos="fade-up">
            <b>Frontend: </b>
          </h4>
          <p data-aos="fade-up">JavaScript</p>
          <div className="w-full rounded-full h-4 mb-4" data-aos="fade-up">
            <div
              className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
              style={{ width: "35%" }}
            ></div>
          </div>
          <p data-aos="fade-up">React.js</p>
          <div
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "50%" }}
            data-aos="fade-up"
          ></div>

          <p data-aos="fade-up">React Query</p>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "45%" }}
          ></div>

          <p data-aos="fade-up">HTML5</p>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "50%" }}
          ></div>

          <p data-aos="fade-up">Tailwind CSS</p>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "25%" }}
          ></div>

          <p data-aos="fade-up">CSS</p>
          <div data-aos="fade-up" className="w-full  rounded-full h-4 mb-3">
            <div
              className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>

          <p data-aos="fade-up">Material UI</p>
          <div data-aos="fade-up" className="w-full rounded-full h-4 mb-3">
            <div
              className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
              style={{ width: "10%" }}
            ></div>
          </div>

          <h4 data-aos="fade-up">
            <b>Backend:</b>
          </h4>
          <p data-aos="fade-up">Node.js</p>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "30%" }}
          ></div>

          <p data-aos="fade-up">Express.js</p>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "30%" }}
          ></div>

          <p data-aos="fade-up">Axios</p>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "40%" }}
          ></div>

          <p data-aos="fade-up">MySQL</p>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "45%" }}
          ></div>

          <p data-aos="fade-up">Database Development</p>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "30%" }}
          ></div>

          <h4 data-aos="fade-up">
            <b>Version Control: </b>
          </h4>
          <p data-aos="fade-up">GitHub</p>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "15%" }}
          ></div>

          <h4 data-aos="fade-up">
            <b>Other: </b>
          </h4>
          <p data-aos="fade-up">Search Engine Optimization/ S.E.O</p>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "35%" }}
          ></div>

          <p data-aos="fade-up">Data Analysis</p>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "20%" }}
          ></div>

          <p data-aos="fade-up">Copywriting</p>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
            style={{ width: "50%" }}
          ></div>

          <h3 data-aos="fade-up">
            <b>References</b>
          </h3>
          <div className="line"></div>
          <p data-aos="fade-up">References available upon request.</p>
        </div>
      </section>
    </div>
  );
};

export default CV;
