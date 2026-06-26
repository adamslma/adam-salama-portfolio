import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocumentLanguage } from "../document-language";
import { LanguageSwitcher } from "../language-switcher";
import { getDictionary, isLocale, locales, type Locale } from "../i18n";
import { MobileScrollCards } from "../mobile-scroll-cards";
import { LoadingCounter, ParallaxGallery } from "../portfolio-experience";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.91c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.37 9.37 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92v2.85c0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      aria-label={label}
      title={label}
      className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/14 bg-white/[0.035] text-white transition duration-500 hover:-translate-y-1 hover:border-[#89AACC]/55"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
      </span>
      <span className="relative">{children}</span>
    </a>
  );
}

function GitHubButton() {
  return (
    <SocialButton href="https://github.com/adamslma" label="GitHub">
      <GitHubIcon />
    </SocialButton>
  );
}

function LinkedInButton() {
  return (
    <SocialButton href="https://www.linkedin.com/in/adam-salama-768170260/" label="LinkedIn">
      <LinkedInIcon />
    </SocialButton>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  return getDictionary(rawLocale).metadata;
}

export default async function Home({ params }: LocalePageProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const dictionary = getDictionary(locale);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#050608] text-[#f4f0e8] selection:bg-[#89AACC] selection:text-[#050608]">
      <DocumentLanguage locale={locale} />
      <MobileScrollCards />
      <LoadingCounter label={dictionary.loading} />

      <section id="top" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(137,170,204,0.24),transparent_34%),linear-gradient(90deg,rgba(5,6,8,0.96),rgba(5,6,8,0.72)_45%,rgba(5,6,8,0.92))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-[#050608]" />

        <header className="fixed left-1/2 top-5 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between overflow-visible rounded-[64px] border border-white/12 bg-white/5.5 px-4 py-3 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl before:absolute before:inset-0 before:rounded-[inherit] before:opacity-70 after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(circle_at_20%_0%,rgba(137,170,204,0.16),transparent_34%)] md:px-5">
          <a href="#top" className="relative z-10 text-sm font-semibold uppercase text-[#f4f0e8]">
            Adam Salama
          </a>
          <nav className="relative z-10 flex items-center gap-2 text-sm text-[#f4f0e8]/68">
            <a className="group relative hidden overflow-hidden rounded-full border border-white/0 px-3 py-2 transition hover:border-[#89AACC]/45 hover:text-white sm:inline-flex" href="#work">
              <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
              </span>
              <span className="relative">{dictionary.nav.work}</span>
            </a>
            <a className="group relative hidden overflow-hidden rounded-full border border-white/0 px-3 py-2 transition hover:border-[#89AACC]/45 hover:text-white sm:inline-flex" href="#explore">
              <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
              </span>
              <span className="relative">{dictionary.nav.explore}</span>
            </a>
            <a
              className="group relative inline-flex h-9 items-center overflow-hidden rounded-full border border-white/14 bg-white/[0.035] px-4 text-white transition duration-500 hover:-translate-y-0.5 hover:border-[#89AACC]/55"
              href={dictionary.cvPath}
              download
            >
              <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
              </span>
              <span className="relative">{dictionary.nav.cv}</span>
            </a>
            <LanguageSwitcher
              locale={locale}
              label={dictionary.nav.languageLabel}
              languageNames={dictionary.nav.languageNames}
            />
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid min-h-svh max-w-7xl content-center items-center gap-12 px-5 pb-12 pt-28 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:pb-12 md:pt-28">
          <div className="max-w-4xl">
            <p className="mb-5 w-fit rounded-full border border-white/12 bg-white/4 px-4 py-2 text-xs font-semibold uppercase text-[#c9d8e8]">
              {dictionary.hero.badge}
            </p>
            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.9] text-white md:text-8xl">
              Adam Salama
              <span className="mt-2 block font-serif italic text-[#dfe9f4]">
                {dictionary.hero.line}
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64">
              {dictionary.hero.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="group relative overflow-hidden rounded-full border border-[#89AACC]/45 bg-[linear-gradient(135deg,#89AACC,#4E85BF)] px-5 py-3 text-sm font-semibold text-[#06101b] shadow-[0_18px_60px_rgba(78,133,191,0.28)] transition duration-500 hover:-translate-y-1 hover:border-[#89AACC]/70"
                href="mailto:adam.salama2002@gmail.com"
              >
                <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.34),transparent_36%)]" />
                </span>
                <span className="relative">{dictionary.hero.contact}</span>
              </a>
              <GitHubButton />
              <LinkedInButton />
            </div>
          </div>

          <aside className="mb-2 hidden justify-self-end md:block">
            <div className="relative h-[430px] w-[470px]">
              <div className="absolute left-0 top-0 aspect-square w-[360px] overflow-hidden rounded-full border border-white/12 bg-white/4 p-3 shadow-2xl shadow-black/40">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/adam-salama.jpg"
                    alt={dictionary.hero.portraitAlt}
                    fill
                    priority
                    sizes="480px"
                    quality={100}
                    className="object-cover object-center opacity-86 grayscale"
                  />
                </div>
              </div>

              <div className="absolute bottom-6 right-0 w-[245px] rounded-[8px] border border-white/10 bg-black/42 p-5 shadow-2xl shadow-black/35 backdrop-blur-xl">
                <p className="text-xs uppercase text-white/46">{dictionary.hero.impactLabel}</p>
                <p className="mt-2 text-4xl font-semibold text-white">{dictionary.hero.impactMetric}</p>
                <p className="mt-1 text-sm leading-6 text-white/60">{dictionary.hero.impactText}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="work" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[linear-gradient(135deg,#89AACC,#4E85BF)]" />
                <p className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase text-[#89AACC]">
                  {dictionary.achievementsSection.label}
                </p>
              </div>
              <h2 className="text-4xl font-semibold leading-[0.98] text-white md:text-6xl">
                {dictionary.achievementsSection.title}
                <span className="block font-serif italic text-[#dfe9f4]">
                  {dictionary.achievementsSection.titleAccent}
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/54 md:pb-2">
              {dictionary.achievementsSection.body}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[250px] md:grid-cols-3">
          {dictionary.achievements.map((item, index) => (
            <article
              key={item.title}
              data-mobile-scroll-card
              className={`group relative min-h-[260px] overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] p-5 transition duration-500 hover:-translate-y-1 hover:border-[#89AACC]/55 sm:min-h-[280px] sm:p-6 md:min-h-0 ${item.className}`}
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
              </div>
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase text-[#89AACC]">{item.eyebrow}</p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">{item.body}</p>
                </div>
                <div className="mt-6 flex min-w-0 items-end justify-between gap-4 md:mt-0">
                  <span className="font-serif text-5xl italic text-white/12 sm:text-6xl">0{index + 1}</span>
                  <div className="flex max-w-[82%] flex-wrap justify-end gap-2 sm:max-w-[75%]">
                    {item.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="max-w-full rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 sm:text-sm"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-[linear-gradient(135deg,#89AACC,#4E85BF)]" />
          <h2 className="text-sm font-semibold uppercase text-[#89AACC]">
            {dictionary.stack.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {dictionary.stack.groups.map((group) => (
            <div
              key={group.title}
              data-mobile-scroll-card
              className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/15"
            >
              <p className="mb-5 font-serif text-xl italic text-white/80">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-white/70 transition-all duration-300 hover:border-[#89AACC]/40 hover:bg-white/[0.06] hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ParallaxGallery copy={dictionary.gallery} />

      <section id="contact" className="overflow-hidden border-t border-white/10 bg-[#050608] py-16">
        <div className="marquee-track flex w-max gap-6 text-[15vw] font-semibold leading-none text-white md:text-[10vw]">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex items-center gap-6">
              <span>CONTACT</span>
              <span className="opacity-50">
                Adam Salama
              </span>
            </div>
          ))}
        </div>

        <footer className="mx-auto mt-12 grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-end md:px-8">
          <div>
            <p className="text-sm uppercase text-[#89AACC]">{dictionary.contact.availability}</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold text-white md:text-5xl">
              {dictionary.contact.title}
            </h2>
            <p className="mt-5">{dictionary.contact.body}</p>
            <p className="mt-5 text-white/54">{dictionary.contact.location}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="group relative overflow-hidden rounded-full border border-[#89AACC]/45 bg-[linear-gradient(135deg,#89AACC,#4E85BF)] px-5 py-3 text-sm font-semibold text-[#06101b] transition duration-500 hover:-translate-y-1 hover:border-[#89AACC]/70"
              href="mailto:adam.salama2002@gmail.com"
            >
              <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.34),transparent_36%)]" />
              </span>
              <span className="relative">{dictionary.contact.email}</span>
            </a>
            <a
              className="group relative overflow-hidden rounded-full border border-white/14 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-white transition duration-500 hover:-translate-y-1 hover:border-[#89AACC]/55"
              href={dictionary.cvPath}
              download
            >
              <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
              </span>
              <span className="relative">{dictionary.contact.cv}</span>
            </a>
            <GitHubButton />
            <LinkedInButton />
          </div>
        </footer>
      </section>
    </main>
  );
}
