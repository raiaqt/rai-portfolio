import React from "react";
import data from "../../../custom/data";
import { useElfsightFeedReady, useElfsightPlatform } from "../../hooks/useElfsightFeed";
import "./LinkedInWidget.scss";

type LinkedInWidgetProps = {
  embedded?: boolean;
};

const LinkedInWidget: React.FC<LinkedInWidgetProps> = ({ embedded = false }) => {
  const { linkedinFeed, links } = data;
  useElfsightPlatform();
  const { embedRef, isLoading } = useElfsightFeedReady();

  const feed = (
    <>
      <div className="social-feed-scroll-wrap">
        <div className="social-feed-scroll">
          <div
            ref={embedRef}
            className={`social-feed-embed ${
              isLoading ? "social-feed-embed--loading" : "social-feed-embed--ready"
            }`}
          >
            {isLoading && (
              <div
                className="social-feed-loader"
                role="status"
                aria-live="polite"
                aria-label="Loading LinkedIn feed"
              >
                <div className="social-feed-loader-ring" aria-hidden="true" />
                <span className="social-feed-loader-text">loading feed</span>
              </div>
            )}
            <div className={`elfsight-app-${linkedinFeed.elfsightAppId}`} />
          </div>
        </div>
        <div className="social-feed-fade" aria-hidden="true" />
      </div>

      <a
        className="social-feed-see-more"
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkedinFeed.seeMoreLabel}
        <span className="social-feed-see-more-arrow" aria-hidden="true">
          →
        </span>
      </a>
    </>
  );

  if (embedded) {
    return <div className="social-feed social-feed--linkedin social-feed--embedded">{feed}</div>;
  }

  return (
    <div className="social-feed social-feed--linkedin">
      <div className="social-feed-header">
        <span className="social-feed-label">on linkedin</span>
        <a
          className="social-feed-handle"
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkedinFeed.profileLabel}
        </a>
      </div>
      <div className="social-feed-body">{feed}</div>
    </div>
  );
};

export default LinkedInWidget;
