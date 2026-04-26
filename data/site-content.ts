/** Arrière-plan de la page d'accueil (fichier servi depuis `public/images/`). */
export const homePageBackground = {
  imageSrc: "/images/montagne.webp",
} as const;

export const expertisesPage = {
  title: "EXPERTISES",
  lead: "25 ans d'expérience dans de grands groupes, une vision et un savoir-faire opérationnel éprouvé",
  intro1:
    "Au-delà de la taille du cabinet, les compétences et l'expérience de l'expert qui vous accompagne, conditionnent la qualité et les résultats obtenus.",
  intro2: "Des outils et des méthodes de multinationales au service des PME et PMI régionales.",
  philippe: {
    intro:
      "Philippe Clemente se distingue par un parcours professionnel riche, lui ayant permis d'accéder aux plus hautes fonctions de direction en gravissant tous les échelons.",
    experienceTitle: "EXPERIENCES",
    current: {
      name: "OSMOSE Conseils & Services",
      roleLines: [
        "Consultant en entreprises / Formateur en management opérationnel / Formateur SST",
        "Coach professionnel certifié / Psychanalyste en cabinet",
      ] as const,
    },
    positions: [
      {
        org: "GROUPE ATALIAN ( Île de France )",
        text: "Directeur régional, direction commerciale grands comptes pour la région Île de France, responsabilité de 3500 salariés pour un chiffre d'affaires généré de 60 Millions d'euros. Appui opérationnel de la Direction Générale sur les problématiques de négociations sociales.",
      },
      {
        org: "TFN Propreté & Services",
        text: "Directeur régional Rhône Alpes, responsabilité de 1500 personnes pour un chiffre d'affaire généré de 30 Millions d'euros (clients industriels, transports et tertiaires).",
      },
      {
        org: "ISS INTERNATIONAL (Groupe Danois, leader dans les domaines du multi-services)",
        text: "Directeur de centre de profits des établissements de Reims, Bar le Duc et Chassieu, responsabilité de 900 personnes.",
      },
      {
        org: "GROUPE ABILIS",
        text: "Responsable de portefeuilles clients industriels et tertiaires en Île de France et suivi opérationnel / gestion de 50 sites clients avec la responsabilité de 300 salariés.",
      },
      {
        org: "MINISTÈRE DE LA DÉFENSE",
        text: "Affectation en unité opérationnelle (de 1982 à 1989)",
      },
    ] as const,
    competencesTitle: "COMPETENCES",
    competences: [
      "Management opérationnel des organisations",
      "Audit organisationnel",
      "Restructuration d'entreprises",
      "Gestion de centres de profits",
      "Direction régionale opérationnelle",
      "Direction commerciale et grands comptes",
      "Négociation partenaires sociaux",
      "Gestion de conflits sociaux",
      "Organisation des élections IRP et gestion",
      "Accompagnement du dirigeant",
      "Thérapie individuelle",
      "Formateur Sauveteur secouriste du travail",
      "Formateur en management opérationnel",
      "Secouriste en équipe PSE1 et PSE2 ( protection civile)",
    ] as const,
  },
  whyConsultantCoach: {
    title: "POURQUOI ÊTRE DEVENU CONSULTANT COACH ?",
    paragraphs: [
      "A 50 ans, après une carrière de gestion et de management des personnes et des entreprises, Philippe Clemente a souhaité changer de cadre de vie. L'humain ayant toujours été au cœur de son activité, c'est tout naturellement qu'il a choisi cette voie avec pour ambition d'accompagner et de guider les cadres et dirigeants sur les problématiques auxquelles il a été souvent confronté.",
      "Il a complété son expérience personnelle et professionnelle par un diplôme de coach à l'ICI de Genève et de psychothérapeute - psychanalyste à l'EFFP d'Aix en Provence.",
    ] as const,
  },
  accompagnement: {
    title: "ACCOMPAGNEMENT",
    imageSrc: "/images/expertises-accompagnement.png" as const,
    imageAlt:
      "Deux personnes en silhouette sur un versant, l'une tend la main à l'autre pour l'aider à monter, ciel bleu au coucher du soleil.",
    paragraphs: [
      "Chaque personne a sa propre personnalité et des problématiques uniques. Notre accompagnement et les solutions apportées sont conçus sur-mesure, au regard des thématiques de chaque entreprise et de chaque individu.",
      "Un accompagnement haut de gamme pour vous permettre de donner le meilleur de vous-même et d'obtenir l'engagement et le soutien des autres.",
    ] as const,
  },
} as const;

