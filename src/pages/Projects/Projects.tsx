import React from "react";
import "./Projects.css";
import data from "../../../data";
import LinkCard from "../../components/LinkCard/LinkCard";

const Projects: React.FC = () => {
  const { projects } = data;

  return (
    <div className="projects section">
      <span className="projects-header section-title">Projects</span>

      {projects.map((category) => (
        <div className="subsection" key={category.title}>
          <span className="section-subtitle">{category.title}</span>
          <div className="projects-cards">
            {category.works.map((work) => (
              <LinkCard key={work.title} card={work} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
