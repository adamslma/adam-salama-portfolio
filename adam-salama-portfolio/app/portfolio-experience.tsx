"use client";

import { useEffect, useRef, useState } from "react";

type GalleryItem = {
  title: string;
  label: string;
  text: string;
};

export function LoadingCounter() {
  const [loading, setLoading] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const duration = 1450;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setLoading(Math.round(eased * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setIsLoaded(true), 260);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-[#050608] transition duration-700 ${
        isLoaded ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={isLoaded}
    >
      <div className="w-[min(460px,calc(100vw-2rem))]">
        <div className="mb-4 flex items-end justify-between">
          <p className="text-xs font-semibold uppercase text-white/48">Loading portfolio</p>
          <p className="font-serif text-7xl italic text-white">
            {loading.toString().padStart(3, "0")}
          </p>
        </div>
        <div className="h-px overflow-hidden bg-white/12">
          <div
            className="h-full bg-[linear-gradient(135deg,#89AACC,#4E85BF)] transition-[width] duration-100"
            style={{ width: `${loading}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export function ParallaxGallery({ galleryItems }: { galleryItems: GalleryItem[] }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxTravel, setMaxTravel] = useState(0);
  const galleryRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (!galleryRef.current) {
        return;
      }

      const rect = galleryRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      setScrollProgress(progress);

      if (viewportRef.current && trackRef.current) {
        const viewportWidth = viewportRef.current.clientWidth;
        const trackWidth = trackRef.current.scrollWidth;
        setMaxTravel(Math.max(trackWidth - viewportWidth, 0));
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="explore"
      ref={galleryRef}
      className="relative border-y border-white/10 bg-[#07090d]"
      style={{ height: `${Math.max(galleryItems.length + 1, 3) * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_42%,rgba(137,170,204,0.16),transparent_35%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 md:grid-cols-[0.66fr_1.34fr] md:px-8">
          <div className="self-center md:pr-4">
            <p className="text-sm font-semibold uppercase text-[#89AACC]">Exploration</p>
            <h2 className="mt-4 text-5xl font-semibold leading-none text-white md:text-7xl">
              Une lecture
              <span className="block font-serif italic text-[#dfe9f4]">en mouvement.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/54">
              Chaque panneau met en avant une facette du profil: architecture, automatisation,
              interfaces metier et delivery.
            </p>
            <div className="mt-8 h-px w-full max-w-xs overflow-hidden bg-white/12">
              <div
                className="h-full bg-[linear-gradient(135deg,#89AACC,#4E85BF)]"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
          </div>

          <div ref={viewportRef} className="relative h-[64vh] min-h-[430px] overflow-visible">
            <div
              ref={trackRef}
              className="absolute left-0 top-1/2 flex -translate-y-1/2 gap-5 will-change-transform"
              style={{
                transform: `translate3d(${-scrollProgress * maxTravel}px, -50%, 0)`,
              }}
            >
              {galleryItems.map((item, index) => {
                const itemProgress = scrollProgress * (galleryItems.length - 1);
                const distance = Math.abs(index - itemProgress);
                const scale = 1 - Math.min(distance * 0.08, 0.18);
                const opacity = 1 - Math.min(distance * 0.28, 0.5);

                return (
                  <article
                    key={item.title}
                    className="relative h-[360px] w-[72vw] shrink-0 overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/50 backdrop-blur-md transition-[border-color,opacity,transform] duration-200 ease-out md:w-[520px]"
                    style={{
                      transform: `scale(${scale})`,
                      opacity,
                      transformOrigin: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.16),transparent_38%)]" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase text-[#89AACC]">{item.label}</p>
                        <h3 className="mt-5 text-4xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">{item.text}</p>
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="font-serif text-8xl italic text-white/10">0{index + 1}</span>
                        <span className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#89AACC,#4E85BF)]" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
