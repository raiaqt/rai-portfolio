import React from "react";
import data from "../../../custom/data";
import LinkCard from "../../components/LinkCard/LinkCard";
import "./Projects.scss";

const Projects: React.FC = () => {
  const { projects } = data;

  return (
    <section id="projects" className="column-section column-section--nerd">
      <span className="column-section-label">projects</span>
      <div className="projects-cards">
        {projects.map((project, i) => (
          <LinkCard key={i} card={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
