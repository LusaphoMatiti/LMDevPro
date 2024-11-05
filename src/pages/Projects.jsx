import React from "react";
import { projects } from "../data";
import "../styling/Project.css";
import Title from "../components/Title";

const Projects = () => {
  return (
    <div className="section projects" id="projects">
      <div className="section-info">
        <Title title="my" subTitle="projects" />
        <div></div>
        <section className="project-grid">
          {projects.map((project) => {
            const { id, image, title, href } = project;

            return (
              <div key={id} className="project-item">
                <a href={href}>
                  <img src={image} alt="fitness tracker" />
                </a>
                <div className="project-info">
                  <div className="project-title">
                    <h3>{title}</h3>
                    <a href={href} className="view-link">
                      View
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Projects;
