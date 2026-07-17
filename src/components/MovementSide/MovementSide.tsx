import React from "react";
import data from "../../../custom/data";
import InstagramWidget from "../InstagramWidget/InstagramWidget";
import SideColumnMasthead from "../SideColumnMasthead/SideColumnMasthead";
import SideSectionHead from "../SideSectionHead/SideSectionHead";
import "../SideSectionHead/SideSectionHead.scss";
import "./MovementSide.scss";

type Sidequest = (typeof data.sidequests)[number];

type SidequestLinkProps = {
  quest: Sidequest;
  href: string;
  publicUrl: string;
  variant?: "featured" | "editorial";
};

const SidequestMeta: React.FC<{ quest: Sidequest }> = ({ quest }) => {
  if (!quest.progress) return null;

  return <p className="sidequest-link-meta">{quest.progress}</p>;
};

const SidequestLink: React.FC<SidequestLinkProps> = ({
  quest,
  href,
  publicUrl,
  variant = "featured",
}) => (
  <a
    className={`sidequest-link sidequest-link--${variant}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${quest.title}: ${quest.text}`}
  >
    <div className={`sidequest-link-media sidequest-link-media--${quest.gradient}`}>
      <span className="sidequest-link-symbol" aria-hidden="true">
        {quest.symbol}
      </span>
      <img
        src={`${publicUrl}/images/${quest.image}`}
        alt=""
        loading="lazy"
        onError={(event) => {
          event.currentTarget.hidden = true;
        }}
      />
    </div>

    <div className="sidequest-link-body">
      <h3 className="sidequest-link-title">{quest.title}</h3>
      <p className="sidequest-link-text">{quest.text}</p>
      <SidequestMeta quest={quest} />
    </div>
  </a>
);

type SidequestCompactProps = {
  quest: Sidequest;
  href: string;
  publicUrl: string;
};

const SidequestCompactMobile: React.FC<SidequestCompactProps> = ({ quest, href, publicUrl }) => (
  <details className="sidequest-link sidequest-link--editorial sidequest-link--expandable">
    <summary className="sidequest-link-summary">
      <div className={`sidequest-link-media sidequest-link-media--${quest.gradient}`}>
        <span className="sidequest-link-symbol" aria-hidden="true">
          {quest.symbol}
        </span>
        <img
          src={`${publicUrl}/images/${quest.image}`}
          alt=""
          loading="lazy"
          onError={(event) => {
            event.currentTarget.hidden = true;
          }}
        />
      </div>
      <div className="sidequest-link-body">
        <h3 className="sidequest-link-title">{quest.title}</h3>
        <SidequestMeta quest={quest} />
      </div>
    </summary>
    <div className="sidequest-link-panel">
      <p className="sidequest-link-text">{quest.text}</p>
      <a
        className="sidequest-link-outlink"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Instagram
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </details>
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
      aria-label="Movement side: profile, hyperfixations, side quests, and activity"
    >
      <SideColumnMasthead side="move" />

      <article id="movement-profile" className="side-block side-block--move side-block--profile">
        <div className="movement-profile">
          <div className="movement-profile-row">
            <div className="movement-profile-avatar-ring">
              <div className="movement-profile-avatar">
                <img
                  src={`${publicUrl}/images/${instagram.profilePhoto}`}
                  alt={instagram.profileLabel}
                  width={86}
                  height={86}
                />
              </div>
            </div>

            <div className="movement-profile-id">
              <a
                className="movement-profile-handle"
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{instagram.username}
              </a>
              <p className="movement-profile-name">{instagram.profileLabel}</p>
            </div>
          </div>

          <div className="movement-profile-bio">
            <p>{introduction.movementSide.tagline}</p>
            <p>{introduction.movementSide.hint}</p>
          </div>

          <div className="movement-profile-actions">
            <a
              className="movement-profile-follow"
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow
            </a>
            <a
              className="movement-profile-message"
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message
            </a>
          </div>
        </div>
      </article>

      {feedQuests.length > 0 && (
        <section id="hyperfixations" className="side-block side-block--move">
          <SideSectionHead
            side="move"
            label={movementStory.feedLabel}
            title="Hyperfixations"
            lede="The practices I keep coming back to."
          />
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
        <section id="sidequests" className="side-block side-block--move">
          <SideSectionHead
            side="move"
            label={movementStory.highlightsLabel}
            title="Other Side Quests"
            lede="Everything else in rotation."
          />
          <div className="sidequest-link-grid sidequest-link-grid--editorial" role="list">
            {highlightQuests.map((quest) => (
              <React.Fragment key={quest.title}>
                <SidequestLink
                  quest={quest}
                  href={links.instagram}
                  publicUrl={publicUrl}
                  variant="editorial"
                />
                <SidequestCompactMobile
                  quest={quest}
                  href={links.instagram}
                  publicUrl={publicUrl}
                />
              </React.Fragment>
            ))}
          </div>
        </section>
      )}

      <section id="movement-activity" className="side-block side-block--move">
        <SideSectionHead side="move" label="activity" title="On the Feed" />
        <InstagramWidget embedded />
      </section>
    </section>
  );
};

export default MovementSide;
