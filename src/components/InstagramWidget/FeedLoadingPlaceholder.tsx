import React from "react";
import "./FeedLoadingPlaceholder.scss";

type FeedLoadingPlaceholderProps = {
  variant?: "hero" | "embedded";
};

const PLACEHOLDER_POSTS = 4;

const FeedLoadingPlaceholder: React.FC<FeedLoadingPlaceholderProps> = ({
  variant = "hero",
}) => (
  <div
    className={`social-feed-placeholder social-feed-placeholder--${variant}`}
    role="status"
    aria-live="polite"
    aria-label="Loading Instagram feed"
  >
    <div className="social-feed-placeholder-grid" aria-hidden="true">
      {Array.from({ length: PLACEHOLDER_POSTS }, (_, index) => (
        <article key={index} className="social-feed-placeholder-card">
          <div className="social-feed-placeholder-media" />
          <div className="social-feed-placeholder-body">
            <div className="social-feed-placeholder-line social-feed-placeholder-line--long" />
            <div className="social-feed-placeholder-line social-feed-placeholder-line--short" />
            <div className="social-feed-placeholder-actions">
              <span />
              <span />
              <span />
            </div>
          </div>
        </article>
      ))}
    </div>

    <div className="social-feed-placeholder-carousel" aria-hidden="true">
      <span className="social-feed-placeholder-dot social-feed-placeholder-dot--active" />
      <span className="social-feed-placeholder-dot" />
      <span className="social-feed-placeholder-dot" />
    </div>
  </div>
);

export default FeedLoadingPlaceholder;
