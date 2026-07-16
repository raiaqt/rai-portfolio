import React from "react";
import data from "../../../custom/data";
import "./Background.scss";

const Background: React.FC = () => {
  const { background } = data;

  return (
    <section id="background" className="column-section column-section--nerd">
      <span className="column-section-label">background</span>
      <div className="background-list">
        {background.map((item) => (
          <div key={item.title} className="background-item">
            <span className="background-item-title">{item.title}</span>
            <span className="background-item-subtitle">{item.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Background;
