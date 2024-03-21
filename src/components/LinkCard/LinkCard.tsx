import React from "react"
import GithubSvg from '../../assets/icons/GithubSvg'
import LinkSvg from "../../assets/icons/LinkSvg"
import "./LinkCard.css"

interface LinkCardProps {
  card: { title: string; text: string; link: string; github: boolean };
}

const LinkCard: React.FC<LinkCardProps> = ({ card }) => {
  return (
    <div className="link-card">
      <div className="link-card-text">
        <span className="item-title">{card.title}</span>
        <span className="item-text">{card.text}</span>
        <span className="item-text muted-text">Created 2023</span>
      </div>
      <div className="link-card-icon">
        {card.github ? <GithubSvg /> : <LinkSvg />}
      </div>
    </div>
  );
};

export default LinkCard;
