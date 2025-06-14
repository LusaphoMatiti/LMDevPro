import { useState } from "react";
import { projects } from "../data";
import "../index.css";
import { Helmet } from "react-helmet-async";
import DesignCard from "../components/DesignCard.jsx";

const Projects = () => {
  const [showDesignCard, setShowDesignCard] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  return (
    <>
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
              "url": "https://lmdevpro.co.za/projects"
            }
          `}
        </script>
      </Helmet>

      <section id="projects" className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('./projects.webp')" }}
        ></div>

        <div className="absolute flex justify-center inset-0 bg-black/70 z-10">
          <div className="px-6 py-10 text-center">
            <h1 className="text-white font-bebas font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight z-20">
              MY<span className="text-[#929090] ml-2">PROJECTS</span>
            </h1>
          </div>
        </div>

        <div className="relative z-20 flex items-center justify-center px-4 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8 gap-8 max-w-7xl w-full">
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
                  <p className="mt-2 text-2xl font-bold font-bebas text-gray-800 dark:text-white">
                    {project.title}
                  </p>
                  <p className="mt-2 sm:text-md md:text-lg text-gray-600 dark:text-gray-400 flex-grow">
                    {project.desc}
                  </p>

                  {/* Design Process Button */}
                  <button
                    onClick={() => {
                      setSelectedProjectId(project.id);
                      setShowDesignCard(true);
                    }}
                    className="mt-6 inline-flex items-center justify-center px-2 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors duration-300"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Design Process
                  </button>

                  {/* Design Process Button */}
                  <a
                    href={project.github}
                    className="mt-6 inline-flex items-center justify-center px-2 py-2 bg-blue-900 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Github
                  </a>

                  <a
                    href={project.href}
                    className="mt-6 inline-flex items-center justify-center px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 mb-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    See Live
                  </a>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                    Built with:{" "}
                    <span className="font-bold">{project.madeWtih}</span>
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {project.logos.map((logo, index) => (
                      <img
                        key={index}
                        className="h-7 w-7 object-cover"
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
        {/* Modal Render */}
        {showDesignCard && (
          <DesignCard
            onClose={() => {
              setShowDesignCard(false);
              setSelectedProjectId(null); // Optional cleanup
            }}
            projectId={selectedProjectId}
          />
        )}
      </section>
    </>
  );
};

export default Projects;
