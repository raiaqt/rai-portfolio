import { useLayoutEffect, useRef } from "react";

export function useTimelineSpine<T extends HTMLElement>(dependencyKey = 0) {
  const timelineRef = useRef<T>(null);

  useLayoutEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) {
      return;
    }

    const updateSpine = () => {
      const nodes = timeline.querySelectorAll<HTMLElement>(".build-timeline-node");
      if (nodes.length === 0) {
        return;
      }

      const timelineRect = timeline.getBoundingClientRect();
      const firstNode = nodes[0].getBoundingClientRect();
      const lastNode = nodes[nodes.length - 1].getBoundingClientRect();

      const top = firstNode.top + firstNode.height / 2 - timelineRect.top;
      const bottom = timelineRect.bottom - (lastNode.top + lastNode.height / 2);

      timeline.style.setProperty("--timeline-spine-top", `${top}px`);
      timeline.style.setProperty("--timeline-spine-bottom", `${bottom}px`);
    };

    updateSpine();

    const resizeObserver = new ResizeObserver(updateSpine);
    resizeObserver.observe(timeline);

    window.addEventListener("resize", updateSpine);
    document.fonts?.ready.then(updateSpine).catch(() => undefined);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSpine);
    };
  }, [dependencyKey]);

  return timelineRef;
}