export const homeHeroLeadBox =
  "Diriger une entreprise, encadrer des équipes et mener une vie personnelle épanouissante, sont des exercices éprouvants et difficiles. Être accompagné vous permet de rompre votre isolement, d'élargir votre vision et de libérer tout votre potentiel pour atteindre tous vos objectifs." as const;

/** Fond de l’encadré d’accroche hero : même logique que « Faire progresser » (public/images/) */
export const homeHeroLeadBackgroundImage = "/images/home-lead-flock.png" as const;

export const homePromoBox = {
  title: "FAIRE PROGRESSER VOTRE ENTREPRISE",
  backgroundImage: "/images/faire-progresser.avif" as const,
  body:
    "Obtenez les outils et les stratégies dont vous avez besoin pour atteindre vos objectifs et rendre performante votre entreprise. Nous vous accompagnons de l'audit à la mise en œuvre opérationnelle.",
  ctaLabel: "En savoir plus",
  ctaHref: "/expertises" as const,
} as const;

export const homeBalancePromo = {
  title: "AMÉLIORER VOTRE ÉQUILIBRE PERSONNEL",
  /** Fichier dans `public/images/` (Next) et `images/` (site statique) */
  backgroundImage: "/images/equilibre.webp" as const,
  body:
    "Être heureux et atteindre ses objectifs personnels sont des exercices difficiles ! Nous vous accompagnons pour que vous puissiez trouver les ressources et l'état d'esprit nécessaire à votre accomplissement.",
  ctaLabel: "En savoir plus",
  ctaHref: "/coaching" as const,
} as const;

export const homeVisionPromo = {
  title: "NOTRE VISION",
  backgroundImage: "/images/home-vision.png" as const,
  body:
    "Nous vous accompagnons dans l'optimisation organisationnelle, le développement et la mise en œuvre du capital humain au service de la performance de l'entreprise et du bien-être personnel. Nous assurons un retour sur investissement et une satisfaction totale.",
  ctaLabel: "Découvrir",
  ctaHref: "/vision" as const,
} as const;

/** Photo : placer le fichier `papa.avif` dans `public/images/` (et `images/` pour le site statique). */
export const homePhilippeAbout = {
  eyebrow: "A propos de",
  name: "PHILIPPE CLEMENTE",
  paragraph1:
    "En 25 ans passés dans de grands groupes, Philippe a gravit tous les échelons et a atteint les plus hautes fonctions. Il a décidé de mettre à profit cette expérience et ce savoir-faire opérationnel au service des autres.",
  paragraph2:
    "Pour compléter ses compétences acquises au fil des années, Philippe a obtenu un diplôme de coach à l'ICI de Genève et de Psychanalyste à l'EFPP d'Aix-en-Provence.",
  imageSrc: "/images/papa.avif" as const,
  imageAlt: "Philippe Clemente",
  /** Fond de l’encadré photo (accueil) : remplit le bloc, portrait par-dessus */
  backdropImage: "/images/philippe-about-backdrop.png" as const,
} as const;

export const homeFormationsPromo = {
  title: "LES FORMATIONS",
  /** Fond de l’encadré : même logique que « Améliorer votre équilibre personnel » */
  backgroundImage: "/images/home-formations-bg.png" as const,
  intro:
    "Acquérir de nouvelles compétences et appréhender de nouveaux concepts est aujourd'hui très important dans un monde qui évolue toujours plus rapidement.",
  lead:
    "Formateur agréé, nous vous proposons différentes formations en présentiel, individuellement ou en groupe.",
  examples: [
    "L'essentiel du management",
    "Manager la performance commerciale",
    "Stage Manager opérationnel",
    "Stage détox",
  ] as const,
  ctaLabel: "Découvrir nos formations",
  ctaHref: "/formations" as const,
} as const;

