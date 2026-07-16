import React from "react";
import data from "../../../custom/data";
import "./SideColumnMasthead.scss";

type SideColumnMastheadProps = {
  side: "build" | "move";
};

const SideColumnMasthead: React.FC<SideColumnMastheadProps> = ({ side }) => {
  const copy = data.columnSides[side];
  const titlePrefix = copy.title.slice(0, copy.title.length - copy.titleAccent.length);

  return (
    <header className={`side-masthead side-masthead--${side}`}>
      <span className="side-masthead-side">{copy.sideLabel}</span>
      <h2 className="side-masthead-title">
        {titlePrefix}
        <span className="side-masthead-accent">{copy.titleAccent}</span>
      </h2>
      <div className="side-masthead-meta">
        <span className="side-masthead-badge">{copy.badge}</span>
        <span className="side-masthead-platform">on {copy.platform}</span>
      </div>
    </header>
  );
};

export default SideColumnMasthead;
