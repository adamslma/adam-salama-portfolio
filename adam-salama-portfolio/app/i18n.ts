export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const dictionaries = {
  fr: {
    metadata: {
      title: "Adam Salama | Développeur Full-Stack",
      description:
        "Portfolio d'Adam Salama, développeur full-stack orienté performance, automatisation et applications métier.",
    },
    nav: {
      work: "Réalisations",
      explore: "Explorer",
      cv: "CV",
      languageLabel: "Langue",
      languageNames: {
        fr: "Français",
        en: "English",
      },
    },
    loading: "Chargement",
    cvPath: "/cv-adam-salama-2026-fr.pdf",
    hero: {
      badge: "Développeur Full-Stack - Paris - Disponible CDI",
      line: "architecture & ship des produits métier.",
      body: "Plus de 3 ans d'expérience terrain. De la refonte des systèmes à l'automatisation de workflows complexes, je construis des applications robustes faites pour évoluer.",
      contact: "Me contacter",
      portraitAlt: "Portrait d'Adam Salama",
      impactLabel: "Impact mesuré",
      impactMetric: "5 400+",
      impactText: "candidatures traitées par automatisation RH",
      impactItems: [
        {
          value: 5400,
          suffix: "+",
          text: "candidatures traitées par automatisation RH",
        },
        {
          value: 29000,
          suffix: "+",
          text: "actions chronophages automatisées",
        },
        {
          value: 2,
          suffix: "",
          text: "postes RH économisés par l'automatisation",
        },
        {
          value: 4,
          suffix: "",
          text: "développeurs juniors accompagnés en lead technique",
        },
      ],
    },
    achievementsSection: {
      label: "Réalisations",
      title: "Des impacts concrets,",
      titleAccent: "livrés sur des produits réels.",
      body: "Une sélection de missions où le code a directement amélioré les process, le delivery et la performance opérationnelle.",
    },
    achievements: [
      {
        title: "Automatisation RH",
        eyebrow: "Workflow APIs",
        body: "Conception de pipelines d'intégration d'APIs (WTTJ, TestGorilla) automatisant plus de 29 000 actions chronophages, traitement de 5400 candidatures sur 1 an économisant 2 postes.",
        metrics: ["29k actions", "5 400 candidatures", "2 postes RH"],
        className: "md:col-span-2",
      },
      {
        title: "Portails clients",
        eyebrow: "Produit",
        body: "Dashboards, parrainage et parcours de suivi pour CGP, investisseurs et équipes internes.",
        metrics: ["UX", "Statistiques"],
        className: "",
      },
      {
        title: "CI optimisée",
        eyebrow: "Delivery",
        body: "Refonte de la chaîne d'intégration pour réduire les temps d'attente et fluidifier les déploiements.",
        metrics: ["x3"],
        className: "",
      },
      {
        title: "Refonte CFP 2.0",
        eyebrow: "Lead full-stack",
        body: "Lead technique d'une équipe de 4 développeurs juniors. Cadrage de l'architecture, code reviews et fiabilisation d'un produit stratégique.",
        metrics: ["4 devs", "Mentoring", "Code Quality"],
        className: "md:col-span-2",
      },
      {
        title: "Nothera",
        eyebrow: "Projet IA",
        body: "Création d'un SaaS métier de A à Z. IA (Deepgram/Sonar) pour la transcription clinique et interopérabilité des agendas.",
        metrics: ["IA", "Entrepreneuriat"],
        className: "md:col-span-2",
      },
      {
        title: "CRM SDR",
        eyebrow: "Backend métier",
        body: "Centralisation des leads via webhooks, consolidation des sources et optimisation du tracking UTM.",
        metrics: ["CRM"],
        className: "",
      },
    ],
    stack: {
      title: "Environnement technique",
      groups: [
        {
          title: "Backend & APIs",
          items: ["TypeScript", "Fastify", "Nest.js", "Python", "C# / .NET", "PHP / Symfony"],
        },
        {
          title: "Frontend",
          items: ["React", "Next.js", "Angular", "Tailwind CSS"],
        },
        {
          title: "Data & DevOps",
          items: ["MySQL", "MongoDB", "Docker", "CircleCI"],
        },
      ],
    },
    gallery: {
      label: "Exploration",
      title: "Une lecture",
      titleAccent: "en mouvement.",
      body: "Chaque panneau met en avant une facette du profil: architecture, automatisation, interfaces métier et delivery.",
      items: [
        {
          title: "Architecture & Modélisation Data",
          label: "SQL / TypeScript / API Contracts",
          text: "Définir des schémas de base de données et des contrats d'interface robustes. Concevoir des systèmes back-end performants pour des interfaces complexes et denses.",
        },
        {
          title: "Ingénierie IA & Workflows",
          label: "LLMs / Prompts structurés",
          text: "Passer du PoC au produit métier. Intégration d'IA pour traiter de la donnée non structurée, par exemple audio vers notes cliniques, via des pipelines d'API fiables.",
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
      ],
    },
    contact: {
      availability: "Disponible",
      title: "Prêt à shiper. Parlons de vos prochains défis techniques.",
      body: "Vous cherchez un profil autonome pour renforcer votre équipe ? Discutons-en.",
      location: "Paris - adam.salama2002@gmail.com",
      email: "Email",
      cv: "CV PDF",
    },
  },
  en: {
    metadata: {
      title: "Adam Salama | Full-Stack Developer",
      description:
        "Adam Salama's portfolio, full-stack developer focused on performance, automation, and business applications.",
    },
    nav: {
      work: "Work",
      explore: "Explore",
      cv: "Resume",
      languageLabel: "Language",
      languageNames: {
        fr: "Français",
        en: "English",
      },
    },
    loading: "Loading",
    cvPath: "/cv-adam-salama-2026-en.pdf",
    hero: {
      badge: "Full-Stack Developer - Paris - Open to full-time roles",
      line: "architecture & shipping business products.",
      body: "Over 3 years of hands-on experience. From system redesigns to complex workflow automation, I build robust applications designed to scale.",
      contact: "Contact me",
      portraitAlt: "Portrait of Adam Salama",
      impactLabel: "Measured impact",
      impactMetric: "5,400+",
      impactText: "applications processed through HR automation",
      impactItems: [
        {
          value: 5400,
          suffix: "+",
          text: "applications processed through HR automation",
        },
        {
          value: 29000,
          suffix: "+",
          text: "time-consuming actions automated",
        },
        {
          value: 2,
          suffix: "",
          text: "HR roles saved through automation",
        },
        {
          value: 4,
          suffix: "",
          text: "junior developers mentored as technical lead",
        },
      ],
    },
    achievementsSection: {
      label: "Work",
      title: "Concrete impact,",
      titleAccent: "delivered on real products.",
      body: "A selection of projects where code directly improved processes, delivery, and operational performance.",
    },
    achievements: [
      {
        title: "HR Automation",
        eyebrow: "API Workflows",
        body: "Designed API integration pipelines (WTTJ, TestGorilla) that automated more than 29,000 time-consuming actions and processed 5,400 applications over one year, saving two HR positions.",
        metrics: ["29k actions", "5,400 applications", "2 HR roles"],
        className: "md:col-span-2",
      },
      {
        title: "Client Portals",
        eyebrow: "Product",
        body: "Dashboards, referral flows, and tracking journeys for wealth advisors, investors, and internal teams.",
        metrics: ["UX", "Analytics"],
        className: "",
      },
      {
        title: "Optimized CI",
        eyebrow: "Delivery",
        body: "Reworked the integration pipeline to reduce waiting times and streamline deployments.",
        metrics: ["x3"],
        className: "",
      },
      {
        title: "CFP 2.0 Rebuild",
        eyebrow: "Full-stack lead",
        body: "Technical lead for a team of 4 junior developers. Defined architecture, ran code reviews, and improved the reliability of a strategic product.",
        metrics: ["4 devs", "Mentoring", "Code Quality"],
        className: "md:col-span-2",
      },
      {
        title: "Nothera",
        eyebrow: "AI Project",
        body: "Built a vertical SaaS product from end to end. AI workflows (Deepgram/Sonar) for clinical transcription and calendar interoperability.",
        metrics: ["AI", "Entrepreneurship"],
        className: "md:col-span-2",
      },
      {
        title: "SDR CRM",
        eyebrow: "Business backend",
        body: "Centralized leads through webhooks, consolidated sources, and optimized UTM tracking.",
        metrics: ["CRM"],
        className: "",
      },
    ],
    stack: {
      title: "Technical environment",
      groups: [
        {
          title: "Backend & APIs",
          items: ["TypeScript", "Fastify", "Nest.js", "Python", "C# / .NET", "PHP / Symfony"],
        },
        {
          title: "Frontend",
          items: ["React", "Next.js", "Angular", "Tailwind CSS"],
        },
        {
          title: "Data & DevOps",
          items: ["MySQL", "MongoDB", "Docker", "CircleCI"],
        },
      ],
    },
    gallery: {
      label: "Exploration",
      title: "A profile",
      titleAccent: "in motion.",
      body: "Each panel highlights one side of the profile: architecture, automation, business interfaces, and delivery.",
      items: [
        {
          title: "Architecture & Data Modeling",
          label: "SQL / TypeScript / API Contracts",
          text: "Define robust database schemas and interface contracts. Design high-performing backend systems for complex, information-dense interfaces.",
        },
        {
          title: "AI Engineering & Workflows",
          label: "LLMs / Structured prompts",
          text: "Move from proof of concept to business product. Integrate AI to process unstructured data, such as audio into clinical notes, through reliable API pipelines.",
        },
        {
          title: "Operational Scalability",
          label: "Webhooks / APIs / Python",
          text: "Replace manual processes with code. Build autonomous systems that absorb tens of thousands of actions without human intervention.",
        },
        {
          title: "Quality & Team Delivery",
          label: "CI-CD / Code Reviews / Tech Lead",
          text: "Secure deployments on critical rebuilds. Set up strict pipelines and support developers so the team can ship quickly without regressions.",
        },
      ],
    },
    contact: {
      availability: "Available",
      title: "Ready to ship. Let's talk about your next technical challenges.",
      body: "Looking for an autonomous profile to strengthen your team? Let's discuss.",
      location: "Paris - adam.salama2002@gmail.com",
      email: "Email",
      cv: "Resume PDF",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
