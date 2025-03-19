import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styling/About.css";
import Title from "../components/Title";
import { Helmet } from "react-helmet";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => setReadMore(!readMore);

  // Define animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Helmet>
        <title> Lusapho Matiti | Full-Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Lusapho Matiti, a skilled Full-Stack Developer specializing in ReactJS and UI/UX design."
        />
        <meta
          property="og:title"
          content="About Lusapho Matiti | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Learn more about Lusapho Matiti, a skilled Full-Stack Developer specializing in ReactJS and UI/UX design."
        />
        <meta property="og:image" content="https://lmdevpro.co.za/Ludz.webp" />
        <meta property="og:url" content="https://lmdevpro.co.za/about" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Lusapho Matiti",
              "url": "https://lmdevpro.co.za/about",
              "image": "https://lmdevpro.co.za/Ludz.webp",
              "jobTitle": "Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "LMDevPro"
              },
              "sameAs": [
                "https://github.com/LusaphoMatiti",
                "https://www.instagram.com/_lusapho_"
              ],
              "knowsAbout": [
                "ReactJS",
                "UI/UX Design",
                "Web Development",
                "JavaScript",
                "Frontend Development",
                "Backend Development"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="section about" id="about">
        <div className="blurry-background"></div>
        <div className="about-content p-8">
          <motion.div
            className="about-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeUp}
          >
            <Title title="About" subTitle="Lusapho" />
            <div className="title-underline"></div>
          </motion.div>

          <motion.h2 className="text-2xl font-semibold text-gray-200 mb-5 mt-8">
            Full-Stack Developer & UI/UX Designer
          </motion.h2>

          <div className="paragraphs">
            <motion.p
              className="text-base leading-relaxed mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={fadeUp}
            >
              I specialize in creating responsive frontends with React.js and
              designing scalable backends with Node.js and AWS to build
              efficient, user-friendly web applications. My approach focuses on
              writing clean, maintainable code, optimizing performance, and
              ensuring seamless user experiences.
            </motion.p>
            <motion.p
              className="text-base leading-relaxed mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={fadeUp}
            >
              I’ve worked on real-world projects, including a serverless to-do
              app and an eCommerce platform, handling everything from
              development to deployment. These experiences have strengthened my
              problem-solving skills and deepened my understanding of full-stack
              development.
            </motion.p>

            {!readMore && (
              <button
                onClick={toggleReadMore}
                className="info-btn"
                aria-label="Expand content"
                aria-expanded={false}
              >
                ... Read More
              </button>
            )}

            {readMore && (
              <>
                <motion.p
                  className="text-base leading-relaxed mb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  variants={fadeUp}
                >
                  Outside of coding, I enjoy exploring the outdoors, working
                  out, playing football, and listening to music. I believe in
                  continuous learning, taking on new challenges, and creating
                  web solutions that make a real impact.
                </motion.p>
                <motion.p
                  className="text-base leading-relaxed mb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  variants={fadeUp}
                >
                  So, welcome to my corner of the web. Whether you’re a small
                  business owner looking to bring your ideas to life or someone
                  curious about web development, I’m happy you’re here. Let’s
                  create something awesome together!
                </motion.p>

                <motion.p
                  className="text-base leading-relaxed mb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  variants={fadeUp}
                >
                  Check out my{" "}
                  <a
                    href="/projects"
                    className="text-blue-400 hover:underline focus:outline-none"
                  >
                    projects
                  </a>{" "}
                  or{" "}
                  <a
                    href="/contact"
                    className="text-blue-400 hover:underline focus:outline-none"
                  >
                    get in touch
                  </a>{" "}
                  to collaborate.
                </motion.p>

                <button
                  onClick={toggleReadMore}
                  className="info-btn"
                  aria-label="Collapse content"
                  aria-expanded={true}
                >
                  Show Less
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
