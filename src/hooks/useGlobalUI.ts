import { useEffect } from "react";
import { useGsapAnimations } from "./useGsapAnimations";
import { useLenisSmoothScroll } from "./useLenisSmoothScroll";
import { useStackCards } from "./useStackCards";

export const useGlobalUI = () => {
  useGsapAnimations();
  useLenisSmoothScroll({ enabled: true });
  useStackCards();

  useEffect(() => {
    document.querySelectorAll("figure[data-ns-animate] img, .rotate-anim").forEach((img) => img.classList.add("rotate-mitigation"));
  }, []);
};