export const homeTestimonialsBanner = {
  title: "Témoignages",
  featured: [
    {
      name: "Maëva",
      quote:
        "…sa rencontre fait partie des éléments qui ont confirmé que je faisais le bon choix…",
    },
    {
      name: "Sylvie",
      quote:
        "Le coach m'a bien fait comprendre où j'en étais et le chemin que je devais parcourir pour sortir de cette spirale infernale.",
    },
    {
      name: "Stéphane",
      quote:
        "Le coach m'a vraiment permis de reprendre goût à la vie, aux choses simples sans être seul.",
    },
  ] as const,
} as const;

export const company = {
  name: "Osmose Conseils & Services",
  tagline: "Clarifier les enjeux, aligner les equipes et accelerer les resultats.",
  accent: "Conseil strategique, coaching de transformation et formations a fort impact.",
  email: "contact@osmose-conseils.fr",
  phone: "+33 1 89 71 24 60",
  address: "12 avenue de l'Innovation, 75008 Paris",
  linkedin: "#",
  x: "#",
  contactCta: "Parlons de votre prochain cap de croissance.",
};

export const enjeuxIntro = {
  paragraphs: [
    "Diriger une entreprise, encadrer des équipes et mener une vie personnelle épanouissante, sont des exercices éprouvants faisant appel à toutes vos ressources physiques et physiologiques qui aboutissent souvent à l'épuisement, au questionnement et au sentiment d'isolement inhérent à la fonction de cadre ou de dirigeant d'entreprise.",
    "Comme les sportifs de haut niveau, de nombreux dirigeants, cadres et décideurs se font accompagner pour confronter leurs problématiques, prendre du recul et raisonner avec davantage de sérénité, afin d'améliorer leurs performances et trouver l'équilibre entre la vie personnelle et professionnelle.",
  ] as const,
} as const;

export const enjeuxIsolementCallout = {
  titleLines: ["ROMPRE", "L'ISOLEMENT"] as const,
  body: "Rompre ce sentiment de solitude inhérente à votre fonction, prendre du recul et disposer d'un regard élargi capable de comprendre vos problématiques stratégiques et personnelles.",
  backgroundImageSrc: "/image/enjeux-1.avif",
} as const;

export const enjeuxConnaitreCallout = {
  title: "SE CONNAITRE & SE MANAGER SOI-MÊME",
  bodyBeforeBreak: "Nous nous connaissons finalement",
  bodyAfterBreak:
    "assez peu. Mieux se connaître pour identifier ses modes de fonctionnement profonds et apprendre à les gérer et en obtenir les meilleurs bénéfices.",
  backgroundImageSrc: "/image/enjeux-2.avif",
} as const;

export const enjeuxAutresCallout = {
  title: "CONNAITRE LES AUTRES",
  body: "Chaque personne est différente, a ses propres valeurs. Comprendre les personnalités qui vous entourent, pour adapter votre discours, être plus audible et mieux compris",
  backgroundImageSrc: "/image/enjeux-3.avif",
} as const;

export const enjeuxLeaderCallout = {
  titleLines: ["DEVENIR", "UN LEADER"] as const,
  paragraphs: [
    "Devenir un leader charismatique.",
    "Renforcer votre position de dirigeant et votre leadership, être crédible dans vos prises de paroles en public, dans vos décisions, avec vos clients, vos collaborateurs et vos partenaires.",
  ] as const,
  backgroundImageSrc: "/image/enjeux-4.avif",
} as const;

export const enjeuxOrganiserCallout = {
  title: "ORGANISER & ORCHESTRER",
  body: "Être dynamique et s'adapter aux changements de plus en plus fréquents et complexes au travers de la mise en place d'une organisation souple et agile. Apprendre à préserver l'équilibre entre vie professionnelle et personnelle.",
  backgroundImageSrc: "/image/enjeux-5.avif",
} as const;

