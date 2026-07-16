import React from "react";
import data from "../../../custom/data";
import "./SiteColumnHeader.scss";

type SiteColumnHeaderProps = {
  side: "nerd" | "movement";
};

const SiteColumnHeader: React.FC<SiteColumnHeaderProps> = ({ side }) => {
  const { description, introduction, movementPillars } = data;
  const isNerd = side === "nerd";
  const sideCopy = isNerd ? introduction.nerdSide : introduction.movementSide;

  return (
    <header className={`column-header column-header--${side}`}>
      <span className="column-header-side">{sideCopy.label}</span>
      <span className="column-header-label">{isNerd ? "build" : "move"}</span>
      <h2 className="column-header-title">
        {isNerd ? (
          <>
            Bu<span className="column-header-accent">ild</span>
          </>
        ) : (
          <>
            Move<span className="column-header-accent">ment</span>
          </>
        )}
      </h2>
      <p className="column-header-intro">
        {isNerd ? description.developer : description.movement}
      </p>
      <p className="column-header-hint">{sideCopy.hint}</p>
      {isNerd ? (
        <p className="column-header-meta">{description.aside}</p>
      ) : (
        <ul className="column-header-tags" aria-label="Movement pillars">
          {movementPillars.map((pillar) => (
            <li key={pillar}>{pillar}</li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default SiteColumnHeader;
