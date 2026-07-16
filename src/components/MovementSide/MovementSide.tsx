import React from "react";
import data from "../../../custom/data";
import SideColumnMasthead from "../SideColumnMasthead/SideColumnMasthead";
import "./MovementSide.scss";

type Sidequest = (typeof data.sidequests)[number];

type SidequestLinkProps = {
  quest: Sidequest;
  href: string;
  publicUrl: string;
  variant?: "compact" | "featured";
};

const SidequestLink: React.FC<SidequestLinkProps> = ({
  quest,
  href,
  publicUrl,
  variant = "compact",
}) => (
  <a
    className={`sidequest-link sidequest-link--${variant}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${quest.title}: ${quest.text}`}
  >
    <div className="sidequest-link-media">
      <img src={`${publicUrl}/images/${quest.image}`} alt="" loading="lazy" />
    </div>

    <div className="sidequest-link-body">
      <div className="sidequest-link-header">
        <h3 className="sidequest-link-title">{quest.title}</h3>
        <span className="sidequest-link-cta" aria-hidden="true">
          →
        </span>
      </div>
      {variant === "featured" && (
        <>
          <p className="sidequest-link-text">{quest.text}</p>
          <p className="sidequest-link-meta">
            Started {quest.started} · {quest.progress}
          </p>
        </>
      )}
    </div>
  </a>
);

const MovementSide: React.FC = () => {
  const { instagram, links, sidequests, movementStory, introduction } = data;
  const publicUrl = import.meta.env.VITE_PUBLIC_URL;

  const byTitle = (title: string) => sidequests.find((quest) => quest.title === title);
  const highlightQuests = movementStory.highlights
    .map(byTitle)
    .filter((quest): quest is Sidequest => Boolean(quest));
  const feedQuests = movementStory.feed
    .map(byTitle)
    .filter((quest): quest is Sidequest => Boolean(quest));

  return (
    <section
      id="movement-side"
      className="movement-side"
      aria-label="Movement side: profile, hyperfixations, and sidequests"
    >
      <SideColumnMasthead side="move" />

      <article id="movement-profile" className="side-block side-block--move side-block--profile">
        <div className="movement-profile">
          <div className="movement-profile-header">
            <div className="movement-profile-avatar">
              <img
                src={`${publicUrl}/images/${instagram.profilePhoto}`}
                alt={instagram.profileLabel}
                width={72}
                height={72}
              />
            </div>

            <div className="movement-profile-intro">
              <a
                className="movement-profile-handle"
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{instagram.username}
              </a>
              <p className="movement-profile-name">{instagram.profileLabel}</p>
              <p className="movement-profile-bio">{introduction.movementSide.tagline}</p>
              <p className="movement-profile-meta">{instagram.tagline}</p>
            </div>
          </div>

          {feedQuests.length > 0 && (
            <section id="hyperfixations" className="movement-section" aria-label="Hyperfixations">
              <h2 className="movement-section-label">Hyperfixations</h2>
              <div className="sidequest-link-grid sidequest-link-grid--featured" role="list">
                {feedQuests.map((quest) => (
                  <SidequestLink
                    key={quest.title}
                    quest={quest}
                    href={links.instagram}
                    publicUrl={publicUrl}
                    variant="featured"
                  />
                ))}
              </div>
            </section>
          )}

          {highlightQuests.length > 0 && (
            <section id="sidequests" className="movement-section" aria-label="Sidequests">
              <h2 className="movement-section-label">Sidequests</h2>
              <div className="sidequest-link-grid sidequest-link-grid--compact" role="list">
                {highlightQuests.map((quest) => (
                  <SidequestLink
                    key={quest.title}
                    quest={quest}
                    href={links.instagram}
                    publicUrl={publicUrl}
                    variant="compact"
                  />
                ))}
              </div>
            </section>
          )}

          <a
            className="movement-profile-outlink"
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            {instagram.seeMoreLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    </section>
  );
};

export default MovementSide;
