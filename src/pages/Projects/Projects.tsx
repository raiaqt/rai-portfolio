import React from "react"
import data from "../../../custom/data"
import LinkCard from "../../components/LinkCard/LinkCard"
import "./Projects.scss"

const Projects: React.FC = () => {
  const { projects } = data;

  return (
    <div id="projects" className="projects section light-background">
      <span className="section-title lowlight-text">Pr<span className="dark-text">oje</span>cts</span>
      {projects.map((category) => (
        <div className="subsection" key={category.title}>
          <span className="section-subtitle">{category.title}</span>
          <div className="projects-cards">
            {category.works.map((work, i) => (
              <LinkCard key={i} card={work} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
