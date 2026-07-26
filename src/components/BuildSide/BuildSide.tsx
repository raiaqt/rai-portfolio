import React, { useState } from "react";
import data from "../../../custom/data";
import LinkCard from "../LinkCard/LinkCard";
import LinkSvg from "../../assets/icons/LinkSvg";
import InquiryModal from "../InquiryModal/InquiryModal";
import { useTimelineSpine } from "../../hooks/useTimelineSpine";
import SideColumnMasthead from "../SideColumnMasthead/SideColumnMasthead";
import SideSectionHead from "../SideSectionHead/SideSectionHead";
import "../SideSectionHead/SideSectionHead.scss";
import "./BuildSide.scss";

const BuildSide: React.FC = () => {
  const { linkedinFeed, links, clientWork, projects, experience } = data;
  const timelineRef = useTimelineSpine<HTMLOListElement>(experience.length);
  const [showAllClientWork, setShowAllClientWork] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const activeClientWork = clientWork.filter((project) => !project.hidden);
  const visibleClientWork = showAllClientWork
    ? activeClientWork
    : activeClientWork.slice(0, 2);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 1);

  return (
    <section
      id="nerd-side"
      className="build-side"
      aria-label="Build side: LinkedIn profile, client work, personal projects, experience, and activity"
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
              <p className="linkedin-profile-headline">
                {linkedinFeed.headline.role} {linkedinFeed.headline.company} ·{" "}
                {linkedinFeed.headline.parent}
              </p>
              <a
                className="linkedin-profile-site-link"
                href={linkedinFeed.headline.companyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="linkedin-profile-site-link-icon" aria-hidden="true">
                  <LinkSvg />
                </span>
                {linkedinFeed.headline.companyLink
                  .replace(/^https?:\/\//, "")
                  .replace(/\/.*$/, "")
                  .replace(/^www\./, "")}
              </a>
              <p className="linkedin-profile-tagline">{linkedinFeed.tagline}</p>
              <p className="linkedin-profile-partnership">{linkedinFeed.partnershipPitch}</p>
              <div className="linkedin-profile-actions">
                <a
                  className="linkedin-profile-connect"
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View profile
                </a>
                <button
                  type="button"
                  className="linkedin-profile-build"
                  onClick={() => setShowInquiryModal(true)}
                >
                  {linkedinFeed.buildLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section id="build-client-work" className="side-block side-block--build">
        <SideSectionHead side="build" label="client work" title="Client Work" />
        <div className="linkedin-featured-grid">
          {visibleClientWork.map((project) => (
            <div className="client-work-item" key={project.title}>
              <span className="client-work-category">{project.category}</span>
              <LinkCard card={project} variant="client" />
            </div>
          ))}
        </div>
        {activeClientWork.length > 1 && (
          <button
            type="button"
            className={`build-work-see-more${showAllClientWork ? " build-work-see-more--expanded" : ""}`}
            onClick={() => setShowAllClientWork((open) => !open)}
            aria-expanded={showAllClientWork}
          >
            <span>{showAllClientWork ? "Show less" : "See more"}</span>
            <span className="build-work-see-more-icon" aria-hidden="true" />
          </button>
        )}
      </section>

      <section id="build-featured" className="side-block side-block--build">
        <SideSectionHead side="build" label="personal projects" title="Personal Projects" />
        <div id="projects" className="linkedin-featured-grid">
          {visibleProjects.map((project) => (
            <LinkCard key={project.title} card={project} variant="linkedin" />
          ))}
        </div>
        {projects.length > 1 && (
          <button
            type="button"
            className={`build-work-see-more${showAllProjects ? " build-work-see-more--expanded" : ""}`}
            onClick={() => setShowAllProjects((open) => !open)}
            aria-expanded={showAllProjects}
          >
            <span>{showAllProjects ? "Show less" : "See more"}</span>
            <span className="build-work-see-more-icon" aria-hidden="true" />
          </button>
        )}
      </section>

      <section id="build-experience" className="side-block side-block--build">
        <SideSectionHead side="build" label="experience" title="Experience" />
        <ol ref={timelineRef} className="build-timeline" aria-label="Career timeline">
          {experience.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === experience.length - 1;

            return (
              <li
                key={`${item.role}-${item.company}-${index}`}
                className={`build-timeline-item${isFirst ? " build-timeline-item--start" : ""}${isLast ? " build-timeline-item--now" : ""}`}
              >
                {(isFirst || isLast) && (
                  <div className="build-timeline-tag-row">
                    <span className="build-timeline-tag">{isFirst ? "where I started" : "now"}</span>
                  </div>
                )}
                <div className="build-timeline-row">
                  <div className="build-timeline-track" aria-hidden="true">
                    <span className="build-timeline-node" />
                  </div>
                  <div className="build-timeline-body">
                    <p className="build-timeline-role">{item.role}</p>
                    <p className="build-timeline-company">
                      {"link" in item && item.link ? (
                        <a
                          className="build-timeline-company-link"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.company}
                        </a>
                      ) : (
                        item.company
                      )}
                      {"parent" in item && item.parent && (
                        <span className="build-timeline-company-parent"> ({item.parent})</span>
                      )}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <InquiryModal open={showInquiryModal} onClose={() => setShowInquiryModal(false)} />
    </section>
  );
};

export default BuildSide;
