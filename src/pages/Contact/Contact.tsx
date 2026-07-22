import React, { useState } from "react";
import InstagramSvg from "../../assets/icons/InstagramSvg";
import LinkedinSvg from "../../assets/icons/LinkedinSvg";
import ProjectInquiryForm from "../../components/ProjectInquiryForm/ProjectInquiryForm";
import data from "../../../custom/data";
import "./Contact.scss";

const Contact: React.FC = () => {
  const { links } = data;
  const [submittedName, setSubmittedName] = useState("");

  return (
    <footer id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-copy">
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

        <div className="contact-form-card">
          {submittedName ? (
            <div className="contact-form-success">
              <span aria-hidden="true">✓</span>
              <h3>Thanks, {submittedName}!</h3>
              <p>Your message is in my inbox. I’ll be in touch soon.</p>
              <button type="button" onClick={() => setSubmittedName("")}>
                Send another message
              </button>
            </div>
          ) : (
            <>
              <span className="contact-form-label">get in touch</span>
              <h3>Send me a message</h3>
              <ProjectInquiryForm
                onSuccess={setSubmittedName}
                labels={{
                  name: "Your name",
                  contact: "Email or Instagram handle",
                  message: "What would you like to talk about?",
                  submit: "Send message",
                }}
              />
            </>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
