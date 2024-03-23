import React from "react";
import Header from "../../components/Header/Header";
import data from "../../../custom/data";
import "./Introduction.scss";

const Introduction: React.FC = () => {
  const { introduction } = data;

  return (
    <div id="introduction" className="introduction">
      <Header />
      <div className="introduction-content">
        <h1 className="introduction-text highlight-text">{introduction.title}</h1>
        <p className="introduction-text-p light-text section-subtitle">
          {introduction.text}
        </p>
      </div>
    </div>
  );
};

export default Introduction;