export const enjeuxPerformerCallout = {
  title: "FAIRE PERFORMER SON ENTREPRISE & SES ÉQUIPES",
  body: "L'interaction et la cohésion entre les hommes, participent à la réussite d'une entreprise. Apprendre à identifier les ressources internes et créer de la cohésion entre les individus est essentiel.",
  backgroundImageSrc: "/image/enjeux-6.avif",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Enjeux", href: "/enjeux" },
  { label: "Vision", href: "/vision" },
  { label: "Consulting", href: "/consulting" },
  { label: "Coaching", href: "/coaching" },
  { label: "Formations", href: "/formations" },
  { label: "Temoignages", href: "/temoignages" },
  { label: "Articles", href: "/articles" },
] as const;

export const quickStats = [
  { value: "15+", label: "annees d'experience dans le conseil et la conduite du changement" },
  { value: "120", label: "missions menees aupres de PME, ETI et groupes internationaux" },
  { value: "92%", label: "de clients renouvellent l'accompagnement apres une premiere mission" },
];

export const expertises = [
  {
    title: "Strategie et gouvernance",
    description:
      "Clarification de la vision, priorisation du portefeuille d'initiatives et mise en place de rituels de gouvernance robustes.",
    benefits: ["Decisions plus rapides", "Vision partagee", "Pilotage transverse"],
  },
  {
    title: "Transformation organisationnelle",
    description:
      "Refonte des modes de fonctionnement, accompagnement des managers et adaptation des organisations a la croissance.",
    benefits: ["Execution plus fluide", "Adhesion interne", "Capacite de changement renforcee"],
  },
  {
    title: "Performance commerciale",
    description:
      "Structuration des offres, optimisation du parcours client et alignement entre marketing, vente et delivery.",
    benefits: ["Offres lisibles", "Conversion amelioree", "Experience client plus coherente"],
  },
  {
    title: "Leadership et culture",
    description:
      "Developpement des postures de leadership, travail sur la culture manageriale et cohesion des equipes clefs.",
    benefits: ["Managers plus impactants", "Culture federatrice", "Engagement durable"],
  },
  {
    title: "Apprentissage et transmission",
    description:
      "Conception de dispositifs de formation, animation d'ateliers et capitalisation des bonnes pratiques metier.",
    benefits: ["Competences rapidement activables", "Partage des savoirs", "Montes en maturite"],
  },
  {
    title: "Experience dirigeant",
    description:
      "Sparring partner des CODIR et dirigeants sur les phases de croissance, de repositionnement ou de crise.",
    benefits: ["Prise de recul", "Posture renforcee", "Execution securisee"],
  },
];

export const values = [
  {
    title: "Exigence",
    text: "Nous combinons hauteur de vue, clarte des recommandations et rigueur de mise en oeuvre.",
  },
  {
    title: "Proximite",
    text: "Nous travaillons au plus pres des realites humaines, culturelles et operationnelles de chaque organisation.",
  },
  {
    title: "Transmission",
    text: "Chaque mission doit laisser davantage d'autonomie, de methodes et de confiance chez nos clients.",
  },
  {
    title: "Impact",
    text: "Nous cherchons des decisions qui produisent a la fois des gains mesurables et des transformations durables.",
  },
];

export const methodology = [
  {
    step: "01",
    title: "Diagnostiquer",
    text: "Ecoute terrain, analyse des donnees, entretiens parties prenantes et lecture des signaux faibles.",
  },
  {
    step: "02",
    title: "Cadrer",
    text: "Clarification des enjeux, formulation de la cible et priorisation des leviers d'action.",
  },
  {
    step: "03",
    title: "Activer",
    text: "Animation d'ateliers, accompagnement des decideurs et mise en mouvement des equipes.",
  },
  {
    step: "04",
    title: "Ancrer",
    text: "Mesure des resultats, transfert de methodes et installation de nouvelles routines.",
  },
];

export const consultingOffers = [
  {
    title: "Diagnostic et feuille de route",
    description: "Cartographier la situation, identifier les irritants majeurs et definir une trajectoire priorisee.",
  },
  {
    title: "Transformation de l'organisation",
    description: "Repenser les modes de gouvernance, clarifier les roles et fluidifier la cooperation inter-equipes.",
  },
  {
    title: "Acceleration commerciale",
    description: "Structurer l'offre, aligner les equipes business et renforcer la relation client sur les moments cles.",
  },
];

