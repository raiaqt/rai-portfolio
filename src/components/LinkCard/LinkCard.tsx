import React from "react";
import GithubSvg from "../../assets/icons/GithubSvg";
import LinkSvg from "../../assets/icons/LinkSvg";
import "./LinkCard.scss";

interface LinkCardProps {
  card: {
    title: string;
    text?: string;
    from?: string;
    category?: string;
    link: string;
    year: string;
    github: boolean;
    image?: string;
  };
  variant?: "default" | "linkedin" | "client";
}

const LinkCard: React.FC<LinkCardProps> = ({ card, variant = "default" }) => {
  const domain = card.link
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "")
    .replace(/^www\./, "");

  const isLinkedInStyle = variant === "linkedin" || variant === "client";
  const isClient = variant === "client";
  const isPersonalProject = variant === "linkedin";

  return (
    <a
      className={`link-card link-card--${variant}`}
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="link-card-image">
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}/images/${card.image || "placeholder.png"}`}
          alt={card.title}
        />
      </div>
      <div className="link-card-content">
        {isClient || isPersonalProject ? (
          <div className="link-card-text">
            <span className="item-title">{card.title}</span>
            {card.from && <span className="item-from">{card.from}</span>}
            {card.text && <span className="item-text">{card.text}</span>}
            {isClient && (
              <span className="client-project-action">
                View live project
                <span aria-hidden="true">↗</span>
              </span>
            )}
          </div>
        ) : (
          <>
            <div className="link-card-text">
              <span className="item-title">{card.title}</span>
              {card.from && <span className="item-from">{card.from}</span>}
              {card.text && <span className="item-text">{card.text}</span>}
              {isLinkedInStyle ? (
                <span className="item-text muted-text">{domain} · {card.year}</span>
              ) : (
                <span className="item-text muted-text">Created {card.year}</span>
              )}
            </div>
            <div className="link-card-icon">
              {card.github ? <GithubSvg /> : <LinkSvg />}
            </div>
          </>
        )}
      </div>
    </a>
  );
};

export default LinkCard;
