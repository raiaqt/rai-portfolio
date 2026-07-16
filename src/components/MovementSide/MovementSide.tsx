import React from "react";
import data from "../../../custom/data";
import SideColumnMasthead from "../SideColumnMasthead/SideColumnMasthead";
import SideSectionHead from "../SideSectionHead/SideSectionHead";
import "../SideSectionHead/SideSectionHead.scss";
import "./MovementSide.scss";

type Sidequest = (typeof data.sidequests)[number];

const HeartIcon: React.FC = () => (
  <svg className="ig-post-action-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.216.576.433.876.645 2.053 1.508 4.011 2.938 4.109 3.004a1.05 1.05 0 0 0 .746.288 1.05 1.05 0 0 0 .746-.288c.098-.066 2.056-1.496 4.109-3.004.3-.212.593-.429.876-.645C21.45 14.949 24 12.733 24 9.122a6.985 6.985 0 0 0-7.208-6.218" />
  </svg>
);

const CommentIcon: React.FC = () => (
  <svg className="ig-post-action-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ShareIcon: React.FC = () => (
  <svg className="ig-post-action-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 3 9.218 15.218M22 3l-7 19-4-8-8-4 19-7Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const GalleryIcon: React.FC = () => (
  <svg className="ig-post-media-icon" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M7 5V3h12v14h-2" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const InstagramBadge: React.FC<{ id: string }> = ({ id }) => (
  <svg className="ig-post-badge" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id={id} x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill={`url(#${id})`} />
    <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" />
  </svg>
);

type SidequestPostProps = {
  quest: Sidequest;
  username: string;
  profilePhoto: string;
  instagramUrl: string;
  publicUrl: string;
  featured?: boolean;
  tag?: string;
};

const SidequestPost: React.FC<SidequestPostProps> = ({
  quest,
  username,
  profilePhoto,
  instagramUrl,
  publicUrl,
  featured = false,
  tag,
}) => (
  <article
    className={`ig-post-card${featured ? " ig-post-card--featured" : ""}`}
    role="listitem"
  >
    {tag && <span className="ig-post-card-tag">{tag}</span>}

    <a
      className={`ig-post-card-media ig-post-card-media--${quest.aspect}`}
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${quest.title} on Instagram`}
    >
      <img src={`${publicUrl}/images/${quest.image}`} alt={quest.title} loading="lazy" />
      <span className="ig-post-card-media-badge">
        <GalleryIcon />
      </span>
    </a>

    <div className="ig-post-card-body">
      <p className="ig-post-card-caption">
        <strong>{quest.title}</strong> {quest.text}
      </p>
      <p className="ig-post-card-journey">
        <span>Started {quest.started}</span>
        <span aria-hidden="true">·</span>
        <span>{quest.progress}</span>
      </p>

      <div className="ig-post-card-user">
        <img
          className="ig-post-card-avatar"
          src={`${publicUrl}/images/${profilePhoto}`}
          alt=""
          width={28}
          height={28}
        />
        <div className="ig-post-card-user-meta">
          <span className="ig-post-card-handle">@{username}</span>
          <span className="ig-post-card-since">since {quest.started}</span>
        </div>
        <InstagramBadge id={`ig-badge-${quest.title.toLowerCase()}`} />
      </div>

      <div className="ig-post-card-actions">
        <span className="ig-post-card-action">
          <HeartIcon />
          {quest.likes}
        </span>
        <span className="ig-post-card-action">
          <CommentIcon />
          {quest.comments}
        </span>
        <span className="ig-post-card-action ig-post-card-action--share">
          <ShareIcon />
        </span>
      </div>
    </div>
  </article>
);

const MovementSide: React.FC = () => {
  const { instagram, links, sidequests, movementStory, introduction } = data;
  const publicUrl = import.meta.env.VITE_PUBLIC_URL;
  const focusQuest = sidequests.find((quest) => quest.title === movementStory.focus);
  const otherSidequests = sidequests.filter((quest) => quest.title !== movementStory.focus);

  return (
    <section
      id="movement-side"
      className="movement-side"
      aria-label="Movement side: Instagram profile and movement story"
    >
      <SideColumnMasthead side="move" />

      <article id="movement-profile" className="side-block side-block--move side-block--profile">
        <div className="instagram-profile">
          <div className="instagram-profile-header">
            <div className="instagram-profile-avatar-wrap">
              <div className="instagram-profile-avatar">
                <img
                  src={`${publicUrl}/images/${instagram.profilePhoto}`}
                  alt={instagram.profileLabel}
                  width={72}
                  height={72}
                />
              </div>
            </div>

            <div className="instagram-profile-stats" aria-hidden="true">
              <div className="instagram-profile-stat">
                <span className="instagram-profile-stat-value">{sidequests.length}</span>
                <span className="instagram-profile-stat-label">posts</span>
              </div>
              <div className="instagram-profile-stat">
                <span className="instagram-profile-stat-value">∞</span>
                <span className="instagram-profile-stat-label">adventures</span>
              </div>
            </div>
          </div>

          <div className="instagram-profile-body">
            <a
              className="instagram-profile-username"
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{instagram.username}
            </a>
            <p className="instagram-profile-name">{instagram.profileLabel}</p>
            <p className="instagram-profile-bio">{introduction.movementSide.tagline}</p>
            <p className="instagram-profile-meta">{instagram.tagline}</p>
            <a
              className="instagram-profile-follow"
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow
            </a>
          </div>

          <section id="movement-story" className="movement-story" aria-label="Movement story">
            <SideSectionHead side="move" label="story" title="Story" />

            {focusQuest && (
              <div className="movement-story-focus" role="list">
                <SidequestPost
                  quest={focusQuest}
                  username={instagram.username}
                  profilePhoto={instagram.profilePhoto}
                  instagramUrl={links.instagram}
                  publicUrl={publicUrl}
                  featured
                  tag="current hyperfixation"
                />
              </div>
            )}

            {otherSidequests.length > 0 && (
              <div id="sidequests" className="movement-story-sidequests">
                <span className="movement-story-sidequests-label">other sidequests</span>
                <div className="ig-post-grid" role="list" aria-label="Other sidequests">
                  {otherSidequests.map((quest) => (
                    <SidequestPost
                      key={quest.title}
                      quest={quest}
                      username={instagram.username}
                      profilePhoto={instagram.profilePhoto}
                      instagramUrl={links.instagram}
                      publicUrl={publicUrl}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>

          <a
            className="instagram-profile-link"
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
