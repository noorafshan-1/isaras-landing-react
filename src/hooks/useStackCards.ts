import { useEffect } from "react";

declare global {
  interface Window {
    StackCard?: any;
  }
}

export const useStackCards = () => {
  useEffect(() => {
    const StackCard = (window as any).StackCard || (window as any).stackCard;
    if (!StackCard) return;

    
    const containers = Array.from(document.querySelectorAll<HTMLElement>(".js-stack-cards"));
    containers.forEach((container) => {
      try {
        
        if ((container as any).__stack_init) return;
        (container as any).__stack_init = true;
        new (StackCard as any)({ root: container });
      } catch (e) {
      
        try {
          (StackCard as any).init?.(container);
        } catch {
          console.warn("stack-card init failed", e);
        }
      }
    });
  }, []);
};
