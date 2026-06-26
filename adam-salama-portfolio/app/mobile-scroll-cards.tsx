"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const cardSelector = "[data-mobile-scroll-card]";

export function MobileScrollCards() {
  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    let observer: IntersectionObserver | null = null;
    let frame = 0;

    const setup = () => {
      observer?.disconnect();

      const cards = Array.from(document.querySelectorAll<HTMLElement>(cardSelector));

      if (!mediaQuery.matches) {
        cards.forEach((card) => card.classList.add("is-mobile-scroll-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-mobile-scroll-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.18,
        },
      );

      cards.forEach((card) => {
        card.classList.remove("is-mobile-scroll-visible");
        observer?.observe(card);
      });
    };

    frame = window.requestAnimationFrame(setup);
    mediaQuery.addEventListener("change", setup);

    return () => {
      window.cancelAnimationFrame(frame);
      mediaQuery.removeEventListener("change", setup);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
