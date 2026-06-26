import Image from "next/image";
import { LoadingCounter, ParallaxGallery } from "./portfolio-experience";

const achievements = [
  {
    title: "Refonte CFP 2.0",
    eyebrow: "Lead full-stack",
    body: "Lead technique d'une équipe de 4 développeurs juniors. Cadrage de l'architecture, code reviews et fiabilisation d'un produit stratégique.",
    metric: "4 devs",
    className: "md:col-span-2",
  },
  {
    title: "Automatisation RH",
    eyebrow: "Workflow APIs",
    body: "Conception de pipelines d'intégration d'APIs (WTTJ, TestGorilla) automatisant plus de 29 000 actions chronophages.",
    metric: "29k actions",
    className: "",
  },
  {
    title: "CI optimisée", 
    eyebrow: "Delivery",
    body: "Refonte de la chaine d'intégration pour réduire les temps d'attente et fluidifier les deploiements.",
    metric: "x3",
    className: "",
  },
  {
    title: "CRM SDR",
    eyebrow: "Backend métier",
    body: "Centralisation des leads via webhooks, consolidation des sources et optimisation du tracking UTM.",
    metric: "CRM",
    className: "md:col-span-2",
  },
  {
    title: "Nothera",
    eyebrow: "Projet IA",
    body: "Création d'un SaaS métier de A à  Z. IA (Deepgram/Sonar) pour la transcription clinique et interopérabilité des agendas.",
    metric: "IA",
    className: "md:col-span-2",
  },
  {
    title: "Portails clients",
    eyebrow: "Produit",
    body: "Dashboards, parrainage et parcours de suivi pour CGP, investisseurs et équipes internes.",
    metric: "UX",
    className: "",
  },
];

const galleryItems = [
  {
    title: "Architecture & Modélisation Data",
    label: "SQL / TypeScript / API Contracts",
    text: "Définir des schémas de base de données et des contrats d'interface robustes. Concevoir des systèmes back-end performants pour des interfaces complexes et denses.",
  },
  {
    title: "Ingénierie IA & Workflows",
    label: "LLMs / Whisper / Prompts structurés",
    text: "Passer du PoC au produit métier. Intégration d'IA pour traiter de la donnée non structurée (ex: audio vers notes cliniques) via des pipelines d'API fiables.",
  },
  {
    title: "Scalabilité Opérationnelle",
    label: "Webhooks / APIs / Python",
    text: "Remplacer les process manuels par du code. Création de systèmes autonomes capables d'absorber des dizaines de milliers d'actions sans intervention humaine.",
  },
  {
    title: "Qualité & Delivery en équipe",
    label: "CI-CD / Code Reviews / Lead Tech",
    text: "Sécuriser le déploiement sur des refontes critiques. Mise en place de pipelines stricts et accompagnement de développeurs pour shiper vite et sans régression.",
  },
];

const stack = [
  "TypeScript",
  "Python",
  "PHP",
  "C#",
  "Next.js",
  "React",
  "Angular",
  "Nest.js",
  "Symfony",
  "Fastify",
  ".NET",
  "MongoDB",
  "MySQL",
  "Docker",
  "CircleCI",
];

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

