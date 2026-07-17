import React from "react";
import data from "../../../custom/data";
import "./SiteSplitLead.scss";

const SiteSplitLead: React.FC = () => {
  const { siteSplit } = data;

  return (
    <header className="site-split-lead">
      <h2 className="site-split-lead-title">
        <span className="site-split-lead-label">{siteSplit.label}</span>
      </h2>
    </header>
  );
};

export default SiteSplitLead;
