import React from "react";
import "./SideSectionHead.scss";

type SideSectionHeadProps = {
  side: "build" | "move";
  label: string;
  title: string;
  lede?: string;
};

const SideSectionHead: React.FC<SideSectionHeadProps> = ({ side, label, title, lede }) => {
  return (
    <div className={`side-section-head side-section-head--${side}`}>
      <span className="side-section-label">{label}</span>
      <h3 className="side-section-title">{title}</h3>
      {lede && <p className="side-section-lede">{lede}</p>}
    </div>
  );
};

export default SideSectionHead;
