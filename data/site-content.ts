/** Bannière en tête de la page d'accueil (fichier dans `public/images/`). */
export const homeBannerImage = "/images/home-banner.jpeg" as const;

/** Bannière principale des pages intérieures (fichier `géant.jpeg` dans `public/images/`). */
export const siteMainHeroBannerImage = "/images/géant.jpeg" as const;

/** Titres sur les vignettes de la grille Articles (toutes les cartes). Les 3 premiers : aussi accueil. */
export type ArticleOverlayIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export const articleOverlayTitles: Record<ArticleOverlayIndex, string> = {
  1: "Encore des mots, toujours des maux,…",
  2: "Comment gérer les conflits",
  3: 'MÈRE TOXIQUE "La reconnaître et lui.."',
  4: "L'ENTREPRISE 3.0",
  5: "Pervers narcissique…",
  6: "Stress post-traumatique",
  7: "Mais qui prend soin des…",
  8: "L'ENFANT DIABÉTIQUE ET SON…",
  9: "PRÊT À MAIGRIR ? EN ÊTES-VOUS…",
  10: "La Réussite ne laisse rien au…",
  11: "Le langage du corps",
};

export const consultingPage = {
  title: "CONSULTING",
  lead: "Accompagnement conseil — de l'audit à la mise en œuvre opérationnelle",
} as const;

/** Dix encadrés page Coaching (même grille / dimensions que Consulting). */
export const coachingSquareOffers = [
  "COACHING INDIVIDUEL — DIRIGEANTS ET MANAGERS",
  "COACHING D'ÉQUIPE",
  "PRISE DE POSTE ET TRANSITION PROFESSIONNELLE",
  "DÉVELOPPEMENT DU LEADERSHIP",
  "GESTION DU STRESS ET ÉQUILIBRE",
  "ACCOMPAGNEMENT À LA DÉCISION",
  "COMMUNICATION ET POSTURE MANAGÉRIALE",
  "RELATIONS DE TRAVAIL ET MÉDIATION",
  "PRÉPARATION AUX ENTRETIENS DÉLICATS",
  "PROJET PROFESSIONNEL ET ORIENTATION",
] as const;

