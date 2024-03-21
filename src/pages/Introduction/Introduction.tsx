import React from "react";
import Header from "../../components/Header/Header";
import "./Introduction.css";

const Introduction: React.FC = () => {
  return (
    <div id="introduction" className="introduction">
      <Header />
      <div className="introduction-content">
        <h1 className="introduction-text light-text">
          R<span className="highlight-text">AI</span>A
        </h1>
        <p className="introduction-text-p light-text section-subtitle">
          Software
          <span className="highlight-text"> Developer •</span> Not a
          <span className="highlight-text"> Robot </span>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
