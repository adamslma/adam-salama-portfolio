"use client";

import { type CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Dictionary } from "./i18n";
import { Plus } from "lucide-react";

type Project = Dictionary["achievements"][number];

type ProjectCardsProps = {
  projects: readonly Project[];
  labels: {
    close: string;
    open: string;
    technologies: string;
  };
};

const MIN_DESKTOP_IDLE_ROW_HEIGHT = 300;
const MIN_DESKTOP_ACTIVE_ROW_HEIGHT = 180;

type DesktopRowHeights = {
  idle: number;
  active: number;
};

type ProjectGridStyle = CSSProperties & {
  "--project-idle-row-height": string;
  "--project-active-row-height": string;
};

function getMinimizedPosition(activeIndex: number | null, index: number, isActive: boolean) {
  if (activeIndex === null || isActive) {
    return -1;
  }

  return index < activeIndex ? index : index - 1;
}

function areDesktopRowHeightsEqual(first: DesktopRowHeights, second: DesktopRowHeights) {
  return (
    Math.abs(first.idle - second.idle) <= 1 &&
    Math.abs(first.active - second.active) <= 1
  );
}

function measureCardContentHeight(card: HTMLButtonElement, isActive: boolean) {
  const cardRect = card.getBoundingClientRect();
  const measuredCard = card.cloneNode(true) as HTMLButtonElement;

  measuredCard.removeAttribute("data-project-animating");
  measuredCard.style.position = "absolute";
  measuredCard.style.inset = "0 auto auto -10000px";
  measuredCard.style.visibility = "hidden";
  measuredCard.style.pointerEvents = "none";
  measuredCard.style.width = `${cardRect.width}px`;
  measuredCard.style.height = "auto";
  measuredCard.style.minHeight = "0";
  measuredCard.style.transform = "none";
  measuredCard.style.transition = "none";

  measuredCard.querySelectorAll<HTMLElement>("*").forEach((element) => {
    element.style.transition = "none";
    element.style.animation = "none";
  });

  const detailsElement = measuredCard.querySelector<HTMLElement>("[data-project-card-details]");

  if (detailsElement) {
    detailsElement.style.maxHeight = isActive ? "none" : "0px";
    detailsElement.style.opacity = isActive ? "1" : "0";
    detailsElement.style.transform = isActive ? "translateY(0)" : "translateY(0.75rem)";
  }

  document.body.appendChild(measuredCard);

  const borderHeight = measuredCard.offsetHeight - measuredCard.clientHeight;
  const measuredHeight = measuredCard.scrollHeight + borderHeight;

  measuredCard.remove();

  return measuredHeight;
}

function measureDesktopRowHeights(
  gridElement: HTMLDivElement | null,
  cardElements: ReadonlyMap<number, HTMLButtonElement>,
  activeIndex: number | null,
  currentHeights: DesktopRowHeights
): DesktopRowHeights {
  if (!gridElement || !window.matchMedia("(min-width: 1024px)").matches) {
    return {
      idle: MIN_DESKTOP_IDLE_ROW_HEIGHT,
      active: MIN_DESKTOP_ACTIVE_ROW_HEIGHT,
    };
  }

  const rowGap = Number.parseFloat(window.getComputedStyle(gridElement).rowGap) || 0;
  let maxRequiredHeight = 0;

  cardElements.forEach((card, index) => {
    const isCardActive = activeIndex === index;
    const isCardMinimized = activeIndex !== null && !isCardActive;
    const minimizedPosition = getMinimizedPosition(activeIndex, index, isCardActive);
    const rowSpan = isCardActive || (isCardMinimized && minimizedPosition === 0) ? 2 : 1;

    const trueContentHeight = measureCardContentHeight(card, isCardActive);
    const requiredRowHeight = Math.ceil((trueContentHeight - rowGap * (rowSpan - 1)) / rowSpan);

    maxRequiredHeight = Math.max(maxRequiredHeight, requiredRowHeight);
  });

  const activeHeightFromIdle = Math.ceil((currentHeights.idle - rowGap) / 2);

  return {
    idle: activeIndex === null ? Math.max(MIN_DESKTOP_IDLE_ROW_HEIGHT, maxRequiredHeight) : currentHeights.idle,
    active:
      activeIndex !== null
        ? Math.max(MIN_DESKTOP_ACTIVE_ROW_HEIGHT, activeHeightFromIdle, maxRequiredHeight)
        : currentHeights.active,
  };
}

