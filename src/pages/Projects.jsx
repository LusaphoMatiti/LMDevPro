import React from "react";
import { projects } from "../data";
import "../styling/Project.css";
import Title from "../components/Title";

const Projects = () => {
  return (
    <div className="section projects" id="projects">
      <div className="section-info">
        <Title title="my" subTitle="projects" />
        <section className="project-grid">
          {projects.map((project) => {
            const { id, image, title, href } = project;

            return (
              <article key={id} className="project-item">
                <img src={image} alt="fitness tracker" />
                <div className="project-info">
                  <div className="project-title">
                    <h3>{title}</h3>
                    <a href={href}>view</a>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Projects;
