import { useEffect } from "react";

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
    SplitText?: any;
    MotionPathPlugin?: any;
  }
}

export const useGsapAnimations = () => {
  useEffect(() => {
   
    const gsap = window.gsap;
    if (!gsap) {
      console.warn("GSAP not found on window. Make sure /vendor/gsap.min.js is loaded in index.html");
      return;
    }

    
    const ScrollTrigger = window.ScrollTrigger || gsap.plugins?.ScrollTrigger;
    const SplitText = (window as any).SplitText || gsap.plugins?.SplitText;
    const MotionPathPlugin = window.MotionPathPlugin || gsap.plugins?.MotionPathPlugin;

   
    try {
      if (ScrollTrigger && !gsap.core.plugins.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      if (SplitText && !gsap.core.plugins.SplitText) gsap.registerPlugin(SplitText);
      if (MotionPathPlugin && !gsap.core.plugins.MotionPathPlugin) gsap.registerPlugin(MotionPathPlugin);
    } catch (e) {
      
    }

    
    const nsEls = Array.from(document.querySelectorAll<HTMLElement>("[data-ns-animate]"));

    nsEls.forEach((el) => {
     
      if ((el as any).__ns_gsap_init) return;
      (el as any).__ns_gsap_init = true;

      const delay = parseFloat(el.getAttribute("data-delay") || "0");
      const direction = el.getAttribute("data-direction") || "up";

      let fromVars: any = { autoAlpha: 0, y: 12 };
      if (direction === "left") fromVars = { autoAlpha: 0, x: -18 };
      if (direction === "right") fromVars = { autoAlpha: 0, x: 18 };
      if (direction === "up") fromVars = { autoAlpha: 0, y: 12 };
      if (direction === "down") fromVars = { autoAlpha: 0, y: -12 };

      
      if (ScrollTrigger) {
        gsap.from(el, {
          ...fromVars,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        });
      } else {
       
        gsap.from(el, { ...fromVars, duration: 0.8, delay, ease: "power3.out" });
      }
    });

   
    try {
      const splitEls = Array.from(document.querySelectorAll<HTMLElement>("[data-split]"));
      splitEls.forEach((el) => {
        if (!SplitText) return;
        if ((el as any).__ns_split_init) return;
        (el as any).__ns_split_init = true;

        const split = new (SplitText as any)(el, { type: "lines,words,chars", linesClass: "split-line" });
        gsap.from(split.chars, {
          duration: 0.8,
          autoAlpha: 0,
          y: 12,
          stagger: 0.02,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    } catch (e) {
  
    }

   
    return () => {
      try {
        if (ScrollTrigger && ScrollTrigger.getAll) {
          
          ScrollTrigger.refresh();
        }
      } catch (e) {}
    };
  }, []);
};
