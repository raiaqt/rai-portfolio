import { useEffect, useRef } from "react";

type UseSlowAutoScrollOptions = {
  enabled?: boolean;
  speed?: number;
  pauseAtEndMs?: number;
  resumeDelayMs?: number;
  pauseOnInteraction?: boolean;
};

export function useSlowAutoScroll({
  enabled = true,
  speed = 0.16,
  pauseAtEndMs = 2400,
  resumeDelayMs = 1200,
  pauseOnInteraction = true,
}: UseSlowAutoScrollOptions = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const element = scrollRef.current;
    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      return;
    }

    let frame = 0;
    let paused = true;
    let pauseUntil = 0;
    let hovering = false;
    let inView = false;
    let autoScrolling = false;
    let resumeTimer: number | undefined;

    const setScrollTop = (value: number) => {
      autoScrolling = true;
      element.scrollTop = value;
      window.requestAnimationFrame(() => {
        autoScrolling = false;
      });
    };

    const pause = (durationMs = 0) => {
      paused = true;
      pauseUntil = durationMs > 0 ? performance.now() + durationMs : Number.POSITIVE_INFINITY;
    };

    const resume = () => {
      paused = false;
      pauseUntil = 0;
    };

    const scheduleResume = () => {
      if (resumeTimer) {
        window.clearTimeout(resumeTimer);
      }

      resumeTimer = window.setTimeout(() => {
        if (!hovering) {
          resume();
        }
      }, resumeDelayMs);
    };

    const onPointerEnter = () => {
      hovering = true;
      pause();
    };

    const onPointerLeave = () => {
      hovering = false;
      scheduleResume();
    };

    const onUserScroll = () => {
      if (autoScrolling) {
        return;
      }

      pause();
      scheduleResume();
    };

    const viewObserver = new IntersectionObserver(
      (entries) => {
        inView = entries.some((entry) => entry.isIntersecting);
        if (!inView) {
          pause();
        } else if (!hovering) {
          scheduleResume();
        }
      },
      { threshold: 0.15 }
    );

    viewObserver.observe(element);

    const tick = (now: number) => {
      if (pauseUntil > 0 && now >= pauseUntil) {
        const maxScroll = element.scrollHeight - element.clientHeight;
        if (element.scrollTop >= maxScroll - 2) {
          setScrollTop(0);
        }
        resume();
      }

      const maxScroll = element.scrollHeight - element.clientHeight;
      if (!paused && inView && maxScroll > 8) {
        const nextScrollTop = element.scrollTop + speed;
        if (nextScrollTop >= maxScroll) {
          setScrollTop(maxScroll);
          pause(pauseAtEndMs);
        } else {
          setScrollTop(nextScrollTop);
        }
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    if (pauseOnInteraction) {
      element.addEventListener("mouseenter", onPointerEnter);
      element.addEventListener("mouseleave", onPointerLeave);
      element.addEventListener("focusin", onPointerEnter);
      element.addEventListener("focusout", onPointerLeave);
      element.addEventListener("touchstart", onPointerEnter, { passive: true });
      element.addEventListener("touchend", onUserScroll, { passive: true });
      element.addEventListener("wheel", onUserScroll, { passive: true });
    }

    const startTimer = window.setTimeout(() => {
      if (!hovering) {
        resume();
      }
    }, 600);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(startTimer);
      if (resumeTimer) {
        window.clearTimeout(resumeTimer);
      }
      viewObserver.disconnect();
      if (pauseOnInteraction) {
        element.removeEventListener("mouseenter", onPointerEnter);
        element.removeEventListener("mouseleave", onPointerLeave);
        element.removeEventListener("focusin", onPointerEnter);
        element.removeEventListener("focusout", onPointerLeave);
        element.removeEventListener("touchstart", onPointerEnter);
        element.removeEventListener("touchend", onUserScroll);
        element.removeEventListener("wheel", onUserScroll);
      }
    };
  }, [enabled, speed, pauseAtEndMs, resumeDelayMs, pauseOnInteraction]);

  return scrollRef;
}
