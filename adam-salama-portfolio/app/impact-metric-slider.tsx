"use client";

import { useEffect, useMemo, useState } from "react";

type ImpactItem = {
  value: number;
  suffix: string;
  text: string;
};

type ImpactMetricSliderProps = {
  label: string;
  items: readonly ImpactItem[];
};

const slideDuration = 3200;
const countDuration = 950;

function formatCount(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value);
}

export function ImpactMetricSlider({ label, items }: ImpactMetricSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(0);
  const activeItem = items[activeIndex];

  const formattedCount = useMemo(() => formatCount(count), [count]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, slideDuration);

    return () => window.clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / countDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(activeItem.value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [activeItem.value]);

  return (
    <div className="absolute bottom-6 right-0 w-[245px] rounded-[8px] border border-white/10 bg-black/42 p-5 shadow-2xl shadow-black/35 backdrop-blur-xl">
      <p className="text-xs uppercase text-white/46">{label}</p>
      <div className="mt-2 min-h-12 overflow-hidden">
        <p key={activeIndex} className="impact-count text-4xl font-semibold text-white">
          {formattedCount}
          {activeItem.suffix}
        </p>
      </div>
      <p key={activeItem.text} className="impact-copy mt-1 min-h-12 text-sm leading-6 text-white/60">
        {activeItem.text}
      </p>
    </div>
  );
}
