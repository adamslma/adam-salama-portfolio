"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import type { Locale } from "./i18n";

type PortfolioHeaderProps = {
  locale: Locale;
  cvPath: string;
  nav: {
    work: string;
    explore: string;
    cv: string;
    languageLabel: string;
    languageNames: Readonly<Record<Locale, string>>;
  };
};

function NavLink({
  href,
  children,
  onClick,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      className={`group relative overflow-hidden rounded-full border border-white/0 px-3 py-2 transition hover:border-[#89AACC]/45 hover:text-white ${className}`}
      href={href}
      onClick={onClick}
    >
      <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
      </span>
      <span className="relative">{children}</span>
    </a>
  );
}

function CvButton({
  href,
  label,
  mobile = false,
}: {
  href: string;
  label: string;
  mobile?: boolean;
}) {
  return (
    <a
      className={`group relative inline-flex h-9 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/14 bg-white/[0.035] text-white transition duration-500 hover:-translate-y-0.5 hover:border-[#89AACC]/55 ${
        mobile ? "w-full px-4" : "px-4"
      }`}
      href={href}
      download
    >
      <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
      </span>
      {mobile ? <Download aria-hidden="true" className="relative h-4 w-4" /> : null}
      <span className="relative">{label}</span>
    </a>
  );
}

export function PortfolioHeader({ locale, cvPath, nav }: PortfolioHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed left-1/2 top-4 z-50 mx-auto flex w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 items-center justify-between overflow-visible rounded-[28px] border border-white/12 bg-[#0a0d12]/78 px-4 py-3 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl before:absolute before:inset-0 before:rounded-[inherit] before:opacity-70 after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(circle_at_20%_0%,rgba(137,170,204,0.16),transparent_34%)] sm:top-5 sm:w-[calc(100%-2rem)] sm:rounded-[64px] md:px-5"
    >
      <a href="#top" className="relative z-10 text-sm font-semibold text-[#f4f0e8]">
        Adam Salama
      </a>

      <nav className="relative z-10 hidden items-center gap-2 text-sm text-[#f4f0e8]/68 sm:flex">
        <NavLink href="#work">{nav.work}</NavLink>
        <NavLink href="#explore">{nav.explore}</NavLink>
        <CvButton href={cvPath} label={nav.cv} />
        <LanguageSwitcher
          locale={locale}
          label={nav.languageLabel}
          languageNames={nav.languageNames}
        />
      </nav>

      <button
        type="button"
        aria-label="Menu"
        aria-controls="mobile-navigation"
        aria-expanded={isMobileMenuOpen}
        title="Menu"
        onClick={() => setIsMobileMenuOpen((value) => !value)}
        className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-white/[0.045] text-white outline-none transition hover:border-[#89AACC]/55 focus:border-[#89AACC]/70 sm:hidden"
      >
        {isMobileMenuOpen ? (
          <X aria-hidden="true" className="h-5 w-5" />
        ) : (
          <Menu aria-hidden="true" className="h-5 w-5" />
        )}
      </button>

      {isMobileMenuOpen ? (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-[calc(100%+0.65rem)] z-20 rounded-[18px] border border-white/12 bg-[#0a0d12]/96 p-2 text-sm text-[#f4f0e8]/72 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:hidden"
        >
          <nav className="grid gap-1" aria-label="Navigation mobile">
            <NavLink
              href="#work"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full px-4 py-3"
            >
              {nav.work}
            </NavLink>
            <NavLink
              href="#explore"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full px-4 py-3"
            >
              {nav.explore}
            </NavLink>
          </nav>

          <div className="mt-2 grid gap-2 border-t border-white/10 pt-2">
            <CvButton href={cvPath} label={nav.cv} mobile />
            <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5">
              <span className="text-sm font-medium text-white/76">{nav.languageLabel}</span>
              <LanguageSwitcher
                locale={locale}
                label={nav.languageLabel}
                languageNames={nav.languageNames}
              />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
