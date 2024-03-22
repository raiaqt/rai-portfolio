import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <button
        className="link-button light-text"
        onClick={() => handleClickScroll("projects")}
      >
        Projects |
      </button>
      <button
        className="link-button light-text"
        onClick={() => handleClickScroll("background")}
      >
        Background |
      </button>
      <button
        className="link-button light-text"
        onClick={() => handleClickScroll("contact")}
      >
        Contact me |
      </button>
    </div>
  );
};

export default Header;
