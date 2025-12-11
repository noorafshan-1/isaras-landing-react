import { useEffect } from "react";

declare global {
  interface Window {
    Lenis?: any;
    gsap?: any;
    ScrollTrigger?: any;
  }
}

export const useLenisSmoothScroll = (opts?: { enabled?: boolean; duration?: number; easing?: string }) => {
  useEffect(() => {
    if (opts?.enabled === false) return;
    const Lenis = (window as any).Lenis;
    if (!Lenis) {
     
      return;
    }

    const lenis = new Lenis({
      duration: opts?.duration ?? 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

  
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger || (gsap && gsap.plugins && gsap.plugins.ScrollTrigger);
    if (ScrollTrigger && lenis) {
      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value?: number) {
          if (arguments.length) {
            lenis.scrollTo(value);
          }
          return lenis.scroll;
        },
      });
     
      setTimeout(() => {
        try {
          ScrollTrigger.refresh();
        } catch {}
      }, 60);
    }

    return () => {
      try {
        if (lenis && typeof lenis.destroy === "function") lenis.destroy();
      } catch {}
    };
  }, [opts?.enabled]);
};
