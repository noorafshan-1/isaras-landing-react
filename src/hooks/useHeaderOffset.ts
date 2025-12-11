import { useEffect } from "react";

export const useHeaderOffset = () => {
  useEffect(() => {
    const HEADER_SELECTOR = "header";
    const EXTRA_GAP = 12;
    const DEBOUNCE_MS = 120;

   
    const win = window as unknown as {
      _headerTimeout?: ReturnType<typeof setTimeout>;
    };

    function computeHeaderOffset() {
      const hdr = document.querySelector(HEADER_SELECTOR) as HTMLElement | null;
      if (!hdr) return 0;

      const cs = getComputedStyle(hdr);
      const pos = cs.position;
      const rect = hdr.getBoundingClientRect();
      const topVal = parseFloat(cs.top) || 0;

      return pos === "fixed" || pos === "sticky"
        ? Math.ceil(rect.height + topVal)
        : 0;
    }

    function applyHeaderVar() {
      const offset = computeHeaderOffset();
      document.documentElement.style.setProperty(
        "--header-offset",
        `${offset + EXTRA_GAP}px`
      );
    }

    window.addEventListener("load", applyHeaderVar);
    window.addEventListener("resize", () => {
      if (win._headerTimeout) clearTimeout(win._headerTimeout);
      win._headerTimeout = setTimeout(applyHeaderVar, DEBOUNCE_MS);
    });

    applyHeaderVar();

   
    const clickHandler = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement | null;
      if (!target) return;

      const a = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      const section = document.getElementById(id);

      ev.preventDefault();
      if (!section) return;

      section.scrollIntoView({ behavior: "smooth", block: "start" });

      if (history.pushState) history.pushState(null, "", "#" + id);
      else window.location.hash = id;
    };

    document.addEventListener("click", clickHandler, { passive: false });

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);
};