function GitHubButton() {
  return (
  <a
                aria-label="GitHub"
                title="GitHub"
                className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/14 bg-white/[0.035] text-white transition duration-500 hover:-translate-y-1 hover:border-[#89AACC]/55"
                href="https://github.com/adamslma"
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
                </span>
                <span className="relative">
                  <GitHubIcon />
                </span>
              </a>
  )
}

function LinkedInButton() {
  return (
  <a
                aria-label="LinkedIn"
                title="LinkedIn"
                className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/14 bg-white/[0.035] text-white transition duration-500 hover:-translate-y-1 hover:border-[#89AACC]/55"
                href="https://www.linkedin.com/in/adam-salama-768170260/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
                </span>
                <span className="relative">
                  <LinkedInIcon />
                </span>
              </a>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#050608] text-[#f4f0e8] selection:bg-[#89AACC] selection:text-[#050608]">
      <LoadingCounter />

      <section id="top" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(137,170,204,0.24),transparent_34%),linear-gradient(90deg,rgba(5,6,8,0.96),rgba(5,6,8,0.72)_45%,rgba(5,6,8,0.92))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050608]" />

        <header className="fixed left-1/2 top-5 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 items-center justify-between overflow-hidden rounded-[64px] border border-white/12 bg-white/[0.055] px-4 py-3 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl before:absolute before:inset-0  before:opacity-70 after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_20%_0%,rgba(137,170,204,0.16),transparent_34%)] md:px-5">
          <a href="#top" className="relative z-10 text-sm font-semibold uppercase text-[#f4f0e8]">
            Adam Salama
          </a>
          <nav className="relative z-10 flex items-center gap-2 text-sm text-[#f4f0e8]/68">
            <a className="group relative overflow-hidden rounded-full border border-white/0 px-3 py-2 transition hover:border-[#89AACC]/45 hover:text-white" href="#work">
              <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
              </span>
              <span className="relative">Réalisations</span>
            </a>
            <a className="group relative overflow-hidden rounded-full border border-white/0 px-3 py-2 transition hover:border-[#89AACC]/45 hover:text-white" href="#explore">
              <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
              </span>
              <span className="relative">Explorer</span>
            </a>
            <a
              className="group relative overflow-hidden rounded-full border border-white/14 bg-white/[0.035] px-4 py-2 text-white transition duration-500 hover:-translate-y-0.5 hover:border-[#89AACC]/55"
              href="/cv-adam-salama-2026.pdf"
              download
            >
              <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
              </span>
              <span className="relative">CV</span>
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-end gap-12 px-5 pb-12 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:pb-16">
          <div className="max-w-4xl">
            <p className="mb-5 w-fit rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase text-[#c9d8e8]">
              Développeur Full-Stack - Paris - Disponible CDI
            </p>
            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.9] text-white md:text-8xl">
              Adam Salama
              <span className="mt-2 block font-serif italic text-[#dfe9f4]">
                architecture & ship des produits métier.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64">
              Plus de 3 ans d&apos;expérience terrain. De la refonte des systèmes à  l&apos;automatisation de workflows complexes, je construis des applications robustes faites pour évoluer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="group relative overflow-hidden rounded-full border border-[#89AACC]/45 bg-[linear-gradient(135deg,#89AACC,#4E85BF)] px-5 py-3 text-sm font-semibold text-[#06101b] shadow-[0_18px_60px_rgba(78,133,191,0.28)] transition duration-500 hover:-translate-y-1 hover:border-[#89AACC]/70"
                href="mailto:adam.salama2002@gmail.com"
              >
                <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.34),transparent_36%)]" />
                </span>
                <span className="relative">Me contacter</span>
              </a>
              <GitHubButton/>
              <LinkedInButton/>
            </div>
          </div>

          <aside className="mb-2 hidden justify-self-end md:block">
            <div className="relative h-[430px] w-[470px]">
              <div className="absolute left-0 top-0 aspect-square w-[360px] overflow-hidden rounded-full border border-white/12 bg-white/[0.04] p-3 shadow-2xl shadow-black/40">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/adam-salama.jpg"
                    alt="Portrait d'Adam Salama"
                    fill
                    priority
                    sizes="480px"
                    quality={100}
                    className="object-cover object-center opacity-86 grayscale"
                  />
                </div>
              </div>

              <div className="absolute bottom-6 right-0 w-[245px] rounded-[8px] border border-white/10 bg-black/42 p-5 shadow-2xl shadow-black/35 backdrop-blur-xl">
                <p className="text-xs uppercase text-white/46">Impact mesure</p>
                <p className="mt-2 text-4xl font-semibold text-white">5 400+</p>
                <p className="mt-1 text-sm leading-6 text-white/60">candidatures traitees par automatisation RH</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="work" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="text-sm font-semibold uppercase text-[#89AACC]">Bento achievements</p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Realisations alternees, entre architecture, automatisation et delivery.
          </h2>
        </div>

        <div className="grid auto-rows-[250px] grid-cols-1 gap-4 md:grid-cols-3">
          {achievements.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#89AACC]/55 ${item.className}`}
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
              </div>
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase text-[#89AACC]">{item.eyebrow}</p>
                  <h3 className="mt-4 text-3xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">{item.body}</p>
                </div>
                <div className="flex items-end justify-between">
                  <span className="font-serif text-6xl italic text-white/12">0{index + 1}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70">
                    {item.metric}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase text-[#89AACC]">Stack</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ParallaxGallery galleryItems={galleryItems} />

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
            <p className="text-sm uppercase text-[#89AACC]">Disponible</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold text-white md:text-5xl">
              Prêt à  shiper. Parlons de vos prochains défis techniques.
            </h2>
            <p className="mt-5">Vous cherchez un profil autonome pour renforcer votre équipe ? Discutons-en.</p>
            <p className="mt-5 text-white/54">Paris - adam.salama2002@gmail.com</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="group relative overflow-hidden rounded-full border border-[#89AACC]/45 bg-[linear-gradient(135deg,#89AACC,#4E85BF)] px-5 py-3 text-sm font-semibold text-[#06101b] transition duration-500 hover:-translate-y-1 hover:border-[#89AACC]/70"
              href="mailto:adam.salama2002@gmail.com"
            >
              <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.34),transparent_36%)]" />
              </span>
              <span className="relative">Email</span>
            </a>
            <a
              className="group relative overflow-hidden rounded-full border border-white/14 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-white transition duration-500 hover:-translate-y-1 hover:border-[#89AACC]/55"
              href="/cv-adam-salama-2026.pdf"
              download
            >
              <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.20),transparent_36%)]" />
              </span>
              <span className="relative">CV PDF</span>
            </a>
            <GitHubButton/>
              <LinkedInButton/>
          </div>
        </footer>
      </section>
    </main>
  );
}
