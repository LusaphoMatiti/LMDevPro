import React, { useEffect, useState, useRef } from "react";
import { projects } from "../data";
import "../styling/Project.css";
import Title from "../components/Title";
import "../index.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => [...prev, entry.target.dataset.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Meta Tags and Schema.org Markup */}
      <Helmet>
        <title> Lusapho Matiti - Full-Stack Developer</title>
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
        <link rel="canonical" href="https://lmdevpro.co.za/projects" />

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
      <section
        className="bg-white dark:bg-gray-900 section projects"
        id="projects"
      >
        <div className="container px-6 py-10 mx-auto">
          {/* Title Section */}
          <div className="text-center mb-8">
            <div className="about-title">
              <Title title="My" subTitle="Projects" />
              <div className="title-underline"></div>
            </div>
          </div>

          {/* Projects Grid Layout */}
          <div className="grid grid-cols-1 gap-6 mt-8 overflow-y-auto max-h-screen xl:mt-12 xl:gap-8 md:grid-cols-2 xl:grid-cols-3 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {projects.map((project, index) => {
              const { id, title, image, href } = project;
              const isVisible = visibleProjects.includes(id.toString());

              return (
                <Link key={id} to={href}>
                  <div
                    ref={(el) => (projectRefs.current[index] = el)}
                    data-id={id}
                    className={`overflow-hidden bg-cover bg-center rounded-lg cursor-pointer h-32 sm:h-50 sm:w-50 md:h-56 lg:h-72 group transform transition duration-700 ease-in-out ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ backgroundImage: `url(${image})` }}
                    aria-label={`Project: ${title}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                      <h2 className="text-white text-lg font-semibold">
                        {title}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Additional Text */}
          <h3 className="text-center mt-8 text-white opacity-500">
            More projects are available upon request or you can also check out
            my{" "}
            <a
              href="https://github.com/LusaphoMatiti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              GitHub profile
            </a>
          </h3>
        </div>
      </section>
    </>
  );
};

export default Projects;