export const coachingPrograms = [
  {
    title: "Coaching individuel",
    description: "Pour dirigeants, managers ou talents clefs dans les phases d'evolution, de prise de poste ou de repositionnement.",
  },
  {
    title: "Coaching d'equipe",
    description: "Pour renforcer la confiance, la qualite de cooperation et la capacite a traiter les sujets sensibles.",
  },
  {
    title: "Coaching de dirigeants",
    description: "Un espace de recul strategique pour arbitrer, decider et tenir un cap exigeant dans la duree.",
  },
];

export const trainingCatalog = [
  {
    title: "Leadership et communication",
    format: "Presentiel ou distanciel",
    objective: "Faire progresser la posture, l'ecoute, le feedback et la capacite d'influence.",
  },
  {
    title: "Management de la transformation",
    format: "Format mixte et ateliers terrain",
    objective: "Outiller les managers pour embarquer, prioriser et animer le changement.",
  },
  {
    title: "Performance collective",
    format: "Seminaire, classes virtuelles, coaching d'ancrage",
    objective: "Renforcer la collaboration, la responsabilisation et l'efficacite des interactions.",
  },
  {
    title: "Relation client et posture conseil",
    format: "Parcours sur mesure",
    objective: "Developper une relation client plus qualitative, plus claire et plus performante.",
  },
];

export const testimonials = [
  {
    quote:
      "Une approche a la fois strategique et tres concrete. Nous avons clarifie notre feuille de route et remobilise le collectif en quelques semaines.",
    name: "Claire Martin",
    company: "Directrice generale, Nova Industrie",
    initials: "CM",
  },
  {
    quote:
      "Le coaching du CODIR nous a permis de retrouver de la fluidite dans nos decisions et de mieux incarner notre vision.",
    name: "Julien Perrin",
    company: "CEO, Altera Partners",
    initials: "JP",
  },
  {
    quote:
      "Les formations ont ete tres appreciees par les managers. Le contenu etait premium, pragmatique et directement applicable.",
    name: "Sonia Belaid",
    company: "DRH, Horizon Care",
    initials: "SB",
  },
  {
    quote:
      "Nous cherchions plus qu'un cabinet de conseil. Nous avons trouve un partenaire capable de faire bouger les lignes avec finesse.",
    name: "Marc Delage",
    company: "Fondateur, Aster Consulting",
    initials: "MD",
  },
];

export const faqItems = [
  {
    question: "Comment demarre une mission ?",
    answer:
      "Nous commencons par un echange de cadrage, puis un diagnostic court pour objectiver les enjeux, les priorites et le niveau d'urgence.",
  },
  {
    question: "Travaillez-vous avec des PME ou des grands groupes ?",
    answer:
      "Les deux. Nous adaptons l'intensite du dispositif, les interlocuteurs et la gouvernance a la taille de votre organisation.",
  },
  {
    question: "Les formations sont-elles sur mesure ?",
    answer:
      "Oui. Chaque programme peut etre ajuste a vos cas d'usage, votre culture et vos objectifs pedagogiques.",
  },
  {
    question: "Le formulaire de contact est-il relie a une boite mail ?",
    answer:
      "Dans cette version vitrine, le formulaire simule l'envoi et affiche une confirmation. Il peut etre connecte a votre back-office ensuite.",
  },
];

export const resources = [
  {
    title: "Article - Reussir une transformation sans epuiser les equipes",
    description: "Nos reperes pour equilibrer ambition strategique, rythme de changement et capacite d'appropriation.",
  },
  {
    title: "Guide - Les 5 signaux d'une gouvernance qui se fragilise",
    description: "Un format court pour identifier les dysfonctionnements invisibles avant qu'ils ne deviennent critiques.",
  },
  {
    title: "Note de perspective - Former autrement les managers",
    description: "Pourquoi l'ancrage terrain, le feedback et la pratique doivent remplacer les approches trop descendantes.",
  },
];
