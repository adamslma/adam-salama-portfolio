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
      cardLabels: {
        open: "Ouvrir le projet",
        close: "Réduire le projet",
        technologies: "Technologies utilisées",
      },
    },
    achievements: [
      {
        title: "Automatisation RH",
        eyebrow: "Workflow APIs",
        body: "Conception de pipelines d'intégration d'APIs (WTTJ, TestGorilla) automatisant plus de 29 000 actions chronophages, traitement de 5400 candidatures sur 1 an économisant 2 postes.",
        fullDescription: "Création from scratch d'un socle d'automatisation pour synchroniser les ATS et outils d'évaluation. Résultat : suppression totale des tâches chronophages de saisie, fiabilisation des statuts candidats en temps réel, et un gain de temps massif pour l'équipe RH via une gestion robuste des erreurs API.",
        technologies: ["TypeScript", "APIs REST", "WTTJ", "TestGorilla", "Webhooks", "Cron jobs"],
        metrics: ["29k actions", "5 400 candidatures", "2 postes RH"],
        className: "md:col-span-2",
      },
      {
        title: "Portails clients",
        eyebrow: "Produit & Acquisition",
        body: "Dashboards, parrainage et parcours de suivi pour CGP, investisseurs et équipes internes.",
        fullDescription: "Conception full-stack de plateformes métiers interactives. En centralisant les dashboards, le parcours de parrainage et le reporting, l'outil a fluidifié la communication entre les équipes commerciales et les nouveaux partenaires financiers, tout en offrant des statistiques d'acquisition directement exploitables.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "PHP", "Symfony", "APIs métier"],
        metrics: ["Adoption utilisateur", "Baisse du support"],
        className: "",
      },
      {
        title: "CI/CD optimisée",
        eyebrow: "DevOps & Delivery",
        body: "Refonte de la chaîne d'intégration pour réduire les temps d'attente par 3 et fluidifier les déploiements.",
        fullDescription: "Audit et réarchitecture de la CI/CD. Mise en place de quality gates optimisées et réorganisation des jobs Docker afin de tourner en parallèle, offrant un feedback beaucoup plus rapide aux développeurs. L'objectif atteint a été d'accélérer le time-to-market sans compromettre la fiabilité des livraisons.",
        technologies: ["CircleCI", "Docker", "Git", "Scripts CI", "Quality gates"],
        metrics: ["Vitesse de build x3", "Feedback loop accélérée"],
        className: "",
      },
      {
        title: "Refonte CFP 2.0",
        eyebrow: "Lead full-stack",
        body: "Lead technique d'une équipe de 4 développeurs sur un produit stratégique. Définition de l'architecture, mentoring et garantie de la qualité logicielle.",
        fullDescription: "Pilotage de bout en bout d'une refonte critique. J'ai assuré l'accompagnement d'une équipe junior (revues de code, bonnes pratiques) tout en concevant une architecture robuste (React/Nest.js). Résultat : un socle stabilisé, une dette technique maîtrisée et des évolutions fonctionnelles sécurisées.",
        technologies: ["TypeScript", "React", "Fastify", "MySQL", "Code review", "Architecture"],
        metrics: ["Management de 4 devs", "Baisse de la dette technique"],
        className: "md:col-span-2",
      },
      {
        title: "Nothera (SaaS IA)",
        eyebrow: "Entrepreneuriat & IA",
        body: "Création de A à Z d'un SaaS médical par IA (Deepgram, LLM) générant des transcriptions cliniques structurées et synchronisées avec les agendas.",
        fullDescription: "Projet entrepreneurial complet : développement d'une solution transformant l'audio en notes structurées pour les professionnels de santé. Utilisation experte des LLMs et APIs pour préparer les données cliniques avec interopérabilité directe dans les outils métiers, éliminant ainsi la double saisie.",
        technologies: ["Next.js", "TypeScript", "Nest.js", "Deepgram", "Sonar", "LLMs", "APIs calendrier"],
        metrics: ["0 à 1 (MVP)", "Intégration LLM"],
        className: "md:col-span-2",
      },
      {
        title: "CRM SDR",
        eyebrow: "Backend métier",
        body: "Centralisation des leads via webhooks, consolidation des sources et optimisation du tracking UTM.",
        fullDescription: "Architecture d'un système de webhooks sur l'application métier centrale pour agréger les leads entrants. La normalisation de la donnée et la préservation du contexte d'acquisition (UTM) ont permis aux équipes Sales (SDR) d'optimiser leur suivi commercial avec des données fiables et une perte de contexte nulle.",
        technologies: ["Webhooks", "PHP", "Symfony", "CRM", "UTM tracking", "APIs"],
        metrics: ["Fiabilité de la data", "Tracking UTM"],
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
      cardLabels: {
        open: "Open project",
        close: "Collapse project",
        technologies: "Technologies used",
      },
    },
    achievements: [
      {
        title: "HR Automation",
        eyebrow: "API Workflows",
        body: "Designed API integration pipelines (WTTJ, TestGorilla) automating over 29,000 time-consuming actions and processing 5,400 applications in a year, saving 2 full-time roles.",
        fullDescription: "Built an automation foundation from scratch to synchronize ATS and assessment tools. Result: complete elimination of manual data entry, real-time reliability of candidate statuses, and massive time savings for the HR team through robust API error handling.",
        technologies: ["TypeScript", "REST APIs", "WTTJ", "TestGorilla", "Webhooks", "Cron jobs"],
        metrics: ["29k actions automated", "5,400 applications", "2 HR FTEs saved"],
        className: "md:col-span-2",
      },
      {
        title: "Client Portals",
        eyebrow: "Product & Acquisition",
        body: "Developed dashboards, referral programs, and tracking flows for Wealth Advisors (CGP), investors, and internal teams.",
        fullDescription: "Full-stack development of interactive business platforms. By centralizing dashboards, referral journeys, and reporting, the tool streamlined communication between sales teams and new financial partners while providing directly actionable acquisition statistics.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "PHP", "Symfony", "Business APIs"],
        metrics: ["User adoption", "Reduced support tickets"],
        className: "",
      },
      {
        title: "Optimized CI/CD",
        eyebrow: "DevOps & Delivery",
        body: "Redesigned the integration pipeline to cut wait times by 3 and streamline deployments.",
        fullDescription: "Audited and re-architected the CI/CD pipeline. Implemented optimized quality gates and reorganized Docker jobs to run in parallel, providing much faster feedback to developers. Successfully accelerated time-to-market without compromising delivery reliability.",
        technologies: ["CircleCI", "Docker", "Git", "CI Scripts", "Quality gates"],
        metrics: ["3x faster builds", "Accelerated feedback loop"],
        className: "",
      },
      {
        title: "CFP 2.0 Revamp",
        eyebrow: "Full-Stack Lead",
        body: "Acted as Tech Lead for a team of 4 developers on a strategic product. Defined architecture, provided mentoring, and ensured software quality.",
        fullDescription: "Spearheaded the end-to-end revamp of a critical product. Guided a junior team through code reviews and best practices while designing a robust React/Fastify architecture. Result: a stabilized foundation, controlled technical debt, and secure functional evolutions.",
        technologies: ["TypeScript", "React", "Fastify", "MySQL", "Code reviews", "Architecture"],
        metrics: ["Managed 4 devs", "Reduced tech debt"],
        className: "md:col-span-2",
      },
      {
        title: "Nothera (AI SaaS)",
        eyebrow: "Entrepreneurship & AI",
        body: "Created an AI-powered medical SaaS from scratch (Deepgram, LLMs) generating structured clinical transcriptions synchronized with calendars.",
        fullDescription: "End-to-end entrepreneurial project: developed a solution that transforms audio into structured notes for healthcare professionals. Expertly leveraged LLMs and APIs to process clinical data with direct interoperability into business tools, eliminating double data entry.",
        technologies: ["Next.js", "TypeScript", "Nest.js", "Deepgram", "Sonar", "LLMs", "Calendar APIs"],
        metrics: ["0 to 1 (MVP)", "LLM integration"],
        className: "md:col-span-2",
      },
      {
        title: "SDR CRM",
        eyebrow: "Backend Architecture",
        body: "Centralized leads via webhooks, consolidated sources, and optimized UTM tracking.",
        fullDescription: "Architected a webhook system on the core business application to aggregate incoming leads. Data normalization and the preservation of acquisition context (UTMs) empowered Sales Development Reps (SDRs) to optimize their sales follow-ups with reliable data and zero loss of context.",
        technologies: ["Webhooks", "PHP", "Symfony", "CRM", "UTM tracking", "APIs"],
        metrics: ["Data reliability", "UTM tracking"],
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
