/** Remplacez le fichier dans `public/images/` (et `images/` pour la version statique) par votre visuel si besoin. */
export const homeHeroImage = {
  src: "/images/mountain.svg",
  alt: "Paysage de montagnes, symbole de vision et d'horizon",
  width: 800,
  height: 520,
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

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Enjeux", href: "/enjeux" },
  { label: "Vision", href: "/vision" },
  { label: "Consulting", href: "/consulting" },
  { label: "Coaching", href: "/coaching" },
  { label: "Formations", href: "/formations" },
  { label: "Temoignages", href: "/temoignages" },
  { label: "More", href: "/more" },
] as const;

export const quickStats = [
  { value: "15+", label: "annees d'experience dans le conseil et la conduite du changement" },
  { value: "120", label: "missions menees aupres de PME, ETI et groupes internationaux" },
  { value: "92%", label: "de clients renouvellent l'accompagnement apres une premiere mission" },
];

export const serviceHighlights = [
  {
    title: "Consulting",
    description:
      "Des diagnostics strategiques jusqu'au pilotage de transformation, nous structurons les decisions et accelerons leur execution.",
    benefit: "Une trajectoire plus lisible, des priorites partagees et des resultats mesurables.",
    href: "/consulting",
  },
  {
    title: "Coaching",
    description:
      "Accompagnement individuel et collectif pour renforcer le leadership, la cohesion et la capacite a embarquer durablement.",
    benefit: "Des leaders plus alignes, des equipes plus autonomes et une dynamique plus saine.",
    href: "/coaching",
  },
  {
    title: "Formations",
    description:
      "Programmes sur mesure, ancrage terrain et formats hybrides pour faire monter les talents en competence rapidement.",
    benefit: "Des acquis actionnables, une pedagogie engageante et des pratiques durables.",
    href: "/formations",
  },
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

export const enjeux = [
  {
    title: "Croissance mal absorbee",
    text: "Les organisations grandissent vite, mais les processus, les responsabilites et les rituels ne suivent plus le rythme.",
  },
  {
    title: "Vision peu incarnee",
    text: "La strategie existe sur le papier, mais elle n'est pas suffisamment traduite dans les priorites, les comportements et les indicateurs.",
  },
  {
    title: "Managerialite sous tension",
    text: "Les managers portent la transformation sans toujours disposer des reperes, des outils et de l'espace de dialogue necessaires.",
  },
  {
    title: "Silos et perte de fluidite",
    text: "Les equipes travaillent en parallele, ce qui fragilise la coordination, la qualite des arbitrages et l'experience client.",
  },
  {
    title: "Fatigue du changement",
    text: "Les collaborateurs sont exposes a des priorites mouvantes et a des programmes successifs qui peinent a produire de l'adhesion.",
  },
  {
    title: "Competences a faire evoluer",
    text: "Les savoir-faire historiques ne suffisent plus, et les dispositifs de formation manquent parfois de lien avec le terrain.",
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
