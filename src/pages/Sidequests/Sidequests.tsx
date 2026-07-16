import React from "react";
import data from "../../../custom/data";
import "./Sidequests.scss";

export const SidequestsGrid: React.FC = () => {
  const { sidequests } = data;

  return (
    <section id="sidequests" className="column-section column-section--movement">
      <span className="column-section-label">sidequests</span>
      <div className="sidequests-grid">
        {sidequests.map((quest) => (
          <article
            key={quest.title}
            className={`sidequest-card sidequest-card--${quest.gradient}`}
          >
            <span className="sidequest-card-title">{quest.title}</span>
            <span className="sidequest-card-text">{quest.text}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export const SidequestsFollow: React.FC = () => {
  const { links, instagram } = data;

  return (
    <section className="column-section column-section--movement column-section--follow">
      <span className="column-section-label">follow</span>
      <a
        className="column-follow-link"
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        @{instagram.username} on Instagram →
      </a>
    </section>
  );
};
