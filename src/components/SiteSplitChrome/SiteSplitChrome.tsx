import React from "react";
import data from "../../../custom/data";
import "./SiteSplitChrome.scss";

const SiteSplitChrome: React.FC = () => {
  const { introduction } = data;

  return (
    <>
      <div className="site-split-hem" aria-hidden="true">
        <span className="site-split-hem-half site-split-hem-half--build" />
        <span className="site-split-hem-half site-split-hem-half--move" />
      </div>

      <div className="site-split-chrome">
        <div className="site-split-chrome-col site-split-chrome-col--build">
          <span className="site-split-chrome-badge site-split-chrome-badge--dev">
            {introduction.nerdSide.badge}
          </span>
          <span className="site-split-chrome-x" aria-hidden="true">
            ×
          </span>
          <span className="site-split-chrome-title">Build</span>
        </div>

        <div className="site-split-chrome-rail" aria-hidden="true" />

        <div className="site-split-chrome-col site-split-chrome-col--move">
          <span className="site-split-chrome-badge site-split-chrome-badge--move">
            {introduction.movementSide.badge}
          </span>
          <span className="site-split-chrome-x" aria-hidden="true">
            ×
          </span>
          <span className="site-split-chrome-title">Movement</span>
        </div>
      </div>
    </>
  );
};

export default SiteSplitChrome;
