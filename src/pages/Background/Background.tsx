import React from "react";
import data from "../../../custom/data";
import "./Background.scss";

const Background: React.FC = () => {
  const { background } = data;

  return (
    <div id="background" className="background section">
      <span className="section-title light-text">
        Bac<span className="highlight-text">kgro</span>und
      </span>
      {background.map((item) => (
        <div key={item.title} className="background-card light-background">
          <div className="background-title">
            <span className="item-title muted-text">{item.title}</span>
          </div>
          <div className="background-text">
            <span className="item-title">{item.data.title}</span>
            <span className="item-text">{item.data.subtitle}</span>
            {item.data.text.map((text) => (
              <span key={text} className="item-text muted-text">{text}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Background;
