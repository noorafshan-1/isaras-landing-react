import { useEffect } from "react";

export const useScrollMitigation = () => {
  useEffect(() => {
    
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;

    const SCROLL_PAUSE_MS = 180;

    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".parallax-effect, .rotate-anim, .rotate-mitigation"
      )
    );

    let ticking = false;

    function onScrollStart() {
      document.documentElement.classList.add("is-scrolling");
    }

    function onScrollStop() {
      document.documentElement.classList.remove("is-scrolling");
    }

    function rafHandler() {
      const sy = window.scrollY;

      parallaxEls.forEach((el) => {
        const v = parseFloat(el.dataset.parallaxValue || "0.5");
        const ty = Math.round((sy * v) / 100);
        el.style.transform = `translate3d(0, ${ty}px, 0)`;
      });

      ticking = false;
    }

    const onScroll = () => {
      onScrollStart();

      if (!ticking) {
        requestAnimationFrame(rafHandler);
        ticking = true;
      }

      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(onScrollStop, SCROLL_PAUSE_MS);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    document
      .querySelectorAll("figure[data-ns-animate] img, .rotate-anim")
      .forEach((img) => img.classList.add("rotate-mitigation"));

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
};
