import { useEffect, useRef, useState } from "react";

export const ELFSIGHT_SCRIPT = "https://elfsightcdn.com/platform.js";
export const ELFSIGHT_LOAD_TIMEOUT_MS = 5000;

type ElfsightWindow = Window & {
  eapps?: { initialize?: () => void };
};

let initScheduled = false;

export function scheduleElfsightInit() {
  if (initScheduled) {
    return;
  }

  initScheduled = true;
  window.requestAnimationFrame(() => {
    initScheduled = false;
    (window as ElfsightWindow).eapps?.initialize?.();
  });
}

export function useElfsightPlatform() {
  useEffect(() => {
    const onScriptReady = () => {
      scheduleElfsightInit();
    };

    const existingScript = document.querySelector(
      `script[src="${ELFSIGHT_SCRIPT}"]`
    ) as HTMLScriptElement | null;

    if ((window as ElfsightWindow).eapps || existingScript?.dataset.loaded === "true") {
      onScriptReady();
      return;
    }

    if (existingScript) {
      existingScript.addEventListener("load", onScriptReady);
      return () => existingScript.removeEventListener("load", onScriptReady);
    }

    const script = document.createElement("script");
    script.src = ELFSIGHT_SCRIPT;
    script.async = true;
    script.onload = () => {
      script.dataset.loaded = "true";
      onScriptReady();
    };
    document.body.appendChild(script);
  }, []);
}

export function useElfsightFeedReady() {
  const embedRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    scheduleElfsightInit();
  }, []);

  useEffect(() => {
    const container = embedRef.current;
    if (!container) {
      return;
    }

    const refreshEmbed = () => {
      scheduleElfsightInit();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          refreshEmbed();
        }
      },
      { rootMargin: "120px", threshold: 0.01 }
    );

    observer.observe(container);
    window.addEventListener("orientationchange", refreshEmbed);
    window.addEventListener("resize", refreshEmbed);

    return () => {
      observer.disconnect();
      window.removeEventListener("orientationchange", refreshEmbed);
      window.removeEventListener("resize", refreshEmbed);
    };
  }, []);

  useEffect(() => {
    const container = embedRef.current;
    if (!container) {
      return;
    }

    let finished = false;
    let timeoutTimer: number | undefined;
    let observer: MutationObserver | undefined;

    const finishLoading = () => {
      if (finished) {
        return;
      }
      finished = true;
      setIsLoading(false);
    };

    const attachIframeListener = (iframe: HTMLIFrameElement) => {
      if (iframe.dataset.feedReady === "true") {
        return true;
      }

      iframe.dataset.feedReady = "true";
      iframe.addEventListener("load", finishLoading, { once: true });
      return true;
    };

    const findIframe = () => {
      const iframe = container.querySelector("iframe");
      if (iframe) {
        attachIframeListener(iframe);
        return true;
      }
      return false;
    };

    timeoutTimer = window.setTimeout(finishLoading, ELFSIGHT_LOAD_TIMEOUT_MS);

    if (!findIframe()) {
      observer = new MutationObserver(() => {
        if (findIframe()) {
          observer?.disconnect();
        }
      });
      observer.observe(container, { childList: true, subtree: true });
    }

    return () => {
      if (timeoutTimer) {
        window.clearTimeout(timeoutTimer);
      }
      observer?.disconnect();
    };
  }, []);

  return { embedRef, isLoading };
}