export function ProjectCards({ projects, labels }: ProjectCardsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeIndexRef = useRef(activeIndex);
  const [hasInteractedWithProjects, setHasInteractedWithProjects] = useState(false);
  const [desktopRowHeights, setDesktopRowHeights] = useState<DesktopRowHeights>({
    idle: MIN_DESKTOP_IDLE_ROW_HEIGHT,
    active: MIN_DESKTOP_ACTIVE_ROW_HEIGHT,
  });
  const gridElementRef = useRef<HTMLDivElement | null>(null);
  const cardElementsRef = useRef(new Map<number, HTMLButtonElement>());
  const previousRectsRef = useRef<Map<number, DOMRect> | null>(null);
  const projectAnimationFrameRef = useRef(0);

  const captureProjectRects = () =>
    new Map(
      Array.from(cardElementsRef.current, ([cardIndex, card]) => [
        cardIndex,
        card.getBoundingClientRect(),
      ]),
    );

  useLayoutEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null || !window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        document
          .querySelector<HTMLElement>(`[data-project-card-index="${activeIndex}"]`)
          ?.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
          });
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeIndex]);

  useLayoutEffect(() => {
    const gridElement = gridElementRef.current;

    if (!gridElement) {
      return;
    }

    let frame = 0;
    let measuredGridWidth = 0;

    const measureRows = () => {
      setDesktopRowHeights((currentHeights) => {
        const nextRowHeights = measureDesktopRowHeights(
          gridElement,
          cardElementsRef.current,
          activeIndexRef.current,
          currentHeights
        );

        if (areDesktopRowHeightsEqual(currentHeights, nextRowHeights)) {
          return currentHeights;
        }

        if (previousRectsRef.current === null) {
          previousRectsRef.current = captureProjectRects();
        }

        return nextRowHeights;
      });
    };

    const scheduleMeasure = (force = false) => {
      const gridWidth = gridElement.clientWidth;

      if (!force && Math.abs(gridWidth - measuredGridWidth) < 1) {
        return;
      }

      measuredGridWidth = gridWidth;
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(measureRows);
    };

    scheduleMeasure(true);

    const resizeObserver = new ResizeObserver(() => scheduleMeasure());
    resizeObserver.observe(gridElement);
    const handleResize = () => scheduleMeasure();
    window.addEventListener("resize", handleResize);
    document.fonts?.ready.then(() => scheduleMeasure(true));

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [projects.length]);

  useLayoutEffect(() => {
    const previousRects = previousRectsRef.current;

    if (!previousRects) {
      return;
    }

    const nextRowHeights = measureDesktopRowHeights(
      gridElementRef.current,
      cardElementsRef.current,
      activeIndex,
      desktopRowHeights
    );

    if (!areDesktopRowHeightsEqual(desktopRowHeights, nextRowHeights)) {
      setDesktopRowHeights(nextRowHeights);
      return;
    }

    previousRectsRef.current = null;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    window.cancelAnimationFrame(projectAnimationFrameRef.current);

    const animatedCards: HTMLButtonElement[] = [];

    cardElementsRef.current.forEach((card, index) => {
      const previousRect = previousRects.get(index);

      if (!previousRect) {
        return;
      }

      const nextRect = card.getBoundingClientRect();
      const deltaX = previousRect.left - nextRect.left;
      const deltaY = previousRect.top - nextRect.top;
      const scaleX = previousRect.width / nextRect.width;
      const scaleY = previousRect.height / nextRect.height;
      const hasMoved = Math.abs(deltaX) >= 0.5 || Math.abs(deltaY) >= 0.5;
      const hasResized = Math.abs(1 - scaleX) >= 0.01 || Math.abs(1 - scaleY) >= 0.01;

      if (!hasMoved && !hasResized) {
        return;
      }

      delete card.dataset.projectAnimating;
      card.style.setProperty("--project-flip-x", `${deltaX}px`);
      card.style.setProperty("--project-flip-y", `${deltaY}px`);
      card.style.setProperty("--project-flip-scale-x", `${scaleX}`);
      card.style.setProperty("--project-flip-scale-y", `${scaleY}`);
      animatedCards.push(card);
    });

    animatedCards.forEach((card) => card.getBoundingClientRect());
    animatedCards.forEach((card) => {
      card.dataset.projectAnimating = "true";
    });

    projectAnimationFrameRef.current = window.requestAnimationFrame(() => {
      animatedCards.forEach((card) => {
        if (card.dataset.projectAnimating !== "true") {
          return;
        }

        card.style.setProperty("--project-flip-x", "0px");
        card.style.setProperty("--project-flip-y", "0px");
        card.style.setProperty("--project-flip-scale-x", "1");
        card.style.setProperty("--project-flip-scale-y", "1");
      });
    });

    const cleanupTimeout = window.setTimeout(() => {
      animatedCards.forEach((card) => {
        delete card.dataset.projectAnimating;
        card.style.removeProperty("--project-flip-x");
        card.style.removeProperty("--project-flip-y");
        card.style.removeProperty("--project-flip-scale-x");
        card.style.removeProperty("--project-flip-scale-y");
      });
    }, 680);
    const cardsToClean = Array.from(cardElementsRef.current.values());

    return () => {
      window.cancelAnimationFrame(projectAnimationFrameRef.current);
      window.clearTimeout(cleanupTimeout);
      cardsToClean.forEach((card) => {
        delete card.dataset.projectAnimating;
        card.style.removeProperty("--project-flip-x");
        card.style.removeProperty("--project-flip-y");
        card.style.removeProperty("--project-flip-scale-x");
        card.style.removeProperty("--project-flip-scale-y");
      });
    };
  }, [activeIndex, desktopRowHeights]);

  const updateActiveProject = (index: number) => {
    const nextIndex = activeIndex === index ? null : index;

    previousRectsRef.current = captureProjectRects();

    if (window.matchMedia("(max-width: 767px)").matches) {
      setHasInteractedWithProjects(true);
    }

    setActiveIndex(nextIndex);
  };

  const projectGridStyle: ProjectGridStyle = {
    "--project-idle-row-height": `${desktopRowHeights.idle}px`,
    "--project-active-row-height": `${desktopRowHeights.active}px`,
  };

  return (
    <div
      ref={gridElementRef}
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:auto-rows-[minmax(230px,auto)] md:grid-cols-3 lg:grid-flow-dense lg:auto-rows-[minmax(var(--project-idle-row-height),auto)] data-[project-grid=active]:lg:auto-rows-[minmax(var(--project-active-row-height),auto)]"
      data-project-grid={activeIndex === null ? "idle" : "active"}
      style={projectGridStyle}
    >
      {projects.map((item, index) => {
        const isActive = activeIndex === index;
        const isMinimized = activeIndex !== null && !isActive;
        const minimizedPosition = getMinimizedPosition(activeIndex, index, isActive);
        const isTallMinimized = minimizedPosition === 0;

        return (
          <button
            key={item.title}
            ref={(element) => {
              if (element) {
                cardElementsRef.current.set(index, element);
                return;
              }

              cardElementsRef.current.delete(index);
            }}
            type="button"
            aria-expanded={isActive}
            aria-label={`${isActive ? labels.close : labels.open}: ${item.title}`}
            data-mobile-scroll-card
            data-project-card={isActive ? "active" : isMinimized ? "minimized" : "idle"}
            data-project-card-index={index}
            onClick={() => updateActiveProject(index)}
            className={[
              "project-card-shell group relative min-h-[250px] scroll-mt-24 overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] p-5 text-left shadow-black/0 outline-none transition-[min-height,opacity,translate,scale,border-color,background-color,box-shadow,padding] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#89AACC]/55 focus-visible:border-[#89AACC] focus-visible:ring-2 focus-visible:ring-[#89AACC]/35 motion-reduce:transition-none sm:min-h-[280px] sm:p-6 md:min-h-[230px] md:scroll-mt-28 lg:min-h-0 cursor-pointer",
              hasInteractedWithProjects ? "is-mobile-scroll-visible" : "",
              item.className,
              isActive
                ? "min-h-[560px] sm:col-span-2 sm:min-h-[500px] md:col-span-3 md:min-h-[420px] lg:row-span-2 lg:min-h-0 border-[#89AACC]/55 bg-white/[0.065] shadow-2xl shadow-[#050608]/55"
                : "",
              isMinimized
                ? "min-h-[116px] p-4 opacity-[0.54] sm:min-h-[160px] sm:p-5 md:min-h-0 md:scale-[0.975] md:p-6 lg:col-span-1 hover:opacity-[0.78]"
                : "",
              isTallMinimized ? "lg:row-span-2" : isMinimized ? "lg:row-span-1" : "",
            ].join(" ")}
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 group-data-[project-card=active]:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
            </div>
            <div
              className={[
                "relative flex h-full min-h-[inherit] flex-col justify-between gap-5",
                isActive ? "lg:gap-4" : "",
              ].join(" ")}
            >
              <div
                className={[
                  "grid gap-5 transition-[grid-template-columns,gap] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isActive ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-7" : "",
                ].join(" ")}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="min-w-0 text-xs font-semibold uppercase text-[#89AACC]">
                      {item.eyebrow}
                    </p>
                    <span
                      aria-hidden="true"
                      className={[
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-lg leading-none text-white/70 transition duration-500 sm:h-9 sm:w-9",
                        isActive ? "rotate-45 border-[#89AACC]/45 text-white" : "",
                      ].join(" ")}
                    >
                      <Plus/>
                    </span>
                  </div>
                  <h3
                    className={[
                      "mt-4 text-2xl font-semibold leading-tight text-white transition-[font-size,line-height] duration-700 sm:text-3xl md:text-2xl xl:text-3xl",
                      isActive ? "text-3xl md:text-4xl lg:text-3xl xl:text-4xl" : "",
                      isMinimized ? "text-xl sm:text-2xl md:text-2xl xl:text-3xl" : "",
                    ].join(" ")}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={[
                      "mt-4 max-w-xl text-sm leading-7 text-white/58 transition duration-500 md:leading-6 xl:leading-7",
                      !isActive ? "line-clamp-3" : "",
                      isActive ? "lg:mt-3 lg:text-[13px] lg:leading-6" : "",
                      isMinimized ? "hidden opacity-[0.62] sm:line-clamp-2 sm:block" : "",
                      isMinimized && !isTallMinimized ? "lg:hidden" : "",
                      isTallMinimized ? "lg:line-clamp-3" : "",
                    ].join(" ")}
                  >
                    {item.body}
                  </p>
                </div>

                <div
                  data-project-card-details
                  className={[
                    "overflow-hidden transition-[max-height,opacity,transform] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                    isActive
                      ? "max-h-[1400px] translate-y-0 opacity-100"
                      : "max-h-0 translate-y-3 opacity-0",
                  ].join(" ")}
                  aria-hidden={!isActive}
                >
                  <div className="min-h-0">
                    <p className="text-sm leading-7 text-white/68 lg:text-[13px] lg:leading-6">
                      {item.fullDescription}
                    </p>
                    <div className="mt-6 lg:mt-4">
                      <p className="text-xs font-semibold uppercase text-[#89AACC]">
                        {labels.technologies}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-[#89AACC]/20 bg-black/24 px-3 py-1.5 text-sm text-white/76 lg:py-1 lg:text-xs"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={[
                  "mt-auto flex min-w-0 items-end justify-between gap-4 transition duration-500",
                  isActive ? "lg:mt-0" : "",
                  isMinimized ? "hidden sm:flex" : "",
                  isMinimized && !isTallMinimized ? "lg:hidden" : "",
                ].join(" ")}
              >
                <span
                  className={[
                    "shrink-0 font-serif text-5xl italic leading-none text-white/12 sm:text-6xl",
                    isActive ? "lg:text-5xl" : "",
                  ].join(" ")}
                >
                  0{index + 1}
                </span>
                <div
                  className={[
                    "flex min-w-0 max-w-[78%] flex-wrap justify-end gap-2 transition duration-500 sm:max-w-[75%]",
                    isMinimized ? "opacity-0 md:opacity-100" : "",
                  ].join(" ")}
                >
                  {item.metrics.map((metric) => (
                    <span
                      key={metric}
                      className={[
                        "max-w-full rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 sm:text-sm"
                      ].join(" ")}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
