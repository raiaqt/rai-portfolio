import React from "react";
import InstagramSvg from "../../assets/icons/InstagramSvg";
import LinkedinSvg from "../../assets/icons/LinkedinSvg";
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
          I would love to hear from you, whether you want to build an app together, talk about something you are working on, how you like to move, or just say hello.
        </p>
        <div className="contact-links">
          <a className="contact-email" href={links.gmail}>
            Email
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinSvg />
          </a>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramSvg />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
