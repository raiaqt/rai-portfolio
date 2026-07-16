import React from "react";
import Header from "../../components/Header/Header";
import InstagramWidget from "../../components/InstagramWidget/InstagramWidget";
import data from "../../../custom/data";
import "./Introduction.scss";

const Introduction: React.FC = () => {
  const { introduction, links } = data;
  const { nerdSide, movementSide } = introduction;

  return (
    <div id="introduction" className="introduction">
      <div className="introduction-orb introduction-orb--pink" aria-hidden="true" />
      <div className="introduction-orb introduction-orb--mint" aria-hidden="true" />
      <div className="introduction-orb introduction-orb--coral" aria-hidden="true" />
      <Header />
      <div className="introduction-inner">
        <div className="introduction-hero-panel">
          <div className="introduction-main">
            <h1 className="introduction-name">
              <span className="name-soft">{introduction.title.slice(0, 3)}</span>
              <span className="name-strong">{introduction.title.slice(3)}</span>
            </h1>

            <p className="introduction-roles">
              <span className="role-dev">{nerdSide.badge}</span>
              <span className="role-x" aria-hidden="true">×</span>
              <span className="role-movement">{movementSide.badge}</span>
            </p>

            <p className="introduction-tagline">
              <span className="tagline-bracket">&lt;</span>
              {nerdSide.tagline}
              <span className="tagline-bracket"> /&gt;</span>
              <span className="tagline-cursor" aria-hidden="true">_</span>
            </p>
            <a
              className="introduction-link"
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {links.website.replace("https://", "")}
            </a>
          </div>

          <div className="introduction-bridge" aria-hidden="true" />

          <aside className="introduction-aside">
            <InstagramWidget />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
