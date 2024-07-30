import React from "react";
import { projects } from "../data";
import "../styling/Project.css";

const Projects = () => {
  return (
    <div className="section projects" id="projects">
      <h3>My Projects</h3>
      <section className="project-grid">
        {projects.map((project) => {
          const { id, image, title, text } = project;

          return (
            <article key={id} className="project-item">
              <img src={image} alt="fitness tracker" />
              <div className="project-info">
                <div className="project-title">
                  <h3>{title}</h3>
                </div>
                <a style={{ textDecoration: "none" }} href="http://">
                  {text}
                </a>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
