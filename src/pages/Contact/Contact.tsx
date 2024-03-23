import React from "react";
import InstagramSvg from "../../assets/icons/InstagramSvg";
import GithubSvg from "../../assets/icons/GithubSvg";
import LinkedinSvg from "../../assets/icons/LinkedinSvg";
import GoogleSvg from "../../assets/icons/GoogleSvg";
import data from "../../../custom/data";
import "./Contact.scss";

const Contact: React.FC = () => {
  const { links } = data;

  return (
    <div id="contact" className="contact section light-background">
      <span className="section-title lowlight-text">
        Con<span className="dark-text">tact M</span>e
      </span>
      <div className="contact-icons">
        <a href={links.instagram} target="_blank">
          <InstagramSvg />
        </a>
        <a href={links.github} target="_blank">
          <GithubSvg />
        </a>
        <a href={links.linkedin} target="_blank">
          <LinkedinSvg />
        </a>
        <a href={links.gmail} target="_blank">
          <GoogleSvg />
        </a>
      </div>
    </div>
  );
};

export default Contact;