export const expertisesPage = {
  title: "EXPERTISES",
  lead: "25 ans d'expérience dans de grands groupes, une vision et un savoir-faire opérationnel éprouvé",
  intro1:
    "Au-delà de la taille du cabinet, les compétences et l'expérience de l'expert qui vous accompagne, conditionnent la qualité et les résultats obtenus.",
  intro2: "Des outils et des méthodes de multinationales au service des PME et PMI régionales.",
  philippe: {
    intro:
      "Philippe Clemente se distingue par un parcours professionnel riche, lui ayant permis d'accéder aux plus hautes fonctions de direction en gravissant tous les échelons.",
    experienceTitle: "EXPÉRIENCES",
    current: {
      name: "Osmose Conseils & Services",
      roleLines: [
        "Consultant en entreprises / Formateur en management opérationnel / Formateur SST",
        "Coach professionnel certifié / Psychanalyste en cabinet",
      ] as const,
    },
    positions: [
      {
        org: "GROUPE ATALIAN (Île-de-France)",
        text: "Directeur régional, direction commerciale grands comptes pour la région Île-de-France, responsabilité de 3 500 salariés pour un chiffre d'affaires généré de 60 millions d'euros. Appui opérationnel de la Direction Générale sur les problématiques de négociations sociales.",
      },
      {
        org: "TFN Propreté & Services",
        text: "Directeur régional Rhône-Alpes, responsabilité de 1 500 personnes pour un chiffre d'affaires généré de 30 millions d'euros (clients industriels, transports et tertiaires).",
      },
      {
        org: "ISS INTERNATIONAL (Groupe Danois, leader dans les domaines du multi-services)",
        text: "Directeur de centres de profit des établissements de Reims, Bar-le-Duc et Chassieu, responsabilité de 900 personnes.",
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
    competencesTitle: "COMPÉTENCES",
    competences: [
      "Management opérationnel des organisations",
      "Audit organisationnel",
      "Restructuration d'entreprises",
      "Gestion de centres de profit",
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
      "À 50 ans, après une carrière de gestion et de management des personnes et des entreprises, Philippe Clemente a souhaité changer de cadre de vie. L'humain ayant toujours été au cœur de son activité, c'est tout naturellement qu'il a choisi cette voie avec pour ambition d'accompagner et de guider les cadres et dirigeants sur les problématiques auxquelles il a été souvent confronté.",
      "Il a complété son expérience personnelle et professionnelle par un diplôme de coach à l'ICI de Genève et de psychothérapeute - psychanalyste à l'EFPP d'Aix-en-Provence.",
    ] as const,
  },
  accompagnement: {
    title: "ACCOMPAGNEMENT",
    imageSrc: "/images/expertises-accompagnement.png" as const,
    imageAlt:
      "Deux randonneurs sur une paroi rocheuse au lever du soleil, l'un aide l'autre à grimper en lui tendant la main, symbolisant le soutien et le travail d'équipe.",
    paragraphs: [
      "Chaque personne a sa propre personnalité et des problématiques uniques. Notre accompagnement et les solutions apportées sont conçus sur-mesure, au regard des thématiques de chaque entreprise et de chaque individu.",
      "Un accompagnement haut de gamme pour vous permettre de donner le meilleur de vous-même et d'obtenir l'engagement et le soutien des autres.",
    ] as const,
  },
} as const;

export const homeHeroLeadBox =
  "Diriger une entreprise, encadrer des équipes et mener une vie personnelle épanouissante, sont des exercices éprouvants et difficiles. Être accompagné vous permet de rompre votre isolement, d'élargir votre vision et de libérer tout votre potentiel pour atteindre tous vos objectifs." as const;

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
  eyebrow: "À propos de",
  name: "PHILIPPE CLEMENTE",
  paragraph1:
    "En 25 ans passés dans de grands groupes, Philippe a gravi tous les échelons et a atteint les plus hautes fonctions. Il a décidé de mettre à profit cette expérience et ce savoir-faire opérationnel au service des autres.",
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

export const company = {
  name: "Osmose Conseils & Services",
  tagline: "Clarifier les enjeux, aligner les équipes et accélérer les résultats.",
  accent: "Conseil stratégique, coaching de transformation et formations à fort impact.",
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
  titleLines: ["ROMPRE L'ISOLEMENT"] as const,
  body: "Rompre ce sentiment de solitude inhérente à votre fonction, prendre du recul et disposer d'un regard élargi capable de comprendre vos problématiques stratégiques et personnelles.",
  backgroundImageSrc: "/image/enjeux-1.avif",
} as const;

export const enjeuxConnaitreCallout = {
  title: "SE CONNAÎTRE & SE MANAGER SOI-MÊME",
  bodyBeforeBreak: "Nous nous connaissons finalement",
  bodyAfterBreak:
    "assez peu. Mieux se connaître pour identifier ses modes de fonctionnement profonds et apprendre à les gérer et en obtenir les meilleurs bénéfices.",
  backgroundImageSrc: "/image/enjeux-2.avif",
} as const;

export const enjeuxAutresCallout = {
  title: "CONNAÎTRE LES AUTRES",
  body: "Chaque personne est différente, a ses propres valeurs. Comprendre les personnalités qui vous entourent, pour adapter votre discours, être plus audible et mieux compris",
  backgroundImageSrc: "/image/enjeux-3.avif",
} as const;

export const enjeuxLeaderCallout = {
  titleLines: ["DEVENIR UN LEADER"] as const,
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
  { label: "Articles", href: "/articles" },
] as const;

/** Liens en-tête et pied de page — exclut toute entrée « OSMOSE » ou la route /osmose. */
export function getVisibleNavigationItems() {
  return navigation.filter(
    (item) => item.href !== "/osmose" && item.label.toUpperCase() !== "OSMOSE",
  );
}

export const quickStats = [
  { value: "15+", label: "années d'expérience dans le conseil et la conduite du changement" },
  { value: "120", label: "missions menées auprès de PME, ETI et groupes internationaux" },
  { value: "92%", label: "de clients renouvèlent l'accompagnement après une première mission" },
];

export const expertises = [
  {
    title: "Stratégie et gouvernance",
    description:
      "Clarification de la vision, priorisation du portefeuille d'initiatives et mise en place de rituels de gouvernance robustes.",
    benefits: ["Décisions plus rapides", "Vision partagée", "Pilotage transverse"],
  },
  {
    title: "Transformation organisationnelle",
    description:
      "Refonte des modes de fonctionnement, accompagnement des managers et adaptation des organisations à la croissance.",
    benefits: ["Exécution plus fluide", "Adhésion interne", "Capacité de changement renforcée"],
  },
  {
    title: "Performance commerciale",
    description:
      "Structuration des offres, optimisation du parcours client et alignement entre marketing, vente et delivery.",
    benefits: ["Offres lisibles", "Conversion améliorée", "Expérience client plus cohérente"],
  },
  {
    title: "Leadership et culture",
    description:
      "Développement des postures de leadership, travail sur la culture managériale et cohésion des équipes clés.",
    benefits: ["Managers plus impactants", "Culture fédératrice", "Engagement durable"],
  },
  {
    title: "Apprentissage et transmission",
    description:
      "Conception de dispositifs de formation, animation d'ateliers et capitalisation des bonnes pratiques métier.",
    benefits: ["Compétences rapidement activables", "Partage des savoirs", "Montées en maturité"],
  },
  {
    title: "Expérience dirigeant",
    description:
      "Sparring partner des CODIR et dirigeants sur les phases de croissance, de repositionnement ou de crise.",
    benefits: ["Prise de recul", "Posture renforcée", "Exécution sécurisée"],
  },
];

export const values = [
  {
    title: "Exigence",
    text: "Nous combinons hauteur de vue, clarté des recommandations et rigueur de mise en œuvre.",
  },
  {
    title: "Proximité",
    text: "Nous travaillons au plus près des réalités humaines, culturelles et opérationnelles de chaque organisation.",
  },
  {
    title: "Transmission",
    text: "Chaque mission doit laisser davantage d'autonomie, de méthodes et de confiance chez nos clients.",
  },
  {
    title: "Impact",
    text: "Nous cherchons des décisions qui produisent à la fois des gains mesurables et des transformations durables.",
  },
];

export const methodology = [
  {
    step: "01",
    title: "Diagnostiquer",
    text: "Écoute terrain, analyse des données, entretiens parties prenantes et lecture des signaux faibles.",
  },
  {
    step: "02",
    title: "Cadrer",
    text: "Clarification des enjeux, formulation de la cible et priorisation des leviers d'action.",
  },
  {
    step: "03",
    title: "Activer",
    text: "Animation d'ateliers, accompagnement des décideurs et mise en mouvement des équipes.",
  },
  {
    step: "04",
    title: "Ancrer",
    text: "Mesure des résultats, transfert de méthodes et installation de nouvelles routines.",
  },
];

export const consultingOffers = [
  {
    title: "Diagnostic et feuille de route",
    description: "Cartographier la situation, identifier les irritants majeurs et définir une trajectoire priorisée.",
  },
  {
    title: "Transformation de l'organisation",
    description: "Repenser les modes de gouvernance, clarifier les rôles et fluidifier la coopération entre équipes.",
  },
  {
    title: "Accélération commerciale",
    description: "Structurer l'offre, aligner les équipes business et renforcer la relation client sur les moments clés.",
  },
];

export const coachingPrograms = [
  {
    title: "Coaching individuel",
    description: "Pour dirigeants, managers ou talents clés dans les phases d'évolution, de prise de poste ou de repositionnement.",
  },
  {
    title: "Coaching d'équipe",
    description: "Pour renforcer la confiance, la qualité de coopération et la capacité à traiter les sujets sensibles.",
  },
  {
    title: "Coaching de dirigeants",
    description: "Un espace de recul stratégique pour arbitrer, décider et tenir un cap exigeant dans la durée.",
  },
];

export const trainingCatalog = [
  {
    title: "Leadership et communication",
    format: "Présentiel ou distanciel",
    objective: "Faire progresser la posture, l'écoute, le feedback et la capacité d'influence.",
  },
  {
    title: "Management de la transformation",
    format: "Format mixte et ateliers terrain",
    objective: "Outiller les managers pour embarquer, prioriser et animer le changement.",
  },
  {
    title: "Performance collective",
    format: "Séminaire, classes virtuelles, coaching d'ancrage",
    objective: "Renforcer la collaboration, la responsabilisation et l'efficacité des interactions.",
  },
  {
    title: "Relation client et posture conseil",
    format: "Parcours sur mesure",
    objective: "Développer une relation client plus qualitative, plus claire et plus performante.",
  },
];

export const testimonials = [
  {
    quote:
      "Une approche à la fois stratégique et très concrète. Nous avons clarifié notre feuille de route et remobilisé le collectif en quelques semaines.",
    name: "Claire Martin",
    company: "Directrice générale, Nova Industrie",
    initials: "CM",
  },
  {
    quote:
      "Le coaching du CODIR nous a permis de retrouver de la fluidité dans nos décisions et de mieux incarner notre vision.",
    name: "Julien Perrin",
    company: "CEO, Altera Partners",
    initials: "JP",
  },
  {
    quote:
      "Les formations ont été très appréciées par les managers. Le contenu était premium, pragmatique et directement applicable.",
    name: "Sonia Belaid",
    company: "DRH, Horizon Care",
    initials: "SB",
  },
  {
    quote:
      "Nous cherchions plus qu'un cabinet de conseil. Nous avons trouvé un partenaire capable de faire bouger les lignes avec finesse.",
    name: "Marc Delage",
    company: "Fondateur, Aster Consulting",
    initials: "MD",
  },
];

export const faqItems = [
  {
    question: "Comment démarre une mission ?",
    answer:
      "Nous commençons par un échange de cadrage, puis un diagnostic court pour objectiver les enjeux, les priorités et le niveau d'urgence.",
  },
  {
    question: "Travaillez-vous avec des PME ou des grands groupes ?",
    answer:
      "Les deux. Nous adaptons l'intensité du dispositif, les interlocuteurs et la gouvernance à la taille de votre organisation.",
  },
  {
    question: "Les formations sont-elles sur mesure ?",
    answer:
      "Oui. Chaque programme peut être ajusté à vos cas d'usage, votre culture et vos objectifs pédagogiques.",
  },
  {
    question: "Le formulaire de contact est-il relié à une boîte mail ?",
    answer:
      "Dans cette version vitrine, le formulaire simule l'envoi et affiche une confirmation. Il peut être connecté à votre back-office ensuite.",
  },
];

export const resources = [
  {
    title: "Article — Réussir une transformation sans épuiser les équipes",
    description: "Nos repères pour équilibrer ambition stratégique, rythme de changement et capacité d'appropriation.",
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
