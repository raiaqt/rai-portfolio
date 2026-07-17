import React from "react";
import InstagramSvg from "../../assets/icons/InstagramSvg";
import GithubSvg from "../../assets/icons/GithubSvg";
import LinkedinSvg from "../../assets/icons/LinkedinSvg";
import GoogleSvg from "../../assets/icons/GoogleSvg";
import LinkSvg from "../../assets/icons/LinkSvg";
import data from "../../../custom/data";
import "./Contact.scss";

const Contact: React.FC = () => {
  const { links } = data;

  return (
    <footer id="contact" className="contact">
      <div className="contact-inner">
        <span className="contact-label">say hello</span>
        <h2 className="contact-title">
          Con<span className="gradient-text">tact</span>
        </h2>
        <p className="contact-intro">
          I would love to hear from you, whether you want to talk about something you are building, how you like to move, or just say hello.
        </p>
        <div className="contact-icons">
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramSvg />
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubSvg />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinSvg />
          </a>
          <a href={links.gmail} target="_blank" rel="noopener noreferrer" aria-label="Email">
            <GoogleSvg />
          </a>
          <a href={links.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
            <LinkSvg />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
