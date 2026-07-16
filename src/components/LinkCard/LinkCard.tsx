import React from "react";
import GithubSvg from "../../assets/icons/GithubSvg";
import LinkSvg from "../../assets/icons/LinkSvg";
import "./LinkCard.scss";

interface LinkCardProps {
  card: {
    title: string;
    text: string;
    link: string;
    year: string;
    github: boolean;
    image?: string;
  };
  variant?: "default" | "linkedin";
}

const LinkCard: React.FC<LinkCardProps> = ({ card, variant = "default" }) => {
  const domain = card.link.replace(/^https?:\/\//, "").replace(/\/.*$/, "");

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
        <div className="link-card-text">
          <span className="item-title">{card.title}</span>
          <span className="item-text">{card.text}</span>
          {variant === "linkedin" ? (
            <span className="item-text muted-text">{domain} · {card.year}</span>
          ) : (
            <span className="item-text muted-text">Created {card.year}</span>
          )}
        </div>
        <div className="link-card-icon">
          {card.github ? <GithubSvg /> : <LinkSvg />}
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
