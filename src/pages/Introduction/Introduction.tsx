import React from "react";
import "./Introduction.css";
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";

const Introduction: React.FC = () => {
  return (
    <div className="introduction">
      <ParticleBackground />
      <div className="introduction-content">
        <h1 className="introduction-text">
          R<span className="highlight-text">AI</span>A
        </h1>
        <p className="introduction-text-p section-subtitle">
          Software
          <span className="highlight-text"> Developer •</span> Not a
          <span className="highlight-text"> Robot </span>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
