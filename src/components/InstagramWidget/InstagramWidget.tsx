import React from "react";
import data from "../../../custom/data";
import { useElfsightFeedReady, useElfsightPlatform } from "../../hooks/useElfsightFeed";
import { useSlowAutoScroll } from "../../hooks/useSlowAutoScroll";
import FeedLoadingPlaceholder from "./FeedLoadingPlaceholder";
import "./InstagramWidget.scss";

type InstagramWidgetProps = {
  embedded?: boolean;
};

const InstagramWidget: React.FC<InstagramWidgetProps> = ({ embedded = false }) => {
  const { instagram, links } = data;
  useElfsightPlatform();
  const { embedRef, isLoading } = useElfsightFeedReady();
  const scrollRef = useSlowAutoScroll({
    enabled: !isLoading,
    speed: 0.45,
    pauseAtEndMs: 500,
    resumeDelayMs: 0,
    pauseOnInteraction: false,
  });

  const feed = (
    <>
      <div className="social-feed-scroll-wrap">
        <div className="social-feed-scroll" ref={scrollRef}>
          <div
            ref={embedRef}
            className={`social-feed-embed ${
              isLoading ? "social-feed-embed--loading" : "social-feed-embed--ready"
            }`}
          >
            {isLoading && (
              <FeedLoadingPlaceholder variant={embedded ? "embedded" : "hero"} />
            )}
            <div className={`elfsight-app-${instagram.elfsightAppId}`} />
          </div>
        </div>
        <div className="social-feed-fade" aria-hidden="true" />
      </div>

      <a
        className="social-feed-see-more"
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        {instagram.seeMoreLabel}
        <span className="social-feed-see-more-arrow" aria-hidden="true">
          →
        </span>
      </a>
    </>
  );

  if (embedded) {
    return <div className="social-feed social-feed--instagram social-feed--embedded">{feed}</div>;
  }

  return (
    <div className="social-feed social-feed--hero">
      <div className="social-feed-header">
        <span className="social-feed-label">on the feed</span>
        <a
          className="social-feed-handle"
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{instagram.username}
        </a>
      </div>
      <div className="social-feed-body">{feed}</div>
    </div>
  );
};

export default InstagramWidget;
