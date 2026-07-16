import React from "react";
import data from "../../../custom/data";
import LinkCard from "../LinkCard/LinkCard";
import LinkedInWidget from "../LinkedInWidget/LinkedInWidget";
import SideColumnMasthead from "../SideColumnMasthead/SideColumnMasthead";
import SideSectionHead from "../SideSectionHead/SideSectionHead";
import "../SideSectionHead/SideSectionHead.scss";
import "./BuildSide.scss";

const BuildSide: React.FC = () => {
  const { linkedinFeed, links, projects, experience } = data;

  return (
    <section
      id="nerd-side"
      className="build-side"
      aria-label="Build side: LinkedIn profile, experience, personal projects, and activity"
    >
      <SideColumnMasthead side="build" />

      <article id="build-profile" className="side-block side-block--build side-block--profile">
        <div className="linkedin-profile">
          <div className="linkedin-profile-banner" aria-hidden="true" />

          <div className="linkedin-profile-header">
            <div className="linkedin-profile-avatar">
              <img
                src={linkedinFeed.profilePhoto}
                alt={linkedinFeed.profileLabel}
                width={72}
                height={72}
              />
            </div>
            <div className="linkedin-profile-body">
              <a
                className="linkedin-profile-name"
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkedinFeed.profileLabel}
              </a>
              <p className="linkedin-profile-headline">{linkedinFeed.headline}</p>
              <p className="linkedin-profile-tagline">{linkedinFeed.tagline}</p>
              <a
                className="linkedin-profile-connect"
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                View profile
              </a>
            </div>
          </div>
        </div>
      </article>

      <section id="build-experience" className="side-block side-block--build">
        <SideSectionHead side="build" label="experience" title="Experience" />
        <ol className="build-timeline" aria-label="Career timeline">
          {experience.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === experience.length - 1;

            return (
              <li
                key={`${item.role}-${item.company}-${index}`}
                className={`build-timeline-item${isLast ? " build-timeline-item--now" : ""}`}
              >
                <div className="build-timeline-track" aria-hidden="true">
                  <span className="build-timeline-node" />
                </div>
                <div className="build-timeline-body">
                  {isFirst && <span className="build-timeline-tag">where I started</span>}
                  {isLast && <span className="build-timeline-tag">now</span>}
                  <p className="build-timeline-role">{item.role}</p>
                  {"link" in item && item.link ? (
                    <a
                      className="build-timeline-company build-timeline-company--link"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company}
                    </a>
                  ) : (
                    <p className="build-timeline-company">{item.company}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section id="build-featured" className="side-block side-block--build">
        <SideSectionHead side="build" label="featured" title="Featured" />
        <div id="projects" className="linkedin-featured-grid">
          {projects.map((project, i) => (
            <LinkCard key={i} card={project} variant="linkedin" />
          ))}
        </div>
      </section>

      <section id="build-activity" className="side-block side-block--build">
        <SideSectionHead side="build" label="activity" title="Activity" />
        <LinkedInWidget embedded />
      </section>
    </section>
  );
};

export default BuildSide;
