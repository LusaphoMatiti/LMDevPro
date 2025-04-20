import React from "react";
import { Helmet } from "react-helmet";
import Branch from "./Branch";
import "../index.css";
import { techData } from "../data";

const Skills = () => {
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

      <section
        className="bg-[#FAFAFA] min-h-screen relative dark:bg-gray-900 p-5 sm:p-8 flex flex-col items-center"
        id="skills"
      >
        <div className="px-6 py-10 text-center">
          <h1 className="text-[#11111] font-bebas font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight z-20 ">
            MY TECH<span className="text-[#929090] ml-2">STACK</span>
          </h1>
        </div>

        {/* Tree Trunk */}
        <div className="relative w-1 bg-gray-400 min-h-[210vh] sm:min-h-[185vh]  mt-10">
          <Branch
            side="right"
            title="Frontend"
            items={techData.frontend}
            topOffset={0}
          />
          <Branch
            side="left"
            title="Backend"
            items={techData.backend}
            topOffset={300}
          />
          <Branch
            side="right"
            title="Cloud"
            items={techData.cloud}
            topOffset={600}
          />
          <Branch
            side="left"
            title="Miscellaneous"
            items={techData.misc}
            topOffset={900}
          />
        </div>
      </section>
    </>
  );
};

export default Skills;
