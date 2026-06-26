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
        fullDescription:
          "Mise en place d'un socle d'automatisation pour connecter les outils RH, synchroniser les statuts candidats et déclencher les actions récurrentes sans intervention manuelle. Le projet a couvert la conception des flux, la gestion des erreurs API, la consolidation des données et le suivi opérationnel afin de fiabiliser un volume élevé de candidatures sur la durée.",
        technologies: ["TypeScript", "APIs REST", "WTTJ", "TestGorilla", "Webhooks", "Cron jobs"],
        metrics: ["29k actions", "5 400 candidatures", "2 postes RH"],
        className: "md:col-span-2",
      },
      {
        title: "Portails clients",
        eyebrow: "Produit",
        body: "Dashboards, parrainage et parcours de suivi pour CGP, investisseurs et équipes internes.",
        fullDescription:
          "Développement d'interfaces métier orientées suivi, reporting et acquisition. Les portails regroupent des parcours clients, des tableaux de bord, des statistiques exploitables et des vues internes pensées pour réduire les allers-retours entre équipes commerciales, partenaires et opérations.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "APIs métier"],
        metrics: ["UX", "Statistiques"],
        className: "",
      },
      {
        title: "CI optimisée",
        eyebrow: "Delivery",
        body: "Refonte de la chaîne d'intégration pour réduire les temps d'attente et fluidifier les déploiements.",
        fullDescription:
          "Analyse des points de friction dans la chaîne d'intégration, réorganisation des jobs et optimisation des étapes de validation. L'objectif était de rendre les retours plus rapides pour les développeurs tout en conservant un niveau de contrôle adapté aux livraisons produit.",
        technologies: ["CircleCI", "Docker", "Git", "Scripts CI", "Quality gates"],
        metrics: ["x3"],
        className: "",
      },
      {
        title: "Refonte CFP 2.0",
        eyebrow: "Lead full-stack",
        body: "Lead technique d'une équipe de 4 développeurs juniors. Cadrage de l'architecture, code reviews et fiabilisation d'un produit stratégique.",
        fullDescription:
          "Pilotage technique d'une refonte produit avec cadrage de l'architecture, découpage des chantiers, accompagnement des développeurs juniors et revues de code régulières. Le travail a permis de stabiliser le socle applicatif, clarifier les responsabilités et sécuriser les évolutions fonctionnelles.",
        technologies: ["TypeScript", "React", "Nest.js", "MySQL", "Code review", "Architecture"],
        metrics: ["4 devs", "Mentoring", "Code Quality"],
        className: "md:col-span-2",
      },
      {
        title: "Nothera",
        eyebrow: "Projet IA",
        body: "Création d'un SaaS métier de A à Z. IA (Deepgram/Sonar) pour la transcription clinique et interopérabilité des agendas.",
        fullDescription:
          "Conception complète d'un SaaS destiné aux professionnels de santé, de l'expérience produit jusqu'aux workflows IA. Le produit transforme l'audio en notes structurées, prépare les données cliniques et s'intègre aux agendas pour limiter la ressaisie et accélérer la prise en charge.",
        technologies: ["Next.js", "TypeScript", "Deepgram", "Sonar", "LLMs", "APIs calendrier"],
        metrics: ["IA", "Entrepreneuriat"],
        className: "md:col-span-2",
      },
      {
        title: "CRM SDR",
        eyebrow: "Backend métier",
        body: "Centralisation des leads via webhooks, consolidation des sources et optimisation du tracking UTM.",
        fullDescription:
          "Construction d'un backend de consolidation pour réceptionner les leads, normaliser les sources d'acquisition et préserver les informations UTM. Le système facilite le suivi commercial, limite les pertes de contexte et donne une vision plus propre du parcours d'acquisition.",
        technologies: ["Webhooks", "Node.js", "TypeScript", "CRM", "UTM tracking", "APIs"],
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
        body: "Designed API integration pipelines (WTTJ, TestGorilla) that automated more than 29,000 time-consuming actions and processed 5,400 applications over one year, saving two HR positions.",
        fullDescription:
          "Built an automation layer connecting HR tools, synchronizing candidate statuses, and triggering recurring operations without manual intervention. The work covered flow design, API error handling, data consolidation, and operational monitoring to keep a high application volume reliable over time.",
        technologies: ["TypeScript", "REST APIs", "WTTJ", "TestGorilla", "Webhooks", "Cron jobs"],
        metrics: ["29k actions", "5,400 applications", "2 HR roles"],
        className: "md:col-span-2",
      },
      {
        title: "Client Portals",
        eyebrow: "Product",
        body: "Dashboards, referral flows, and tracking journeys for wealth advisors, investors, and internal teams.",
        fullDescription:
          "Developed business interfaces focused on tracking, reporting, and acquisition. The portals bring together client journeys, dashboards, actionable analytics, and internal views designed to reduce back-and-forth between sales, partners, and operations.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Business APIs"],
        metrics: ["UX", "Analytics"],
        className: "",
      },
      {
        title: "Optimized CI",
        eyebrow: "Delivery",
        body: "Reworked the integration pipeline to reduce waiting times and streamline deployments.",
        fullDescription:
          "Audited integration bottlenecks, reorganized jobs, and optimized validation steps. The goal was to give developers faster feedback while keeping the right level of control for product releases.",
        technologies: ["CircleCI", "Docker", "Git", "CI scripts", "Quality gates"],
        metrics: ["x3"],
        className: "",
      },
      {
        title: "CFP 2.0 Rebuild",
        eyebrow: "Full-stack lead",
        body: "Technical lead for a team of 4 junior developers. Defined architecture, ran code reviews, and improved the reliability of a strategic product.",
        fullDescription:
          "Led a product rebuild by defining the architecture, splitting implementation work, mentoring junior developers, and running regular code reviews. The work stabilized the application foundation, clarified responsibilities, and made future feature delivery more reliable.",
        technologies: ["TypeScript", "React", "Nest.js", "MySQL", "Code review", "Architecture"],
        metrics: ["4 devs", "Mentoring", "Code Quality"],
        className: "md:col-span-2",
      },
      {
        title: "Nothera",
        eyebrow: "AI Project",
        body: "Built a vertical SaaS product from end to end. AI workflows (Deepgram/Sonar) for clinical transcription and calendar interoperability.",
        fullDescription:
          "Designed a healthcare SaaS from the product experience to the AI workflows. The product turns audio into structured notes, prepares clinical data, and integrates with calendars to reduce duplicate entry and speed up patient follow-up.",
        technologies: ["Next.js", "TypeScript", "Deepgram", "Sonar", "LLMs", "Calendar APIs"],
        metrics: ["AI", "Entrepreneurship"],
        className: "md:col-span-2",
      },
      {
        title: "SDR CRM",
        eyebrow: "Business backend",
        body: "Centralized leads through webhooks, consolidated sources, and optimized UTM tracking.",
        fullDescription:
          "Built a consolidation backend to receive leads, normalize acquisition sources, and preserve UTM context. The system improves sales follow-up, reduces context loss, and provides a cleaner view of acquisition performance.",
        technologies: ["Webhooks", "Node.js", "TypeScript", "CRM", "UTM tracking", "APIs"],
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
