"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import { Locale, locales } from "./i18n";

const localeCountries: Record<Locale, string> = {
  fr: "FR",
  en: "GB",
};

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  languageNames: Record<Locale, string>;
};

function Flag({ locale, label }: { locale: Locale; label: string }) {
  return (
    <span className="block h-full w-full overflow-hidden rounded-full bg-white">
      <ReactCountryFlag
        countryCode={localeCountries[locale]}
        svg
        aria-label={label}
        className="block h-full w-full scale-110 object-cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </span>
  );
}

export function LanguageSwitcher({
  locale,
  label,
  languageNames,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const changeLocale = (nextLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    setIsOpen(false);
    router.push(`${segments.join("/")}${window.location.hash}`);
  };

  return (
    <div ref={containerRef} className="relative inline-flex h-9">
      <button
        type="button"
        aria-label={`${label}: ${languageNames[locale]}`}
        aria-expanded={isOpen}
        title={languageNames[locale]}
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/14 bg-[#0a0d12] outline-none transition hover:border-[#89AACC]/55 focus:border-[#89AACC]/70"
      >
        <Flag locale={locale} label={languageNames[locale]} />
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-12 z-1000 min-w-42  rounded-[8px] border border-white/14 bg-[#0a0d12] p-1 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
          {locales.map((item) => (
            <button
              key={item}
              type="button"
              aria-label={languageNames[item]}
              aria-current={item === locale ? "true" : undefined}
              onClick={() => changeLocale(item)}
              className="flex w-full items-center gap-3 rounded-[6px] px-2 py-2 text-left text-sm font-medium text-white/78 transition hover:bg-white/8 hover:text-white aria-current:bg-white/10 aria-current:text-white"
            >
              <span className="h-7 w-7 shrink-0  rounded-full border border-white/10">
                <Flag locale={item} label={languageNames[item]} />
              </span>
              <span>{languageNames[item]}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
