import React from "react";
import "./Footer.scss";
import UpSvg from "../../assets/icons/UpSvg";

const Footer: React.FC = () => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer">
      <button
        className="footer-button"
        onClick={() => handleClickScroll("introduction")}
      >
        <UpSvg />
      </button>
    </div>
  );
};

export default Footer;
