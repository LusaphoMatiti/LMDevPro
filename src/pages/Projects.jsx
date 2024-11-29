import React, { useEffect, useState, useRef } from "react";
import { projects } from "../data";
import "../styling/Project.css";
import Title from "../components/Title";
import "../index.css";
import { Link } from "react-router-dom";

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
              <div>
                <Link to={href}>
                  <div
                    key={id}
                    ref={(el) => (projectRefs.current[index] = el)}
                    data-id={id}
                    className={`overflow-hidden bg-cover bg-center rounded-lg cursor-pointer h-32 sm:h-50 sm:w-50 md:h-56 lg:h-72 group transform transition duration-700 ease-in-out ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    <div className="flex flex-col justify-center w-full h-full px-4 py-2 sm:px-6 sm:py-4 md:px-8 md:py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                      <h3 className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-white capitalize">
                        {title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <h4 className="">More projects are avaliable upon request</h4>
      </div>
    </section>
  );
};

export default Projects;
