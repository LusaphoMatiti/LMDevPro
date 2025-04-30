import React from "react";
import { projects } from "../data";
import "../index.css";

import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <>
      {/* Meta Tags and Schema.org Markup */}
      <Helmet>
        <title>Projects | Lusapho Matiti - Full-Stack Developer</title>
        <meta
          name="description"
          content="Explore my portfolio of web development projects, including CNC Customs, WA Auto Repairs, and more. Each project showcases my skills in ReactJS, UI/UX design, and full-stack development."
        />
        <meta
          property="og:title"
          content="Projects | Lusapho Matiti - Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore my portfolio of web development projects, including CNC Customs, WA Auto Repairs, and more. Each project showcases my skills in ReactJS, UI/UX design, and full-stack development."
        />
        <meta property="og:image" content="https://lmdevpro.co.za/Ludz.webp" />
        <meta property="og:url" content="https://lmdevpro.co.za/projects" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Projects | Lusapho Matiti - Full-Stack Developer",
              "description": "Explore my portfolio of web development projects, including CNC Customs, WA Auto Repairs, and more. Each project showcases my skills in ReactJS, UI/UX design, and full-stack development.",
              "url": "https://lmdevpro.co.za/projects",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "url": "https://www.cnccustoms.co.za",
                    "name": "CNC Customs"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "url": "https://www.waautorepairs.co.za/",
                    "name": "WA Auto Repair"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "url": "https://fitness-tracker-ashy-ten.vercel.app/",
                    "name": "Fitness Tracker"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      {/* Main Section */}
      <section id="projects" className="relative  min-h-screen ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('./projects.webp')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute flex justify-center inset-0 bg-black/70 z-10">
          <div className="px-6 py-10 text-center">
            <h1 className="text-white font-bebas font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight z-20 ">
              MY<span className="text-[#929090] ml-2">PROJECTS</span>
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center px-4  py-20">
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:mt-8 lg:mt-14 lg:grid-cols-3 pt-8 gap-8 max-w-7xl w-full">
            {/* Single Cards */}
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  className="object-cover w-full h-48 sm:h-64"
                  src={project.image}
                  alt="Project Thumbnail"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                    {project.type}
                  </span>
                  <a
                    href={project.href}
                    className="mt-2 text-2xl font-bold font-bebas text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
                    tabIndex="0"
                    role="link"
                  >
                    {project.title}
                  </a>
                  <p className="mt-2 sm:text-md md:text-lg text-gray-600 dark:text-gray-400 flex-grow">
                    {project.desc}
                  </p>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex-grow ">
                    Built with:{" "}
                    <span className="font-bold">{project.madeWtih}</span>
                  </p>

                  {/* logo */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {project.logos.map((logo, index) => (
                      <img
                        key={index}
                        className="h-7 w-7 object-cover "
                        src={logo}
                        alt={`${project.title} tech logo`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
