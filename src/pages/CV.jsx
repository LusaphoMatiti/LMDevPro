import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
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
    <>
      {/* Meta Tags and Schema.org Markup */}
      <Helmet>
        <title>Lusapho Matiti - Full-Stack Developer</title>
        <meta
          name="description"
          content="Explore my technical skills as a Full-Stack Developer, including expertise in JavaScript, ReactJS, Node.js, MySQL, and UI/UX design. I specialize in building modern, scalable web applications."
        />
        <meta
          property="og:title"
          content="Skills | Lusapho Matiti - Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore my technical skills as a Full-Stack Developer, including expertise in JavaScript, ReactJS, Node.js, MySQL, and UI/UX design. I specialize in building modern, scalable web applications."
        />
        <meta property="og:image" content="https://lmdevpro.co.za/Ludz.webp" />
        <meta property="og:url" content="https://lmdevpro.co.za/skills" />
        <link rel="canonical" href="https://lmdevpro.co.za/skills" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Lusapho Matiti",
              "url": "https://lmdevpro.co.za/skills",
              "image": "https://lmdevpro.co.za/Ludz.webp",
              "jobTitle": "Full-Stack Developer",
              "knowsAbout": [
                "JavaScript",
                "ReactJS",
                "Node.js",
                "MySQL",
                "UI/UX Design",
                "Search Engine Optimization",
                "Data Analysis",
                "Copywriting"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "LMDevPro"
              },
              "sameAs": [
                "https://github.com/LusaphoMatiti",
                "https://www.instagram.com/_lusapho_"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="section cv" id="skills">
        <Title title="my" subTitle="skills" />
        <div className="title-underline"></div>
        <section className="top-section">
          <div className="profile-img" data-aos="fade-up">
            <img
              src="Ludz.webp"
              alt="Portrait of Lusapho Matiti, Full-Stack Developer"
              loading="lazy"
            />
          </div>
          <div className="spacer"></div>
          <div className="desc" data-aos="fade-up">
            <h2>Lusapho Matiti</h2>
            <h3>Full-Stack Developer</h3>
          </div>
        </section>
        <section className="bottom-section">
          <div className="left">
            <h4 data-aos="fade-up" aria-hidden="true">
              <b>Summary</b>
            </h4>
            <div className="line"></div>
            <p data-aos="fade-up">
              Passionate and motivated junior Full-Stack Developer with
              extensive knowledge of JavaScript, MySQL, and ReactJS. I
              specialize in crafting dynamic, user-friendly websites and web
              applications, blending my skills as a UI/UX Designer to create
              visually appealing and easy-to-navigate experiences.
            </p>

            <p data-aos="fade-up">
              Explore my{" "}
              <a href="/projects" className="text-blue-300 hover:underline">
                projects
              </a>{" "}
              or{" "}
              <a href="/contact" className="text-blue-300 hover:underline">
                get in touch
              </a>{" "}
              to collaborate.
            </p>

            <h4 data-aos="fade-up">
              <b>Skills</b>
            </h4>
            <div className="line"></div>

            <h5 data-aos="fade-up" className="mt-10 mb-5">
              <b>Frontend :</b>
            </h5>
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

            <h5 data-aos="fade-up" className="mt-10 mb-5">
              <b>Backend :</b>
            </h5>
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

            <h5 data-aos="fade-up" className="mt-10 mb-5">
              <b>Version Control :</b>
            </h5>
            <p data-aos="fade-up">GitHub</p>
            <div
              data-aos="fade-up"
              className="bg-gradient-to-r from-blue-200 to-blue-900 h-4 rounded-full"
              style={{ width: "15%" }}
            ></div>

            <h5 data-aos="fade-up" className="mt-10 mb-5">
              <b>Other :</b>
            </h5>
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

            <h5 data-aos="fade-up" className="mt-10 mb-5">
              <b>References :</b>
            </h5>
            <div className="line"></div>
            <p data-aos="fade-up">
              My CV and references are available upon request. You can also
              check out my{" "}
              <a
                href="https://github.com/LusaphoMatiti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                GitHub profile
              </a>{" "}
              or{" "}
              <a
                href="mailto:lusaphomatiti07@gmail.com"
                className="text-blue-300 hover:underline"
              >
                Email{" "}
              </a>
              me .
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CV;
